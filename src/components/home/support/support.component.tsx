import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import css from './support.module.scss';
import Title from 'src/core/shared/title/title.component';
import CardComponent from 'src/core/shared/card/card.component';
import Image from 'next/image';
import Link from 'next/link';
import { BookIcon, PhoneIcon, RedirectIcon } from 'assets/images/support/icons';
import support from 'assets/images/support/Support.svg';
import CallOrederModal from './call-order/call-order.component';
import ApplyModal from './apply/apply.component';
import { useGetApplyTopic } from 'src/features/home/actions/home.queries';
import { Form } from 'antd';
import { useCheckOtp, useOrderCall, usePostSendApplication } from 'src/features/home/actions/home.mutations';
import OtpModal from './otp/otp.component';
import SuccessModal from 'src/core/shared/success-modal/success-modal.component';

const linksData = [
    { id: 1, icon: <BookIcon />, title: 'Dəstək mərkəzinə keç', link: '/support', isModal: false },
    { id: 2, icon: <PhoneIcon />, title: 'Zəng sifariş et', link: '/', isModal: true, modalComp: 'callOrder' },
    { id: 3, icon: <RedirectIcon />, title: 'Müraciət göndər', link: '/', isModal: true, modalComp: 'application' },
]


const SupportComponent = () => {
    const [text, setText] = useState('');
    const [isCallModalVisible, setIsCallModalVisible] = useState(false);
    const [isApplyModalVisible, setIsApplyModalVisible] = useState(false);
    const [isOtpVisible, setOtpVisible] = useState(false);
    const [isSuccesModal, setIsSuccesModal] = useState(false);
    const [optionsTopic, setOptionsTopic] = useState([])
    const [modalComp, setModalComp] = useState('callOrder');
    const { data: applyTopics, isLoading, error } = useGetApplyTopic();
    const { mutate: mutatePostCallOrder, data: dataPostCallOrder, isSuccess: isSuccessPostCallOrder } = useOrderCall();
    const { mutate: mutatePostSendApplication,data: dataPostSendApplication, isSuccess: isSuccessPostSendApplication } = usePostSendApplication();
    const { mutate: mutatePostCheckOtp, isSuccess: otpIsChecked } = useCheckOtp();

    const [form] = Form.useForm();

    useEffect(() => {
        if (applyTopics) {
            //@ts-ignore
            setOptionsTopic(applyTopics?.map((item: any) => ({ value: item.id, label: item.name })));
        }
    }, [applyTopics]);

    const handleModalClick = (modalComp: any) => {
        setModalComp(modalComp);
        if (modalComp === 'callOrder') {
            setIsCallModalVisible(true);
        } else {
            setIsApplyModalVisible(true);
        }
    }


    const onFinishCallOrder = (value: any) => {
        mutatePostCallOrder(value);
    };

    const onFinishSendApplication = (value: any) => {
        mutatePostSendApplication(value);
    }

    const handleOtpSubmit = (args: string) => {
        mutatePostCheckOtp({ otp: args, id: '1' });
    }

    const handleCloseSuccessModal = () => {
        setIsSuccesModal(false)
        setIsCallModalVisible(false);
    }

    useEffect(() => {
        if (otpIsChecked) {
            setIsSuccesModal(true);
            setIsApplyModalVisible(false);
            setIsCallModalVisible(false);
        }
    }, [otpIsChecked]);

    useEffect(() => {
        if (isSuccessPostCallOrder) {
            setIsCallModalVisible(false);
            setOtpVisible(true);
            setText(dataPostCallOrder?.data?.message);
        }
    }, [isSuccessPostCallOrder]);

    useEffect(() => {
        if (isSuccessPostSendApplication) {
            setOtpVisible(true);
            setText(dataPostSendApplication?.data.message);
        }
    }, [isSuccessPostSendApplication]);

    return (
        <>
            {modalComp == 'callOrder' ? <CallOrederModal
                isModalVisible={isCallModalVisible}
                setIsModalVisible={setIsCallModalVisible}
                click={() => console.log('click')}
                onFinishCallOrder={onFinishCallOrder}
            />
                : <ApplyModal
                    isModalVisible={isApplyModalVisible}
                    setIsModalVisible={setIsApplyModalVisible}
                    onFinishSendApplication={onFinishSendApplication}
                    applyTopics={optionsTopic}
                    form={form}
                    click={() => console.log('click')}
                />}
            <OtpModal
                isOtpVisible={isOtpVisible}
                // isOtpVisible={true}
                text={text}
                setOtpVisible={setOtpVisible}
                handleOtpSubmit={handleOtpSubmit} />
            <SuccessModal isModalVisible={isSuccesModal}
                handleCloseModal={handleCloseSuccessModal}
                title='Sifarişinizi aldıq!'
                btnClassName='mt-8 mb-12'
                message='Tezliklə geri dönüş edəcəyik.' />
            {/* <SuccessModal isModalVisible={isSuccesModal}
                handleCloseModal={() => setIsSuccesModal(false)}
                title='Müraciət göndərildi!'
                btnClassName='mt-8 mb-12'
                message='Təklif, irad və müraciətlərinizə görə təşəkkür edirik!' /> */}
            <section className={`${css.support}`}>
                <div className="container container-custom p-0">
                    <div className="row">

                        <CardComponent classes={`${css['support-card']} d-flex`}>
                            <div className={`${css['support-card_inner']} col-sm-12 col-md-6`}>
                                <Title size='large' text="Sizə necə kömək edə bilərik?" />

                                <p>Sorğularınızı cavablamağa, xidmətlərimiz haqqında
                                    ətraflı məlumat təqdim etməyə və yarana biləcək problemlərdə sizə dəstək
                                    olmağa hazırıq.</p>

                                <div className={`${css['support-links']}`}>
                                    {linksData.map((item) => (
                                        !item.isModal ? <Link key={item.id} className='mt-30' href={item.link}>
                                            {item.icon}
                                            <div className='ml-10'>{item.title}</div>
                                        </Link>
                                            : <div key={item.id} className='mt-30' onClick={() => handleModalClick(item.modalComp)} style={{ cursor: 'pointer' }}>
                                                {item.icon}
                                                <div className='ml-10'>{item.title}</div>
                                            </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`${css['support-right']} col-6 d-sm-none`}>
                                <Image src={support} alt='Thumbnail' />
                            </div>
                        </CardComponent>
                    </div>
                </div>
            </section></>
    );
}

export default SupportComponent