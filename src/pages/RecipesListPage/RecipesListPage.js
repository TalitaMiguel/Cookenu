import React from "react";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { RecipeListContainer, AddRecipeButton } from "./styled";
import { BASE_URL } from "../../constants/urls";
import { GoPlus } from 'react-icons/go';
import { useNavigate } from "react-router-dom";
import {goToAddRecipes, goToRecipesDetailPage} from "../../routes/coordinator"
import Loading from "../../components/Loading/Loading";

const RecipesListPage = () => {
  useProtectedPage();
  const navigate = useNavigate()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`);

  const onClickCard = (id) => {
    goToRecipesDetailPage(navigate, id)
  }

  const recipeCards = recipes?.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    );
  });
  return (
    <RecipeListContainer>
      {recipeCards.length > 0 ? recipeCards : <Loading />}
      <AddRecipeButton color={"primary"} onClick={() => goToAddRecipes(navigate)}>
        <GoPlus />
      </AddRecipeButton>
    </RecipeListContainer>
  );
};

export default RecipesListPage;
