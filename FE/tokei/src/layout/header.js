import React from 'react';

function Header(props) {
    return (
        <>
            <header>
                <div className="header-area"  style={{backgroundColor: "#FFF7B6"}}>
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
                                                <a style={{textDecoration: "none"}} href="/about">about</a>
                                            </li>
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