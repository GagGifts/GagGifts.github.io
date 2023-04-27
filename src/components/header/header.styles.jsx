import styled, {css} from 'styled-components'
import { Link } from 'react-router-dom'
import mainStyle from '../../styles/main'

const { device: {mobile}  } = mainStyle

const getIsOnHome = ({isToggle}) => {
	return isToggle 
	? css`
			position: fixed;
			top: 2rem;
			left: 18rem;
			z-index: 2000;

			@media ${mobile} {
				position: absolute;
				top: 2rem;
				left: 2rem;
				z-index: 0;
			}
	`
	: css`
			position: fixed;
			top: 2rem;
			left: 6rem;
			z-index: 2000;

			@media ${mobile} {
				position: absolute;
				top: 2rem;
				left: 2rem;
			}
	`;

}


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 25px;
	position: absolute:
	z-index: 2000;
`

export const LinkContainer = styled(Link)`
	${getIsOnHome}
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    white-space: nowrap;
	text-decoration: none;
	color: black;
`

export const BrandContainer = styled.div`
    height: 100%;
    width: 100%;
    padding: 25px;
    display: flex;
    justify-content: flex-end;
	align-items: center;
    padding: 10px 15px;
	padding-right: 200px;
	font-size: 30px;
	test-align: center;
`
