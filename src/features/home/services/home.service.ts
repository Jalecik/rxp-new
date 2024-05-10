import { API } from '../../../core/configs/api.config';
import axiosInstance from '../../../core/configs/axios.config';
import { CheckOtp, ICallOrder } from '../types/home';


export const getHomeDataService = async () => {
   return await axiosInstance.get(API.advantages).then(res => {
      return res.data;
   });
};

export const getHomeAdvantages = () => {
   return axiosInstance.get(API.advantages).then(res => {
      return res.data;
   });
};

export const getSelectedServices = () => {
   return axiosInstance.get(API.services).then(res => {
      return res.data;
   });
};
export const getCategoriesList = () => {
   return axiosInstance.post(API.categories).then(res => {
      return res.data;
   });
};


export const getUsefullLinks = () => {
   return axiosInstance.get(API.usefulLinks).then(res => {
      return res.data;
   });
};

export const getFooterStat = () => {
   return axiosInstance.get(API.statistics).then(res => {
      return res.data;
   });
}

export const getApplyData = () => {
   return axiosInstance.get(API.apllyTopics).then(res => {
      return res.data;
   });
}


export const postOrderCall = (data: ICallOrder) => {
   return axiosInstance.post(API.callOrder, data).then(res => res);
};

export const postCheckOtp = (data: CheckOtp) => {
   return axiosInstance.post(API.checkOrderCallOtp, data).then(res => res);
};

export const postSendApplication = (data: any) => {
   return axiosInstance.post(API.sendApplication, data).then(res => res);
};