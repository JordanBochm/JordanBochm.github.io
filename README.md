# Portafolio - Jordi Bochm

Portafolio profesional estático y semántico, enfocado en ingeniería de software, arquitectura backend y operaciones.

## Decisiones Técnicas
- **Arquitectura:** HTML5, CSS3 y JS Vanilla estructurado. Se omite el uso de frameworks (React, Vue, Angular) o bundlers (Vite, Webpack) por el principio de *Over-engineering avoidance* (evitar la sobreingeniería). Un sitio de lectura estática de una sola página no requiere un Virtual DOM ni dependencias pesadas.
- **CSS:** Modularizado (`tokens`, `base`, `layout`, `components`, `responsive`) y tipado bajo convención **BEM** (Block Element Modifier). Uso intensivo de CSS Custom Properties (`var()`) para consistencia y cambio de temas.
- **JavaScript:** Script particionado. Un script asíncrono y bloqueante mínimo en el `<head>` para evitar FOUC (Flash of Unstyled Content), y la lógica interactiva segregada y ejecutada de manera pasiva (`defer`).
- **Seguridad:** Implementación de Content Security Policy (CSP) en `index.html` para bloquear inyecciones XSS y recursos externos no deseados.
- **Accesibilidad (A11y):** Estructura semántica profunda, navegación por teclado probada, alto contraste WCAG AA, y atributos `aria` vivos (ej. `aria-pressed`).

## Estructura de Directorios

```text
/
├── index.html              # HTML principal
├── 404.html                # Página de error por defecto para GitHub Pages
├── robots.txt              # Reglas de indexación SEO
├── sitemap.xml             # Sitemap estático para buscadores
├── *.pdf                   # Archivos PDF (CV, certificaciones)
├── og-image.jpg            # Metadato visual para redes (Open Graph)
└── assets/
    ├── css/                # Hojas de estilo modulares (BEM)
    ├── js/                 # Scripts (strict mode, JSDoc)
    └── icons/              # Sprite SVG consolidado
```

## Ejecución Local (Desarrollo)

Para visualizar correctamente el sprite de SVGs externos sin bloqueos de políticas de CORS del navegador:

1. Clonar el repositorio.
2. Iniciar un servidor HTTP local.
   * Usando Python: `python -m http.server 8000`
   * Usando VS Code: Extensión "Live Server"
3. Visitar `http://localhost:8000`.

## Despliegue

La rama activa se sincroniza automáticamente con **GitHub Pages**. No requiere pasos de *build* adicionales.

## Convención de Commits

Este proyecto sigue la convención [Conventional Commits](https://www.conventionalcommits.org/). Sugerencias para el flujo actual:

1. `refactor: reestructurar arquitectura css bajo convencion bem`
2. `feat: abstraer configuracion de variables a tokens.css`
3. `refactor: segregar logica js a archivos dedicados e inyectar jsdoc`
4. `feat: implementar content security policy y estructurar data json-ld`
5. `chore: agregar archivos de configuracion de repositorio (editorconfig, eslint, prettier)`
6. `docs: actualizar readme con guia arquitectonica y flujo de commits`
