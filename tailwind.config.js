/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          main: "var(--color-main-background)",
          keypad: "var(--color-keypad-background)",
          screen: "var(--color-screen-background)",
          "key-primary": "var(--color-key-primary)",
          "key-secondary": "var(--color-key-secondary)",
          "key-muted": "var(--color-key-muted)",
        },
      },
      textColor: {
        skin: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
      },
    },
  },
  plugins: [],
};
