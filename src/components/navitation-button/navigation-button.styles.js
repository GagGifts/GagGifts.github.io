import styled, {css} from 'styled-components';
import mainStyle from '../../styles/main';

const {
	device: {mobile, mobileS, mobileSLanscape, mobileLanscape},
} = mainStyle;


const getIsOnHome = ({isToggle}) => {
	return isToggle 
	? css`
			position: fixed;
			top: 2rem;
			left: 14rem;
			z-index: 2000;
	`
	: css`
			position: fixed;
			top: 2rem;
			left: 2rem;
			z-index: 2000;
	`;

}
const getIcon = ({ isToggle }) => {
    return isToggle 
        ? css`
              & {
                  background-color: transparent;
              }
              &::before {
                  top: 0;
                  transform: rotate(135deg);
              }
              &::after {
                  top: 0;
                  transform: rotate(-135deg);
              }
          `
        : null;
};


export const NavigationControl = styled.label.attrs({
	htmlFor: 'input',
})`
    height: 4rem;
    width: 4rem;
    background: transparent;
	
	${getIsOnHome}
    text-align: center;
    cursor: pointer;
    backface-visibility: hidden;

    @media ${mobile}, ${mobileLanscape}, ${mobileS} {
        height: 10rem;
        width: 10rem;
        bottom: 8rem;
        right: 4rem;
    }

    @media ${mobileSLanscape} {
        height: 10rem;
        width: 10rem;
    }
`;

export const NavigationLogo = styled.div`
    position: relative;
    margin-top: 2rem;
    backface-visibility: hidden;

    &,
    &::after,
    &::before {
        width: 1.5rem;
        height: 2px;
        background-color: #000;
        display: inline-block;
    }

    &::after,
    &::before {
        content: "";
        position: absolute;
        left: 0;
        transition: all 0.2s;
    }

    &::before {
        top: -0.7rem;
    }

    &::after {
        top: 0.7rem;
    }

	${getIcon}

    @media ${mobileSLanscape} {
        margin-top: 2.5rem;
        position: relative;

        &,
        &::after,
        &::before {
            width: 2rem;
            height: 2px;
            background-color: #e9d2db;
            display: inline-block;
        }

        &::after,
        &::before {
            content: "";
            position: absolute;
            left: 0;
            transition: all 0.2s;
        }

        &::before {
            top: -0.7rem;
        }

        &::after {
            top: 0.8rem;
        }
    }

    @media ${mobile}, ${mobileLanscape} {
        margin-top: 5rem;
        position: relative;

        &,
        &::after,
        &::before {
            width: 4.5rem;
            background-color: #e9d2db;
        }

        &::after,
        &::before {
            content: "";
            position: absolute;
            left: 0;
            transition: all 0.2s;
        }

        &::before {
            top: -1.2rem;
        }

        &::after {
            top: 1.3rem;
        }
    }
`;

export const NavigationContainer = styled.input.attrs({
	id: 'input',
	type: 'checkbox',
})`
    display: none;
`;
