import React from "react";
import {Screen} from "../components/layouts";
import {MainMenu} from "../components/MainMenu";
import {Footer} from "../components/Footer";
import {Plate} from "../components/Plate";
import {SmColumn} from "../components/layouts";
import {SignupForm} from "../components/SignupForm";
import {LoginFormData, SingupFormData} from "../entities";
import {LoginForm} from "../components/LoginForm";


export const LoginPage: React.FC = () => {
    function handleSubmit(form: LoginFormData) {

    }

    return (
        <>
            <Screen>
                <MainMenu/>
                <SmColumn>
                    <h1>Login</h1>
                    <Plate>
                        <LoginForm
                            onSubmit={handleSubmit}
                        />

                    </Plate>
                </SmColumn>
            </Screen>
            <Footer/>

        </>
    )
}