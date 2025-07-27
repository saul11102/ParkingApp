const URL = process.env.URL_API;
import axios from 'axios';

// Metodo POST
export const POST = async (resource, data) => {
    let headers = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    }
    return await axios.post(URL + resource, data, headers)
}

// Metodo GET
export const GET = async (resource) => {    
    let headers = {
        headers: {
            "Accept": "application/json",
        }
    }
    return await axios.get(URL + resource, headers);
}