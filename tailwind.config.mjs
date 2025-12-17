/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                ocean: {
                    950: '#020617', // Deepest ocean (Background)
                    900: '#0f172a', // Card Background
                    800: '#1e293b', // Lighter details
                },
                neon: {
                    DEFAULT: '#a3e635', // Lime-400 (Primary)
                    hover: '#bef264',   // Lime-300
                    dim: '#4d7c0f',     // Lime-700
                },
                sand: '#e7e5e4',        // Text Base
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            borderRadius: {
                'sm': '0.125rem', // 2px (Sharp/Brutalist)
                'lg': '0.5rem',   // 8px (Interface containers)
            },
            boxShadow: {
                // "Brutalist" Glow Tokens derived from Prototype
                'glow-sm': '0 0 15px rgba(163, 230, 53, 0.2)',
                'glow-md': '0 0 20px rgba(163, 230, 53, 0.3)',
                'glow-lg': '0 0 30px rgba(163, 230, 53, 0.5)',
                'glow-xl': '0 0 50px rgba(163, 230, 53, 0.05)',
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)",
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
}
