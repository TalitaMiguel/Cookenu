import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { RecipeImage, ScreenContainer, RecipeContainer } from "./styled";

const RecipesDetailPage = () => {
  useProtectedPage();
  const params = useParams();

  const recipe = useRequestData([], `${BASE_URL}/recipe/${params.id}`)[0];

  return (
    <ScreenContainer>
      {recipe ? (
        <RecipeContainer>
          <RecipeImage src={recipe.image} />
          <Typography
            gutterBottom
            align={"center"}
            variant={"h5"}
            color={"primary"}
          >
            {recipe.title}
          </Typography>

          <Typography align={"center"}>{recipe.description}</Typography>
        </RecipeContainer>
      ) : (
        <Loading />
      )}
    </ScreenContainer>
  );
};

export default RecipesDetailPage;
