import React from 'react'
import {  useSelector } from 'react-redux';

import { selectCurrentUser } from '../../redux/user/user.selectors'
import {selectIsToggle} from "../../redux/navigation-button/navigation-button.selectors"

import { signOutStart } from '../../redux/user/user.actions'

import {ReactComponent as Logo} from './GagGiftsLogo.svg'
import NavigationButton from '../navitation-button/navigation-button.component';
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
    return (
	<HeaderContainer>
		<NavigationButton/>
        <LinkContainer to='/' isToggle={isToggle}>
            <Logo/>
        </LinkContainer>
		<BrandContainer>
			Welcome to GagGift.com!
		</BrandContainer>
        <OptionsContainer>
            { currentUser ? (
				/* if the user logged in, display "SIGN OUT", otherwise "SIGN IN" */
                <OptionLink as='div' onClick={signOutStart}>
                        SIGN OUT 
                </OptionLink>
            ) : (
                <OptionLink to='/signin'>SIGN IN</OptionLink>    
            )}
        </OptionsContainer> 
    </HeaderContainer>
	)
}


export default Header;
