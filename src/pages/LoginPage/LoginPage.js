import React from "react";
import {
  ScreenContainer,
  LogoImage,
  InputsContainer,
  SignUpButtonContainer,
} from "./styled";
import logo from "../../assets/logo.png";
import { Button } from "@mui/material";
import LoginForm from "./LoginForm";
import { goToSignupPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const LoginPage = ({setRightButton}) => {
  useUnprotectedPage();
  const navigate = useNavigate();
  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <InputsContainer>
        <LoginForm setRightButton={setRightButton} />
      </InputsContainer>
      <SignUpButtonContainer>
        <Button
          type={"submit"}
          fullWidth
          variant="text"
          margin="normal"
          onClick={() => goToSignupPage(navigate)}
        >
          Não possi conta? Cadastre-se
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
