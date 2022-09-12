import React, { useState } from "react";
import { Router } from "./routes/Router";
import theme from "./constants/theme";
import { ThemeProvider } from "@mui/material";
import Header from "./components/Headers/Header";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("token");
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Login");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButton={rightButton} setRightButton={setRightButton}/>
        <Router rightButton={rightButton} setRightButton={setRightButton}/>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
