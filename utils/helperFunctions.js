import axios from "axios";
export const axiosInstance  = axios.create();

export function get(url,options){
 return axiosInstance.get(url, options);
}

export function post(url,data,options){
return axiosInstance.post(url,data, options);
}