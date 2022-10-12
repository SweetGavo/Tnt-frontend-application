import axios from "axios";
export const axiosInstance  = axios.create(
        {
            baseURL: 'https://api.tandtdeals.ng/v1/',
            timeout: 1000,
        }
);

export function get(url,options){
 return axiosInstance.get(url, options);
}

export function post(url,data,options){
return axiosInstance.post(url,data, options);
}