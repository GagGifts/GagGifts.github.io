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

    /**
     * The following is a breakdown of the regex used to determine
     * if a given email is valid per RFC-5322 specifications:
     * 	- ^ represents starting character of the string.
     * 	- [a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+ represents one or more occurrences of lowercase 
     * 	  letters, uppercase letters, numbers, and various special characters.
     * 	- @ represents the '@' character that is required in an email.
     * 	- [a-zA-Z0-9.-]+ represents one or more occurrences of lowercase letters, uppercase 
     * 	  letters, numbers, dots, and dashes. 
     * 	- $ represents the end of the string.
     */
    const emailRegex = new RegExp("^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$");

    /**
     * The following is a breakdown of the regex used to determine
     * if a given password is valid:
     * 	- ^ represents starting character of the string.
     * 	- (?=.*[0-9]) represents a digit must occur at least once.
     * 	- (?=.*[a-z]) represents a lower case alphabet must occur at least once.
     * 	- (?=.*[A-Z]) represents an upper case alphabet that must occur at least once.
     * 	- (?=.*[!@#$%^&_+=]) represents a special character that must occur at least once.
     * 	- (?=\\S+$) white spaces aren't allowed in the entire string.
     * 	- .{8, 20} represents at least 8 characters and at most 20 characters.
     * 	- $ represents the end of the string.
     */
    const passwordRegex = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&_+=])(?=\\S+$).{8,20}$");

    const handleSubmit = async event => {
        event.preventDefault();

        // Test the email and password against the regex
        const validEmail = emailRegex.test(email);
        const validPassword = passwordRegex.test(password);

        // If the email was valid...
        if (validEmail) {
            // And the password is valid...
            if (validPassword) {
                // Attempt to sign in
                emailSignInStart(email, password);
            } else {
                // Invalid password.
                alert("<ERROR>: Invalid password was entered. Please enter a password that is between 8 and 20 characters in length and has at least one upper case letter, lowercase letter, digit, and special character.\n");
                return;
            }
        } else {
            // Invalid email.
            alert("<ERROR>: Invalid email was entered. \"" + email + "\" either does not have a valid prefix, is missing an '@' character, or has an invalid domain.\n");
            return;
        }
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