import { ReactElement } from 'react';

export interface ISidebarListTypes {
    className?: string | null;
    list: Array<IListItem>;
    queueTitle?: string,
    queueText?: string,
    linkTitle?: string,
    queueLink?: string,
    isQueue?: boolean,
    children?: ReactElement;
}

export interface IListItem {
    link?: string;
    title: string;
}
