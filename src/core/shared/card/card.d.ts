import {ReactElement} from 'react';

export interface ICardTypes {
    classNames?: string | null;
    children:ReactElement | ReactElement[],
    color?:'grey',
}
