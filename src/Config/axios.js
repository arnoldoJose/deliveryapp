import axios from 'axios';


const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_NOD_ENV,
});

export default clienteAxios;