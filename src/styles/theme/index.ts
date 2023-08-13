import { extendTheme } from "@chakra-ui/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const theme = extendTheme({
  config: {
    useSystemColorMode: true,
  },
  fonts: {
    heading: poppins.style.fontFamily,
    body: poppins.style.fontFamily,
  },
  fontSizes: {
    heading: "30px",
  },
  colors: {
    light: {
      100: "rgba(51, 51, 51, 0.6)",
      200: "rgba(51, 51, 51, 0.4)",
      300: "rgba(51, 51, 51, 0.5)",
      400: "#24B0FF",
      500: "#1D8DCC",
    },
    dark: {
      100: "#E7E9ED",
      200: "rgba(231, 233, 237, 0.6)",
      300: "rgba(231, 233, 237, 0.4)",
      400: "#20232B",
      500: "#333333",
      600: "#141414",
    },
    common: {
      100: "#FF2D55",
      200: "#6890FF",
      300: "#7679E1",
    },
    text: {
      400: "rgba(51, 51, 51, 0.4)",
      500: "rgba(51, 51, 51, 0.5)",
    },
    neutral: "#333333",
    positive: "#34C759",
    negative: "#FF2D55",
  },
  breakpoints: {
    xs: "0",
    sm: "375px",
    md: "720px",
    lg: "1024px",
    xl: "1200px",
    dt: "1440px",
    xxl: "1728px",
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: "rgba(231, 233, 237, 0.8)",
          _disabled: {
            borderColor: "rgba(231, 233, 237, 0.3)", // Custom border color for disabled state
            backgroundColor: "#1A1C22",
          },
        },
      },
    },
  },
});

export default theme;
