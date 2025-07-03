import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './Component/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
        colors: {
            primary: '#1E40AF',
            secondary: '#FBBF24',
        },
        fontFamily: {
            sans: ['Inter', 'sans-serif', 'poppins'],
        },
        },
    },
    plugins: [daisyui],
} satisfies Config;
