import axios from 'axios'

const api = axios.create({
    baseURL: "https://api-store-stylestop.onrender.com" //"http://15.228.82.63/"
})

export default api;

export const createSession = async (email, password) => {
    return api.post("/login", { email, password })
}
