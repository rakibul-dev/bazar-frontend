import "./App.css";
import theme from "./theme/theme";
import MainComponent from "./components/MainComponent";
import { ThemeProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainComponent />
      </ThemeProvider>
    </>
  );
}

export default App;
