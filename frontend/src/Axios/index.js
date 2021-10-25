import axios from "axios";

export const getToken = () => {
  const token = localStorage.getItem('token');
  console.log(token);
  return token;
}

const baseURL = "https://fix-my-city.propulsion-learn.ch/backend/api/";

const Axios = axios.create({
  baseURL: baseURL,
});

Axios.defaults.baseURL = baseURL;
Axios.defaults.headers.post["Content-Type"] = "application/json";
Axios.defaults.headers.patch["Content-Type"] = "application/json";

// pages will only render when the header is included inside the async function in the 'fetches' folder..will try to look this up later
Axios.defaults.headers.common["Authorization"] = `Bearer ${getToken()}`;

export default Axios;
