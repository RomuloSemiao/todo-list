import React, { ReactEventHandler, ReactNode, useRef } from "react";
import "./Login.scss";

const Login = () => {
    const emailRef: any = useRef();
    const passwordRef: any = useRef();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        console.log({
            emailValue: emailValue,
            passwordValue: passwordValue,
        });
    };

    return (
        <div className="Login">
            <h1 className="Login__title">
                Welcome to, <br />
                Futuristic Todo List
            </h1>
            <form onSubmit={handleSubmit} className="Login__form">
                <input
                    className="Login__form-input"
                    ref={emailRef}
                    type="email"
                    placeholder="Email"
                />
                <input
                    className="Login__form-input"
                    ref={passwordRef}
                    type="password"
                    placeholder="Password"
                />
                <button className="Login__form-button" type="submit">
                    Login
                </button>
            </form>
        </div>
    );
};

export { Login };
