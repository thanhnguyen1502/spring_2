import axios from 'axios'

export const findProduct = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/tokei/product`)
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

export const findBrand = async () => {
    try {
        const result = await axios.get(`http://localhost:8080/tokei/brand`)
        return result.data
    } catch (error) {
        console.log(error);
    }
}
