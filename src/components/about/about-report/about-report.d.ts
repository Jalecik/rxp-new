import { ReactElement } from "react";

export interface IAboutReport{
    title: string;
    list: Array<IListData>;
    listStyle?: string;
}

export interface IListData{
    name: string;
    description: string | null;
    slug: string;
    date: string;
}