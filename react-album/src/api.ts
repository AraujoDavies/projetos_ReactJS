import axios from 'axios';

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const Api = {
    getAllAlbums: async () => {
        let response = await request('/albums');
        return response.data;
    }
}