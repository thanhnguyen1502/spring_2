import React, { useEffect, useState } from 'react';
import { findAllHistory } from "../service/CartService";
import { useParams } from "react-router";
import {findUserName} from "../service/UserService";


function History() {
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
            <div>
                <h1 className="text-center mt-5">Order History</h1>
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
                                <td>{order.total}</td>
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
