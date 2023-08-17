import React, {useContext, useEffect, useState} from 'react';
import {findAllProduct} from "../service/ProductService";
import Swal from "sweetalert2";
import axios from "axios";
import {QuantityContext} from "./QuantityContext";
import {NavLink, useNavigate} from "react-router-dom";
import {findUserName} from "../service/UserService";

function Home() {
    const [product, setProduct] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(6);
    const {iconQuantity, setIconQuantity} = useContext(QuantityContext);
    const username = sessionStorage.getItem('USERNAME');
    let navigate = useNavigate();
    const [userId, setUserId] = useState(0);
    const [amount, setAmount] = useState(1);

    useEffect(() => {
        const getProduct = async () => {
            const productList = await findAllProduct();
            setProduct(productList)
        };
        getProduct();
    }, []);

    useEffect(() => {
        const getUserName = async () => {
            const rs = await findUserName(username);
            console.log(rs);
            setUserId(rs)
        }
        getUserName();
    }, []);

    const addToCart = (productId, item) => {
        if (!username) {
            Swal.fire({
                icon: 'error',
                title: 'Log in to see your Cart',
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/login')
        } else {
            const apiUrl = `http://localhost:8080/v2/cart/addToCart/${userId}/${productId}/${amount}`;
            setIconQuantity(iconQuantity + 1);
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
                },
            };
            axios.get(apiUrl, config)
                .then(response => {
                    Swal.fire({
                        title: 'Notification',
                        text: 'Add to cart successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                })
                .catch(error => {
                    console.error('Error adding item to cart:', error.response);
                });
        }
        ;
    }
    console.log(iconQuantity);

    const handleAddToCartClick = (productId) => {
        addToCart(productId);
    };

    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems);
    };
    console.log(product)
    return (
        <>
            <>

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



                    <div className="popular-items mt-5">
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
                                                <div className="img-cap"
                                                     onClick={() => handleAddToCartClick(products.productId)}>
                                                    <span>Add to cart</span>
                                                </div>
                                                <div className="favorit-items">
                                                    <span className="flaticon-heart"/>
                                                </div>
                                            </div>
                                            <div className="popular-caption">
                                                <h3>
                                                    <NavLink to={`/detail/${products.productId}`}
                                                             style={{textDecoration: "none", fontSize: '20px'}}
                                                    >{products.productName}</NavLink>
                                                </h3>
                                                <span>{new Intl.NumberFormat().format(products.price)} VND</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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