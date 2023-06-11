/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "scale-up-ver-top": "scale-up-ver-top 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both"
    },
    keyframes: {
        "scale-up-ver-top": {
            "0%": {
                transform: "scaleY(.4)",
                "transform-origin": "100% 0%"
            },
            to: {
                transform: "scaleY(1)",
                "transform-origin": "100% 0%"
            }
        }
    }
    },
  },
  plugins: [],
};
