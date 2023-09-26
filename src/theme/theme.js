// import { createTheme, responsiveFontSizes } from "@mui/material";
import components from "./component/component";
// // const breakpoints = createBreakpoints({});

// let theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1200,
//       xl: 1536,
//     },
//   },
//   palette: {
//     primary: {
//       main: "#c2185b",
//     },
//   },
//   typography: {
//     // h1: {
//     //   fontSize: 53,
//     //   [theme.breakpoints.only("sm")]: {
//     //     fontSize: 71,
//     //   },
//     // },
//   },
//   components,
// });

// theme = responsiveFontSizes(theme);

// // theme = createTheme(theme, {
// //   typography: {
// //     h2: {
// //       fontsize: 53,
// //       [theme.breakpoints.down("md")]: {
// //         fontsize: "200px",
// //       },
// //     },
// //   },
// // });

// export default theme;

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
  palette: {
    // mode: "dark",
    primary: {
      main: "#16a34a",
    },
  },

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
