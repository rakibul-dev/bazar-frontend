const MuiButtonBase = {
  styleOverrides: {
    root: {
      // Some CSS
      fontSize: "1rem",
      textTransform: "Capitalize",
      //   borderRadius: "5px",
    },
  },
  defaultProps: {
    disableRipple: true, // No more ripple, on the whole application 💣!
  },
};
export default MuiButtonBase;
