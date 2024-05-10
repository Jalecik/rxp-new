import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { environment } from './app.config';
import { store } from 'store/store.config';
// import {setAppealId, setLoader, setSuccessMessageForRequest} from 'store/store.reducer';
import { errorToast, successToast } from '../shared/toast/toast';
import { getBaseUrl, getToken } from '../helpers/get-token';
import { setLoader } from '../../features/loader/loaderSlice';
import { toast } from 'react-toastify';

export const getAuthorizationHeader = () => getToken() ? `Bearer ${getToken()}` : null;

const baseURL = environment.apiMain;

const axiosInstance = axios.create({
    baseURL: 'http://rxp.etsn.az/api/',
})
    ;

axiosInstance.interceptors.request.use(
    (config: any) => {
        store.dispatch(setLoader(true));
        return {
            ...config,
            headers: {
                ...config.headers,
                Authorization: getAuthorizationHeader(),
            }
        };
    }, (error) => {
        store.dispatch(setLoader(true));
        return Promise.reject(error);
    });

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        const method = response?.config?.method?.toUpperCase() ?? '';
        const url = response?.config?.url ?? '';
        if (method === 'POST' || method === 'PUT') {
            // if (store.getState().successMessageForRequest?.trim()) successToast(store.getState().successMessageForRequest);
            // store.dispatch(setSuccessMessageForRequest('Müraciət göndərildi'));
        }

        if (method === 'DELETE') {
            successToast('Uğurla silindi');
        }

        if (response.status === 204 || response.status === 200) {
            // store.dispatch(setLoader(false));
        }

        if (response.data) {
            // store.dispatch(setLoader(false));
        }
        return response;
    },
    (error) => {
        let errMessage = error.message;
        // const {
        //     response: {status, code, respoonse, title, data},
        // } = error;
        switch (error.response.status) {
            case 401:
                errMessage = error.response.data.message;
                localStorage.removeItem(`${environment.applicationName}-token`);
                break;

            case 404:
                errMessage = error.response.data.message;
                toast.error(errMessage)
                break;
            case 403:
                errMessage = error.response.data.message;
                break;
            case 422:
                errMessage = error.response.data.error;
                break;
            case 500:
                errMessage = error.response.data.message;
                break;

            default:
                errMessage = error.response.data.message;
        }

        errorToast(errMessage);
        store.dispatch(setLoader(false));

        return Promise.reject(error);


    }
);
export default axiosInstance;
