import React from "react";
import AppBar from "@mui/material/AppBar";
import { StyledToolBar } from "./styled";
import Button from "@mui/material/Button";
import { goToRecipesListPage, goToLogin } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Header = ({rightButton, setRightButton}) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  

  const logout = () => {
    localStorage.removeItem("token")
  }

  const rightButtonAction = () => {
    if(token) {
      logout()
      setRightButton("login")
      goToLogin(navigate)
    } else {
      goToLogin(navigate)
    }
  }
  return (
    <AppBar position="static">
      <StyledToolBar>
        <Button color="inherit" onClick={() => goToRecipesListPage(navigate)}>
          Cookenu
        </Button>
        <Button color="inherit" onClick={rightButtonAction}>
          {rightButton}
        </Button>
      </StyledToolBar>
    </AppBar>
  );
};

export default Header;
