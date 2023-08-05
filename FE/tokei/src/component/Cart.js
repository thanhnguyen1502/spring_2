import React from 'react';

function Cart(props) {
    const { cartDetailDto, scroll, minus, plus, deleteCartDetail, sum, ship, total } = props;
    return (
        <>
            <>
                <div className="container-fluid">
                    <div className="row my-2 mt-4" style={{ textAlign: "center" }}>
                        <b style={{ fontSize: "25px", color: "black" }}>GIỎ HÀNG CỦA BẠN</b>
                    </div>
                    <div className="row mx-4">
                        <div className="col-lg-8">
                            <a className="btn btn-outline-primary" onClick={scroll}>Tiếp tục mua hàng</a>
                            {cartDetailDto?.length > 0 ? (
                                <div>
                                    <div className="row my-3 py-3" style={{ background: "#eeeeee", textAlign: "center" }}>
                                        <div className="col-lg-2">
                                            <b>SẢN PHẨM</b>
                                        </div>
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-1">
                                            <b>GIÁ</b>
                                        </div>
                                        <div className="col-lg-4">
                                            <b>SỐ LƯỢNG</b>
                                        </div>
                                        <div className="col-lg-1">
                                            <b>TỔNG</b>
                                        </div>
                                        <div className="col-lg-1"></div>
                                    </div>

                                    {cartDetailDto.map((cart) => (
                                        <div key={cart.cartDetailId} className="row mt-2 wow fadeInDown" data-wow-delay="0.3s">
                                            <div className="col-lg-2">
                                                <img src={cart.img} style={{ width: "150px", height: "150px" }} alt="Product" />
                                            </div>
                                            <div className="col-lg-3 mt-3" style={{ textAlign: "left" }}>
                                                <b>{cart.productName}</b>
                                            </div>
                                            <div className="col-lg-1 mt-3">
                                                <b>{cart.price}.000đ</b>
                                            </div>
                                            <div className="col-lg-4" style={{ textAlign: "center" }}>
                    <span>
                      <button className="minus btn-outline-light" style={{ color: "black" }} onClick={() => minus(cart.cartDetailId)}>-</button>
                      <b className="mx-1">{cart.amount}</b>
                      <button className="plus btn-outline-light" style={{ color: "black" }} onClick={() => plus(cart.cartDetailId)}>+</button>
                    </span>
                                            </div>
                                            <div className="col-lg-1 mt-3">
                                                <b>{cart.price * cart.amount}.000đ</b>
                                            </div>
                                            <div className="col-lg-1">
                                                <button>
                                                    <i className="fas fa-times" onClick={() => deleteCartDetail(cart.cartId, cart.productId, cart.productName, cart.cartDetailId)}></i>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center m-5">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/shoe-world-7d7d1.appspot.com/o/empty-cart.webp?alt=media&token=3c67f03d-3cf5-4772-8ec2-6e1858ca88e5"
                                        height="210" width="300"
                                        alt="Empty Cart"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="col-lg-4 px-4 mt-4">
                            <div style={{ textAlign: "center" }}>
                                <div className="row">
                                    <h3><b>TỔNG SỐ TIỀN</b></h3>
                                    <hr style={{ height: "2px", color: "black" }} />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <b>Tổng số tiền: </b>
                                    </div>
                                    <div className="col-lg-6">
                                        {sum}.000đ
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <b>Phí vận chuyển: </b>
                                    </div>
                                    <div className="col-lg-6">
                                        {ship}.000đ
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h5><b>Tổng thanh toán: </b></h5>
                                    </div>
                                    <div className="col-lg-6">
                                        <b>{total}.000đ</b>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div id="myPaypalButtons"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </>
    );
}

export default Cart;