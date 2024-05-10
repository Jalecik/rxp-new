import { API } from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';


// API.advantages
export const getReportData = () => {
   return axiosInstance.get(API.report).then(res => {
      return res.data;
   });
};


export const getReportsDetail = (id:string) => {
   return axiosInstance.get(`${API.report}/${id}`).then(res => {
      return res.data;
   });
};



export const getRewardsData = () => {
   return axiosInstance.get(API.rewards).then(res => {
      return res.data;
   });
};
export const getAboutUsData = () => {
   return axiosInstance.get(API.aboutUs).then(res => {
      return res.data;
   });
}

export const getDevelopmentGoals = () => {
   return axiosInstance.get(API.developmentGoals).then(res => {
      return res.data;
   });
}