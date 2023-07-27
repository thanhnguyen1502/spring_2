import React, {useEffect, useState} from "react";
import "../css/header.css";
import {Link} from "react-router-dom";

export const Header = () => {
    const [cartItems, setCartItems] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMediaQueryMatched, setIsMediaQueryMatched] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
        sessionStorage.removeItem("ROLES");
        window.location.href = '/login';
    };

    return (
        <header className={isMenuOpen ? "open" : ""}>
            <div className="header-area" style={{backgroundColor: "#FFF7B6"}}>
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="menu-wrapper">
                            <div className="logo">
                                <a href="/">
                                    <img
                                        src="https://tulsaclocks.com/wp-content/uploads/2022/11/Grandfathers-Clock-Gallery-Logo-Black.png"
                                        alt=""
                                        height="90px"
                                        width="120%"
                                    />
                                </a>
                            </div>
                            <div className="main-menu d-none d-lg-block">
                                <nav>
                                    <ul className={isMenuOpen ? "open" : ""}>
                                        {sessionStorage.getItem("ROLES") === "ROLE_ADMIN" && (
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
                                                    <Link to="/profile"
                                                          style={{textDecoration: "none"}}>{sessionStorage.getItem("USERNAME")}</Link>
                                                </li>
                                                <li>
                                                    <Link style={{textDecoration: "none"}} onClick={() => logout()}>Đăng
                                                        xuất</Link>
                                                </li>
                                            </>
                                        )}

                                        {sessionStorage.getItem("ROLES") === "ROLE_STAFF" && (
                                            <>

                                                <div className="d-flex">
                                                    <a className="navbar-brand mt-2" href="/"
                                                       style={{paddingRight: "150%", marginLeft: 46}}>
                                                        HypeSneaker
                                                    </a>
                                                    <button
                                                        className="navbar-toggler"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target="#ftco-nav"
                                                        aria-controls="ftco-nav"
                                                        aria-expanded="false"
                                                        aria-label="Toggle navigation"
                                                    >
                                                        <span className="oi oi-menu"/> Menu
                                                    </button>
                                                    <div className="collapse navbar-collapse" id="ftco-nav">
                                                        <ul className="navbar-nav ml-auto">
                                                            <li className="nav-item">
                                                                <a href="/" className="nav-link">
                                                                    Home
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="/shop" className="nav-link">
                                                                    Shop
                                                                </a>
                                                            </li>

                                                            <li className="nav-item cta cta-colored">
                                                                <a style={{width: 83}} href="/cart"
                                                                   className="nav-link">
                                                                    <span className="icon-shopping_cart"/>
                                                                    [{cartItems.reduce((total, item) => total + item.quantity, 0)}]
                                                                </a>
                                                            </li>

                                                            <li className="nav-item cta cta-colored">
                                                                <a className="nav-link"
                                                                   href="/profile">{sessionStorage.getItem("USERNAME")}</a>
                                                            </li>

                                                            <div className="dropdown mt-2">
                                                                <button className="btn  dropdown-toggle" type="button"
                                                                        id="dropdownMenuButton1"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false">
                                                                    <img style={{width: 25}}
                                                                         src="https://o.remove.bg/downloads/f09c7b66-9fc9-49c8-9c30-932a1cf27695/avatar-removebg-preview.png"></img>
                                                                </button>
                                                                <ul style={{width: 30}} className="dropdown-menu"
                                                                    aria-labelledby="dropdownMenuButton1">

                                                                    <li style={{textAlign: "center",}}>
                                                                        <a onClick={() => logout()}>Log out</a>
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                </div>

                                            </>
                                        )}
                                        {!sessionStorage.getItem("TOKEN") && (
                                            <>
                                                <div className="d-flex">
                                                    <button
                                                        className="navbar-toggler"
                                                        type="button"
                                                        data-toggle="collapse"
                                                        data-target="#ftco-nav"
                                                        aria-controls="ftco-nav"
                                                        aria-expanded="false"
                                                        aria-label="Toggle navigation"
                                                    >
                                                        <span className="oi oi-menu"/> Menu
                                                    </button>
                                                    <div className="collapse navbar-collapse" id="ftco-nav">
                                                        <ul className="navbar-nav ml-auto">
                                                            <li className="nav-item">
                                                                <a href="/" className="nav-link">
                                                                    Home
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a href="/shop" className="nav-link">
                                                                    Shop
                                                                </a>
                                                            </li>

                                                            <li className="nav-item cta cta-colored">
                                                                <a href="/cart" className="nav-link">
                                                                    <span className="icon-shopping_cart"/>
                                                                    [{cartItems.reduce((total, item) => total + item.quantity, 0)}]
                                                                </a>
                                                            </li>

                                                            <li style={{width: 84}} className="nav-item">
                                                                <a style={{marginTop: "-4%"}} href="/api/login"
                                                                   className="nav-link">
                                                                    <img style={{width: 25}}
                                                                         src="https://o.remove.bg/downloads/f09c7b66-9fc9-49c8-9c30-932a1cf27695/avatar-removebg-preview.png"></img>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                            <div className="header-right">
                                <ul>
                                    <li>
                                        <div className="nav-search search-switch">
                                            <span className="flaticon-search" />
                                        </div>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="login">
                                            <span className="flaticon-user" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="cart">
                                            <span className="flaticon-shopping-cart" />
                                        </a>{" "}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};


