import React, {useEffect, useState} from 'react';
import {findProduct, findProductType, getAllProductByType} from "../service/ProductService";
import {Link, NavLink} from "react-router-dom";
import "../css/shop.css";

function Shop() {
    const [product, setProduct] = useState([]);
    const [productType, setProductType] = useState([])
    const [itemsToShow, setItemsToShow] = useState(6);
    const [itemsPerLoad, setItemsPerLoad] = useState(6);
    useEffect(() => {
        const getProduct = async () => {
            const productList = await findProduct();
            setProduct(productList)
        };
        getProduct();
    }, []);

    useEffect(() => {
        const showProductType = async () => {
            const rs = await findProductType();
            setProductType(rs)
        }
        showProductType()
    }, []);


    const handleDisplayByType = async (type) => {
        const res = await getAllProductByType(type);
        setProduct(res);
    };

    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + itemsPerLoad);
    };

    return (
        <>
            <main>
                <div className="container">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="popular-items">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-7 col-lg-8 col-md-10">
                                        <div className="section-tittle mb-70 text-center mt-4">
                                            <h2>Shop</h2>
                                            <p>
                                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                gravida.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                    <div className="button-container">
                                        {productType.map((value, index) => {
                                            return (
                                                <div key={index} className="m-3">
                                                    <button className="btn btn-outline-secondary" onClick={() => handleDisplayByType(value.idProductType)} style={{background: "none"}}>
                                                        {value.name}
                                                    </button>
                                                </div>
                                            );
                                        })}
                                </div>
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
                                                    <NavLink to={`/detail/${products.idProduct}`}
                                                             style={{textDecoration: "none", fontSize: '20px'}}
                                                             s>{products.name}</NavLink>
                                                </h3>
                                                <span>{new Intl.NumberFormat().format(products.price)}vnd</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {itemsToShow < product.length && (
                        <div className="text-center mt-3 mb-5">
                            <button style={{width: 100}} className="btn btn-outline-dark" onClick={handleLoadMore}>
                                See <ion-icon name="chevron-down-outline"></ion-icon>
                            </button>
                        </div>
                        )}
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
                                                <a href="product_details">Thermo Ball Etip Gloves</a>
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
            </main>

        </>
    );
}

    export default Shop;
