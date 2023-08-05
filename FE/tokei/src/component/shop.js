import React, {useEffect, useState} from 'react';
import {
    addToCart,
    findProduct,
    findProductType,
    getAllCartDetail,
    getAllProductByType
} from "../service/ProductService";
import {Link, NavLink, useNavigate} from "react-router-dom";
import "../css/shop.css";
import Swal from "sweetalert2";

function Shop() {
    const [product, setProduct] = useState([]);
    const [productType, setProductType] = useState([]);
    const [itemsToShow, setItemsToShow] = useState(6);
    const [itemsPerLoad, setItemsPerLoad] = useState(6);
    const [cartItems, setCartItems] = useState([]);
    const [productId, setProductId] = useState(0);
    const [userId, setUserId] = useState(1);
    const [username, setUsername] = useState('');
    const [count, setCount] = useState(0);


    const history = useNavigate();
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

    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component unmounted');
        };
    }, []);

    const setItemCount = (newCount) => {
        setCount(newCount);
    };

    const handleDisplayByType = async (type) => {
        const res = await getAllProductByType(type);
        setProduct(res);
    };

    const handleLoadMore = () => {
        setItemsToShow(prevItems => prevItems + itemsPerLoad);
    };

    const handelAddToCart = (userId, productId) => { // Assuming 'userId' is available
        addToCart(userId, productId, 1)
            .then(() => {
                // The item was added to the cart successfully
                Swal.fire({
                    title: 'Thông báo!',
                    text: 'Thêm sản phẩm vào giỏ hàng thành công',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });

                getAllCartDetail(userId)
                    .then((data) => {
                        setCount(data.length);

                    })
                    .catch((error) => {
                        console.error('Error fetching cart details:', error);
                    });
            })
            .catch((error) => {
                if (error.status === 404) {
                    Swal.fire({
                        title: 'Thông báo!',
                        text: 'Bạn không thể thêm sản phẩm vào giỏ hàng vì số lượng sản phẩm không còn trong kho.',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                } else {
                    Swal.fire({
                        title: 'Thông báo!',
                        text: 'Có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng',
                        icon: 'error',
                        confirmButtonText: 'OK',
                    });
                }
                console.error('Error adding to cart:', error);
            });
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
                                                <div className="img-cap" onClick={() => handelAddToCart(products.productId)}>
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
