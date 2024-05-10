import { ReactElement } from "react";

export interface IAboutDevelop{
    title: string;
    text: string;
    list: Array<IListData>;
}

export interface IListData{
    title: string;
    icon: any;
}