import { API } from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';


// API.advantages
export const postServices = async (categoryId: number | null) => {
   const res = await axiosInstance.post(`${API.servicesByCategoryId}`, {categoryId});
   return res.data;
 };
 
