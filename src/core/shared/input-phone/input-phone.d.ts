import {ReactElement} from 'react';

export interface IInputType {
    classNames?: string | null;
    placeholder: string;
    type?: string;
    label?:  string | null;
    name?: string;
    value?: string;
    onChange?: (e: any) => void;
}
