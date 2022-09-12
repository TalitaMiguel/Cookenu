import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { Typography } from "@mui/material";
import { ScreenContainer } from "./styled";
import AddRecipesForm from "./AddRecipesForm";

const AddRecipesPage = () => {
  useProtectedPage();
  return (
    <ScreenContainer>
      <Typography align={"center"} variant={'h3'}>Adicionar Nova Receita</Typography>
      <AddRecipesForm />
    </ScreenContainer>
  );
};

export default AddRecipesPage;
