/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      base: "font-family: 'Jost', sans-serif;",
    },
    colors: {
      blue_light: "#DAFFFB",
      blue_shade_1: "#7752E4",
      blue_shade_2: "#30205E",
      teal_light: "#64CCC5",
      teal: "#176B87",
      teal_dark: "#001C30",
      grey_1: "#C1C1C1",
      grey_2: "#FCFCFC",
      grey_3: "#3F3F3F",
      black_1: "#201D2A",
      black_2: "#36454F",
      green_1: "#50C878",
      green_light:"#C1FFD6",
      red_1: "#fd3434",
      red_2: "#df6969",
    },
    extend: {},
  },
  plugins: [],
};
