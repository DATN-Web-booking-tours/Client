import axios from "axios"
const BASE_URL: string | undefined = import.meta.env.BASE_URL
export const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers:{
        "Content-type": "application/json",
    },
})