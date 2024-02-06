/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('https://www.hanafn.com/assets/img/ko/logo-w.svg')",
        scrollLogo: "url('https://www.hanafn.com/assets/img/ko/logo.svg')",
      },
      colors: {
        darkGreen: "#228d55",
      },
    },
  },
  plugins: [],
};
