import axios from 'axios';

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getAdmins = async () => {
    try {
        const url = `${baseUrl}/admins`;
        const {data} = await axios(url);
        return(data);
    } catch(error) {
        return {data: []}
    }
}