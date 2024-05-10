import {ReactElement} from 'react';
import { IButtonTypes } from '../button/button';

export interface IModal {
    isModalVisible?: boolean,
    className?: string,
    children: ReactElement | string | any,
    handleCloseModal: () => void,
    handleOk?: () => void,
    title?: ReactElement |  string,
    btnTitle?: string,
    click?: () => void,
    btnColor?: any,
    btnClassName?: string,
    htmlType?: 'button' | 'submit' | 'reset' | undefined,
    isFooterBtn?: boolean,
    width?
}
