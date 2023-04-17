import React, {useState} from "react";
import {PrimaryButton} from "./buttons";
import {Alert, ButtonGroup, Input, InputGroup} from "./form";

import styled from "styled-components";
import {Link} from "react-router-dom";
import {LoginFormData} from "../entities";

interface Props {
    // loading: boolean;
    onSubmit: (form: LoginFormData) => void;
}


interface Form {
    email?: string;
    password?: string;
}

type Errors = Partial<Form>;


function validate(form: Form): Errors {
    const errors: Errors = {};

    // Email
    if (!form.email) {
        errors.email = "Email is required";
    }

    // Password
    if (!form.password) {
        errors.password = "Password is required";
    }

    return errors;
}


export const LoginForm: React.FC<Props> = ({onSubmit}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<Errors>({});

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrors({});

        const errors = validate({
            email,
            password,
        })

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        onSubmit({
            email,
            password,
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputGroup bad={!!errors.email}>
                <label>Email</label>
                <Input
                    type="email"
                    placeholder="Your real email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                {errors.email && <Alert>{errors.email}</Alert>}
            </InputGroup>

            <InputGroup bad={!!errors.password}>
                <label>Password</label>
                <Input
                    type="password"
                    placeholder="Your password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {errors.password && <Alert>{errors.password}</Alert>}
            </InputGroup>

            <ButtonGroup>
                <PrimaryButton
                    size="large"
                    type="submit"
                    // disabled={loading}
                >
                </PrimaryButton>

                <Link to="/reset">Reset Password</Link>

                <Link to="/signup">Sign Up</Link>

            </ButtonGroup>
        </form>
    );
}
