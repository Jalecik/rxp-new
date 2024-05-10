import {ReactElement} from 'react';

export interface IInputType {
    className?: string | null;
    placeholder: string;
    onSearch?: ChangeEventHandler<HTMLInputElement> | undefined;
    name?: string;
}
