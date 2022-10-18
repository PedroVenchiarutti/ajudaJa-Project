import axios from "axios";

const Api = axios.create({
    baseURL: import.meta.env.VITE_URL_API
})

console.log(import.meta.env.VITE_URL_API)

export default Api;