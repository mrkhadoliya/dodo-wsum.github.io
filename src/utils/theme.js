import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4c549c",
    },
    secondary: {
      main: "#4D9D66",
    },
  },
});
theme.overrides = {
  MuiButton: {
    root: {
      borderRadius: 0, // square corners
      fontWeight: 200, // makes text bold
      textTransform: "none", // removes uppercase transformation
    },
    containedSecondary: {},
  },
  MuiTextField: {
    root: {
      paddingLeft: 0,
      paddingTop: 0,
      paddingBottom: 0,
      outline: "none",
    },
    input: {
      color: "#fff",
    },
  },
};
export { theme };
