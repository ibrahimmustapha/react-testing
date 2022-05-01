import axios from 'axios';


export const BASE_URL = 'https://jsonplaceholder.typicode.com';


export const FetchUsers = async () => {

    try {

        return await axios.get(`${BASE_URL}/users`);

    } catch(e) {

        return [];
        
    }

};