// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "320px",
  md: "640px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({ breakpoints });
