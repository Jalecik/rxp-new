import {ReactElement} from 'react';

export interface IButtonTypes {
    classNames?: string | null;
    children: ReactElement | any;
    type?: string | null;
    click?: any;
    color?: 'primary' | 'transparent' | 'gray' | 'dark' | 'blue' | undefined;
    htmlType?: 'button' | 'submit' | 'reset' | undefined;
    width?: number | string | null;
    height?: number | null;
}
