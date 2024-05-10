import { API } from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';




export const getServicesById = async (id:number) => {
  const res = await axiosInstance.get(`${API.orgServices}/${id}`);
  return res.data;
};


export const getServicesDetail = async (id: string, subId: string) => {
  const res = await axiosInstance.get(`${API.orgServices}/${id}/${subId}`);
  return res.data;
};

export const getCategories = async () => {
  const res = await axiosInstance.get(`${API.categories}`);
  return res.data;
};



