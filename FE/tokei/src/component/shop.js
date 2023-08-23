import React, {useContext, useEffect, useState} from 'react';
import {
    findAllProduct, findProductType, getAllProductByType, searchByName
} from "../service/ProductService";
import {NavLink, useNavigate} from "react-router-dom";
import "../css/shop.css";
import Swal from "sweetalert2";
import axios from "axios";
import {findUserName} from "../service/UserService";
import {QuantityContext} from "./QuantityContext";
import {Field, Form, Formik} from "formik";
import "../css/search.css";

function Shop() {
    const [productType, setProductType] = useState([])
    const [product, setProduct] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(6);
    const [itemsPerLoad, setItemsPerLoad] = useState(3);
    const {iconQuantity, setIconQuantity} = useContext(QuantityContext);
    let navigate = useNavigate();

    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');
    const [amount, setAmount] = useState(1);


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
    const handleDisplayByType = async (type) => {
        const res = await getAllProductByType(type);
        setProduct(res);
    };
    useEffect(() => {
        const showProductType = async () => {
            const rs = await findProductType();
            setProductType(rs)
        }
        showProductType()
    }, []);

    const showList = async () => {
        const rs = await findAllProduct();
        setProduct(rs)
    }

    useEffect(() => {
        showList()
    }, []);
    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + itemsPerLoad);
    };
    const handleAddToCartClick = (productId) => {
        addToCart(productId);
    };

    return (
        <>
            <main>
                <div
                    className="hero-wrap hero-bread"
                    style={{backgroundImage: 'url("https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSj9glE3o5bFuG97oV2D56MFCslGcuLGy-RVHcpUtIeiggZwPXL")'}}
                >
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-center justify-content-center">
                            <div className="col-md-9  text-center">
                                <p className="breadcrumbs">
                                <span className="mr-2">
                                    <a href="/">Home</a>
                                </span>{" "}
                                    <span>Cart</span>
                                </p>
                                <h1 className="mb-0 bread">My Shop</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="popular-items">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-7 col-lg-8 col-md-10">
                                        <div className="section-tittle mb-70 text-center mt-4">
                                            <p>
                                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                                                gravida.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="button-container">
                                    {productType?.map((value, index) => {
                                        return (
                                            <div key={index} className="m-3">
                                                <button className="btn btn-outline-secondary"
                                                        onClick={() => handleDisplayByType(value.productTypeId)}
                                                        style={{background: "none"}}>
                                                    {value.productTypeName}
                                                </button>
                                            </div>
                                        );
                                    })}
                                    <div className="m-5"></div>
                                    <div className="m-3">
                                        <div className="btn btn-outline-secondary">
                                            <Formik initialValues={{productName: ''}}
                                                    onSubmit={async (values) => {
                                                        if (!values.productName) {
                                                            showList();
                                                        } else {
                                                            const res = await searchByName(values.productName);
                                                            setProduct(res);
                                                        }
                                                    }}
                                            >
                                                <Form action="" id="search-box" style={{marginTop: -17, marginLeft: "-6%"}}>
                                                    <Field
                                                        id="search-text"
                                                        type="text"
                                                        name="productName"
                                                        placeholder="Search here..."
                                                    />
                                                    <button id="search-btn" type='submit'>
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </button>
                                                </Form>
                                            </Formik>
                                        </div>

                                    </div>
                                </div>
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
                                {product?.length === 0 && (
                                    <tr className="text-center">
                                        <img
                                            src="https://www.groceryonmobile.com/static/media/product-not-found.f96eec329d0cf1188bbb.jpg"
                                            alt=""/>
                                    </tr>
                                )}
                            </div>
                        </div>
                        {itemsToShow < product.length && (
                            <div className="text-center mt-3 mb-5">
                                <button style={{width: 100}} className="btn btn-outline-dark" onClick={handleLoadMore}>
                                    See <ion-icon name="chevron-down-outline"></ion-icon>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
        ;
}

export default Shop;
