/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": "Inter",
        "ibm-plex": ["IBM Plex Serif", "sans-serif"],
        "roboto": ["Roboto Mono", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        "purple-gradient": "linear-gradient(220.55deg, #8A88FB 0%, #D079EE 100%)",
        "green": "linear-gradient(220.55deg, #FF5EEF 0%, #456EFF 100%)"
      },
      screens: {
        "nine-hundred": "900px",
        "nine-sixty": "960px",
        "six-twenty": "620px"
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.gradient-border': {
          'background-image': 'linear-gradient(220.55deg, #FFEB3A 0%, #4DEF8E 100%)',
          'border': '2px solid transparent',
          'background-clip': 'padding-box, border-box',
          'background-origin': 'padding-box, border-box',
          'background': 'linear-gradient(to right, white, white) padding-box, linear-gradient(220.55deg,  #7CF7FF 0%, #4B73FF 100%) border-box',
        },
        '.gradient-border-dark': {
          'background': 'linear-gradient(to right, black, black) padding-box, linear-gradient(220.55deg, #A531DC 0%, #4300B1 100%) border-box',
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none', 
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
      });
    },
  ],
  darkMode: 'class'
}


// linear-gradient(220.55deg, #8A88FB 0%, #D079EE 100%)