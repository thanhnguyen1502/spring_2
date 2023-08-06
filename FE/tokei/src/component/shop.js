import React, {useContext, useEffect, useState} from 'react';
import { findAllProduct, findProductType, getAllProductByType
} from "../service/ProductService";
import {NavLink} from "react-router-dom";
import "../css/shop.css";
import Swal from "sweetalert2";
import axios from "axios";
import {findUserName} from "../service/UserService";
import {QuantityContext} from "./QuantityContext";

function Shop() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [productType, setProductType] = useState([])
    const [product, setProduct] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(9); // Số sản phẩm hiển thị ban đầu
    const [itemsPerLoad, setItemsPerLoad] = useState(3);
    const {iconQuantity, setIconQuantity} = useContext(QuantityContext)

    const displayListProduct = async () => {
        const res = await findAllProduct();
        setProduct(res);
    };


    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');
    const [productId, setProductId] = useState(1);
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
        const apiUrl = `http://localhost:8080/api/cart/addToCart/${userId}/${productId}/${amount}`;

        setIconQuantity(iconQuantity + 1)
        Swal.fire({
            icon: 'success',
            title: 'Đã thêm vào giỏ hàng',
            showConfirmButton: false,
            timer: 1000
        });


        axios.get(apiUrl)
            .then(response => {
                Swal.fire({
                    title: 'Thông báo',
                    text: 'Thêm thành công sản phẩm vào giỏ hàng!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
                console.log('Item added to cart:', response.data);
            })
            .catch(error => {
                console.error('Error adding item to cart:', error.response);
            });
    };


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

    useEffect(() => {
        const showList = async () => {
            const rs = await findAllProduct();
            setProduct(rs)
        }
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
                                                <button className="btn btn-outline-secondary"
                                                        onClick={() => handleDisplayByType(value.productTypeId)}
                                                        style={{background: "none"}}>
                                                    {value.productTypeName}
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
    );
}

export default Shop;
