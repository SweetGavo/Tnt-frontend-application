import axios from "axios";
export const axiosInstance  = axios.create(
        {
            baseURL: '',
            timeout: 1000,
        }
);

export function get(url,options){
 return axiosInstance.get(url, options);
}

export function post(url,data,options){
return axiosInstance.post(url,data, options);
}