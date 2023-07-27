import axios from 'axios'

export const findProduct = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/tokei/product`,
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
        const result = await axios.get(`http://localhost:8080/tokei/type`)
        return result.data
    } catch (error) {
        console.log(error);
    }
}


export const findById = async (idProduct) => {
    try {
        const result = await axios.get(`http://localhost:8080/tokei/${idProduct}`)
        return result.data
    } catch (error) {
        console.log(error);
    }
}


export const getAllProductByType = async (type) => {
    const res = await axios.get(`http://localhost:8080/tokei/productByType/${type}`)
    return res.data;
}
