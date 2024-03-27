import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const SpinnerContainer = styled.div`
	.spinner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h4 {
		margin: 5px;
	}
`;

/* https://projects.lukehaas.me/css-loaders/ , Loader #3 */
const load3 = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoaderContainer = styled.div`
	font-size: 10px;
	margin: 50px auto;
	text-indent: -9999em;
	width: 11em;
	height: 11em;
	border-radius: 50%;
	background: #e9d05b;
	background: -moz-linear-gradient(
		left,
		#e9d05b 10%,
		rgba(128, 0, 255, 0) 42%
	);
	background: -webkit-linear-gradient(
		left,
		#e9d05b 10%,
		rgba(128, 0, 255, 0) 42%
	);
	background: -o-linear-gradient(left, #e9d05b 10%, rgba(128, 0, 255, 0) 42%);
	background: -ms-linear-gradient(
		left,
		#e9d05b 10%,
		rgba(128, 0, 255, 0) 42%
	);
	background: linear-gradient(
		to right,
		#e9d05b 10%,
		rgba(128, 0, 255, 0) 42%
	);
	position: relative;
	animation: ${load3} 1.4s infinite linear;
	transform: translateZ(0);
`;

const BeforeElement = styled.div`
	width: 50%;
	height: 50%;
	background: #e9d05b;
	border-radius: 100% 0 0 0;
	position: absolute;
	top: 0;
	left: 0;
	content: "";
`;

const AfterElement = styled.div`
	background: #1a2942;
	width: 75%;
	height: 75%;
	border-radius: 50%;
	content: "";
	margin: auto;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

export const Spinner = ({ text = "", size = "5em" }) => {
	const header = text ? <h4>{text}</h4> : null;
	return (
		<SpinnerContainer>
			{header}
			<LoaderContainer style={{ height: size, width: size }}>
				<BeforeElement />
				<AfterElement />
			</LoaderContainer>
		</SpinnerContainer>
	);
};
