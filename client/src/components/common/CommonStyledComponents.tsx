
import styled from "@emotion/styled";

export const PageDiv = styled.div`
    display:flex;
    flex-direction: column;
	min-width: 80vw;
	height: 75vh;
    background-color: #1a2942;
`;

export const ScrollableDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-height: 72vh; 
	overflow-y: auto;
	overflow-x: hidden;
	min-width: 80%;
	margin: 5px;
    background: transparent; 
`;

export const ContentContainer = styled.div`
    flex: column; 
    align-items: center; 
    align-content: center;
    justify-content: center;
    justify-items: center;
    width: 80%; 
    /* border: 1px solid lime;  */
`;
