import { useMutation } from "react-query";
import { getFastStartFurther, getFastStartLastItem } from "../services/fast-start.service";

  
  export const usePostFastStartFurther = () => {
    return useMutation({
        mutationFn: (data: string | null) => {
            return getFastStartFurther(data);
        },
    });
};


  
export const usePostFastStartLastItem = () => {
    return useMutation({
        mutationFn: (data: number) => {
            return getFastStartLastItem(data);
        },
    });
};