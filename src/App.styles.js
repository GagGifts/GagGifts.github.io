import styled, {css} from 'styled-components';
import mainStyle from './styles/main';

const { device: {mobile}  } = mainStyle

const getAnimation = ({isToggle}) => isToggle
	? css`
			  visibility: visible;
			  opacity: 1;
			  z-index: 2001;
		  `
	: css`
			  visibility: hidden;
			  opacity: 0;
			  z-index: 0;
		  `;

export const NavigationSideBarContainer = styled.div`
	height: 100vh;
	position: absolute;
	${getAnimation};
	backface-visibility: hidden;
	overflow: hidden;
`;

export const AppContainer = styled.div`
	font-family: 'Open Sans Condensed';
	padding: 20px 60px;

	@media ${mobile} {
		padding: 20px 20px;
	}
`;
