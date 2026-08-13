import { useEffect, useRef } from 'react';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function hexToRgb(hex) {
  const normalized = hex.replace('#', '').trim();
  const fullHex =
    normalized.length === 3
      ? normalized
          .split('')
          .map(char => char + char)
          .join('')
      : normalized;

  const value = Number.parseInt(fullHex, 16);

  if (Number.isNaN(value)) {
    return { r: 255, g: 255, b: 255 };
  }

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function mixColor(colorA, colorB, amount) {
  return {
    r: Math.round(colorA.r + (colorB.r - colorA.r) * amount),
    g: Math.round(colorA.g + (colorB.g - colorA.g) * amount),
    b: Math.round(colorA.b + (colorB.b - colorA.b) * amount),
  };
}

function rgba(color, alpha) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

export default function SoftAurora({
  speed = 0.6,
  scale = 0.5,
  brightness = 0.7,
  color1 = '#c5e5ef',
  color2 = '#ebd3f1',
  noiseFrequency = 1,
  noiseAmplitude = 5.5,
  bandHeight = 0.45,
  bandSpread = 1.1,
  octaveDecay = 0.33,
  layerOffset = 0,
  colorSpeed = 1,
  enableMouseInteraction = false,
  mouseInfluence = 0.1,
  className = '',
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx) {
      return undefined;
    }

    const firstColor = hexToRgb(color1);
    const secondColor = hexToRgb(color2);
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let pixelRatio = 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
    };

    const drawBand = (time, layer) => {
      const layerScale = Math.max(0.28, scale) * (1 + layer * 0.12);
      const phase = layer * 1.74 + layerOffset;
      const centerY =
        height * clamp(bandHeight + Math.sin(time * 0.18 + phase) * 0.035, 0.15, 0.85);
      const mousePull = enableMouseInteraction ? mouse.y * height * mouseInfluence : 0;
      const spread = height * 0.18 * bandSpread * layerScale;
      const thickness = spread * (0.48 + layer * 0.1);
      const amplitude = noiseAmplitude * 9 * layerScale;
      const step = Math.max(12, width / 92);
      const topPoints = [];
      const bottomPoints = [];

      for (let x = -step; x <= width + step; x += step) {
        const normalizedX = x / Math.max(width, 1);
        const primary =
          Math.sin(normalizedX * Math.PI * 4.2 * noiseFrequency + time * speed + phase) *
          amplitude;
        const secondary =
          Math.sin(normalizedX * Math.PI * 9.4 * noiseFrequency - time * speed * 0.72 + phase) *
          amplitude *
          octaveDecay;
        const tertiary =
          Math.cos(normalizedX * Math.PI * 2.4 + time * speed * 0.38 + phase) *
          amplitude *
          0.45;
        const y = centerY + mousePull + primary + secondary + tertiary;
        const edge = Math.sin(normalizedX * Math.PI + phase) * thickness * 0.12;

        topPoints.push([x, y - thickness - edge]);
        bottomPoints.push([x, y + thickness + edge]);
      }

      const colorMix = (Math.sin(time * 0.28 * colorSpeed + phase) + 1) / 2;
      const midColor = mixColor(firstColor, secondColor, colorMix);
      const alpha = clamp(brightness, 0, 1.4) * (0.18 - layer * 0.025);
      const gradient = ctx.createLinearGradient(0, centerY - spread, width, centerY + spread);

      gradient.addColorStop(0, rgba(firstColor, alpha * 0.22));
      gradient.addColorStop(0.42, rgba(midColor, alpha));
      gradient.addColorStop(1, rgba(secondColor, alpha * 0.72));

      ctx.beginPath();
      ctx.moveTo(topPoints[0][0], topPoints[0][1]);
      topPoints.forEach(([x, y]) => ctx.lineTo(x, y));
      bottomPoints
        .slice()
        .reverse()
        .forEach(([x, y]) => ctx.lineTo(x, y));
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const draw = timestamp => {
      const time = timestamp * 0.001;

      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const ambient = ctx.createLinearGradient(0, 0, width, height);
      ambient.addColorStop(0, rgba(firstColor, brightness * 0.16));
      ambient.addColorStop(0.52, 'rgba(255, 252, 248, 0.08)');
      ambient.addColorStop(1, rgba(secondColor, brightness * 0.18));

      ctx.fillStyle = ambient;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'screen';
      ctx.filter = `blur(${Math.max(18, 54 * scale)}px)`;

      for (let layer = 0; layer < 4; layer += 1) {
        drawBand(time, layer);
      }

      ctx.filter = 'none';
      ctx.globalCompositeOperation = 'source-over';

      if (!motionQuery.matches) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = event => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = (event.clientX - rect.left) / Math.max(rect.width, 1) - 0.5;
      mouse.targetY = (event.clientY - rect.top) / Math.max(rect.height, 1) - 0.5;
    };

    const observer = new ResizeObserver(() => {
      resize();
      draw(performance.now());
    });

    resize();
    observer.observe(canvas);

    if (enableMouseInteraction) {
      window.addEventListener('pointermove', handlePointerMove, { passive: true });
    }

    draw(performance.now());

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, [
    bandHeight,
    bandSpread,
    brightness,
    color1,
    color2,
    colorSpeed,
    enableMouseInteraction,
    layerOffset,
    mouseInfluence,
    noiseAmplitude,
    noiseFrequency,
    octaveDecay,
    scale,
    speed,
  ]);

  return <canvas ref={canvasRef} className={`soft-aurora ${className}`} aria-hidden="true" />;
}
