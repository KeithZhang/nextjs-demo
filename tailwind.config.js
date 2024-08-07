/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fafafa",
          "200": "#09090b",
          "300": "rgba(9, 9, 11, 0.8)",
          "400": "rgba(0, 0, 0, 0.4)",
          "500": "rgba(9, 9, 11, 0.6)",
          "600": "rgba(0, 0, 0, 0.6)",
          "700": "rgba(0, 0, 0, 0.13)",
          "800": "rgba(0, 0, 0, 0.14)",
          "900": "rgba(0, 0, 0, 0.43)",
          "1000": "rgba(0, 0, 0, 0.07)",
          "1100": "rgba(0, 0, 0, 0.75)",
          "1200": "rgba(0, 0, 0, 0.9)",
          "1300": "rgba(0, 0, 0, 0.7)",
          "1400": "rgba(0, 0, 0, 0.2)",
          "1500": "rgba(0, 0, 0, 0.03)",
        },
        white: "#fff",
        dimgray: "#71717a",
        black: "#000",
        mediumturquoise: "rgba(95, 238, 238, 0.24)",
        darkslategray: "#0d4141",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e4e4e7",
          "300": "#dbdbdb",
        },
        navy: "#071487",
        slateblue: "#3b47ba",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "81xl": "100px",
        "9980xl": "9999px",
      },
    },
    fontSize: {
      "sm-9": "13.9px",
      "sm-5": "13.5px",
      "sm-7": "13.7px",
      sm: "14px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      "sm-8": "13.8px",
      "3xs": "10px",
      "4xl-4": "23.4px",
      "sm-1": "13.1px",
      "sm-6": "13.6px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
