import styled, { css } from 'styled-components'

const subColor = 'grey';
const mainColor = 'black';

const getFormStyle = props => {
    if (props.coupon) {
		return css `
			width: 60%;
			margin-left: auto;
			padding: 20px 0px;
		`;
    }

	return css`
		width: 100%
	`
}

const getLable = props => {
	if (props.coupon) {
		return css `
			right: 120px;
			top: 30px;
		`;
	} else {
		return css `
			left: 5px;
			top: 10px;
		`
	}
}


const shrinkLabel = css`
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`

export const GroupContainer = styled.div`
    position: relative;
    margin: 30px 0;
	display: flex;
	justify-content: flex-end;
	
`

export const FormInputContainer = styled.input`
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;
	${getFormStyle}

    &:focus {
      outline: none;
    }

    &:focus ~ label {
      ${shrinkLabel}
    }
`;

export const FromInputLabel = styled.label`
    color: ${subColor};
    font-size: 20px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
	${getLable}
    transition: 300ms ease all;
	margin-left: auto
    &.shrink {
      ${shrinkLabel};
    }
`


