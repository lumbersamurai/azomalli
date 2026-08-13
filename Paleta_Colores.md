# Paleta de colores — Azomalli

## Concepto visual

La identidad visual de Azomalli busca transmitir **bienestar, calma, espiritualidad, equilibrio y transformación interior**.

El cliente solicita que la página web incorpore los **7 colores del arcoíris**, representados mediante tonos pastel para conservar una apariencia elegante, cálida y profesional.

---

## 1. Paleta principal

| Color | HEX | Nombre | Uso recomendado |
|---|---|---|---|
| 🌸 | `#FFBDBF` | Rosa pastel | Emociones, bienestar y terapias emocionales |
| 🍑 | `#FFD0B3` | Durazno pastel | Cuerpo, terapias y servicios |
| 🌼 | `#F5E49D` | Amarillo pastel | Energía, eventos y elementos destacados |
| 🌿 | `#A1E096` | Verde pastel | Naturaleza, equilibrio y bienestar integral |
| 🩵 | `#81CADE` | Azul cielo | Calma, meditación y relajación |
| 💜 | `#A6A9FB` | Índigo / lavanda | Espiritualidad, introspección y acompañamiento |
| 🪻 | `#ECBCF7` | Violeta pastel | Identidad principal, transformación y llamadas a la acción |

**Orden del arcoíris:**  
`#FFBDBF → #FFD0B3 → #F5E49D → #A1E096 → #81CADE → #A6A9FB → #ECBCF7`

---

## 2. Colores base de la interfaz

| Color | HEX | Función |
|---|---|---|
| Beige cálido | `#F4EBDE` | Fondo principal |
| Ciruela oscuro | `#281A2B` | Texto principal y títulos |
| Violeta pastel | `#ECBCF7` | Color principal de marca y CTA |
| Índigo / lavanda | `#A6A9FB` | Hover, elementos secundarios y detalles |

El beige `#F4EBDE` debe mantenerse como color predominante. El ciruela `#281A2B` reemplaza al negro puro para conservar una apariencia elegante y cálida.

---

## 3. Uso de los siete colores por categoría

### Rosa pastel — `#FFBDBF`
**Concepto:** emociones y bienestar.

Uso sugerido: terapias emocionales, bienestar, iconografía, etiquetas y detalles de tarjetas.

### Durazno pastel — `#FFD0B3`
**Concepto:** cuerpo y terapias.

Uso sugerido: terapias corporales, masajes, servicios y categorías.

### Amarillo pastel — `#F5E49D`
**Concepto:** energía y actividad.

Uso sugerido: eventos, actividades, destacados y avisos.

### Verde pastel — `#A1E096`
**Concepto:** naturaleza y equilibrio.

Uso sugerido: bienestar integral, terapias naturales, equilibrio y beneficios.

### Azul cielo — `#81CADE`
**Concepto:** calma y mente.

Uso sugerido: meditación, mindfulness, relajación e información.

### Índigo / lavanda — `#A6A9FB`
**Concepto:** espiritualidad e introspección.

Uso sugerido: constelaciones familiares, terapias espirituales, acompañamiento e introspección.

### Violeta pastel — `#ECBCF7`
**Concepto:** transformación e identidad de Azomalli.

Uso sugerido: botones principales, enlaces, llamadas a la acción, elementos destacados e identidad de marca.

---

## 4. Botones

### Botón principal

```css
background: #ECBCF7;
color: #281A2B;
```

**Ejemplo:** `Agendar cita`

### Estado hover

```css
background: #A6A9FB;
color: #281A2B;
```

### Botón secundario

```css
background: transparent;
border: 1.5px solid #A6A9FB;
color: #281A2B;
```

En hover:

```css
background: #A6A9FB;
color: #281A2B;
```

---

## 5. Gradiente arcoíris

Se recomienda integrar los siete colores mediante un gradiente pastel:

```css
background: linear-gradient(
    90deg,
    #FFBDBF 0%,
    #FFD0B3 16%,
    #F5E49D 33%,
    #A1E096 50%,
    #81CADE 66%,
    #A6A9FB 83%,
    #ECBCF7 100%
);
```

