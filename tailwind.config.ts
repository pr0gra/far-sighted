import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        bakemonoStereoBold: ["bakemonoStereoBold"],
        bakemonoStereoMedium: ["bakemonoStereoMedium"],
        bakemonoStereoRegular: ["bakemonoStereoRegular"],
        bakemonoTextExtralight: ["bakemonoTextExtralight"],
        bakemonoTextLight: ["bakemonoTextLight"],
        bakemonoTextMedium: ["bakemonoTextMedium"],
        bakemonoTextRegular: ["bakemonoTextRegular"],
        bakemonoMonoRegular: ["bakemonoMonoRegular"],
        plexSansLight: ["plexSansLight"],
        plexSansMedium:["plexSansMedium"],
        plexSansBold:["plexSansBold"],
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
export default config;
