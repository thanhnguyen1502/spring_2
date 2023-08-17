import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

function Employee() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (!sessionStorage.getItem("TOKEN")) {
            Swal.fire({
                title: 'Notification!',
                text: `You must login to see your cart`,
                icon: 'error',
                confirmButtonText: 'OK',
            });
            navigate("/login");
        } else {
            setIsLoggedIn(true);
        }
    }, [navigate]);
    if (!isLoggedIn) {
        return null;
    }
    return (
        <>
            <div className="text-center">
                <img src="https://www.giandon24h.com/bg.jpg" alt=""/>

            </div>
        </>
    );
}

export default Employee;