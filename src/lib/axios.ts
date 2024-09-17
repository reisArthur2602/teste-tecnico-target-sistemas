import axios from 'axios';

const apiCore = axios.create({
    baseURL: 'http://localhost:3333',
});

export { apiCore };
