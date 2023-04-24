import styled, { css } from 'styled-components'
import LOGO from './logo.png'

import mainStyle from '../../styles/main'


const {
	device: { mobile, mobileLanscape },
} = mainStyle;

export const HomePageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px 80px;
`;

export const BackgroundContainer = styled.div`
    height: 30vh;
	width: 15vw;
	background-image: url(${LOGO});
    background-size: cover;
    background-position: center;
	@media ${mobileLanscape} {
		height: 25vh;
		width: 20vw;
	}

	@media ${mobile} {
		height: 25vh;
		width: 40vw;
	}
`;

