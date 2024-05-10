import { getApplyData, getFooterStat } from '../services/home.service';
import { useQuery } from 'react-query';
import { ISateTopics, IStatFooter } from '../types/home';


export const useGetFooterStat = () => {
  return useQuery<IStatFooter, Error>(['footerStatistics'], () => {
      return getFooterStat();
  });
};


export const useGetApplyTopic = () => {
  return useQuery<Array<ISateTopics>, Error>(['applyTopics'], () => {
      return getApplyData();
  });
};