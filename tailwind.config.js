/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: '#E8D200',     // Triforce Gold (buttons, highlights)
      secondary: '#00A884',   // Tunic Green (accents, links)
      background: '#1C1C1C',  // Dungeon Gray-Black (base background)
      surface: '#2E2E2E',     // Stone Slab (cards, panels)
      text: '#F8F8F8',        // Light Text (white-ish for legibility)
      textMuted: '#A0A0A0',   // Ruin Gray (secondary text)
      success: '#00D400',     // Heart Fill Green (positive UI)
      error: '#FF4040',       // Low Health Red (warnings, dangers)
    }
    ,
    fontFamily: {
      fontmain: ['Oxanium', 'sans-serif'],
      fontalt: ['Barlow', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
