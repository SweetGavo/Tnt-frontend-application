import axios from "axios";
export const axiosInstance  = axios.create();

export function get(url,options){ 
 return axiosInstance.get(url, options);
}

export function post(url,data,options){
return axiosInstance.post(url,data, options);
}
export const toCurrency =  (value)=> {

 return 'NGN '+Number(value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}