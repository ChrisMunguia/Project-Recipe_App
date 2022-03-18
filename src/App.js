import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

export default function App() {
	const [recipes, setRecipes] = useState(RecipeData);

	// TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
	const createRecipe = (newRecipe) =>
		setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);

	const deleteRecipe = (idToDelete) =>
		setRecipes((currentRecipes) => currentRecipes.filter((recipe, index) => index !== idToDelete));

	// TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

	return (
		<div className="App">
			<header>
				<h1>Delicious Food Recipes</h1>
			</header>
			<RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
			<RecipeCreate createRecipe={createRecipe} />
		</div>
	);
}
