import {ReactElement} from 'react';

export interface ITextAreaType {
    classNames?: string | null;
    placeholder: string;
    type?: string;
    label?:  string | null;
    name?: string;
    maxLength?: number | undefined;
    rows?: number | undefined;
}
