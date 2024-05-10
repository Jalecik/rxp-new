import { ReactElement } from 'react';

export interface IResultListTypes {
    className?: string | null;
    list: Array<IListItem> | Array<any>;
    click?:  any;
}

export interface IListItem {
    id: string;
    link: string;
    title: string;
    icon: ReactElement | null;
    badge?: string | null;
    badgeStatus?: string | null;
    badgeTitle?: any;
}
