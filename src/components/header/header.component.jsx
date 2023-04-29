import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectIsToggle } from "../../redux/navigation-button/navigation-button.selectors"
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { signOutStart } from '../../redux/user/user.actions'
import { mobileAndTabletcheck } from '../../assets/utils/utils.js'

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
    const mobile = mobileAndTabletcheck();
    const signIn = "SIGN IN";
    return (
        <HeaderContainer>
            <NavigationButton />
            <LinkContainer to='/' isToggle={isToggle}>
                <Logo />
            </LinkContainer>
            {
                !mobile ? (
                    <BrandContainer>
                        Welcome to GagGifts.com!
                    </BrandContainer>
                ) : null
            }

            <OptionsContainer>
                {
                    !mobile ? (<OptionLink to="/shop">SHOP</OptionLink>) : null
                }
                <OptionLink to="/contact">CONTACT</OptionLink>
                {currentUser ? (
                    /* if the user logged in, display "SIGN OUT", otherwise "SIGN IN" */
                    <OptionLink onClick={() => dispatch(signOutStart())}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to='/signin'>{signIn}</OptionLink>
                )}
                <CardIcon />
            </OptionsContainer>
            {
                hidden ? null : (<CartDropdown />)
            }
        </HeaderContainer>
    )
}


export default Header;
