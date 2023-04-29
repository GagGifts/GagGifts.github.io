import styled, {css} from 'styled-components';
import mainStyle from '../../styles/main';

const {
	device: {mobile, mobileSLanscape, mobileLanscape},
} = mainStyle;


const getIsOnHome = ({isToggle}) => {
	return isToggle 
	? css`
			position: fixed;
			top: 2rem;
			left: 14rem;
			z-index: 2000;

			@media ${mobile} {
				position: fixed;
				top: unset;
				left: unset;
				bottom: 4rem;
				right: 2rem;
				z-index: 2000;

			}
	`
	: css`
			position: fixed;
			top: 2rem;
			left: 2rem;
			z-index: 2000;

			@media ${mobile} {
				position: fixed;
				top: unset;
				left: unset;
				bottom: 4rem;
				right: 2rem;
				z-index: 2000;

			}
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
	
    text-align: center;
    cursor: pointer;
    backface-visibility: hidden;

	@media ${mobile} {
		border-radius: 50%;
		background-color: #2a1353;
		position: fixed;
		bottom: 4rem;
		right: 2rem;
		z-index: 2000;
	}

	${getIsOnHome}
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


    @media ${mobileSLanscape} {
        margin-top: 3.5rem;
        position: relative;

        &,
        &::after,
        &::before {
            width: 3rem;
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
        position: relative;

        &,
        &::after,
        &::before {
            width: 2rem;
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
            // top: -1rem;
        }

        &::after {
            // top: 1rem;
        }
    }

	${getIcon}
`;

export const NavigationContainer = styled.input.attrs({
	id: 'input',
	type: 'checkbox',
})`
    display: none;
`;
