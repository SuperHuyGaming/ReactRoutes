import "./App.css";
import Books from "./components/books/books";
import Admin from "./components/admin/admin";
import Nav from "./components/common/nav";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { styled } from "styled-components";
import { useState } from "react";
import ProtectedRoute from "./components/common/ProtectedRoute";

const AppContainer = styled.div({
	margin: "60px auto",
	width: "400px",
});

const Content = styled.div({
	backgroundColor: "white",
	borderRadius: "5px",
	padding: "15px",
});

function App() {
	const [authenticated, setAuthenticated] = useState(true);
	return (
		<>
			<AppContainer>
				<BrowserRouter>
					<Content>
						<Nav />
						<Routes>
							<Route path="/*" element={<Books />} />
							{/* have /* for nested routes always, like in these 2 route have nested routes */}
							<Route
								path="/admin/*"
								element={
									<ProtectedRoute
										authenticated={authenticated}
										to="/"
										element={<Admin />}
									/>
								}
							/>

							<Route path="*" element={<Navigate to={"/"} />} />
						</Routes>
					</Content>
				</BrowserRouter>
			</AppContainer>
		</>
	);
}

export default App;
