import React from "react";
import {MainMenu} from "../components/MainMenu";
import {Screen} from "../components/layouts";
import {Footer} from "../components/Footer";


export const HomePage: React.FC = () => {
    return (
        <>
            <Screen>
                <MainMenu/>
                <h1>Home page</h1>
            </Screen>
            <Footer />
        </>
    )
}