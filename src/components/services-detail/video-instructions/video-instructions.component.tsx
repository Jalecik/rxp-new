import { ArrowRight, PlaySimpleIcon, YoutubeIcon } from 'assets/images/common';
import React, { useState } from 'react';
import ButtonComponent from 'src/core/shared/button/button.component';

import css from './video-instructions.module.scss';
import ModalComp from 'src/core/shared/modal/modal.component';
import ReactPlayer from 'react-player';


const VideoInstructionComp = ({ detailData }: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <div className={css['video-details']}>
            <ButtonComponent color='blue' classNames='mb-32'>
                <span className='d-flex justify-center'><ArrowRight color='#ffffff' />Müraciət et</span>
            </ButtonComponent>
            <div className={css['video-details_inner']}>
                <div><YoutubeIcon /></div>
                <h6>Video təlimat</h6>
                <div  onClick={() => setIsModalVisible(true)} className='d-flex align-center'><PlaySimpleIcon /> <span>İzlə</span> </div>
            </div>

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
    );
}

export default VideoInstructionComp