import React, { useState } from 'react';
import { Form } from 'antd';

import ButtonComponent from 'src/core/shared/button/button.component';
import css from './navbar.module.scss';

import { AccessAbilityIcon, AsanIcon, FileIcon } from 'assets/images/header';
import { LogoRXP } from 'assets/images/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ModalComp from 'src/core/shared/modal/modal.component';
import Title from 'src/core/shared/title/title.component';
import { renderInput } from 'src/core/helpers/render-input';
import { CloseIcon, HamburgerIcon, QrIcon } from 'assets/images/common';
import QRScanner from 'src/core/shared/qr-scanner/qr-scanner.component';
// import Form from 'antd/es/form/Form';

const Navbar = () => {
    const [isLoginModal, setIsLoginModal] = useState(false);
    const [isBtnsModal, setIsBtnsModal] = useState(false);
    const [isCheckDocModal, setIsCheckDocModal] = useState(false);
    const [isQrCodeModal, setIsQrCodeModal] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const router = useRouter();

    const toggleMenu = () => {
        setIsBtnsModal(!isBtnsModal);
    };

    const InputRenderLogin = [
        { id: 1, placeholder: 'Asan İmza', type: 'text', name: 'phone' },
        { id: 2, placeholder: 'Şifrə', type: 'text', name: 'name' },
    ]

    const InputRenderCheckDoc = [
        { id: 1, label: 'Sənədin növü', type: 'select', name: 'phone' },
        { id: 1, label: 'Sənədin seriya və nömrəsi (bitişik)', type: 'text', name: 'name' },
    ]



    return (
        <div className={`${css.navbar}`}>
            <div className="row p-0">
                <ModalComp
                    title={<Title className={'pt-20 pb-20'} size='small' text="Daxil ol" />}
                    isModalVisible={isLoginModal}
                    className={`${css['login-modal']}`}
                    btnTitle='Müraciət et'
                    btnColor='dark'
                    btnClassName='mt-8 mb-10'
                    click={() => setIsLoginModal(true)}
                    handleCloseModal={() => setIsLoginModal(false)}>
                    <Form
                        name='search'
                        className='mt-57'
                        onFinish={(values: any) => console.log(values, 'search')}
                        layout='vertical'>
                        {InputRenderLogin.map((input, index) => (
                            <div key={index} className='mt-32'>{renderInput(input.type, input)}</div>
                        ))}
                    </Form>
                </ModalComp>

                <ModalComp
                    title={<Title className={'pt-20 pb-20'} size='small' text="Sənədi yoxla" />}
                    isModalVisible={isCheckDocModal}
                    className={`${css['login-modal']} ${css['check-modal']}`}
                    btnTitle='Axtar'
                    btnColor='dark'
                    btnClassName='mt-8 mb-10'
                    click={() => setIsLoginModal(true)}
                    handleCloseModal={() => setIsCheckDocModal(false)}>
                    <Form
                        name='search'
                        className='mt-57'
                        onFinish={(values: any) => console.log(values, 'search')}
                        layout='vertical'>
                        {InputRenderCheckDoc.map((input, index) => (
                            <div key={index} className='mt-32'>{renderInput(input.type, input)}</div>
                        ))}
                        <div  
                           onClick={() =>  setIsQrCodeModal(!isQrCodeModal)} 
                           className={css['check-modal__info']}><QrIcon/>
                           <span>QR kodu oxu</span></div>
                    </Form>
                </ModalComp>

                <ModalComp
                    title={<Title className={'pt-20 pb-20'} size='small' text="QR skaner" />}
                    isModalVisible={isQrCodeModal}
                    className={`${css['login-modal']} ${css['check-modal']}`}
                    btnTitle='Axtar'
                    btnColor='dark'
                    btnClassName='mt-8 mb-10'
                    isFooterBtn={false}
                    click={() => setIsLoginModal(true)}
                    handleCloseModal={() => setIsQrCodeModal(false)}>
                    <QRScanner />
                    <ButtonComponent classNames={css['check-modal__btn']}>
                        Dayandır
                    </ButtonComponent>
                </ModalComp>

                <div className={`${css.navbar_card} d-sm-none`}>
                    <div className={`container container-custom`}>
                        <div className={`row ${css['navbar-inner']}`}>
                            <div className='col-sm-8 col-md-4 col-lg-8 p-0' style={{ margin: 'auto' }}>
                                <Link href={{ pathname: '/', query: { ...router.query } }}>
                                    <LogoRXP />
                                </Link>
                            </div>
                            <div className='col-sm-4 col-md-8 col-lg-4 p-0'>
                                <div className={`${css['login-btns']} justify-end d-flex`}>
                                    <ButtonComponent click={() => setIsCheckDocModal(!isCheckDocModal)} classNames={'d-flex justify-center'} color='transparent'>
                                        <FileIcon /> <span className='ml-3'>Sənəd yoxla </span>
                                    </ButtonComponent>
                                    <ButtonComponent click={() => setIsLoginModal(!isLoginModal)} classNames={'d-flex justify-center ml-10'} color='primary'>
                                        <AsanIcon /> <span className='ml-3'>Daxil ol </span>
                                    </ButtonComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 p-0 d-md-none">
                    <div className={`${css['navbar-mobile']}`}>
                        <div className={css['navbar-mobile_header']}>
                            <LogoRXP />
                            <div onClick={toggleMenu} className={css['navbar-mobile_hamburger']}>
                                {isBtnsModal ? <CloseIcon /> : <HamburgerIcon />}
                            </div>
                        </div>
                        <div className={`${css['navbar-mobile_btns']} ${isBtnsModal ? css.visible : ''}`}>
                            <ButtonComponent click={() => setIsCheckDocModal(!isCheckDocModal)} classNames={'d-flex justify-center'} color='transparent'>
                                <FileIcon /> <span className='ml-3'>Sənəd yoxla</span>
                            </ButtonComponent>
                            <ButtonComponent click={() => setIsLoginModal(!isLoginModal)} classNames={'d-flex justify-center'} color='primary'>
                                <AsanIcon /> <span className='ml-3'>Daxil ol </span>
                            </ButtonComponent>
                        </div>
                    </div>
                </div>
                {/* </div>
                </div> */}
                <div
                    className='m-20  d-sm-none'
                    style={{ position: 'absolute', right: 0 }}>
                    <AccessAbilityIcon />
                </div>
            </div>
        </div>

    );
};


export default Navbar;
