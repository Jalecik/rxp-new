import React, { useState } from 'react';

import Title from 'src/core/shared/title/title.component';

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

import css from './services-detail.module.scss';

import { NotificationIcon, PlayIcon } from 'assets/images/common';
import ModalComp from 'src/core/shared/modal/modal.component';
import dynamic from 'next/dynamic';
import { IServiceDetail } from 'src/features/common/types/common';

const ServicesDetailComp = ({ detailData }: { detailData: IServiceDetail }) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    
    return (
        <div className={`${css.details} details`}>
            <div className="col-12 p-0">
                <div className='mt-13'>
                    <Title text={detailData?.name} size='large' />
                </div>
            </div>
            <div className={`${css['details-content']} pl-0 pr-0`}>
                {/*
                <p>Bu xidmət vəhşi heyvanların ovuna icazələrin verilməsini əhatə edir.</p> */}
                <h3>Ümumi məlumat</h3>
                {detailData?.comeback  ? <blockquote className='ml-0'>
                    <div className='d-flex align-center'>
                        <NotificationIcon /> <p className='ml-8'> Müraciətə {detailData?.comeback} gün ərzində geridönüş edilir.</p>
                    </div>
                </blockquote> : ''}
                <p dangerouslySetInnerHTML={{ __html: detailData?.description }}>
                </p>

                {/* <h3>Xidmətə kimlər müraciət edə bilər?</h3>
                <p>Xidmət yalnız fiziki şəxslər tərəfindən istifadə oluna bilər.</p>

                <h3>Ödənişli xidmət</h3>
                <p>2.2.1. Azərbaycan Respublikası Nazirlər Kabinetinin 2004-cü il 6 noyabr tarixli 176 nömrəli Qərarı ilə təsdiq edilmiş “Heyvanlar aləmindən istifadəyə görə ödəəmələrin növləri, dərəcələri, tətbiq edilmə qaydaları və
                    qeyri-qanuni heyvan ovuna cərimələr”in 2.1-ci bəndinə əsasən heyvanlar
                    aləmindən istifadəyə görə ödəmələrin növləri və dərəcələri üzrə ovuna icazə
                    verilən vəhşi heyvan növlərindən dovşana 2 manat 20 qəpik, çaqqala 3 manat 96 qəpik,
                    yenota və qunduza 1 manat 65 qəpik, təkəyə 24 manat 75 qəpik, çöl donuzuna (qabana)
                    16 manat 50 qəpik məbləğində ödəmə nəzərdə tutulmuşdur.</p>

                <h3>Xidmət haqqı</h3>
                <p>13.50 AZN</p>

                <h3>Hansı sənədlər lazımdır</h3>
                <ul>
                    <li>Ov silahlarının istifadəsinə dair icazə sənədi</li>
                    <li>Ovçuluq və üzvlük bileti</li>
                    <li>Xidmət haqqının ödənilməsi barədə sənəd</li>
                </ul>

               */}
                <h3>Video-təlimat</h3>
                <div className={`${css['video-player_cover']}`}>
                    {/* <Image src={detailData?.videoData?.cover} alt="detail" /> */}
                    <img src={detailData?.videoData?.cover} alt="detail" />
                    <div onClick={() => setIsModalVisible(true)} className={css['player-btn']}>{<PlayIcon />}</div>
                </div>
                <div className='col-8'>
                    <ModalComp
                        isModalVisible={isModalVisible}
                        className={`${css['video-player__modal']} video-player__modal`}
                        isFooterBtn={false}
                        width={792}
                        handleCloseModal={() => setIsModalVisible(false)}>
                        <div className={`${css['video-player']} video-player`}>
                            <ReactPlayer url={detailData?.videoData?.url} controls={true} width="100%" height="100%" />
                        </div>
                    </ModalComp>
                </div>
                {/* <div className={`${css['video-player']}`}>
                    <VodeoPlayer
                        img={Detail}
                        playIcon={<div className={css['player-btn']}>{<PlayIcon />}</div>}
                        url='https://youtu.be/wLsjUt-MsRk' />
                    <div className={css['video-player_overlay']}></div>
                </div> */}
            </div>
        </div>
    );
}

export default ServicesDetailComp