import React, {useEffect, useState} from 'react';
import {findProduct} from "../service/ProductService";

function Home() {
    const [product, setProduct] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(6);
    const [itemsPerLoad, setItemsPerLoad] = useState(6);
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
            <>

                <div id="preloader-active">
                    <div className="preloader d-flex align-items-center justify-content-center mt-3">
                        <div className="preloader-inner position-relative">
                            <div className="preloader-circle"/>
                            <div className="preloader-img pere-text">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGYbuwWQP2H-EAyPOw-U_qJBFDLLtDjrUDpg&usqp=CAU"
                                    alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

                <main>
                    <div>

                    </div>
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src="https://cdn.tamsonvn.com/wp-content/webp-express/webp-images/uploads/2022/08/Patek-2-1536x599.jpg.webp"
                                    className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://cdn.tamsonvn.com/wp-content/webp-express/webp-images/uploads/2022/08/CHOPARD-opt2-1536x599.jpg.webp"
                                    className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img
                                    src="https://cdn.tamsonvn.com/wp-content/webp-express/webp-images/uploads/2022/08/Vacheron-Constantin-opt-1-1536x599.jpg.webp"
                                    className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"
                                  style={{marginTop: "280%"}}></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"
                                  style={{marginTop: "280%"}}></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <section className="new-product-area section-padding30">
                        <div className="container">
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
                                            <img
                                                    src="https://themewagon.github.io/timezone/assets/img/gallery/new_product1.png"
                                                alt=""/>
                                        </div>
                                        <div className="product-caption">
                                            <h3>
                                                <a style={{textDecoration: "none"}}  href="">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>45,743,000 VND</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-new-pro mb-30 text-center">
                                        <div className="product-img">
                                            <img
                                                src="https://themewagon.github.io/timezone/assets/img/gallery/new_product2.png"
                                                alt=""/>
                                        </div>
                                        <div className="product-caption">
                                            <h3>
                                                <a style={{textDecoration: "none"}}  href="">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>45,743,000 VND</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-new-pro mb-30 text-center">
                                        <div className="product-img">
                                            <img
                                                src="https://themewagon.github.io/timezone/assets/img/gallery/new_product3.png"
                                                alt=""/>
                                        </div>
                                        <div className="product-caption">
                                            <h3>
                                                <a style={{textDecoration: "none"}}  href="">Thermo Ball Etip Gloves</a>
                                            </h3>
                                            <span>45,743,000 VND</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="popular-items">
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
                                {product?.slice(0, itemsToShow)?.map((products, index) => (
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={index}>
                                        <div className="single-popular-items mb-50 text-center">
                                            <div className="popular-img">
                                                <img
                                                    src={products.img}
                                                    alt=""/>
                                                <div className="img-cap">
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
                                                </div>
                                            </div>
                                            <div className="popular-caption">
                                                <h3>
                                                    <a style={{textDecoration: "none", fontSize: '20px'}}
                                                       href="">{products.productName}</a>
                                                </h3>
                                                <span>{new Intl.NumberFormat().format(products.price)} VND</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {itemsToShow < product.length && (
                                    <div className="text-center mt-3">
                                        <button style={{width: 100, marginBottom:"20px"}} className="btn btn-outline-dark"
                                                onClick={handleLoadMore}>
                                            See <ion-icon name="chevron-down-outline"></ion-icon>
                                        </button>
                                    </div>
                                )}
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
                                        <img
                                            src="https://themewagon.github.io/timezone/assets/img/gallery/choce_watch1.png"
                                            alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-6 col-md-6 col-sm-10">
                                    <div className="choice-watch-img mb-40">
                                        <img
                                            src="https://themewagon.github.io/timezone/assets/img/gallery/choce_watch2.png"
                                            alt=""/>
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
                </main>
                <div className="search-model-box">
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-btn">+</div>
                        <form className="search-model-form">
                            <input type="text" id="search-input" placeholder="Searching key....."/>
                        </form>
                    </div>
                </div>

            </>

        </>
    );
}

export default Home;