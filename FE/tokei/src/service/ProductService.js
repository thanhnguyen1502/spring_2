import axios from 'axios'

export const findProduct = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/`,
            {
                headers:
                    {
                        'Authorization': 'Bearer ' + sessionStorage.getItem("TOKEN"),
                    }
            }
        )
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const findProductType = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/api/type`)
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const findProductById = async (productId) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/${productId}`)
        return result.data
    } catch (error) {
        console.log(error);
    }
}

export const getAllProductByType = async (type) => {
    const res = await axios.get(`http://localhost:8080/api/productByType/${type}`)
    return res.data;
}

const API_BASE_URL = 'http://localhost:8080/api';

export const getAllCartDetail =async (userId) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/cart/${userId}`)
        return result.data
    } catch (error) {
        console.log(error);
    }
};

export const findUserByEmail =async (username) => {
    try {
        const result = await axios.get(`http://localhost:8080/api/user/${username}`)
        return result.data
    } catch (error) {
        console.log(error);
    }
};

export const addToCart = (userId, productId, amount) => {
    debugger
    return fetch(`${API_BASE_URL}/cart/addToCart/${userId}/${productId}/${amount}`).then((response) => response.json());
};

export const updateAmount = (amount, cartDetailId) => {
    return fetch(`${API_BASE_URL}/cart/updateAmount/${amount}/${cartDetailId}`).then((response) => response.json());
};

export const deleteCartDetail = (cartId, productId) => {
    return fetch(`${API_BASE_URL}/cart/deleteCartDetail/${cartId}/${productId}`, {
        method: 'DELETE',
    }).then((response) => response.json());
};

export const setCart = (userId) => {
    return fetch(`${API_BASE_URL}/cart/setCart/${userId}`).then((response) => response.json());
};

export const setAmount = (amount, productId) => {
    return fetch(`${API_BASE_URL}/cart/setAmount/${amount}/${productId}`).then((response) => response.json());
};

export const findAllHistory = (userId) => {
    return fetch(`${API_BASE_URL}/cart/history/${userId}`).then((response) => response.json());
};

export const saveHistory = (userId, total) => {
    return fetch(`${API_BASE_URL}/cart/save/${userId}/${total}`).then((response) => response.json());
};