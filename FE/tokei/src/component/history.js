import React, {useEffect, useState} from 'react';
import {findAllHistory} from "../service/CartService";
import {useParams} from "react-router";
import {findUserName} from "../service/UserService";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";


function History() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');
    const [history, setHistory] = useState([]);
    const param = useParams();
    const [price, setPrice] = useState("");
    const [img, setImg] = useState("");
    const [productName, setProductName] = useState("");


    useEffect(() => {
        const getUserName = async () => {
            const rs = await findUserName(username);
            setUserId(rs)
            console.log(userId);
        }
        getUserName();
    }, []);


    useEffect(() => {
        const getHistory = async () => {
            try {
                const rs = await findAllHistory(userId);
                setHistory(rs);
            } catch (error) {
                console.log(error);
            }
        };

        getHistory();
    }, [userId]);


    function handleShowModal(
        price,
        img,
        productName
    ) {
        setPrice(price);
        setImg(img);
        setProductName(productName)
    }

    return (
        <>
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
                            <h1 className="mb-0 bread">Order History</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-1"></div>
                <div className="col-10">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Code</th>
                            <th>Name Customer</th>
                            <th>Day Paypal</th>
                            <th>Total</th>
                            <th>Detail</th>

                        </tr>
                        </thead>
                        <tbody>
                        {history?.map((order, index) => (
                            <tr key={index}>
                                <td scope="row">{index + 1}</td>
                                <td>{order.idHistory}</td>
                                <td>{order.username}</td>
                                <td>{order.orderDate}</td>
                                <td> {new Intl.NumberFormat().format(order.total)} VND</td>
                                <td>
                                    <button
                                        className="btn btn-light d-none d-sm-table-cell"
                                        onClick={() =>
                                            handleShowModal(
                                                order.total,
                                                order.img,
                                                order.productName
                                            )
                                        }
                                        data-bs-target="#staticBackdrop"
                                        data-bs-toggle="modal"
                                        type="button"
                                    >
                                        <img
                                            width="20"
                                            height="20"
                                            src="https://img.icons8.com/color/48/bulleted-list.png"
                                            alt="bulleted-list"
                                        />
                                    </button>
                                </td>

                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div
                        className="modal-content bg-light"
                        style={{background: "none", marginTop: "9rem"}}
                    >
                        <div className="modal-header">
                            <h5
                                className="modal-title text-danger"
                                id="staticBackdropLabel"
                                style={{background: "s#f26b38"}}
                            >
                                Detail
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body" style={{backgroundColor: "white"}}>
                            <div className="container-fluid">
                                <div className="row">
                                    <div
                                        className="col-md-12"
                                        style={{display: "inline-block", marginTop: "20px"}}
                                    >
                                        <p className="text-muted">
                                            {/*Price: <strong>{price}</strong>*/}
                                            Price: <strong>{new Intl.NumberFormat().format(price)} VND</strong>
                                        </p>
                                        <p className="text-muted">
                                            Name product: <strong>{productName}</strong>
                                        </p>
                                        <p className="text-muted">
                                            <img style={{width: 300,}} src={img} alt=""/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                style={{background: "#ea845b", border: "none"}}
                            >
                                Back !
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default History;
