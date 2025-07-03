import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
	background-color: wheat;
	border-radius: 5px;
	padding: 16px;
`;

const Header = styled.div`
	display: flex;
`;
const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Image = styled.img`
	width: 60px;
	margin-right: 16px;
`;
const BookTitle = styled.h1`
	font-weight: 700;
	font-size: 1.3rem;
	margin: 0;
`;
const BookPrice = styled.p`
	font-weight: 700;
	color: #a12b27;
	font-size: 1rem;
	margin: 0;
`;
const Button = styled.button`
	border: 3px solid #a12b27;
	color: #a12b273;
	background: none;
	padding: 12px 14px;
	margin-right: 6px;
	border-radius: 5px;
	outline: 0;
	cursor: pointer;
	font-weight: 600;
	text-transform: uppercase;
	margin-top: 5px;
`;

function Book() {
	const { id } = useParams();
	const [book, setBook] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const func = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3001/books/${id}`
				);
				setBook(response.data);
			} catch (err) {
				console.warn(err);
				navigate("/", { state: { id } });
			}
		};
		func();
	}, []);
	return book ? (
		<Container>
			<Header>
				<Image src={`assets/images/books/${id}.png`} alt={id} />
				<Info>
					<BookTitle>{book.title}</BookTitle>
					<BookPrice>{`$${book.price}`}</BookPrice>
				</Info>
			</Header>
			<p>{book.description}</p>
			<Button
				onClick={() => {
					navigate(-1);
				}}
			>
				Back
			</Button>
		</Container>
	) : (
		<h3>Loading...</h3>
	);
}

export default Book;
