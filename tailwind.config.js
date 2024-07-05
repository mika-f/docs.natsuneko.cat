/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@natsuneko-laboratory/ui/dist/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "90%",
          "@screen sm": {
            maxWidth: `${640 - 24}px`, // 640px - 24px
          },
          "@screen md": {
            maxWidth: `${768 - 24}px`, // 768px - 48px
          },
          "@screen lg": {
            maxWidth: `${1024 - 64}px`, // 1024px - 64px
          },
          "@screen xl": {
            maxWidth: `${1280 - 72}px`, // 1280px - 72px
          },
          "@screen 2xl": {
            maxWidth: `${1536 - 96}px`,
          },
        },
      });
    },
  ],
  safelist: ["hidden"],
  darkMode: "media",
};
