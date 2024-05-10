import {useMutation, useQueryClient} from 'react-query';
import { CheckOtp, ICallOrder, ISendApplication } from '../types/home';
import { postCheckOtp, postOrderCall, postSendApplication } from '../services/home.service';



export const useOrderCall = () => {
    return useMutation({
        mutationFn: (data: ICallOrder) => {
            return postOrderCall(data);
        },
    });
};

export const useCheckOtp = () => {
    return useMutation({
        mutationFn: (data: CheckOtp) => {
            return postCheckOtp(data);
        },
    });
};

export const usePostSendApplication = () => {
    return useMutation({
        mutationFn: (data: ISendApplication) => {
            return postSendApplication(data);
        },
    });
};