import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './FlowingMenu.css';

function FlowingMenu({
  items = [],
  speed = 15,
  textColor = '#fff',
  bgColor = '#120F17',
  marqueeBgColor = '#fff',
  marqueeTextColor = '#120F17',
  borderColor = '#fff',
  onNavigate
}) {
  return (
    <div className="menu-wrap" style={{ backgroundColor: bgColor }}>
      <nav className="menu" aria-label="Navegación principal">
        {items.map(item => (
          <MenuItem
            key={item.link}
            {...item}
            speed={speed}
            textColor={textColor}
            marqueeBgColor={marqueeBgColor}
            marqueeTextColor={marqueeTextColor}
            borderColor={borderColor}
            onNavigate={onNavigate}
          />
        ))}
      </nav>
    </div>
  );
}

function MenuItem({ link, text, image, speed, textColor, marqueeBgColor, marqueeTextColor, borderColor, onNavigate }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);
  const animationDefaults = { duration: 0.6, ease: 'expo' };

  useEffect(() => {
    const calculateRepetitions = () => {
      const marqueeContent = marqueeInnerRef.current?.querySelector('.marquee__part');
      if (!marqueeContent) return;
      setRepetitions(Math.max(4, Math.ceil(window.innerWidth / marqueeContent.offsetWidth) + 2));
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [text, image]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const marqueeContent = marqueeInnerRef.current?.querySelector('.marquee__part');
      if (!marqueeContent) return;
      animationRef.current?.kill();
      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -marqueeContent.offsetWidth,
        duration: speed,
        ease: 'none',
        repeat: -1
      });
    }, 50);

    return () => {
      window.clearTimeout(timer);
      animationRef.current?.kill();
    };
  }, [text, image, repetitions, speed]);

  const closestEdge = (event) => {
    const rect = itemRef.current.getBoundingClientRect();
    return event.clientY - rect.top < rect.height / 2 ? 'top' : 'bottom';
  };

  const reveal = event => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const edge = closestEdge(event);
    gsap.timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const hide = event => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const edge = closestEdge(event);
    gsap.timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  return (
    <div className="menu__item" ref={itemRef} style={{ borderColor }}>
      <a className="menu__item-link" href={link} onMouseEnter={reveal} onMouseLeave={hide} onClick={onNavigate} style={{ color: textColor }}>
        {text}
      </a>
      <div className="marquee" ref={marqueeRef} style={{ backgroundColor: marqueeBgColor }}>
        <div className="marquee__inner-wrap">
          <div className="marquee__inner" ref={marqueeInnerRef} aria-hidden="true">
            {Array.from({ length: repetitions }, (_, index) => (
              <div className="marquee__part" key={index} style={{ color: marqueeTextColor }}>
                <span>{text}</span>
                <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;
