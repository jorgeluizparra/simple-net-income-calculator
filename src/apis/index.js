import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
});

export const handleRequest = async (callback) => {
    try {
        const { data } = await callback()
        return data;
    } catch (error) {
        if (process.env.NODE_ENV !== "production") {
            console.log("request error", error);
        }
    }
}

