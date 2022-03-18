import React, { useState } from "react";

export default function RecipeCreate({ createRecipe }) {
	const initialFormState = {
		name: "",
		cuisine: "",
		photo: "",
		ingredients: "",
		preparation: "",
	};

	const [formData, setFormData] = useState({ ...initialFormState });
	const handleChange = ({ target }) => {
		setFormData({
			...formData,
			[target.name]: target.value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createRecipe(formData);
		setFormData({ ...initialFormState });
	};

	return (
		<form name="create" onSubmit={handleSubmit}>
			<table>
				<tbody>
					<tr>
						<td>
							<input
								type="text"
								name="name"
								placeholder="Name"
								onChange={handleChange}
								value={formData.name}
								required
							/>
						</td>
						<td>
							<input
								type="text"
								name="cuisine"
								placeholder="Cuisine"
								onChange={handleChange}
								value={formData.cuisine}
								required
							/>
						</td>
						<td>
							<input
								type="url"
								id="photo"
								name="photo"
								placeholder="URL"
								onChange={handleChange}
								value={formData.photo}
								required
							/>
						</td>
						<td>
							<textarea
								type="text"
								id="ingredients"
								name="ingredients"
								placeholder="Ingredients"
								onChange={handleChange}
								value={formData.ingredients}
								required
							></textarea>
						</td>
						<td>
							<textarea
								type="text"
								id="preparation"
								name="preparation"
								placeholder="Preparation"
								onChange={handleChange}
								value={formData.preparation}
								required
							></textarea>
						</td>
						<td>
							<button type="submit">Create</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
}
