import React, {useContext, useEffect, useState} from 'react';
import {findAllProduct, findProductById} from "../service/ProductService";
import {useParams} from "react-router";
import {NavLink, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import {QuantityContext} from "./QuantityContext";
import {findUserName} from "../service/UserService";


function Detail() {
    const [productDetail, setproductDetail] = useState([]);
    const [product, setProduct] = useState([])
    const {iconQuantity, setIconQuantity} = useContext(QuantityContext);
    const username = sessionStorage.getItem('USERNAME');
    let navigate = useNavigate();
    const [userId, setUserId] = useState(0);
    const [amount, setAmount] = useState(1);
    const param = useParams()
    const [itemsToShow, setItemsToShow] = useState(6);

    useEffect(() => {
        const fetchApi = async () => {
            const result1 = await findProductById(param.id)
            setproductDetail(result1)
        }
        fetchApi()
    }, [param.id])

    useEffect(() => {
        const getUserName = async () => {
            const rs = await findUserName(username);
            console.log(rs);
            setUserId(rs)
        }
        getUserName();
    }, []);

    useEffect(() => {
        const getProduct = async () => {
            const productList = await findAllProduct();
            setProduct(productList)
        };
        getProduct();
    }, []);

    const handleAddToCartClick = (productId) => {
        addToCart(productId);
    };
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


    return (
        <>
            <div
                className="hero-wrap hero-bread"
                style={{
                    backgroundImage: 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSj9glE3o5bFuG97oV2D56MFCslGcuLGy-RVHcpUtIeiggZwPXL")',
                }}
            >
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <h1
                                style={{
                                    position: 'absolute', // Đặt vị trí của phần tử chữ SHOP là absolute
                                    top: '50%', // Đặt phần tử chữ SHOP ở giữa theo chiều dọc
                                    left: '50%', // Đặt phần tử chữ SHOP ở giữa theo chiều ngang
                                    transform: 'translate(-50%, -50%)', // Để căn giữa chữ SHOP
                                    fontSize: '4rem', // Đặt kích thước chữ SHOP
                                    fontWeight: 'bold', // Đặt độ đậm cho chữ SHOP
                                    fontFamily: "fantasy"
                                }}
                            >
                                D E T A i l
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {<section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mt-5">
                            <a>
                                <img style={{width: "100%"}}
                                     src={productDetail.img}
                                     className="img-fluid"
                                     alt="Colorlib Template"
                                />
                            </a>
                        </div>
                        <div className="col-lg-6 productDetail-details pl-md-5 mt-3">
                            <h3>{productDetail.productName}</h3>
                            <div className="rating d-flex">
                                <p className="text-left mr-4">
                                    <a href="#" className="mr-2 text-decoration-none">
                                        5.0
                                    </a>
                                    <a href="#">
                                        <span className="ion-ios-star-outline"/>
                                    </a>
                                    <a href="#">
                                        <span className="ion-ios-star-outline"/>
                                    </a>
                                    <a href="#">
                                        <span className="ion-ios-star-outline"/>
                                    </a>
                                    <a href="#">
                                        <span className="ion-ios-star-outline"/>
                                    </a>
                                    <a href="#">
                                        <span className="ion-ios-star-outline"/>
                                    </a>
                                </p>
                                <p className="text-left mr-4">
                                    <a href="#" className="mr-2 text-decoration-none" style={{color: "#000"}}>
                                        100 <span style={{color: "#bbb"}}>Rating</span>
                                    </a>
                                </p>
                                <p className="text-left">
                                    <a href="#" className="mr-2 text-decoration-none" style={{color: "#000"}}>
                                        500 <span style={{color: "#bbb"}}>Sold</span>
                                    </a>
                                </p>
                            </div>
                            <p className="price">
                                <span>đ {new Intl.NumberFormat().format(productDetail.price)}</span>
                            </p>
                            <p>
                                A small river named Duden flows by their place and supplies it with
                                the necessary regelialia. It is a paradisematic country, in which
                                roasted parts of sentences fly into your mouth.
                            </p>
                            <p>
                                On her way she met a copy. The copy warned the Little Blind Text,
                                that where it came from it would have been rewritten a thousand
                                times and everything that was left from its origin would be the word
                                "and" and the Little Blind Text should turn around and return to its
                                own, safe country. But nothing the copy said could convince her and
                                so it didn’t take long until a few insidious Copy Writers ambushed
                                her, made her drunk with Longe and Parole and dragged her into their
                                agency, where they abused her for their.
                            </p>
                            <div className="row mt-4">
                                <div className="col-md-6">
                                    <div className="form-group d-flex">
                                        <div className="select-wrap">
                                            <div className="icon">
                                                <span className="ion-ios-arrow-down"/>
                                            </div>
                                            <select name="" id="" className="form-control">
                                                <option value="">Small</option>
                                                <option value="">Medium</option>
                                                <option value="">Large</option>
                                                <option value="">Extra Large</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-100"/>
                                <div className="input-group col-md-6 d-flex mb-3">
                                    <span className="input-group-btn mr-2">
                                        <button
                                            type="button"
                                            className="quantity-left-minus btn"
                                            data-type="minus"
                                            data-field=""
                                        >
                                            <i className="ion-ios-remove"/>
                                        </button>
                                    </span>
                                    <input
                                        type="text"
                                        id="quantity"
                                        name="quantity"
                                        className="quantity form-control input-number"
                                        defaultValue={1}
                                        min={1}
                                        max={100}
                                    />
                                    <span className="input-group-btn ml-2">
                                        <button
                                            type="button"
                                            className="quantity-right-plus btn"
                                            data-type="plus"
                                            data-field=""
                                        >
                                            <i className="ion-ios-add"/>
                                        </button>
                                    </span>
                                </div>
                                <div className="w-100"/>
                                <div className="col-md-12">
                                    <p style={{color: "#000"}}>80 piece available</p>
                                </div>
                            </div>
                            <div className="btn btn-black py-3 px-5 mr-2"
                                 onClick={() => handleAddToCartClick(productDetail.productId)}>
                                Add to Cart
                            </div>


                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 nav-link-wrap">
                            <div
                                className="nav nav-pills d-flex text-center"
                                id="v-pills-tab"
                                role="tablist"
                                aria-orientation="vertical"
                            >
                                <a
                                    className="nav-link  active mr-lg-1"
                                    id="v-pills-1-tab"
                                    data-toggle="pill"
                                    href="#v-pills-1"
                                    role="tab"
                                    aria-controls="v-pills-1"
                                    aria-selected="true"
                                >
                                    Description
                                </a>
                                <a
                                    className="nav-link mr-lg-1"
                                    id="v-pills-2-tab"
                                    data-toggle="pill"
                                    href="#v-pills-2"
                                    role="tab"
                                    aria-controls="v-pills-2"
                                    aria-selected="false"
                                >
                                    Manufacturer
                                </a>
                                <a
                                    className="nav-link "
                                    id="v-pills-3-tab"
                                    data-toggle="pill"
                                    href="#v-pills-3"
                                    role="tab"
                                    aria-controls="v-pills-3"
                                    aria-selected="false"
                                >
                                    Reviews
                                </a>
                            </div>
                        </div>
                        <div className="col-md-12 tab-wrap">
                            <div className="tab-content bg-light" id="v-pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="v-pills-1"
                                    role="tabpanel"
                                    aria-labelledby="day-1-tab"
                                >
                                    <div className="p-4">
                                        <h3 className="mb-4">{productDetail.productDetailName}</h3>
                                        <p>
                                            On her way she met a copy. The copy warned the Little Blind
                                            Text, that where it came from it would have been rewritten a
                                            thousand times and everything that was left from its origin
                                            would be the word "and" and the Little Blind Text should turn
                                            around and return to its own, safe country. But nothing the
                                            copy said could convince her and so it didn’t take long until
                                            a few insidious Copy Writers ambushed her, made her drunk with
                                            Longe and Parole and dragged her into their agency, where they
                                            abused her for their.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-2"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-day-2-tab"
                                >
                                    <div className="p-4">
                                        <h3 className="mb-4">{productDetail.nameproductDetail}</h3>
                                        <p>
                                            On her way she met a copy. The copy warned the Little Blind
                                            Text, that where it came from it would have been rewritten a
                                            thousand times and everything that was left from its origin
                                            would be the word "and" and the Little Blind Text should turn
                                            around and return to its own, safe country. But nothing the
                                            copy said could convince her and so it didn’t take long until
                                            a few insidious Copy Writers ambushed her, made her drunk with
                                            Longe and Parole and dragged her into their agency, where they
                                            abused her for their.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="v-pills-3"
                                    role="tabpanel"
                                    aria-labelledby="v-pills-day-3-tab"
                                >
                                    <div className="row p-4">
                                        <div className="col-md-7">
                                            <h3 className="mb-4">23 Reviews</h3>
                                            <div className="review">
                                                <div
                                                    className="user-img"
                                                    style={{backgroundImage: "url(images/person_1.jpg)"}}
                                                />
                                                <div className="desc">
                                                    <h4>
                                                        <span className="text-left">Jacob Webb</span>
                                                        <span className="text-right">14 March 2018</span>
                                                    </h4>
                                                    <p className="star">
                                                        <span>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                        </span>
                                                        <span className="text-right">
                                                            <a href="#" className="reply">
                                                                <i className="icon-reply"/>
                                                            </a>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        When she reached the first hills of the Italic
                                                        Mountains, she had a last view back on the skyline of
                                                        her hometown Bookmarksgrov
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <div
                                                    className="user-img"
                                                    style={{backgroundImage: "url(images/person_2.jpg)"}}
                                                />
                                                <div className="desc">
                                                    <h4>
                                                        <span className="text-left">Jacob Webb</span>
                                                        <span className="text-right">14 March 2018</span>
                                                    </h4>
                                                    <p className="star">
                                                        <span>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                        </span>
                                                        <span className="text-right">
                                                            <a href="#" className="reply">
                                                                <i className="icon-reply"/>
                                                            </a>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        When she reached the first hills of the Italic
                                                        Mountains, she had a last view back on the skyline of
                                                        her hometown Bookmarksgrov
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="review">
                                                <div
                                                    className="user-img"
                                                    style={{backgroundImage: "url(images/person_3.jpg)"}}
                                                />
                                                <div className="desc">
                                                    <h4>
                                                        <span className="text-left">Jacob Webb</span>
                                                        <span className="text-right">14 March 2018</span>
                                                    </h4>
                                                    <p className="star">
                                                        <span>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                            <i className="ion-ios-star-outline"/>
                                                        </span>
                                                        <span className="text-right">
                                                            <a href="#" className="reply">
                                                                <i className="icon-reply"/>
                                                            </a>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        When she reached the first hills of the Italic
                                                        Mountains, she had a last view back on the skyline of
                                                        her hometown Bookmarksgrov
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="rating-wrap">
                                                <h3 className="mb-4">Give a Review</h3>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        (98%)
                                                    </span>
                                                    <span>20 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        (85%)
                                                    </span>
                                                    <span>10 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        (98%)
                                                    </span>
                                                    <span>5 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        (98%)
                                                    </span>
                                                    <span>0 Reviews</span>
                                                </p>
                                                <p className="star">
                                                    <span>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        <i className="ion-ios-star-outline"/>
                                                        (98%)
                                                    </span>
                                                    <span>0 Reviews</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
            <div className="row">
                {product?.slice(0, itemsToShow)?.map((products, index) => (
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={index}>
                        <div className="single-popular-items mb-50 text-center">
                            <div className="popular-img">
                                <img
                                    src={products.img}
                                    alt=""/>
                                <div className="favorit-items">
                                    <span className="flaticon-heart"/>
                                </div>
                            </div>
                            <div className="popular-caption">
                                <h3>
                                    {/*<NavLink to={`/detail/${products.productId}`}*/}
                                    {/*         style={{textDecoration: "none", fontSize: '20px'}}*/}
                                    {/*>{products.productName}</NavLink>*/}

                                    <NavLink style={{textDecoration: "none", fontSize: '20px'}}
                                             to={`/detail/${products.productId}`} onClick={window.scrollTo(0, 0)}>
                                        <a className="img-prod" onClick={() => window.scrollTo(0, 0)}>
                                            {products.productName}
                                            <div className="overlay"/>
                                        </a>

                                    </NavLink>
                                </h3>
                                <span>{new Intl.NumberFormat().format(products.price)} VND</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Detail;