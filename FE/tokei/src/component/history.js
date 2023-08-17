import React, { useEffect, useState } from 'react';
import { findAllHistory } from "../service/CartService";
import { useParams } from "react-router";
import {findUserName} from "../service/UserService";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";


function History() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState(0);
    const username = sessionStorage.getItem('USERNAME');
    const [history, setHistory] = useState([]);
    const param = useParams();
    console.log(userId);

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


    return (
        <>
            <div
                className="hero-wrap hero-bread"
                style={{backgroundImage: 'url("https://www.adorama.com/alc/wp-content/uploads/2017/11/shutterstock_114802408.jpg")'}}
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
                        </tr>
                        </thead>
                        <tbody>
                        {history?.map((order, index) => (
                            <tr key={index}>
                                <td scope="row">{index + 1}</td>
                                <td>{order.codeBill}</td>
                                <td>{order.user.name}</td>
                                <td>{order.orderDate}</td>
                                <td> {new Intl.NumberFormat().format(order.total)} VND</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default History;
