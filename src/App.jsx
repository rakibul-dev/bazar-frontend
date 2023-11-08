import "./App.css";
import theme from "./theme/theme";
import MainComponent from "./components/MainComponent";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/inter";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from "./Redux/Slices/UserSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
  }, []);

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
