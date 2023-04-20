import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectIsToggle } from "../../redux/navigation-button/navigation-button.selectors"
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { signOutStart } from '../../redux/user/user.actions'

import { ReactComponent as Logo } from './GagGiftsLogo.svg'
import NavigationButton from '../navitation-button/navigation-button.component';
import CardIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {
    HeaderContainer,
    LinkContainer,
    OptionsContainer,
    OptionLink,
    BrandContainer
} from './header.styles'

const Header = () => {
    const isToggle = useSelector(selectIsToggle);
    const currentUser = useSelector(selectCurrentUser);
	const hidden = useSelector(selectCartHidden);
    const dispatch = useDispatch();
    return (
        <HeaderContainer>
            <NavigationButton />
            <LinkContainer to='/' isToggle={isToggle}>
                <Logo />
            </LinkContainer>
            <BrandContainer>
                Welcome to GagGift.com!
            </BrandContainer>
            <OptionsContainer>
				<OptionLink to="/shop">SHOP</OptionLink>
				<OptionLink to="/contact">CONTACT</OptionLink>
                {currentUser ? (
                    /* if the user logged in, display "SIGN OUT", otherwise "SIGN IN" */
                    <OptionLink onClick={() => dispatch(signOutStart())}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>SIGN IN</OptionLink>
                )}
					<CardIcon/>
            </OptionsContainer>
		{
			hidden ? null : (<CartDropdown/>)
		}
        </HeaderContainer>
    )
}


export default Header;
