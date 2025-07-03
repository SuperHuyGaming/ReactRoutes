import { Link, Route, Routes } from "react-router-dom";
import BookList from "../books/booklist";
import BookEdit from "../books/BookEdit";
import styled from "styled-components";

const Container = styled.div`
	display: flex;
	align-items: center;
`;
const StyledLink = styled(Link)`
	text-decoration: none;
	border: 3px solid crimson;
	border-radius: 5px;
	padding: 6px 12px;
	margin-left: auto;
	font-weight: 700;
	text-transform: uppercase;
	color: crimson;
`;
export default function Admin() {
	return (
		<>
			<Container>
				<h1>Admin</h1>
				{/* we don't use /new because this is absolute path and we want relative path for <Link></Link> */}
				<StyledLink to="new">New</StyledLink>
			</Container>

			<Routes>
				<Route path="/" element={<BookList />} />
				<Route path="/new" element={<BookEdit />} />
			</Routes>
		</>
	);
}
