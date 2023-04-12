import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
    googleSignInStart,
    emailSignInStart
} from "../../redux/user/user.actions";

import {
    SignInContainer,
    TitleContainer,
    ButtonsContainer
} from "./sign-in.styles";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        email: "",
        password: ""
    });

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStart(email, password);
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignInContainer>
            <TitleContainer>I already have an account</TitleContainer>
            <TitleContainer>
                Sign in with your email and password
            </TitleContainer>
            <form onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    label="email"
                    name="email"
                    type="email"
                    value={email}
                    required
                />
                <FormInput
                    handleChange={handleChange}
                    label="password"
                    name="password"
                    type="password"
                    value={password}
                    required
                />
                <ButtonsContainer>
                    <CustomButton type="submit">Sign IN</CustomButton>
                    <CustomButton
                        type="button"
                        onClick={googleSignInStart}
                        isGoogleSignIn
                    >
                        Sign In with google
                    </CustomButton>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
        dispatch(emailSignInStart({ email, password }))
});

export default connect(
    null,
    mapDispatchToProps
)(SignIn);
