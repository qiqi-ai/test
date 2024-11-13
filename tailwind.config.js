/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "rgba(255, 255, 255, 0.3)",
          "200": "rgba(255, 255, 255, 0.64)",
        },
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        "pingfang-hk": "'PingFang HK'",
        "pingfang-sc": "'PingFang SC'",
      },
      borderRadius: {
        xl: "20px",
      },
    },
    fontSize: {
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
