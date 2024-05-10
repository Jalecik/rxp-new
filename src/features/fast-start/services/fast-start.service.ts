import { API } from "src/core/configs/api.config";
import axiosInstance from "src/core/configs/axios.config";

export const getInitialFastStart = () => {
    return axiosInstance.get(API.fastStart).then(res => {
       return res.data;
    });
 };

 export const getFastStartFurther = (slug:any) => {
    return axiosInstance.get(`${API.fastStart}/${slug}`).then(res => {
       return res.data;
    });
 };

 export const getFastStartLastItem = (id:number) => {
   return axiosInstance.get(`${API.servicesByFastStartId}/${id}`).then(res => {
      return res.data;
   });
};

 
 