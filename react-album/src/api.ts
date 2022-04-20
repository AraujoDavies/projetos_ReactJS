import axios from 'axios';

const request = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const Api = {
    getAllAlbums: async () => {
        let response = await request('/albums');
        return response.data;
    },
    getAlbum: async (id: string) => {
        let response = await request(`/albums/${id}`);
        return response.data;
    },
    getAllPhotos: async (id: string) => {
        let response = await request(`/albums/${id}/photos`);
        return response.data;
    },
    getPhoto: async (id: string) => {
        let response = await request(`/photos/${id}`);
        return response.data;
    }
}