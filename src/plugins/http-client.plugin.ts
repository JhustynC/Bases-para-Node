import get from 'axios';

const httpClientPlugin = {
    get: async (url: string) => {
        // return await fetch(url) .then((data) => data.json());
        // const data = await axios.get(url); // Esto esta bien pero podemos desesctructurar
        const { data } = await get(url); // Aqui desestructuramos el objeto optenido por la peticion
        return data; //Retornamos el JSON de la respuesta de la peticion
    },

    post: async (url:string, body:string) => { },
    put: async (url:string, body:string) => { },
    delete: async (url:string, body:string) => { },
};

export const http = httpClientPlugin;