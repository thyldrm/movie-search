import axios from "axios";


export const getMovie = (keyword) => {
    return axios.get(`http://localhost:5000/api/search?keyword=${keyword}`)
}

