import { Button, Form } from 'antd';
import React, { useState } from 'react'
import PhoneNumberInput from 'src/core/shared/input-phone/input-phone.component';
import ModalComp from 'src/core/shared/modal/modal.component';
import SuccessModal from 'src/core/shared/success-modal/success-modal.component';
import Title from 'src/core/shared/title/title.component';

const CallOrederModal = ({ isModalVisible, setIsModalVisible, click, onFinishCallOrder }: any) => {
    const [isSuccesModal, setIsSuccesModal] = useState(false);
    const [form] = Form.useForm();

    const [phoneNumber, setPhoneNumber] = useState('');

    // const onFinishCallOrder = (value:any) => {
    //     console.log('Success:', value);
    //     setPhoneNumber(value);
    //   };

    return (
        <>
          
            <ModalComp
                title={<Title size='small' text="Zəng sifarişi" />}
                isModalVisible={isModalVisible}
                btnTitle='Sifariş et'
                btnColor='dark'
                btnClassName='mt-8 mb-12'
                click={() => form.submit()}
                htmlType='submit'
                handleCloseModal={() => setIsModalVisible(false)}>
                <p className='mt-20'>Təklifiniz və ya iradınız varsa, bu form üzərindən bizə müraicət etməyinizi xahiş edirik.</p>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinishCallOrder}>
                    <Form.Item
                        name="phone">
                        <PhoneNumberInput
                            mask="(___)-___ -__-__"
                            // mask="(999) 999-99-99"
                            // maskChar=" "
                            placeholder="Telefon nömrəniz" />
                    </Form.Item>
                </Form>
            </ModalComp></>
    );
}

export default CallOrederModal