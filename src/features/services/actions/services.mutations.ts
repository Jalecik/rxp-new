import { useMutation } from "react-query";
import { postServices } from "../services/services.service";

export const usePostServices = () => {
    return useMutation({
        mutationFn: (data: number | null) => {
            return postServices(data);
        },
    });
};