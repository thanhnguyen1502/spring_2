import React from 'react';
import "../css/style.css"
import {NavLink} from "react-router-dom";

function Login() {
    return (
        <>
            <section id="bgr">
                <div className="form-box">
                    <div className="form-value">
                        <form action="">
                            <h2>Login</h2>
                            <div className="inputbox">
                                <ion-icon name="mail-outline"/>
                                <input type="email" required=""/>
                                <label htmlFor="">Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"/>
                                <input type="password" required=""/>
                                <label htmlFor="">Password</label>
                            </div>
                            <div className="forget">
                                <label htmlFor="">
                                    <input type="checkbox"/>
                                    Remember Me <a href="#">Forget Password</a>
                                </label>
                            </div>
                            <NavLink to="/">
                                <button>Log in</button>
                            </NavLink>
                            <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                <a href="https://www.facebook.com/" className="text-white">
                                    <i className="fab fa-facebook-f fa-lg"/>
                                </a>
                                <a href="#!" className="text-white">
                                    <i className="fab fa-twitter fa-lg mx-4 px-2"/>
                                </a>
                                <a href="#!" className="text-white">
                                    <i className="fab fa-google fa-lg"/>
                                </a>
                            </div>
                            <div className="register">
                                <p>
                                    Don't have a account <a href="#">Register</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;