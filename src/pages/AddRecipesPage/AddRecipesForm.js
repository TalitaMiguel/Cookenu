import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { Button, TextField, CircularProgress } from "@mui/material";
import { createRecipe } from "../../services/recipe";

const AddRecipesForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [form, onChange, clear] = useForm({
    title: "",
    description: "",
    image: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createRecipe(form, clear, setIsLoading);
  };

  return (
    <form onSubmit={onSubmitForm}>
      <TextField
        name={"title"}
        value={form.title}
        onChange={onChange}
        label={"Título"}
        variant={"outlined"}
        fullWidth
        margin="normal"
        required
        autoFocus
      />
      <TextField
        name={"description"}
        value={form.description}
        onChange={onChange}
        label={"Descrição"}
        variant={"outlined"}
        fullWidth
        margin="normal"
        required
      />

      <TextField
        name={"image"}
        value={form.image}
        onChange={onChange}
        label={"Foto"}
        variant={"outlined"}
        fullWidth
        margin="normal"
        required
      />

      <Button type={"submit"} fullWidth variant="contained" margin="normal">
        {isLoading ? (
          <CircularProgress color="inherit" size={24} />
        ) : (
          <>Adicionar Receita</>
        )}
      </Button>
    </form>
  );
};

export default AddRecipesForm;
