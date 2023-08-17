import "../css/style.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import {getEmail, postLogin} from "../service/Service";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";

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
        <section className="login_part mt-2">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="login_part_text text-center">
                            <div className="login_part_text_iner">
                                <h2>New to our Shop?</h2>
                                <p>There are advances being made in science and technology
                                    everyday, and a good example of this is the</p>
                                <a href="#" className="btn_3">Create an Account</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="login_part_form">
                            <div className="login_part_form_iner">
                                <h3>Welcome Back ! <br />
                                    Please Sign in now</h3>
                                <Formik
                                    initialValues={{
                                        username: '',
                                        password: ''
                                    }}
                                    validationSchema={Yup.object().shape({
                                        username: Yup.string().required('This field cannot be left blank'),
                                        password: Yup.string().required('This field cannot be left blank')
                                    })}
                                    onSubmit={(values) => {
                                        postLogin(values)
                                            .then((e) => {
                                                sessionStorage.setItem('TOKEN', e.accessToken);
                                                sessionStorage.setItem('USERNAME', e.username);
                                                sessionStorage.setItem('roles', e.roles[0]);
                                                window.location.href = '/';
                                            })
                                            .catch(() => {
                                                setFailedAccount('Tên tài khoản hoặc mật khẩu không đúng');
                                            });
                                    }}
                                >
                                    <Form>
                                        <div className="col-md-12 form-group p_star">
                                            <Field type="text" className="form-control" id="username" name="username" placeholder="Username" />
                                            <ErrorMessage name="username" className="text-black col-12" component="span" />
                                        </div>
                                        <div className="col-md-12 form-group p_star">
                                            <Field type="password" className="form-control" id="password" name="password" placeholder="Password" />
                                            <ErrorMessage name="password" className="text-black col-12" component="span" />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <div className="creat_account d-flex align-items-center">
                                                <input type="checkbox" id="f-option" name="selector" />
                                                <label htmlFor="f-option">Remember me</label>
                                            </div>
                                            <button type="submit" value="submit" className="btn_3">Log in</button>
                                            <a className="lost_pass" href="#">Forget password?</a>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <div id="bgr">
        //     <div className="form-box">
        //         <div className="form-value">
        //             <Formik
        //                 initialValues={{
        //                     username: "",
        //                     password: ""
        //                 }}
        //
        //                 validationSchema={Yup.object().shape({
        //                     username: Yup.string().required("This field cannot be left blank"),
        //
        //                     password: Yup.string()
        //                         .required("This field cannot be left blank")
        //                 })}
        //
        //                 onSubmit={(values) => {
        //
        //                     postLogin(values)
        //                         .then((e) => {
        //                             sessionStorage.setItem('TOKEN', e.accessToken);
        //                             sessionStorage.setItem('USERNAME', e.username);
        //                             sessionStorage.setItem('roles', e.roles[0])
        //                             window.location.href = '/';
        //                         })
        //                         .catch(() => {
        //                                 setFailedAccount("Tên tài khoản hoặc mật khẩu không đúng")
        //                             }
        //                         );
        //                 }}
        //             >
        //                 <Form>
        //                     <h2>Login</h2>
        //                     <div className="inputbox">
        //                         <ion-icon name="mail-outline"/>
        //                         <Field type="text" name="username"/>
        //                         <label htmlFor="">Username</label>
        //                         <ErrorMessage name="username" className="text-black col-12" component="span"/>
        //                     </div>
        //
        //                     <div className="inputbox">
        //                         <ion-icon name="lock-closed-outline"/>
        //                         <Field type="password" name="password"/>
        //                         <span className="password-icon" onClick={() => handlePassword()}>
        //                             </span>
        //                         <label htmlFor="">Password</label>
        //                         <ErrorMessage name="password" className="text-black col-12" component="span"/>
        //                     </div>
        //                     <button type="submit">Log in</button>
        //                     <div className="d-flex justify-content-center text-center mt-4 pt-1">
        //                         <a href="https://www.facebook.com/" className="text-white">
        //                             <i className="fab fa-facebook-f fa-lg"/>
        //                         </a>
        //                         <a href="#!" className="text-white">
        //                             <i className="fab fa-twitter fa-lg mx-4 px-2"/>
        //                         </a>
        //                         <a href="#!" className="text-white">
        //                             <i className="fab fa-google fa-lg"/>
        //                         </a>
        //                     </div>
        //                     <div className="register">
        //                         <p>
        //                             Don't have a account <a href="#">Register</a>
        //                         </p>
        //                     </div>
        //                 </Form>
        //             </Formik>
        //         </div>
        //     </div>
        // </div>
    )
}