import { Button, Form } from 'antd';
import React, { useState } from 'react'
import { renderInput } from 'src/core/helpers/render-input';
import ModalComp from 'src/core/shared/modal/modal.component';
import Title from 'src/core/shared/title/title.component';

const ApplyModal = ({ isModalVisible, setIsModalVisible, onFinishSendApplication, applyTopics, form }: any) => {
    const InputRender = [
        { id: 1, label: 'Telefon nömrəniz', type: 'phone', name: 'phone' },
        { id: 2, label: 'E-poçt ünvanınız',  type: 'email', name: 'email' },
        {
            id: 3, label: 'Mövzu', type: 'select', name: 'subject', options: applyTopics,
            isMulti: false, isSearchable: false, defaultValue: applyTopics?.[0]?.id
        },
        { id: 4, label: 'İsmarıc', type: 'textArea', name: 'text', rows: 4 },
    ]

    return (
        <><ModalComp
                title={<Title className={'pt-0 pb-0'} size='small' text="Zəng sifarişi" />}
                isModalVisible={isModalVisible}
                btnTitle='Müraciət et'
                btnColor='dark'
                btnClassName='mt-8 mb-12'
                click={() => form.submit()}
                // click={onFinish}
                handleCloseModal={() => setIsModalVisible(false)}>
                <p className='mt-20'>Telefonnn nömrənizi qeyd edin, gün ərzində özümüz Sizinlə əlaqə saxlayaq.</p>

                <Form form={form} onFinish={onFinishSendApplication}>{InputRender.map((input, index) => (
                    renderInput(input.type, input)
                ))}
                </Form>
            </ModalComp></>
    );
}

export default ApplyModal