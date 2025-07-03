import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavStyle = styled.nav`
	margin-bottom: 16px;

	a {
		padding: 8px 14px;
		text-decoration: none;
		border-radius: 5px;
		font-weight: 500;
		&.active {
			color: #00daff;
			border: 2px solid #00daff;
		}
	}
`;

function Nav() {
	return (
		<NavStyle>
			<NavLink to={"/"}>Books</NavLink>
			<NavLink to={"/admin"}>Admin</NavLink>
		</NavStyle>
	);
}

export default Nav;
