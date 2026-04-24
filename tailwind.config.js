const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
    module.exports = {
    theme: {
        extend: {
            colors: {
                'holo-pink': '#ff00ff',
                'holo-blue': '#00d4ff',
            },
            backgroundImage: {
                // Le fameux dégradé Holographique
                'holo-gradient': 'linear-gradient(45deg, #00d4ff, #ff00ff, #00d4ff)',
            },
            animation: {
                // Animation pour faire bouger le dégradé
                'holo-flow': 'holo 3s ease infinite',
            },
            keyframes: {
                holo: {
                    '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
                    '50%': { 'background-position': 'right center' },
                }
            }
        },
    },

};
