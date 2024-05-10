import { Button, Form } from 'antd';
import React, { useState } from 'react'
import PhoneNumberInput from 'src/core/shared/input-phone/input-phone.component';
import ModalComp from 'src/core/shared/modal/modal.component';
import OTPInput from 'src/core/shared/otp/otp.component';
import SuccessModal from 'src/core/shared/success-modal/success-modal.component';
import Title from 'src/core/shared/title/title.component';

const OtpModal = ({ isOtpVisible, setOtpVisible,text,  handleOtpSubmit}: any) => {
   const [otpValue, setOtpValue] = useState('');
    return (
        <>    <ModalComp
                title={<Title size='small' text="Zəng sifarişi" />}
                isModalVisible={isOtpVisible}
                btnTitle='Sifariş et'
                btnColor='dark'
                btnClassName='mt-8 mb-12'
                click={() => handleOtpSubmit(otpValue)}
                htmlType='submit'
                handleCloseModal={() => setOtpVisible(false)}>
                <p className='mt-20'>{text}</p>
                <OTPInput length={6} onComplete={(args) => setOtpValue(args)}/>
            </ModalComp></>
    );
}

export default OtpModal