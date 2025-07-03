import { useState, useEffect, use } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { useLocation } from "react-router-dom";
function BookList() {
	const { state } = useLocation();
	const [data, setData] = useState(null);

	useEffect(() => {
		if (state) {
            //If there is no result
		}
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3001/books");
				setData(response.data);
			} catch (err) {
				console.error("Cannot fetch!", err);
			}
		};

		fetchData();
	}, []);
	return data ? (
		<>
			{data.map((book) => (
				<BookCard key={book.id} book={book} />
			))}
		</>
	) : (
		<h3>Loading...</h3>
	);
}

export default BookList;
