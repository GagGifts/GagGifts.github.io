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

    // Function that handles the submission of the sign up form.
    const handleSubmit = async event => {
        event.preventDefault();

        // Test the email and password against the regex
        const validEmail = emailRegex.test(email);
        const validPassword = passwordRegex.test(password);

        // If the email was valid...
        if (validEmail) {
            // And the password is valid...
            if (validPassword) {
                // And if the password matches the confirmation...
                if (password === confirmPassword) {
                    // Sign up the user.
                    signUpStart({ email, password, displayName });
                } else {
                    // Passwords don't match.
                    alert("<ERROR>: Password don't match. Please ensure that both the password and confirmation password fields match.\n");
                    return;
                }
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