### Usos recomendados

- Separadores de sección
- Líneas decorativas
- Bordes de tarjetas
- Indicadores
- Elementos gráficos
- Detalles debajo de títulos
- Elementos decorativos del Hero

Se recomienda **no utilizar el gradiente como fondo de grandes áreas**.

---

## 6. Aplicación en la página de inicio

### Navbar
- Fondo: `#F4EBDE`
- Texto: `#281A2B`
- Logo: versión original de Azomalli
- Botón "Agendar cita": `#ECBCF7`

### Hero
- Fondo: `#F4EBDE`
- Título: `#281A2B`
- Texto destacado: `#ECBCF7`
- Elementos gráficos: combinación sutil de los siete colores pastel

La estructura actual del Hero puede mantenerse.

### Sección de terapias

Cada categoría puede asociarse a uno de los siete colores:

**Rosa → Durazno → Amarillo → Verde → Azul → Índigo → Violeta**

Se recomienda utilizar el color principalmente en iconos, etiquetas, bordes, pequeños fondos o elementos decorativos, en lugar de colorear completamente las tarjetas.

---

## 7. Tarjetas de servicios

Las tarjetas deben conservar principalmente el fondo neutro `#F4EBDE` o una variación muy clara del mismo.

El color de cada categoría puede aparecer en:

- Icono
- Borde
- Pequeño círculo
- Etiqueta
- Línea decorativa
- Botón secundario

La estructura debe mantenerse consistente; únicamente cambia el color asociado a cada categoría.

---

## 8. Proporción recomendada de colores

- **70%** — Beige y espacios neutros
- **15%** — Ciruela oscuro y tipografía
- **10%** — Colores pastel del arcoíris
- **5%** — Violeta/índigo para llamadas a la acción y elementos interactivos

Esta proporción permite que el arcoíris sea reconocible sin dominar visualmente toda la página.

---

## 9. Variables CSS

```css
:root {

    /* Base */
    --azomalli-bg: #F4EBDE;
    --azomalli-text: #281A2B;

    /* Brand */
    --azomalli-primary: #ECBCF7;
    --azomalli-primary-dark: #A6A9FB;

    /* Rainbow Pastel */
    --rainbow-pink: #FFBDBF;
    --rainbow-peach: #FFD0B3;
    --rainbow-yellow: #F5E49D;
    --rainbow-green: #A1E096;
    --rainbow-blue: #81CADE;
    --rainbow-indigo: #A6A9FB;
    --rainbow-violet: #ECBCF7;
}
```

### Gradiente como variable

```css
:root {
    --rainbow-gradient: linear-gradient(
        90deg,
        #FFBDBF 0%,
        #FFD0B3 16%,
        #F5E49D 33%,
        #A1E096 50%,
        #81CADE 66%,
        #A6A9FB 83%,
        #ECBCF7 100%
    );
}
```

---

## 10. Principios de diseño

1. El beige debe dominar la interfaz.
2. El ciruela oscuro debe utilizarse para una lectura elegante y consistente.
3. Los siete colores pastel deben funcionar como un sistema de categorías.
4. No utilizar los siete colores simultáneamente en todos los elementos.
5. Priorizar pequeños acentos de color sobre grandes bloques saturados.
6. Utilizar el violeta como principal color de interacción.
7. Utilizar el gradiente arcoíris principalmente como elemento decorativo.
8. Mantener el logo original como elemento central de identidad.
9. Conservar suficiente espacio en beige para transmitir calma.
10. Mantener consistencia en componentes: las tarjetas deben conservar la misma estructura aunque cambie su color.

---

## 11. Resumen de identidad cromática

Azomalli utilizará una base **beige cálida y ciruela oscura**, sobre la cual se incorporará un arcoíris de **siete tonos pastel**:

**Rosa → Durazno → Amarillo → Verde → Azul → Índigo → Violeta**

El resultado debe transmitir:

> **Calma + bienestar + espiritualidad + diversidad + transformación**

La paleta no busca que la página sea simplemente "colorida", sino convertir el arcoíris en un **sistema visual organizado que represente las diferentes dimensiones del bienestar que ofrece Azomalli**.
