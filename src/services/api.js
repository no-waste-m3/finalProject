import axios from "axios";


export const api = axios.create({
  baseURL: "https://no-waste-project.herokuapp.com",
  timeout: 15000,
});
