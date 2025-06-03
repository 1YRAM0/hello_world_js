
const httpClientePlugin = {
    get: async (url)=>{
        const response = await fetch(url);
        return await response.json();
    },
    post: async (url, data)=>{
    },
    put: async (url, data)=>{
    },
};
module.exports = {
    httpC: httpClientePlugin};
