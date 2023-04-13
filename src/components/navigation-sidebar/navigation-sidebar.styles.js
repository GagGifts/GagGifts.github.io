import styled, {css} from 'styled-components';

export const NavigationSideBarWrapper = styled.div`

`

export const NavigationSideBarContainer = styled.div`
	background: transparent;
    position: fixed;
    top: 0;
    left: 0;
    width: 225px;
    height: 100%;
    padding: 20px 0;
    transition: all 0.5s ease;
`

export const NavigationSideBarItem = styled.a`
	display: block;
    padding: 20px 30px;
	color: #000;
    font-size: 20px;
    position: relative;

	&:hover,
	&:active {
		color: #0c7db1;
		background:white;
		border-right: 2px solid rgb(5, 68, 104);
	}
`
