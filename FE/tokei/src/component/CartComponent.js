import React, {useEffect, useState} from 'react';

import Swal from 'sweetalert2';
import {render} from 'creditcardpayments/creditCardPayments';
import {useNavigate} from 'react-router-dom';
import {findAllCart, findProduct, getAllCartDetail, saveHistory, setAmount, setCart} from "../service/ProductService";
import {useParams} from "react-router";

const CartComponent = () => {
    const [cartDetailDto, setCartDetailDto] = useState([]);
    const [cart, setCart] = useState([]);
    const [username, setUsername] = useState('');
    const [userId, setUserId] = useState(0);
    const [sum, setSum] = useState(0);
    const [total, setTotal] = useState(0);
    const ship = 30;


    // const [user, setUser] = useState(new User());

    const history = useNavigate();
    const param = useParams();

    useEffect(() => {
        const getCart = async () => {
            const cartList = await getAllCartDetail(param.userId);
            setCart(cartList)
        };
        getCart();
    }, [param.userId]);


    const getTotal = () => {
        let totalSum = 0;
        for (const key of cartDetailDto) {
            totalSum += key.amount * key.price;
        }
        setSum(totalSum);
        setTotal(totalSum + ship);
    };

    const minus = (cartDetailId) => {
        const updatedCartDetailDto = cartDetailDto.map((items) => {
            if (items.cartDetailId === cartDetailId && items.amount > 1) {
                items.amount--;
                setSum((prevSum) => prevSum - items.price);
                setTotal((prevTotal) => prevTotal - items.price);
                return items;
            }
            return items;
        });

        // Update the cart details in the state
        setCartDetailDto(updatedCartDetailDto);
    };

    const plus = (cartDetailId) => {
        const updatedCartDetailDto = cartDetailDto.map((items) => {
            if (items.cartDetailId === cartDetailId && items.amount < items.amountt) {
                items.amount++;
                setSum((prevSum) => prevSum + items.price);
                setTotal((prevTotal) => prevTotal + items.price);
            }
            return items;
        });
        setCartDetailDto(updatedCartDetailDto);
    };

    const calculateTotalSum = () => {
        let totalSum = 0;
        for (const item of cart) {
            totalSum += item.price * item.amount;
        }
        return totalSum;
    };

    const renderPaypal = () => {
        render({
            id: '#myPaypalButtons',
            currency: 'USD',
            value: (total / 23000).toFixed(2),
            onApprove: (details) => {
                Swal.fire({
                    title: 'Thông báo!',
                    text: 'Thanh toán thành công',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });

                setCart(userId).then(() => {
                    saveHistory(userId, total).then(() => {
                        getAllCartDetail(userId).then((data) => {
                            setCartDetailDto(data);
                        });
                    });
                });

                for (const item of cartDetailDto) {
                    setAmount(item.amountt - item.amount, item.productId).then(() => {
                    });
                }

                history('/shop');
            },
        });
    };

    const deleteCartDetail = (cartId, productId, productName, cartDetailId) => {
        deleteCartDetail(cartId, productId).then(() => {
            getAllCartDetail(userId).then((data) => {
                setCartDetailDto(data);
                Swal.fire({
                    title: 'Thông báo!',
                    text: `Bạn vừa xoá mặt hàng ${productName}`,
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                const item = cartDetailDto.find((item) => item.cartDetailId === cartDetailId);
                if (item) {
                    setSum((prevSum) => prevSum - item.price * item.amount);
                    setTotal((prevTotal) => prevTotal - item.price * item.amount);
                }
            });
        });
    };

    const scroll = () => {
        history('/shop');
        window.scrollTo(0, 1000);
    };
    return (
     <>
         <div
             className="hero-wrap hero-bread"
             style={{ backgroundImage: 'url("https://images3.alphacoders.com/205/205917.jpg")' }}
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
                                 < tr className="text-center"
                                     //  key={index}
                                 >
                                     <td className="product-remove">
                                         <a href="#">
                                             <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/delete-sign.png" alt="delete-sign"/>
                                         </a>
                                     </td>
                                     <td className="image-prod">
                                         <div
                                             className="img"
                                             style={{ backgroundImage: `url(${item.img})` }}
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
                                  <tr>
                                      <td colSpan="4"></td>
                                      <td colSpan="2" className="bg-light">
                                          <div className="cart-total">
                                              <h3>Cart Totals</h3>
                                              <p className="d-flex">
                                                  <span>Subtotal</span>
                                                  <span className="text-end">{Intl.NumberFormat().format(calculateTotalSum())} VND</span>
                                              </p>

                                              <p className="d-flex">
                                                  <span>Ship</span>
                                                  <span className="text-end">30.000 VND</span>
                                              </p>
                                              <hr />
                                              <p className="d-flex total-price">
                                                  <span>Total</span>
                                                  <span className="text-end">{Intl.NumberFormat().format(calculateTotalSum() + 30000)} VND</span>
                                              </p>
                                          </div>

                                      </td>
                                  </tr>

                                 {/* END TR*/}
                                 </tbody>
                             </table>
                         </div>
                     </div>
                 </div>
             </div>
         </section >
     </>
    );
}

export default CartComponent;


