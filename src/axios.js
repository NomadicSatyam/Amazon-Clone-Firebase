import axios from "axios";

//The API (Cloud Function) URL
const instance = axios.create({baseURL:'http://127.0.0.1:5001/fir-1a20f/us-central1/api'});

export default instance;