import React, { useState } from 'react';
import Slider from "react-slick";

import Title from 'src/core/shared/title/title.component';


import css from './innovations-detail.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image';

import News from 'assets/images/news.png'
import { ArrowLeft, ArrowRight, DownloadIcon, FileIcon } from 'assets/images/common';
import { IFiles, IReportDetails } from 'src/features/about/types/about';


const NextArrow = ({onClick}: any) => {
    return (
        <div className={`${css['slick-next']} ${css['slick-arrow']} next`} onClick={onClick}>
            <span>
                {' '}
                <ArrowRight />
            </span>
        </div>
    );
};

const PrevArrow = ({onClick}: any) => {
    return (
        <div className={`${css['slick-prev']} ${css['slick-arrow']} prev`}
             onClick={onClick}>
            <span>
                <ArrowLeft/>
            </span>
        </div>
    );
};

const InnovationsDetailComp = ({reportsDetail}: any) => {
    const settings = {
        customPaging: function (i: any) {
            return (
                <a>
                    <Image src={News} alt="icon" />
                    {/* <img src={`${baseUrl}/abstract0${i + 1}.jpg`} /> */}
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        arrows: true,  
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const handleImageDownload = (fileName :string, fileUrl: string) => {
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
    return (
        <div className={`${css['innovations-detail']}`}>
            <div className="col-12 p-0">
                <div className='mt-13 mb-40'>
                    <Title text={reportsDetail?.name} size='small' />
                </div>
            </div>
            <div className={`${css['innovations-detail__content']} pl-8 pr-8`}>
                <img src={reportsDetail?.image} alt='innovations image' />
                <div className='date mt-20 mb-16'>{reportsDetail?.date}</div>
                 <p>{reportsDetail?.description}</p>

                <div className={`${css['innovations-detail__slider']} mt-40 mb-40 custom-slider`}>
                    {reportsDetail?.files ?
                        <Slider {...settings}>
                            {reportsDetail?.files?.map((item: any, index: any) => (
                                <div key={index} className="slide-item">
                                    <img src={item.file} alt="icon" />
                                </div>
                            ))}
                        </Slider>
                        : <div />
                    }
                </div>

                <div className={`${css.files} mt-80 mb-40`}>
                    <h4  className='p-16 m-0'>Fayllar</h4>
                    <ul>
                        {reportsDetail?.files.map((item:IFiles, index:number) => (
                            <li key={index} className={`${css['files-item']}`}>
                                <div className={`${css['files-item']} d-flex align-center`}>
                                    <FileIcon/>
                                    <div className={`${css['files-item__text']}`}>
                                        <h5>{item.file?.split('/')[4]}</h5>
                                        <span>{item.fileType}<b>.</b>{item.fileSize}</span>
                                    </div>
                                </div>
                                <div onClick={() => handleImageDownload(item.fileName, item.fileUrl)} className={`${css['files-item']} d-flex align-center`}>
                                    <div><DownloadIcon /></div><div className='d-sm-none'>Endir</div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default InnovationsDetailComp