import React from 'react';

function Header(props) {
    return (
        <>
            <header>
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
                                            width="120%"
                                        />
                                    </a>
                                </div>
                                {/* Main-menu */}
                                <div className="main-menu d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <li>
                                                <a style={{textDecoration: "none"}} href="/">Home</a>
                                            </li>
                                            <li>
                                                <a style={{textDecoration: "none"}} href="/shop">shop</a>
                                            </li>
                                            <li>
                                                <a style={{textDecoration: "none"}} href="about">about</a>
                                            </li>
                                            <li className="hot">
                                                <a style={{textDecoration: "none"}} href="#">Latest</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a style={{textDecoration: "none"}} href="shop"> Product list</a>
                                                    </li>
                                                    <li>
                                                        <a style={{textDecoration: "none"}} href="product_details"> Product Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a style={{textDecoration: "none"}} href="blog">Blog</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a style={{textDecoration: "none"}} href="blog">Blog</a>
                                                    </li>
                                                    <li>
                                                        <a style={{textDecoration: "none"}} href="blog-details">Blog Details</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a style={{textDecoration: "none"}} href="#">Pages</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a style={{textDecoration: "none"}} href="login">Login</a>
                                                    </li>
                                                    <li>
                                                        <a style={{textDecoration: "none"}} href="cart">Cart</a>
                                                    </li>
                                                    <li>
                                                        <a style={{textDecoration: "none"}} href="elements">Element</a>
                                                    </li>
                                                    <li>
                                                        <a style={{textDecoration: "none"}} href="confirmation">Confirmation</a>
                                                    </li>
                                                    <li>
                                                        <a style={{textDecoration: "none"}} href="checkout">Product Checkout</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a style={{textDecoration: "none"}} href="contact">Contact</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                {/* Header Right */}
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
                            {/* Mobile Menu */}
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>

        </>
    );
}

export default Header;