const axios = require('axios');

const httpClientePlugin = {
    get: async (url)=>{
        const {data }= await axios.get(url);
        return data;
    },
    post: async (url, data)=>{
    },
    put: async (url, data)=>{
    },
};
module.exports = {
    httpC: httpClientePlugin};
