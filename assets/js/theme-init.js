/**
 * @file theme-init.js
 * @description Inicializa el tema (claro/oscuro) basado en localStorage o preferencias del sistema
 * para evitar el parpadeo de contenido sin estilo (FOUC) al cargar la pagina.
 * @note Este script debe cargarse de forma sincrona en el <head>. No debe contener logica asincrona ni depender del DOM completo.
 */

'use strict';

(function () {
    const root = document.documentElement;
    const THEME_STORAGE_KEY = 'jb-theme';

    try {
        const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme) {
            root.setAttribute('data-theme', savedTheme);
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            root.setAttribute('data-theme', 'light');
        }
    } catch (_error) {
        // Almacenamiento no disponible (ej. modo incognito estricto).
        // Se degrada de forma silenciosa asumiendo el tema por defecto (oscuro).
    }
})();
