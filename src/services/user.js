import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToRecipesListPage } from "../routes/coordinator";

export const login = (body, clear, navigate, setRightButton, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      goToRecipesListPage(navigate);
      setRightButton("Logout");
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};

export const signUp = (body, clear, navigate, setRightButton, setIsLoading) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      goToRecipesListPage(navigate);
      setRightButton("Logout");
    })
    .catch((err) => {
      setIsLoading(false);
      alert(err.response.data.message);
    });
};
