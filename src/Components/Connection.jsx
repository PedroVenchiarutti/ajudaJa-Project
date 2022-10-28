import React from "react";
import axios from "axios";


const Axios = axios.create({
    baseURL: "https://ajudajaapi.herokuapp.com/api/",
});

export default Axios;
