/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx,css,vue}",],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
        {
            tb: {
                ...require("daisyui/src/theming/themes")["[data-theme=tb]"],
                primary: "#ffa500",
                secondary: "#f6d860",
                accent: "#ecb847",
                neutral: "#181818",
                '.bg-2':{
                    'background-color': '#202020'
                },
                dark: '#292828',
                "base-100": "#0e0e0e",
                
            },
        },
        "dark",
        "halloween",
        "forest",
        "black",
        "business",
        "night",
        "dracula",
    ],
},
  plugins: [require("daisyui")],
  darkMode: true,

}

