import React, {useEffect, useState} from "react";
import "../css/header.css";
import {Link, NavLink} from "react-router-dom";
import {useParams} from "react-router";
import {findProductById, findUserByEmail, getAllCartDetail} from "../service/ProductService";

export const Header = () => {

    const [cartItems, setCartItems] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediaQueryMatched, setIsMediaQueryMatched] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const param = useParams()

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
            setIsMenuOpen(false);
        };

        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleMediaQueryChange = (mediaQuery) => {
            setIsMediaQueryMatched(mediaQuery.matches);
        };

        handleMediaQueryChange(mediaQuery); // Kiểm tra trạng thái ban đầu của media query

        mediaQuery.addListener(handleMediaQueryChange); // Lắng nghe sự thay đổi của media query

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            setIsMenuOpen(false); // Đóng menu khi kích thước màn hình thay đổi
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (!isMediaQueryMatched) {
            setIsMenuOpen(false);
        }
    }, [isMediaQueryMatched]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const logout = () => {
        sessionStorage.removeItem("TOKEN");
        sessionStorage.removeItem("USERNAME");
        sessionStorage.removeItem("roles");
        window.location.href = '/';
    };

    return (
        <header className={isMenuOpen ? "open" : ""} style={{height: "90px", marginTop: "-20px"}}>
            <div className="header-area">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="menu-wrapper">
                            <div className="logo">
                                <a href="/">
                                    <img
                                        src="https://tulsaclocks.com/wp-content/uploads/2022/11/Grandfathers-Clock-Gallery-Logo-Black.png"
                                        alt=""
                                        height="90px"
                                        width="120px"
                                    />
                                </a>
                            </div>
                            <div className="main-menu d-none d-lg-block">
                                <nav>
                                    <ul className={isMenuOpen ? "open" : ""}>
                                        {sessionStorage.getItem("roles") === "ADMIN" && (
                                            <>
                                                <li>
                                                    <a style={{textDecoration: "none"}} href="/">Home</a>
                                                </li>
                                                <li>
                                                    <a style={{textDecoration: "none"}} href="/shop">shop</a>
                                                </li>
                                                <li>
                                                    <a style={{textDecoration: "none"}} href="/about">about</a>
                                                </li>
                                                <li>
                                                    <a style={{textDecoration: "none"}} href="/employee">Employee</a>
                                                </li
                                                >
                                                <li>
                                                    <a style={{textDecoration: "none"}} href="/cart/1">Cart</a>
                                                    {/*<Link to={`/cart/${username}`} style={{ textDecoration: "none" }}>*/}
                                                    {/*    Cart*/}
                                                    {/*</Link>*/}

                                                </li>

                                                <li>
                                                    <Link to="/profile"
                                                          style={{
                                                              textDecoration: "none",
                                                              color: "navy"
                                                          }}>Hi, {sessionStorage.getItem("USERNAME")}</Link>
                                                </li>
                                                <li style={{marginLeft: "10px"}}>
                                                    <Link style={{textDecoration: "none", color: "navy"}}
                                                          onClick={() => logout()}>
                                                        Log out
                                                    </Link>
                                                </li>
                                            </>
                                        )}

                                        {sessionStorage.getItem("roles") === "USER" && (
                                            <>
                                                <li>
                                                    <a style={{textDecoration: "none"}} href="/">Home</a>
                                                </li>
                                                <li>
                                                    <a style={{textDecoration: "none"}} href="/shop">shop</a>
                                                </li>
                                                <li>
                                                    <a style={{textDecoration: "none"}} href="/about">about</a>
                                                </li>
                                                <li>
                                                    <a style={{textDecoration: "none"}} href="/cart/2">Cart</a>
                                                </li>
                                                <li>
                                                    <Link to="/profile"
                                                          style={{
                                                              textDecoration: "none",
                                                              color: "navy"
                                                          }}>Hi, {sessionStorage.getItem("USERNAME")}</Link>
                                                </li>
                                                <li style={{marginLeft: "10px"}}>
                                                    <Link style={{textDecoration: "none", color: "navy"}}
                                                          onClick={() => logout()}>
                                                        Log out
                                                    </Link>
                                                </li>


                                            </>
                                        )}

                                        {!sessionStorage.getItem("TOKEN") && (
                                            <>

                                                <div className="header-right main-menu d-none d-lg-block">
                                                    <ul>
                                                        <li>
                                                            <a style={{textDecoration: "none"}} href="/">Home</a>
                                                        </li>
                                                        <li>
                                                            <a style={{textDecoration: "none"}} href="/shop">Shop</a>
                                                        </li>
                                                        <li>
                                                            <a style={{textDecoration: "none"}} href="/about">About</a>
                                                        </li>
                                                        {isMenuOpen ? ( /* Kiểm tra trạng thái đăng nhập và ẩn/hiển thị phần tử tương ứng */
                                                            <>
                                                                <li style={{display: "none"}}>
                                                                    <a style={{textDecoration: "none"}}
                                                                       href="/login">Login</a>
                                                                </li>
                                                                <li>
                                                                    <Link to="/profile" style={{
                                                                        textDecoration: "none",
                                                                        color: "navy"
                                                                    }}>Hi, {sessionStorage.getItem("USERNAME")}</Link>
                                                                </li>
                                                                <li style={{marginLeft: "10px"}}>
                                                                    <Link
                                                                        style={{textDecoration: "none", color: "navy"}}
                                                                        onClick={() => logout()}>Log out</Link>
                                                                </li>
                                                            </>
                                                        ) : (
                                                            <li>
                                                                <a style={{textDecoration: "none", color: "navy"}}
                                                                   href="/login">Login</a>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            </>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};


