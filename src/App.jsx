import "./App.css";
import theme from "./theme/theme";
import MainComponent from "./components/MainComponent";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/inter";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainComponent />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ThemeProvider>
    </>
  );
}

export default App;
