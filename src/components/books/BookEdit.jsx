import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
const StyledForm = styled.form`
	background-color: wheat;
	border-radius: 5px;
	padding: 17px;
`;

export default function BookEdit() {
	const [formFields, setFormFields] = useState(null);
	const { id, title, price, description } = formFields || {};
	const updateForm = ({ name, value }) => {
		setFormFields({ ...formFields, [name]: value });
	};
	const createHandler = async () => {
		try {
			const product = await axios.post(
				"http://localhost:3001/books/new",
				{
					book: formFields,
				}
			);
			alert("Book Created!");
		} catch (e) {
			console.error("error", e);
		}
	};
	return (
		<StyledForm>
			{/* Target here is a built in target of the text we input,
			 instead of calling e.target.name, we use target as an object 
			 then deconstruct them in function */}
			<input
				type="text"
				name="id"
				placeholder="ID"
				value={id}
				onChange={({ target }) => {
					updateForm(target);
				}}
			/>
			<input
				type="text"
				name="title"
				placeholder="Title"
				value={title}
				onChange={({ target }) => {
					updateForm(target);
				}}
			/>
			<input
				type="text"
				name="price"
				placeholder="Price"
				value={price}
				onChange={({ target }) => {
					updateForm({
						name: target.name,
						value: Number(target.value),
					});
				}}
			/>
			<textarea
				name="description"
				placeholder="Description"
				value={description}
				onChange={({ target }) => {
					updateForm(target);
				}}
			/>
			<button type="button" onClick={createHandler}>
				Create Book
			</button>
		</StyledForm>
	);
}
