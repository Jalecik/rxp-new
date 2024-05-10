import React, { useState } from 'react'
import ModalComp from 'src/core/shared/modal/modal.component';
import Title from 'src/core/shared/title/title.component';
import { ISuccesModal } from './success-modal';
import { SuccesIcon } from 'assets/images/common';
import css from './success-modal.module.scss';

const SuccessModal = ({isModalVisible, handleCloseModal, title, message }: ISuccesModal) => {
    return (
        <ModalComp
            title={<div className='d-flex align-center mt-64' style={{flexDirection: 'column'}}><SuccesIcon className='mt-64' /><Title  className='mt-16' size='small' text={title} /></div>}
            isModalVisible={isModalVisible}
            btnColor='transparent'
            btnTitle='Bağla'
            btnClassName={css['success-modal__btn']}
            click={handleCloseModal}
            handleCloseModal={handleCloseModal}>
            <p className='text-center'>{message}</p>
        </ModalComp>
    );
}

export default SuccessModal