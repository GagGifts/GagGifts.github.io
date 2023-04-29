import styled from 'styled-components'
import LOGO from './logo.png'

import mainStyle from '../../styles/main'


const {
	device: { mobile },
} = mainStyle;

export const HomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 80px;
`;

export const BackgroundContainer = styled.div`
	width: 100%;
	height: 30vh;
	background-image: url(${LOGO});
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;

	@media ${mobile} {
		height: 25vh;
		width: 40vw;
	}

`;

