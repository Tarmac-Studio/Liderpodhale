// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montaga: ["Montaga", "serif"],
      },
      fontSize: {
        // Titles
        heading: ["1.75rem", { lineHeight: "2.25rem" }], // base ~28px
        "heading-md": ["2.25rem", { lineHeight: "2.75rem" }], // tablet ~36px
        "heading-lg": ["3rem", { lineHeight: "1.1" }], // desktop ~48px

        // Paragraphs
        body: ["0.875rem", { lineHeight: "1.5rem" }], // base ~14px
        "body-md": ["1rem", { lineHeight: "1.75rem" }], // tablet ~16px
        "body-lg": ["1.125rem", { lineHeight: "1.75rem" }], // desktop ~18px
      },
    },
  },
  plugins: [],
};
