import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import MainPage from "./components/MainPage";
import Favorites from "./components/Favorites";
import App from "./App";
import "./index.css";
import CuisineRecipeList from "./components/CuisineRecipeList";
import MyProfile from "./components/MyProfile";
import RecipeDetail from "./components/RecipeDetail";
import MyRecipes from "./components/MyRecipes";
import { UserProvider } from "./components/UserContext";
import CreateRecipe from "./components/CreateRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SignUpForm />,
  },
  {
    path: "/mainpage",
    element: <MainPage />,
  },
  {
    path: "/cuisine/:id",
    element: <CuisineRecipeList />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
  {
    path: "/myprofile",
    element: <MyProfile />,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetail />,
  },
  {
    path: "/myrecipes",
    element: <MyRecipes />,
  },
  {
    path: "/createrecipes",
    element: <CreateRecipe />,
  },
]);

createRoot(document.getElementById("root")).render(
  <div>
    <UserProvider>
      <RouterProvider router={router} />
      <App />
    </UserProvider>
  </div>
);
