import {ReactElement} from 'react';

export interface ISuccesModal {
    isModalVisible?: boolean,
    className?: string,
    handleCloseModal: () => void,
    handleOk?: () => void,
    title?:  string,
    message?: string | null,
    btnTitle?: string,
    btnClassName?: string,
    click?: () => void
}
