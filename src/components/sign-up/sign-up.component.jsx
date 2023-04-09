import React, { useState } from "react";
import { connect } from "react-redux";

import { signUpStart } from "../../redux/user/user.actions";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { SignUpContainer, TitleContainer } from "./sign-up.styles";

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setUserCredentials] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password dont match");
            return;
        }
        signUpStart({ email, password, displayName });
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value });
    };

    return (
        <SignUpContainer className="sign-up">
            <TitleContainer className="title">
                I do not have an account
            </TitleContainer>
            <TitleContainer className="title">Sign up</TitleContainer>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="Confirm password"
                    required
                />
                <CustomButton type="submit">SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    );
};

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredendtials => dispatch(signUpStart(userCredendtials))
});

export default connect(
    null,
    mapDispatchToProps
)(SignUp);
