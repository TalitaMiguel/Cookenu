import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import AddRecipesPage from "../pages/AddRecipesPage/AddRecipesPage";
import RecipesDetailPage from "../pages/RecipesDetailPage/RecipesDetailPage";
import RecipesListPage from "../pages/RecipesListPage/RecipesListPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const Router = ({setRightButton}) => {
  return (
    <Routes>
      <Route index element={<RecipesListPage />} />
      <Route path="/adicionar" element={<AddRecipesPage />} />
      <Route
        path="/login"
        element={<LoginPage setRightButton={setRightButton} />}
      />
      <Route path="/detalhe/:id" element={<RecipesDetailPage />} />
      <Route path="/cadastro" element={<SignUpPage setRightButton={setRightButton}/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
