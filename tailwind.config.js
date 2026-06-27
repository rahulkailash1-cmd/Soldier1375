/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        neon: {
          blue:   '#00d4ff',
          cyan:   '#00ffff',
          purple: '#bf00ff',
          pink:   '#ff006e',
          orange: '#ff6a00',
        },
        dark: {
          900: '#020408',
          800: '#040810',
          700: '#060c18',
          600: '#0a1628',
          500: '#0d1f3c',
        },
      },
      animation: {
        'glow-pulse':  'glowPulse 2s ease-in-out infinite',
        'float':       'float 6s ease-in-out infinite',
        'scan-line':   'scanLine 3s linear infinite',
        'flicker':     'flicker 4s linear infinite',
        'slide-up':    'slideUp 0.8s ease-out forwards',
        'fade-in':     'fadeIn 1s ease-out forwards',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'bounce-slow': 'bounceSlow 3s ease-in-out infinite',
        'spin-slow':   'spin 8s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%,100%': { textShadow: '0 0 10px #00d4ff,0 0 20px #00d4ff,0 0 40px #00d4ff' },
          '50%':     { textShadow: '0 0 20px #00ffff,0 0 40px #00ffff,0 0 80px #00ffff' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-20px)' },
        },
        scanLine: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%,100%': { opacity: '1' },
          '92%':     { opacity: '1' },
          '93%':     { opacity: '0.8' },
          '94%':     { opacity: '1' },
          '96%':     { opacity: '0.9' },
          '97%':     { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        borderGlow: {
          '0%,100%': { boxShadow: '0 0 10px #00d4ff,inset 0 0 10px rgba(0,212,255,0.1)' },
          '50%':     { boxShadow: '0 0 30px #00d4ff,0 0 60px rgba(0,212,255,0.3),inset 0 0 20px rgba(0,212,255,0.2)' },
        },
        bounceSlow: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,212,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
    },
  },
  plugins: [],
};
