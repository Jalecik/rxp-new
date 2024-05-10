import { ReactElement } from 'react';

export interface ITabTypes {
    className?: string | null;
    contentTitle?: string;
    content: any;
    tabs: any[],
    isTitle?: boolean;
    children?: ReactElement;
    handleTabchange?: (index: number) => void;
    content?: Array<IListItem>;
}


export interface IListItem {
    link: string;
    title: string;
    content: any;
}
