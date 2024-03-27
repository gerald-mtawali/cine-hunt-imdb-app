import CineHuntLogo from "../../assets/image/CineHuntLogo.svg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
	min-width: 80vw;
	min-height: 12vh;
    margin: 10px;
	display: flex;
	flex-direction: column;
	align-content: center;
	align-items: center;
	justify-content: center;
`;

const LogoContainer = styled.div`
	width: 50%;
	cursor: pointer;
`;

const Logo = styled.img`
	min-width: 353px;
	min-height: 56px;

	object-fit: contain;
`;
const DividerLine = styled.hr`
	border: 1px solid rgba(255, 255, 253, 0.5); 
    width: 100%;
`; 

export function Header() {
	return (
		<HeaderContainer>
			<LogoContainer>
				<Link to="/">
					<Logo src={CineHuntLogo} />
				</Link>
			</LogoContainer>
            <DividerLine />
		</HeaderContainer>
	);
}
