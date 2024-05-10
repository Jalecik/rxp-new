import { useQuery } from "react-query";
import { getInitialFastStart } from "../services/fast-start.service";

export const useGetInitialFastStart = () => {
    return useQuery<any, Error>(['fastStartData'], () => {
        console.log('getInitialFastStart');
        return getInitialFastStart();
    });
  };


  
  