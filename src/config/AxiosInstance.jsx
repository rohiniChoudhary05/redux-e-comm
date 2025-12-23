import axios from "axios";
 import {  toast } from 'react-toastify';
export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});



axiosInstance.interceptors.response.use(
  (response) =>{
    toast.success(" Response is Success")
    return response
  },
  (error) =>{
    if(error.response.status === 404){
      toast.error("Request is not founded")
    } else{
      toast.error("kuch to hai bhai")
    }
  }
)