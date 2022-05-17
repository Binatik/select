import { breakpoints } from "./breakpoints";
import { fontStyle } from "./style";

export const theme = {
  colors: {
    background: "#192b58",
    primary: "#fff",
    secondary: "#000",
    surface: "#f1f1f1",

    backgrounds: [], //Если фон разный.
  },

  grid: {
    col3: "32.233%",
    col2: "50%",
    col1: "100%",
  },

  desktopFirst: {
    tablet: `(max-width: ${breakpoints.medium}px)`,
    desktop: `(max-width: ${breakpoints.large}px)`,
  },

  mobileFirst: {
    breakpoints: {},
  },

  fontStyle,
};
