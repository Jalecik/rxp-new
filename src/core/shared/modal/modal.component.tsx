import React from 'react'
import { IModal } from './modal.d';
import { Modal } from 'antd';
import { CloseIcon } from 'assets/images/common';

import ButtonComponent from '../button/button.component';

const ModalComp = ({ isModalVisible,click, title, children,width, className,btnTitle, isFooterBtn=true, btnColor,btnClassName='',  handleOk, handleCloseModal }: IModal) => {
    return (
        <>
            {isModalVisible
                ?
                    <Modal
                        className={`modal ${className}`}
                        title={title}
                        open={isModalVisible}
                        onOk={handleOk}
                        width={width}
                        // key={}
                        closeIcon={<CloseIcon />}
                        onCancel={handleCloseModal}
                        footer={isFooterBtn && [
                            <ButtonComponent key={1} classNames={btnClassName} click={click} color={btnColor}>
                               {btnTitle ? btnTitle : ''}
                            </ButtonComponent>
                        ]}>
                        {children}
                    </Modal>
                : <div />
            }
        </>
    )
}
export default ModalComp;
