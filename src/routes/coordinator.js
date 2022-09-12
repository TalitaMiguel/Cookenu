
export const goToLogin = (navigate) => {
  navigate("/login")
}

export const goToRecipesListPage = (navigate) => {
  navigate("/")
}

export const goToAddRecipes = (navigate) => {
  navigate("/adicionar")
}

export const goToRecipesDetailPage = (navigate, id) => {
  navigate(`/detalhe/${id}`)
}

export const goToSignupPage = (navigate) => {
  navigate("/cadastro")
}

export const goToErrorPage = (navigate) => {
  navigate("/errorPage")
}

export const goBack = (navigate) => {
  navigate(-1);
};