import {ReactElement} from 'react';

export interface IFooterStat {
    classNames?: string | null;
    // statisticsData: Array<IFooterStatList>;
    listElemStyle?: string | null;
    isFooter?: boolean;
}


export interface IFooterStatList {
   title: string;
   value: string;
}