/**
 * @file main.js
 * @description Controla la interactividad principal del portafolio (actualmente, el toggle del tema).
 * @note Este archivo debe cargarse con el atributo 'defer' al final del documento.
 */

'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('theme-toggle');
    const rootElement = document.documentElement;
    const THEME_STORAGE_KEY = 'jb-theme';
    const THEME_DARK = 'dark';
    const THEME_LIGHT = 'light';

    if (!toggleButton) {
        return;
    }

    /**
     * @function updateAriaPressed
     * @description Actualiza el estado ARIA del boton de toggle segun el tema activo para accesibilidad.
     * @param {string} currentTheme - El tema actualmente aplicado ('dark' o 'light').
     * @returns {void}
     */
    function updateAriaPressed(currentTheme) {
        const isDark = currentTheme === THEME_DARK;
        toggleButton.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    }

    const initialTheme = rootElement.getAttribute('data-theme') || THEME_DARK;
    updateAriaPressed(initialTheme);

    toggleButton.addEventListener('click', function () {
        const currentTheme = rootElement.getAttribute('data-theme') || THEME_DARK;
        const nextTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
        
        rootElement.setAttribute('data-theme', nextTheme);
        updateAriaPressed(nextTheme);

        try {
            localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
        } catch (error) {
            // Falla silenciosa si localStorage esta restringido.
        }
    });
});
