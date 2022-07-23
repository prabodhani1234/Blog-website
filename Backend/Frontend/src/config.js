import axios from "axios"

export const axiosInstance =axios.create({
    baseURL : "https://tharablog.herokuapp.com/api/"
})
