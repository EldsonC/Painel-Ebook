import axios from "axios";

export const api = axios.create({
    baseURL: "https://main--candid-gecko-b85afc.netlify.app/.netlify/functions/server"
})