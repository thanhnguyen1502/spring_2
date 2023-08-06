import React, {useEffect, useState} from 'react';
import {PayPalScriptProvider, PayPalButtons} from '@paypal/react-paypal-js';
import Swal from "sweetalert2";

import {useParams} from "react-router";
import {deleteCartDetail, getAllCart, saveHistory, setCart} from "../service/CartService";
import {findUserName} from "../service/UserService";
import {useNavigate} from "react-router-dom";

const CartComponent = () => {
    const [cart, setCart1] = useState([]);
    const param = useParams();
    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');

    let navigate = useNavigate();


    useEffect(() => {
        const getUserName = async () => {
            const rs = await findUserName(username);
            console.log(rs);
            setUserId(rs)
        }
        getUserName();
    }, []);



    useEffect(() => {
        const listCard = async () => {
            const rs = await getAllCart(param.username);

            setCart1(rs)

        }
        listCard();
    }, []);
    console.log(cart);


    useEffect(() => {
        const listCard = async () => {
            const rs = await getAllCart(param.username);

            setCart1(rs)

        }
        listCard();
    }, []);
    console.log(cart);

    const calculateTotalSum = () => {
        let totalSum = 0;
        for (const item of cart) {
            totalSum += item.price * item.amount;
        }
        return totalSum;
    };

    const deleteCartDetail1 = (cartId, productId, productName, cartDetailId) => {
        deleteCartDetail(cartId, productId).then(() => {
            setCart1((prevCart) => prevCart.filter((item) => item.cartDetailId !== cartDetailId));
            Swal.fire({
                title: 'Thông báo!',
                text: `Bạn vừa xoá mặt hàng ${productName}`,
                icon: 'success',
                confirmButtonText: 'OK',
            });
        });
    };
    return (
        <>
            <div
                className="hero-wrap hero-bread"
                style={{backgroundImage: 'url("https://images3.alphacoders.com/205/205917.jpg")'}}
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
                            <h1 className="mb-0 bread">My Wishlist</h1>
                        </div>
                    </div>
                </div>
            </div>
            <section className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            {cart.length === 0 ? (
                                <div className="text-center m-5">

                                    <img
                                        src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"
                                        alt="Empty Cart"
                                        height="210"
                                        width="300"
                                    />
                                    <h1 style={{ textAlign: "center" }}>EMPTY CART</h1>
                                </div>
                            ) : (
                            <div className="cart-list">
                                <table className="table">
                                    <thead className="thead-primary">
                                    <tr className="text-center">
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {cart.map((item, index) => (
                                        < tr className="text-center" key={index}>
                                            <td className="product-remove">
                                                <a href="#" onClick={() => deleteCartDetail1(item.cartId, item.productId, item.productName, item.cartDetailId)}>
                                                <img width="24" height="24"
                                                         src="https://img.icons8.com/material-sharp/24/delete-sign.png"
                                                         alt="delete-sign"/>
                                                </a>
                                            </td>
                                            <td className="image-prod">
                                                <div
                                                    className="img"
                                                    style={{backgroundImage: `url(${item.img})`}}
                                                />
                                            </td>
                                            <td className="product-name">
                                                <h3>{item.productName}</h3>
                                            </td>
                                            <td className="price">
                                                {new Intl.NumberFormat().format(item.price)} VND
                                            </td>
                                            <td className="quantity">
                                                <div className="input-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="quantity"
                                                        className="quantity form-control input-number"
                                                        defaultValue={item.amount}
                                                        min={1}
                                                        max={100}
                                                    />
                                                </div>
                                            </td>
                                            <td className="total">{Intl.NumberFormat().format(item.price * item.amount)} VND</td>
                                        </tr>
                                    ))}


                                    {/* END TR*/}
                                    </tbody>
                                </table>
                            </div>
                            )}
                            <tr>
                                <td colSpan="4"></td>
                                <td colSpan="2" className="bg-light">
                                    <div className="cart-total">
                                        <h3>Cart Totals</h3>
                                        <p className="d-flex">
                                            <span>Subtotal</span>
                                            <span
                                                className="text-end">{Intl.NumberFormat().format(calculateTotalSum())} VND</span>
                                        </p>

                                        <p className="d-flex">
                                            <span>Ship</span>
                                            <span className="text-end">30.000 VND</span>
                                        </p>
                                        <hr/>
                                        <p className="d-flex total-price">
                                            <span>Total</span>
                                            <span
                                                className="text-end">{Intl.NumberFormat().format(calculateTotalSum() + 30000)} VND</span>
                                        </p>
                                    </div>
                                    <PayPalScriptProvider>
                                        <PayPalButtons
                                            createOrder={(data, actions) => {
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                value: calculateTotalSum(),
                                                            },
                                                        },
                                                    ],
                                                });
                                            }}
                                            onApprove={(data, actions) => {
                                                return actions.order.capture().then(function () {
                                                    Swal.fire({
                                                        icon: 'success',
                                                        title: 'Payment success',
                                                        showConfirmButton: false,
                                                        timer: 1000,
                                                    });

                                                    const totalAmount = calculateTotalSum() + 30000; // Calculate the total amount including shipping
                                                    saveHistory(userId, totalAmount).then(() => {
                                                        setCart(userId).then((updatedCartData) => {
                                                            setCart1(updatedCartData);
                                                        });
                                                    });
                                                    navigate('/history')
                                                });
                                            }}
                                        />
                                    </PayPalScriptProvider>
                                </td>
                            </tr>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CartComponent;


