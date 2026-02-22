# Plantilla 2026 (React + Vite)

Base moderna para proyectos 2026 con React, Vite y Tailwind. Incluye configuración lista para desarrollo rápido, estilos utilitarios y un flujo de trabajo simple para arrancar sin fricción.

## Requisitos

- Node.js 18+ (recomendado 20+)
- npm 9+ (o pnpm/yarn si prefieres)

## Empezar

### Opción 1: clonar la plantilla

```bash
git clone <URL_DEL_REPO>
cd plantilla2026
npm install
npm run dev
```

### Opción 2: usarla como base local

```bash
# Copia el proyecto a tu carpeta de trabajo
# luego instala dependencias y ejecuta
npm install
npm run dev
```

Abre `http://localhost:5173` en el navegador.

## Scripts útiles

- `npm run dev`: entorno de desarrollo con HMR
- `npm run build`: build de producción
- `npm run preview`: previsualización del build
- `npm run lint`: linting del proyecto

## Estructura

- `src/`: código de la app
- `public/`: assets estáticos
- `index.html`: entrada principal

## Primeros pasos (principiantes)

### 1) Crear componentes

- Crea componentes dentro de `shared` según arquitectura atomic y las paginas en `pages`.
- Ejemplo: `src/shared/atoms/buttons/Boton.jsx` y sigue la arquitectura atomic para hacer una layout y despues lo usas en main.jsx .

### 2) Agregar variables y utilidades en Tailwind

Edita `tailwind.config.js` para extender el tema sin perder lo default:

```js
export default {
  theme: {
    extend: {
      colors: {
        brand: "#4f46e5",
      },
    },
  },
};
```

- Usa `extend` para agregar o ajustar valores.
- Si reemplazas `theme` sin `extend`, sobrescribes el tema completo.

## Notas 2026

- Plantilla pensada para iterar rápido, mantener el stack liviano y escalar según necesidades.
- Ajusta `tailwind.config.js` y `postcss.config.js` para personalizar el diseño.

## Licencia

MIT
`Copyright (c) 2026 Jersson Arley Osma Cifuentes`
