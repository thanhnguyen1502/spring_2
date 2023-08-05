import axios from 'axios'

export const findEmployee = async (page, size) => {
    try {
        const result = await axios.get(`http://localhost:8080/tokei/employee/?page=${page}&size=${size}`,
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