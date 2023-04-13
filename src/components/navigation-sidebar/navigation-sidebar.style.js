import styled from 'styled-components';

export const SideBarContainer = styled.div`
	background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 225px;
    height: 100%;
    padding: 20px 0;
    transition: all 0.5s ease;
`;

export const SideBarWrapper = styled.div`
`;

export const SideBarList = styled.li`
`;

export const SideBarLink = styled.a`
	display: block;
	padding: 13px 30px;
	border-bottom: 1px solid #fff;
	color: #000;
	font-size: 20px;
	position: relative;		

	&:hover,active {
		color: #0c7db1;
		background:white;
		border-right: 2px solid rgb(5, 68, 104);3rem;
    }

`;
