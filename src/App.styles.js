import styled, { css } from 'styled-components'

const getAnimation = ({ isToggle }) => {
	return isToggle 
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
};

export const NavigationSideBarContainer = styled.div`
	height: 100vh;
	position: absolute;
	${getAnimation};
	backface-visibility: hidden;
	overflow: hidden;
`;

