import { Outlet, Route, Routes } from "react-router-dom";
import { styled } from "styled-components";
import Book from "./Book";
import BookList from "./booklist";
const BooksContainer = styled.div({
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
});
const Logo = styled.img({
	borderRadius: "5px",
	width: "200px",
	margin: "20px auto 20px",
});

export default function Books() {
	return (
		<>
			<BooksContainer>
				<Logo src="src/assets/Logo.png" atl="Starbooks logo"></Logo>

				<Outlet />
				<Routes>
					{/* We use nested route to have the children keep the css style of the parent */}
					<Route path="/" element={<BookList />} />
					<Route path="/:id" element={<Book />} />
				</Routes>
			</BooksContainer>
		</>
	);
}
