export interface IDetailsInterface {
    resultList: IArrayList[];
    title: string;
    allData: string;
    className?: string;
    isImg?: boolean;
    url: string;
}

export interface IArrayList {
    title: string;
    icon?: any;
    detail?: string;
}