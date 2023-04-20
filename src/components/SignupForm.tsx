import {Alert, ButtonGroup, Input, InputGroup} from "./form";
import React, {useState} from "react";
import {createInterface} from "readline";
import {SignupFormData} from "../entities";
import {PrimaryButton} from "./buttons";
import styled from "styled-components";
import {Link} from "react-router-dom";


interface Props {
    onSubmit: (form: SignupFormData) => void;
}

interface Form {
    displayName?: string;
    email?: string;
    password?: string;
    passwordConfirmation?: string;
}

function validate(form: Form): Form {
    const errors: Form = {};

    // Display name
    if (!form.displayName) {
        errors.displayName = "Display name is required";
    }

    if (form.displayName && form.displayName.length < 2) {
        errors.displayName = "Display name must be at least 2 characters";
    }

    if (form.displayName && form.displayName.length > 20) {
        errors.displayName = "Display name must be at most 20 characters";
    }

    // Email
    if (!form.email) {
        errors.email = "Email is required";
    }

    if (form.email && form.email.length > 1024) {
        errors.email = "Email must be at most 1024 characters";
    }

    if (form.email && !form.email.includes("@")) {
        errors.email = "Email is invalid";
    }

    // Password
    if (!form.password) {
        errors.password = "Password is required";
    }

    if (form.password && form.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    }

    if (form.password && form.password.length > 1024) {
        errors.password = "Password must be at most 1024 characters";
    }

    // Password confirmation
    if (!form.passwordConfirmation) {
        errors.passwordConfirmation = "Password confirmation is required";
    }

    if (form.passwordConfirmation && form.passwordConfirmation !== form.password) {
        errors.passwordConfirmation = "Password confirmation must match password";
    }

    return errors;

}

export const SignupForm: React.FC<Props> = ({onSubmit}) => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState<Form>({});




    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrors({});

        const errors = validate({
            displayName,
            email,
            password,
            passwordConfirmation,
        })

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        onSubmit({
            displayName,
            email,
            password,
        });

    }
    return (
        <form onSubmit={handleSubmit}>
            <InputGroup bad={!!errors.displayName}>
                <label>Display name</label>
                <Input type="text" placeholder="Name to be displayed" value={displayName} onChange={e => setDisplayName(e.target.value)} />
                {errors.displayName && <Alert>{errors.displayName}</Alert>}
            </InputGroup>

            <InputGroup bad={!!errors.email}>
                <label>Email</label>
                <Input type="email" placeholder="Your real email address" value={email} onChange={e => setEmail(e.target.value)}/>
                {errors.email && <Alert>{errors.email}</Alert>}
            </InputGroup>

            <InputGroup bad={!!errors.password}>
                <label>Password</label>
                <Input type="password" placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} />
                {errors.password && <Alert>{errors.password}</Alert>}
            </InputGroup>

            <InputGroup bad={!!errors.passwordConfirmation}>
                <label>Password Confirmations</label>
                <Input type="password" placeholder="Your password ones again" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)}/>
                {errors.passwordConfirmation && <Alert>{errors.passwordConfirmation}</Alert>}
            </InputGroup>

            <ButtonGroup>
                <PrimaryButton
                    size="large"
                    type="submit"
                    // disabled={loading}
                >
                    Sign up
                </PrimaryButton>
                <Link to="/login">Login</Link>
            </ButtonGroup>

        </form>
    )
}


