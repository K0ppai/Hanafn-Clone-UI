/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('https://www.hanafn.com/assets/img/ko/logo-w.svg')",
        scrollLogo: "url('https://www.hanafn.com/assets/img/ko/logo.svg')",
        notice:
          "url('https://www.hanafn.com/assets/img/ko/main/ico-notice-w.svg')",
        download:
          "url('https://www.hanafn.com/assets/img/ko/ico-download.svg')",
        mic: "url('https://www.hanafn.com/assets/img/ko/ico-webcast-w.svg')",
        arrow: "url('https://www.hanafn.com/assets/img/ko/arrow-right.svg')",
        hana: "url('https://www.hanafn.com/assets/img/ko/main/bg-hanagroup.png')",
        global:
          "url('https://www.hanafn.com/assets/img/ko/main/bg-global.png')",
        stock:
          "url('https://www.hanafn.com/assets/img/ko/main/bg-shareprice-m.png')",
      },
      backgroundPosition: {
        PosPill: "right 1.6rem center",
        PosGp: "right 1.8rem bottom 2.8rem",
      },
      backgroundSize: {
        sizeStock: "20.8rem 13rem",
        sizeGroup: "7.2rem 7.2rem",
      },
      colors: {
        darkGreen: "#228d55",
        earning: "rgba(32, 59, 60, .95)",
        main: "#f5fbfa",
      },
    },
  },
  plugins: [],
};
