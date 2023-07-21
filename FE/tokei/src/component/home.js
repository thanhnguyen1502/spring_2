import React from 'react';

function Home() {

    return (
        <>
            <>
                <div id="preloader-active">
                    <div className="preloader d-flex align-items-center justify-content-center">
                        <div className="preloader-inner position-relative">
                            <div className="preloader-circle" />
                            <div className="preloader-img pere-text">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYbuwWQP2H-EAyPOw-U_qJBFDLLtDjrUDpg&usqp=CAU" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <main>
                    <div className="slider-area ">
                        <div className="slider-active">
                            <div className="single-slider slider-height d-flex align-items-center slide-bg">
                                <div className="container">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                                            <div className="hero__caption">
                                                <h1
                                                    data-animation="fadeInLeft"
                                                    data-delay=".4s"
                                                    data-duration="2000ms"
                                                >
                                                    Select Your New Perfect Style
                                                </h1>
                                                <p
                                                    data-animation="fadeInLeft"
                                                    data-delay=".7s"
                                                    data-duration="2000ms"
                                                >
                                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex ea commodo consequat is aute
                                                    irure.
                                                </p>
                                                {/* Hero-btn */}
                                                <div
                                                    className="hero__btn"
                                                    data-animation="fadeInLeft"
                                                    data-delay=".8s"
                                                    data-duration="2000ms"
                                                >
                                                    <a href="industries.html" className="btn hero-btn">
                                                        Shop Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                                            <div
                                                className="hero__img"
                                                data-animation="bounceIn"
                                                data-delay=".4s"
                                            >
                                                <img
                                                    src="https://o.remove.bg/downloads/fba3d49d-616b-462d-994f-62bea6f8f7c3/a-removebg-preview.png"
                                                    alt=""
                                                    className=" heartbeat"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="new-product-area section-padding30">
                        <div className="container">
                            {/* Section tittle */}
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="section-tittle mb-70">
                                        <h2>New Arrivals</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-new-pro mb-30 text-center">
                                        <div className="product-img">
                                            <img src="https://themewagon.github.io/timezone/assets/img/gallery/new_product1.png" alt="" />
                                        </div>
                                        <div className="product-caption">
                                            <h3>
                                                <a href="">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-new-pro mb-30 text-center">
                                        <div className="product-img">
                                            <img src="https://themewagon.github.io/timezone/assets/img/gallery/new_product2.png" alt="" />
                                        </div>
                                        <div className="product-caption">
                                            <h3>
                                                <a href="">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-new-pro mb-30 text-center">
                                        <div className="product-img">
                                            <img src="https://themewagon.github.io/timezone/assets/img/gallery/new_product3.png" alt="" />
                                        </div>
                                        <div className="product-caption">
                                            <h3>
                                                <a href="">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="gallery-area">
                        <div className="container-fluid p-0 fix">
                            <div className="row">
                                <div className="col-xl-6 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-gallery mb-30">
                                        <div
                                            className="gallery-img big-img"
                                            style={{
                                                backgroundImage: "url(https://inwfile.com/s-fs/0lcbud.jpg)"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-gallery mb-30">
                                        <div
                                            className="gallery-img big-img"
                                            style={{
                                                backgroundImage: "url(https://casiomytho.com/wp-content/uploads/2018/05/%C4%90%E1%BB%93ng-h%E1%BB%93-Daniel-Wellington.jpg)"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-12">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                                            <div className="single-gallery mb-30">
                                                <div
                                                    className="gallery-img small-img"
                                                    style={{
                                                        backgroundImage: "url(https://cdn.galle.vn/media/upload_images/images/2021/08/13/seiko-1.jpg)"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-xl-12 col-lg-12  col-md-6 col-sm-6">
                                            <div className="single-gallery mb-30">
                                                <div
                                                    className="gallery-img small-img"
                                                    style={{
                                                        backgroundImage: "url(https://product.hstatic.net/1000223154/product/z4087199266816_3da6fec934926600c874c9bc4f47d8d1_fed4dec81fff450aa0ccb8769934b0eb.jpg)"
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Gallery Area End */}
                    {/*? Popular Items Start */}
                    <div className="popular-items section-padding30">
                        <div className="container">
                            {/* Section tittle */}
                            <div className="row justify-content-center">
                                <div className="col-xl-7 col-lg-8 col-md-10">
                                    <div className="section-tittle mb-70 text-center">
                                        <h2>Popular Items</h2>
                                        <p>
                                            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                            gravida.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="https://themewagon.github.io/timezone/assets/img/gallery/popular1.png" alt="" />
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart" />
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3>
                                                <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="https://themewagon.github.io/timezone/assets/img/gallery/popular2.png" alt="" />
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart" />
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3>
                                                <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="https://themewagon.github.io/timezone/assets/img/gallery/popular3.png" alt="" />
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart" />
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3>
                                                <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="https://themewagon.github.io/timezone/assets/img/gallery/popular4.png" alt="" />
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart" />
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3>
                                                <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="https://themewagon.github.io/timezone/assets/img/gallery/popular5.png" alt="" />
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart" />
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3>
                                                <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-popular-items mb-50 text-center">
                                        <div className="popular-img">
                                            <img src="https://themewagon.github.io/timezone/assets/img/gallery/popular6.png" alt="" />
                                            <div className="img-cap">
                                                <span>Add to cart</span>
                                            </div>
                                            <div className="favorit-items">
                                                <span className="flaticon-heart" />
                                            </div>
                                        </div>
                                        <div className="popular-caption">
                                            <h3>
                                                <a href="product_details.html">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>$ 45,743</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="watch-area">
                        <div className="container">
                            <div className="row align-items-center justify-content-between padding-130">
                                <div className="col-lg-5 col-md-6">
                                    <div className="watch-details mb-40">
                                        <h2>Watch of Choice</h2>
                                        <p>
                                            Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                            in reprehenderit in voluptate velit esse.
                                        </p>
                                        <a href="shop.html" className="btn">
                                            Show Watches
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-10">
                                    <div className="choice-watch-img mb-40">
                                        <img src="https://themewagon.github.io/timezone/assets/img/gallery/choce_watch1.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-6 col-md-6 col-sm-10">
                                    <div className="choice-watch-img mb-40">
                                        <img src="https://themewagon.github.io/timezone/assets/img/gallery/choce_watch2.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-6">
                                    <div className="watch-details mb-40">
                                        <h2>Watch of Choice</h2>
                                        <p>
                                            Enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                                            in reprehenderit in voluptate velit esse.
                                        </p>
                                        <a href="shop.html" className="btn">
                                            Show Watches
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Watch Choice  End*/}
                    {/*? Shop Method Start*/}
                    <div className="shop-method-area">
                        <div className="container">
                            <div className="method-wrapper">
                                <div className="row d-flex justify-content-between">
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-method mb-40">
                                            <i className="ti-package" />
                                            <h6>Free Shipping Method</h6>
                                            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-method mb-40">
                                            <i className="ti-unlock" />
                                            <h6>Secure Payment System</h6>
                                            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6">
                                        <div className="single-method mb-40">
                                            <i className="ti-reload" />
                                            <h6>Secure Payment System</h6>
                                            <p>aorem ixpsacdolor sit ameasecur adipisicing elitsf edasd.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="search-model-box">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-btn">+</div>
                        <form className="search-model-form">
                            <input type="text" id="search-input" placeholder="Searching key....." />
                        </form>
                    </div>
                </div>
   
            </>

        </>
    );
}

export default Home;