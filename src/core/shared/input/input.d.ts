import {ReactElement} from 'react';

export interface IInputType {
    classNames?: string | null;
    placeholder: string;
    type?: string;
    label?:  string | null;
    name?: string;
    rest?: any;
    form?: any;
}
