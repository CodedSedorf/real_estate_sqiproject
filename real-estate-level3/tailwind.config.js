/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#1f3e72",
        "secondary": "rgba(255, 255, 255, 0.78)",
        "black": "#131110",
        "blue-gradient": "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
        "orange": "#ffb978", // Corrected to solid color
        "blue": "#4066ff",
        "lightBlue": "#eeeeff",
        "shadow": "0px 23px 21px -8px rgba(136, 160, 255, 0.25)", // Added closing parenthesis
      },
      fontFamily: {
        body: ["Nunito Sans"]
      }
    },
  },
  plugins: [require("daisyui")],
}
