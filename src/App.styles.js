import styled, { css } from 'styled-components'

const getAnimation = ({ isToggle }) => {
	return isToggle 
		? css`
			  // visibility: visible;
			  opacity: 1;
		  `
		: css`
			  // visibility: hidden;
			  opacity: 0;
		  `;
};

export const NavigationSideBarContainer = styled.div`
	height: 100vh;
	position: absolute;
	${getAnimation};
	z-index: 500;
	backface-visibility: hidden;
	overflow: hidden;
`;

