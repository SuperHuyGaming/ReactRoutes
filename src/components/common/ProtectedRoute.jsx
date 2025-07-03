import { Route, Routes, Navigate } from "react-router-dom";

function ProtectedRoute({ authenticated, to, element }) {
	if (!authenticated) {
		return <Navigate to={to} />;
	}
	return (
		<Routes>
			<Route path="/*" element={element} />
		</Routes>
	);
}

export default ProtectedRoute;
