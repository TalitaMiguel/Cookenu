import React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { RecipeCardContainer, RecipeCardContent } from "./styled";

const RecipeCard = (props) => {
  return (
    <RecipeCardContainer onClick={props.onClick}>
      <CardActionArea style={{ width: 300 }}>
        <CardMedia
          component={"img"}
          alt={props.title}
          height={"150px"}
          image={props.image}
          title={props.title}
        />
        <RecipeCardContent>
          <Typography align={"center"}>{props.title?.toUpperCase()}</Typography>
        </RecipeCardContent>
      </CardActionArea>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
