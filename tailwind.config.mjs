/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                ink: '#0f172a',   // Slate-900 (Deep Navy Text)
                paper: '#f8fafc', // Slate-50 (Clean White-ish Background)
                surface: '#ffffff', // Pure White (Cards)
                primary: '#2563eb', // Royal Blue (Trust/Premium)
                accent: '#84cc16', // Lime (Energy/Pop)
                muted: '#64748b', // Slate-500 (Secondary Text)
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'], // Premium Headings
                mono: ['JetBrains Mono', 'monospace'],
            },
            boxShadow: {
                'premium': '0 10px 15px -3px rgba(37, 99, 235, 0.1), 0 4px 6px -2px rgba(37, 99, 235, 0.05)', // Soft Blue Glow
                'premium-hover': '0 20px 25px -5px rgba(37, 99, 235, 0.15), 0 10px 10px -5px rgba(37, 99, 235, 0.04)',
                'hard': '4px 4px 0px 0px #0f172a', // Keeping for legacy reference, mapping to ink
            },
            // Modern "Dot" grid instead of strict blueprint
            'tech-dots': "radial-gradient(#cbd5e1 2px, transparent 2px)",
            // Edgy/Voltage Gradient: Electric Blue -> Deep Violet -> Cyber Cyan
            'gradient-primary': "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
            'gradient-glow': "conic-gradient(from 180deg at 50% 50%, #2563eb 0deg, #4f46e5 180deg, #2563eb 360deg)",
            // Tech Grid for "Edgy" feel
            'tech-grid': "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
        },
        backgroundImage: {
            'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
        },
        backgroundSize: {
            'dots': '30px 30px',
            'grid': '40px 40px',
        },
        animation: {
            'fade-in': 'fadeIn 0.5s ease-out forwards',
            'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            'shine': 'shine 3s linear infinite',
        },
        keyframes: {
            fadeIn: {
                '0%': { opacity: '0', transform: 'translateY(10px)' },
                '100%': { opacity: '1', transform: 'translateY(0)' },
            },
            shine: {
                '0%': { backgroundPosition: '0% 50%' },
                '100%': { backgroundPosition: '200% 50%' },
            }
        }
    },
},
    },
plugins: [
    function ({ addUtilities }) {
        const newUtilities = {
            '.text-stroke-white': {
                '-webkit-text-stroke': '2px #ffffff',
            },
            '.text-stroke-2': {
                '-webkit-text-stroke-width': '2px',
            },
        }
        addUtilities(newUtilities)
    }
],
}
