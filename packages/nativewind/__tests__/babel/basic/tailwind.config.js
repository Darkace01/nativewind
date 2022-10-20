const nativewind = require("../../../dist/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./__tests__/babel/basic/code.{js,ts,jsx,tsx}"],
  presets: [nativewind.default],
  theme: {
    extend: {},
  },
};
