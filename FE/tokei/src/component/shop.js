import React, {useEffect, useState} from 'react';
import {findProduct} from "../service/ProductService";

function Shop() {
    const [product, setProduct] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(6);
    const [itemsPerLoad, setItemsPerLoad] = useState(3);
    useEffect(() => {
        const getProduct = async () => {
            const productList = await findProduct();
            setProduct(productList)
        };
        getProduct();
    }, []);

    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + itemsPerLoad);
    };
    console.log(product)

    return (
        <>
            <main>
                <section className="popular-items">
                    <div className="container">
                        <div className="row product-btn justify-content-between mb-40">
                            <div className="grid-list-view">
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
                            </div>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="popular-items">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-7 col-lg-8 col-md-10">
                                            <div className="section-tittle mb-70 text-center">
                                                <h2>Shop</h2>
                                                <p>
                                                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                    labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                    gravida.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {product?.slice(0, itemsToShow)?.map((products, index) => (
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={index}>
                                                <div className="single-popular-items mb-50 text-center">
                                                    <div className="popular-img">
                                                        <img
                                                            src={products.img}
                                                            alt=""/>
                                                        <div className="img-cap">
                                                            <span>Thêm vào giỏ hàng</span>
                                                        </div>
                                                        <div className="favorit-items">
                                                            <span className="flaticon-heart"/>
                                                        </div>
                                                    </div>
                                                    <div className="popular-caption">
                                                        <h3>
                                                            <a style={{textDecoration: "none"}} href="">{products.name}</a>
                                                        </h3>
                                                        <span>{new Intl.NumberFormat().format(products.price)}vnd</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                {itemsToShow < product.length && (
                                    <div className="text-center mt-3">
                                        <button style={{width : 100}} className="btn btn-primary" onClick={handleLoadMore}>
                                            Lót mo
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div
                                className="tab-pane fade"
                                id="nav-profile"
                                role="tabpanel"
                                aria-labelledby="nav-profile-tab"
                            >
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                        <div className="single-popular-items mb-50 text-center">
                                            <div className="popular-img">
                                                <img src="../img/gallery/popular1.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                                                <img src="../img/gallery/popular2.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                                                <img src="../img/gallery/popular3.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                                                <img src="../img/gallery/popular4.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                                                <img src="../img/gallery/popular5.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                                                <img src="../img/gallery/popular6.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                            {/* Card three */}
                            <div
                                className="tab-pane fade"
                                id="nav-contact"
                                role="tabpanel"
                                aria-labelledby="nav-contact-tab"
                            >
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                        <div className="single-popular-items mb-50 text-center">
                                            <div className="popular-img">
                                                <img src="../img/gallery/popular1.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                                                <img src="../img/gallery/popular2.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                                                <img src="../img/gallery/popular3.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                                                <img src="../img/gallery/popular4.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                                                <img src="../img/gallery/popular5.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                                                <img src="../img/gallery/popular6.png" alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
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
                    </div>
                </section>
            </main>

        </>
    );
}

export default Shop;
