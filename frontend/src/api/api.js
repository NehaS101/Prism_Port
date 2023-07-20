import axios from 'axios';

const baseURl = 'http://123.0.0.1:5000';

const api = axios.create({
    baseURl: baseURl
})

export default api;