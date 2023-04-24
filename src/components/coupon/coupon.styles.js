import styled , {css} from 'styled-components'


const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

export const CouponContainer = styled.div`
	display: flex;
	justify-content: flex-end;
    width: 100%;
	margin-left: auto;
`

export const TextContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	font-size: 30px;
	color: red;
    width: 100%;
	margin-left: auto;
	margin-bottom: 2rem;
`

export const CouponButtonContainer = styled.div`
    min-width: 165px;
    width: 50%;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;
	margin-left: auto

    ${buttonStyles}
`

