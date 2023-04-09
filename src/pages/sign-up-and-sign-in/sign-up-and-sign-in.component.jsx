import React from 'react';

import { SignUpAndSignInContainer } from './sign-up-and-sign-in.styles'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'

const SignInAndSignUp = () => (
    <SignUpAndSignInContainer>
        <SignIn/>
        <SignUp/>
    </SignUpAndSignInContainer>
)

export default SignInAndSignUp;