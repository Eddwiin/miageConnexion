import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: { 'Content-Type' : 'application/json' }
})

export default client;