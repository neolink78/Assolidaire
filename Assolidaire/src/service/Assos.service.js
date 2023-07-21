import axios from 'axios';

const baseUrl = import.meta.env.VITE_BACKEND_URL;
export const getAssos = async () => {
    try {
        const url = `${baseUrl}/assos`;
        const {data} = await axios(url);
        return data;
    } catch (error) {
        return {data: []}
    }
}; 

export const getFirstAssoWithItsCat = async () => {
    try {
        const url= `${baseUrl}/assos/first`;
        const {data} = await axios(url);
        return data;
    } catch(error) {
        return {data: []}
    }
}

export const getAssosByCategory = async (cat_id) => {
    try {
        const url = `${baseUrl}/assos/${cat_id}`;
        const {data} = await axios(url);
        return data;
    } catch(error) {
        return {data: []}
    }
}

export const postAsso = async (newAsso) => {
    try {
        const url = `${baseUrl}/assos/`
        const {data} = await axios.post(url, newAsso);
        return data;
    } catch(error) {
        return {data: []}
    }
}

export const deleteAsso = async (name) => {
    try {
        const url = `${baseUrl}/assos/${name}`
        const {data} = await axios.delete(url);
        return data;
    } catch(error) {
        return {data: []}
    }
}