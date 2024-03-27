import CineHuntLogo from "../../assets/image/CineHuntLogo.svg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
	width: 80vw;
	height: 120px;
	display: flex;
	flex-direction: row;
	align-content: center;
	align-items: center;
	justify-content: center;
	border: 1px solid #e5e5e5;
`;

const LogoContainer = styled.div`
	width: 50%;
	cursor: pointer;
`;

const Logo = styled.img`
	width: 80%;
	height: 100%;
	object-fit: contain;
`;

export function Header() {
	return (
		<HeaderContainer>
			<LogoContainer>
				<Link to="/">
					<Logo src={CineHuntLogo} />
				</Link>
			</LogoContainer>
		</HeaderContainer>
	);
}
