import React, { useState } from "react";
import {
  InputsContainer,
} from "./styled";
import useForm from "../../hooks/useForm";
import { Button, TextField, CircularProgress } from "@mui/material";
import { signUp } from "../../services/user";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({setRightButton}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)
  const [form, onChange, clear] = useForm({ name: "", email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp(form, clear, navigate, setRightButton, setIsLoading)
  };
  return (
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
      <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          label={"Nome"}
          variant={"outlined"}
          fullWidth
          required
          autoFocus
          margin="normal"
        />

        <TextField
          name={"email"}
          value={form.email}
          onChange={onChange}
          label={"E-mail"}
          variant={"outlined"}
          type={"email"}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          name={"password"}
          value={form.password}
          onChange={onChange}
          label={"Senha"}
          variant={"outlined"}
          type={"password"}
          fullWidth
          required
          margin="normal"
        />

        <Button type={"submit"} fullWidth variant="contained" margin="normal">
        {isLoading ? <CircularProgress color="inherit" size={24}/> : <>Fazer Cadastro</>}
        </Button>
      </form>
    </InputsContainer>
  );
};

export default SignUpForm;
