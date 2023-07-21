import React from 'react';

function Cart() {
    return (
        <>
            <>
                <section className="cart_area">
                    <div className="container">
                        <div className="cart_inner">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img
                                                        src="https://themewagon.github.io/timezone/assets/img/gallery/popular2.png"
                                                        alt=""/>
                                                </div>
                                                <div className="media-body">
                                                    <p>Minimalistic shop for multipurpose use</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$360.00</h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                      <span className="input-number-decrement">
                        {" "}
                          <i className="ti-minus"/>
                      </span>
                                                <input
                                                    className="input-number"
                                                    type="text"
                                                    defaultValue={1}
                                                    min={0}
                                                    max={10}
                                                />
                                                <span className="input-number-increment">
                        {" "}
                                                    <i className="ti-plus"/>
                      </span>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$720.00</h5>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="media">
                                                <div className="d-flex">
                                                    <img
                                                        src="https://themewagon.github.io/timezone/assets/img/gallery/popular1.png"
                                                        alt=""/>
                                                </div>
                                                <div className="media-body">
                                                    <p>Minimalistic shop for multipurpose use</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$360.00</h5>
                                        </td>
                                        <td>
                                            <div className="product_count">
                      <span className="input-number-decrement">
                        {" "}
                          <i className="ti-minus"/>
                      </span>
                                                <input
                                                    className="input-number"
                                                    type="text"
                                                    defaultValue={1}
                                                    min={0}
                                                    max={10}
                                                />
                                                <span className="input-number-increment">
                        {" "}
                                                    <i className="ti-plus"/>
                      </span>
                                            </div>
                                        </td>
                                        <td>
                                            <h5>$720.00</h5>
                                        </td>
                                    </tr>
                                    <tr className="bottom_button">
                                        <td>
                                            <a className="btn_1" href="#">
                                                Update Cart
                                            </a>
                                        </td>
                                        <td/>
                                        <td/>
                                        <td>
                                            <div className="cupon_text float-right">
                                                <a className="btn_1" href="#">
                                                    Close Coupon
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td/>
                                        <td/>
                                        <td>
                                            <h5>Subtotal</h5>
                                        </td>
                                        <td>
                                            <h5>$2160.00</h5>
                                        </td>
                                    </tr>

                                    </tbody>
                                </table>
                                <div className="checkout_btn_inner float-right">
                                    <a className="btn_1" href="#">
                                        Continue Shopping
                                    </a>
                                    <a className="btn_1 checkout_btn_1" href="#">
                                        Proceed to checkout
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    );
}

export default Cart;