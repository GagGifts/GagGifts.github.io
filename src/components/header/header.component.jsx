import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { signOutStart } from '../../redux/user/user.actions'

import CardIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {ReactComponent as Logo} from './crown.svg'
import {  
    HeaderContainer,
    LinkContainer,
    OptionsContainer,
    OptionLink
} from './header.styles'


const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LinkContainer to='/'>
            <Logo/>
        </LinkContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/contact'>CONTACT</OptionLink> 
            { currentUser ? (
                <OptionLink as='div' onClick={signOutStart}>
                        SIGN OUT 
                </OptionLink>
            ) : (
                <OptionLink to='/signin'>SIGN IN</OptionLink>    
            )}
                <CardIcon/>
        </OptionsContainer> 
        {
        hidden ? null : (<CartDropdown />)
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

const mapDispatchProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchProps)(Header);