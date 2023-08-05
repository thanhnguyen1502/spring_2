import "../css/style.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {getEmail, postLogin} from "../service/Service";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

import 'react-toastify/dist/ReactToastify.css';

export function Login() {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [failedAccount, setFailedAccount] = useState(null);

    const handlePassword = () => {
        const formPw = document.querySelector(".form-pw");

        if (showPassword) {
            formPw.setAttribute("type", "password");
        } else {
            formPw.setAttribute("type", "text");

        }

        setShowPassword((pre) => !pre);
    }

    if (!!sessionStorage.getItem("TOKEN")) {
        navigate('/');
        return null;
    }

    return (
        <div id="bgr">
            <div className="form-box">
                <div className="form-value">
                    <Formik
                        initialValues={{
                            username: "",
                            password: ""
                        }}

                        validationSchema={Yup.object().shape({
                            username: Yup.string().required("This field cannot be left blank"),

                            password: Yup.string()
                                .required("This field cannot be left blank")
                        })}

                        onSubmit={(values) => {

                            postLogin(values)
                                .then((e) => {
                                    sessionStorage.setItem('TOKEN', e.accessToken);
                                    sessionStorage.setItem('USERNAME', e.username);
                                    sessionStorage.setItem('roles', e.roles[0])
                                    window.location.href = '/';
                                })
                                .catch(() => {
                                        setFailedAccount("Tên tài khoản hoặc mật khẩu không đúng")
                                    }
                                );
                        }}
                    >
                        <Form>
                            <h2>Login</h2>
                            <div className="inputbox">
                                <ion-icon name="mail-outline"/>
                                <Field type="text" name="username"/>
                                <label htmlFor="">Username</label>
                                <ErrorMessage name="username" className="text-black col-12" component="span"/>
                            </div>

                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"/>
                                <Field type="password" name="password"/>
                                <span className="password-icon" onClick={() => handlePassword()}>
                                    </span>
                                <label htmlFor="">Password</label>
                                <ErrorMessage name="password" className="text-black col-12" component="span"/>
                            </div>
                            <button type="submit">Log in</button>
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
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}