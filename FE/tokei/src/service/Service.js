import axios from 'axios';

export const postLogin = async (request) => {
    debugger
    const res = await axios.post("http://localhost:8080/api/login", request);
    return res.data;
}

export const getEmail = async (genericRequest) => {
    try {
        const res = await axios.post(`http://localhost:8080/forgot_password`, genericRequest);
        console.log(res);
        return res;
        // return res;
    } catch(error){
        console.error("loi hien thi");
    }
}

