const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
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
      boxShadow: {
        primary: "0px 4px 0px 0px var(--color-key-primary-shadow)",
        secondary: "0px 4px 0px 0px var(--color-key-secondary-shadow)",
        muted: "0px 4px 0px 0px var(--color-key-muted-shadow)",
      },
      textColor: {
        skin: {
          switcher: "var(--color-text-switcher)",
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          equal: "var(--color-text-equal)",
        },
      },
      fontFamily: {
        spartan: ["var(--font-spartan)"],
      },
    },
  },
  plugins: [],
};
