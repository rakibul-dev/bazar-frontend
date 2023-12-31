// import { createTheme, responsiveFontSizes } from "@mui/material";
import components from "./component/component";

import { createTheme } from "@mui/material";

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    // mode: "dark",
    background: {
      default: "#f6f9fcff",
    },
    primary: {
      main: "#d23f57ff",
    },
  },
  // shadows: ["none"],
  shadows: Array(25).fill("none"),

  components,
});

theme = createTheme(theme, {
  typography: {
    h2: {
      color: "#2b3445ff",
      fontSize: 53,
      [theme.breakpoints.down("md")]: {
        fontSize: 34,
      },
    },
    h6: {
      color: "#2b3445ff",
    },
  },
});
export default theme;
