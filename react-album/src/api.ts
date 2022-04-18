import axios from "axios";

let baseURL = "https://jsonplaceholder.typicode.com/";

export const Api = {
    getAllAlbuns: async () => {
        let response = await axios.get(`${baseURL}albums`); //faz a requisição
        return response.data; // retorna os dados
    },

    getAllPhotos: async () => {
        let response = await axios.get(`${baseURL}photos`);
        return response.data;
    }
}