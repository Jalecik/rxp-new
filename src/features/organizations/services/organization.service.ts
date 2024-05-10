import { API } from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';


// API.advantages
export const getAllOrganizations = async () => {
  const res = await axiosInstance.get(API.institutions);
  return res.data;
};

export const getOrganizationsDetail = async (id: string) => {
  const res = await axiosInstance.get(`${API.institutions}/${id}`);
  return res.data;
};


export const getOrganizationServicesList = async (id: string) => {
  const res = await axiosInstance.get(`${API.orgServices}/${id}`);
  return res.data;
};

export const getOtherOrganizationsList = async () => {
  const res = await axiosInstance.get(`${API.otherInstitutions}`);
  return res.data;
};

