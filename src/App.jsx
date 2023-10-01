import "./App.css";
import theme from "./theme/theme";
import MainComponent from "./components/MainComponent";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
