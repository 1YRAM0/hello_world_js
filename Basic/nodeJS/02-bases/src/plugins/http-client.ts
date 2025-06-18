import axios  from "axios";

export const httpClientePlugin = {
    get: async (url: string)=>{
        const {data }= await axios.get(url);
        return data;
    },
    post: async (url:string, data:any)=>{
    },
    put: async (url:string, data: any)=>{
    },
};

