# 🚀 Portafolio Personal

Portafolio web personal moderno, bilingüe (Español / Inglés) y con soporte para modo claro/oscuro. Construido con **Astro**, **React**, **Tailwind CSS v4** y **TypeScript**, con un fuerte enfoque en rendimiento, accesibilidad y buenas prácticas.

---

## ✨ Características

- 🌍 **Multiidioma (i18n)** — Español e Inglés con enrutamiento nativo de Astro (`/` y `/en/`).
- 🌗 **Modo claro / oscuro** — Sin flash de contenido (anti-FOUC), persistencia en `localStorage` y respeto por la preferencia del sistema.
- 📱 **Diseño responsive** — Navbar adaptable con menú móvil, secciones optimizadas para todos los tamaños de pantalla.
- 🖼️ **Imágenes optimizadas** — Uso del componente `<Image />` de Astro para servir WebP/AVIF con `srcset` y `loading="lazy"`.
- 📄 **Descarga de CV** — Botón bilingüe que sirve automáticamente el PDF correcto según el idioma activo.
- ⚡ **Rendimiento excepcional** — Arquitectura de islas: casi todo el sitio se renderiza en el servidor con **0 KB de JS** por sección.
- ♿ **Accesibilidad** — Navegación por teclado, `aria-label` en elementos interactivos, contraste de color adecuado.
- 🔍 **SEO-friendly** — HTML semántico, metadatos y títulos por idioma.

---

## 🧩 Secciones del sitio

| Sección         | Descripción                                                                      |
| --------------- | -------------------------------------------------------------------------------- |
| **Hero**        | Presentación personal con CTA de descarga de CV y acceso rápido a proyectos.     |
| **Sobre mí**    | Biografía, puntos destacados y estadísticas profesionales.                       |
| **Proyectos**   | Tarjetas con imagen, descripción, tecnologías y enlace al repositorio de GitHub. |
| **Tecnologías** | Clasificadas por Frontend, Backend y Otras, con logos e interacción al hover.    |
| **Contacto**    | Tarjetas clickeables con teléfono, email, LinkedIn y GitHub.                     |
| **Footer**      | Redes sociales, copyright y atribución de tecnologías.                           |

---

## 🛠️ Stack Tecnológico

### Core

- **[Astro](https://astro.build/)** — Framework principal, generación de sitio estático (SSG) y arquitectura de islas.
- **[React](https://react.dev/)** — Para componentes que requieren interactividad puntual.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipado estricto en todo el proyecto.
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Estilos utility-first con tokens de tema personalizados.

### Librerías y herramientas

- **[@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/)** — Integración de React en Astro.
- **[@tailwindcss/vite](https://tailwindcss.com/docs/installation/using-vite)** — Plugin oficial de Tailwind v4 para Vite.
- **astro:assets** — Optimización automática de imágenes.

### Estructura y arquitectura

- **i18n nativo de Astro** — Enrutamiento multiidioma con `getRelativeLocaleUrl`.
- **Vanilla JS** para el toggle de tema (sin frameworks, sin FOUC).
- **Componentes `.astro`** como unidad principal para renderizado en servidor.
