import React, {useContext, useEffect, useState} from "react";
import "../css/header.css";
import {Link, NavLink} from "react-router-dom";
import {findUserName} from "../service/UserService";
import {getAllCart} from "../service/CartService";
import {QuantityContext} from "../component/QuantityContext";

export const Header = () => {
    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');
    const [user, setUser] = useState([0]);
    const [cart, setCart] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediaQueryMatched, setIsMediaQueryMatched] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const {iconQuantity, setIconQuantity} = useContext(QuantityContext)

    useEffect(() => {
        const getUserName = async () => {
            const rs = await findUserName(username);
            console.log(rs);
            setUserId(rs)
        }
        getUserName();
    }, []);

    useEffect(() => {
        const showListCart = async () => {
            const rs = await getAllCart();
            setCart(rs)
        }
        showListCart()
    }, []);

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
        <header className={isMenuOpen ? "open" : ""} style={{marginTop: -20}}>
            {sessionStorage.getItem("roles") === "ADMIN" && (
                <>
                    <div className="header-area" >
                        <div className="main-header header-sticky" style={{height: 77, backgroundImage: "url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTm1BwDqq7fNmMRKcYBwLU0i8eIewvqqINsXF9yUvHuID4jV--9)"}}>
                            <div className="container-fluid">
                                <div className="menu-wrapper">
                                    <div className="logo">
                                        <a href="/">
                                            <img
                                                src="https://tulsaclocks.com/wp-content/uploads/2022/11/Grandfathers-Clock-Gallery-Logo-Black.png"
                                                alt=""
                                                height="80px"
                                                width="120px"
                                                style={{marginTop: -40}} />
                                        </a>
                                    </div>
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li>
                                                    <button
                                                        onClick={() => (window.location.href = '/')}
                                                        className="navbar-toggler"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target="#ftco-nav"
                                                        aria-controls="ftco-nav"
                                                        aria-expanded="false"
                                                        aria-label="Toggle navigation"
                                                    >
                                                        <span className="oi oi-menu"/> Home
                                                    </button>
                                                </li>
                                                <li>
                                                    <a
                                                        className="nav-link "
                                                        href="/shop"
                                                    >
                                                        Shop
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/history" className="nav-link">
                                                        History
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* Header Right */}
                                    <div className="header-right">
                                        <ul>
                                            <li>
                                                <a className="nav-link"
                                                   style={{color: "red"}}> Hi, {sessionStorage.getItem("USERNAME")}</a>
                                            </li>
                                            <NavLink to={`v2/cart/${username}`}>
                                                <li className="nav-item cta cta-colored">
                                                    <a className="nav-link">
                                                        <span className="flaticon-shopping-cart">
                                                         [{iconQuantity}] </span>
                                                    </a>
                                                </li>
                                            </NavLink>
                                            <li>
                                                <li>
                                                    <Link className="nav-link" style={{color: "red"}}
                                                          onClick={() => logout()}>
                                                        <img width="24" height="24"
                                                             src="https://img.icons8.com/material/24/exit.png"
                                                             alt="exit"/>
                                                    </Link>
                                                </li>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* Mobile Menu */}
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
            }

            {
                sessionStorage.getItem("roles") === "USER" && (
                    <>

                        <div className="header-area">
                            <div className="main-header header-sticky" style={{height: 77, backgroundImage: "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSj9glE3o5bFuG97oV2D56MFCslGcuLGy-RVHcpUtIeiggZwPXL)"}}>

                                <div className="container-fluid">
                                    <div className="menu-wrapper">
                                        <div className="logo">
                                            <a href="/">
                                                <img
                                                    src="https://tulsaclocks.com/wp-content/uploads/2022/11/Grandfathers-Clock-Gallery-Logo-Black.png"
                                                    alt=""
                                                    height="80px"
                                                    width="120px"
                                                    style={{marginTop: -40}} />
                                            </a>
                                        </div>
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li>
                                                        <button
                                                            onClick={() => (window.location.href = '/')}
                                                            className="navbar-toggler"
                                                            type="button"
                                                            data-toggle="collapse"
                                                            data-target="#ftco-nav"
                                                            aria-controls="ftco-nav"
                                                            aria-expanded="false"
                                                            aria-label="Toggle navigation"
                                                        >
                                                            <span className="oi oi-menu"/> Home
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav-link "
                                                            href="/shop"
                                                        >
                                                            Shop
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/history" className="nav-link">
                                                            History
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="/employee" className="nav-link">
                                                            Employee
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        {/* Header Right */}
                                        <div className="header-right">
                                            <ul>
                                                <li>
                                                    <a className="nav-link"
                                                       style={{color: "red"}}> Hi, {sessionStorage.getItem("USERNAME")}</a>
                                                </li>
                                                <NavLink to={`v2/cart/${username}`}>
                                                    <li className="nav-item cta cta-colored">
                                                        <a className="nav-link">
                                                        <span className="flaticon-shopping-cart">
                                                         [{iconQuantity}] </span>
                                                        </a>
                                                    </li>
                                                </NavLink>
                                                <li>
                                                    <Link className="nav-link" style={{color: "red"}}
                                                          onClick={() => logout()}>
                                                        <img width="24" height="24"
                                                             src="https://img.icons8.com/material/24/exit.png" alt="exit"/>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* Mobile Menu */}
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            {
                !sessionStorage.getItem("TOKEN") && (
                    <>
                        <div className="header-area">
                            <div className="main-header header-sticky" style={{height: 77, backgroundImage: "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSj9glE3o5bFuG97oV2D56MFCslGcuLGy-RVHcpUtIeiggZwPXL)"}}>
                                <div className="container-fluid">
                                    <div className="menu-wrapper">
                                        <div className="logo">
                                            <a href="/">
                                                <img
                                                    src="https://tulsaclocks.com/wp-content/uploads/2022/11/Grandfathers-Clock-Gallery-Logo-Black.png"
                                                    alt=""
                                                    height="80px"
                                                    width="120px"
                                                style={{marginTop: -40}} />
                                            </a>
                                        </div>
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li>
                                                        <button
                                                            onClick={() => (window.location.href = '/')}
                                                            className="navbar-toggler"
                                                            type="button"
                                                            data-toggle="collapse"
                                                            data-target="#ftco-nav"
                                                            aria-controls="ftco-nav"
                                                            aria-expanded="false"
                                                            aria-label="Toggle navigation"
                                                        >
                                                            <span className="oi oi-menu"/> Home
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="nav-link "
                                                            href="/shop"
                                                        >
                                                            Shop
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <div className="header-right">
                                            <ul>
                                                <li>
                                                    <a href="/login" className="nav-link">
                                                        <span className="flaticon-user"/>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"/>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </>
                )
            }

            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

        </header>
    );
};


