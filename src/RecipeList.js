import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({ recipes, deleteRecipe }) {
	return (
		<>
			<table className="recipe-list">
				<thead>
					<tr>
						<th>Name</th>
						<th>Cuisine</th>
						<th>Photo</th>
						<th>Ingredients</th>
						<th>Preparation</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{recipes.map((recipe, index) => (
						<Recipe deleteRecipe={() => deleteRecipe(index)} key={index} recipe={recipe} />
					))}
				</tbody>
			</table>
		</>
	);
}
