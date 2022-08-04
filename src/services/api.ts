import axios from "axios";

const baseURL = "https://api.escuelajs.co/api/v1";

const Api = axios.create({
  baseURL,
});

export { Api };
