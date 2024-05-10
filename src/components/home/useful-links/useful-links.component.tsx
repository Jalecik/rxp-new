import React, { useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CardComponent from 'src/core/shared/card/card.component';
import css from './useful-links.module.scss';
import Title from 'src/core/shared/title/title.component';




const UsefulLinks = ({sliderData}: any) => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,
                    arrows: false,
                    centerMode: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    dots: false,
                    arrows: false,
                    centerMode: false
                }
            },

        ]
    };

    return (
        <section className={`${css.links} mb-100`}>
            <div className="container container-custom">
                <div className="row">
                    <Title className={'mb-20'} size='small' text="Faydalı keçidlər" />
                    <div className="col-md-12 pl-0 pr-0 slider-container">
                        {sliderData ?
                            <Slider {...settings}>
                                {sliderData?.map((usefulLinks: any, index: any) => (
                                    <CardComponent key={index} classes={`${css['links-card']}`}>
                                        <div className={`${css['links-card_inner']} d-flex`}>
                                            <img src={usefulLinks.logo} alt='' />
                                            {/* <div>{usefulLinks.img}</div> */}
                                            {/* {sliderData.length - 1 == index && <div className='ml-12'>{<ElektronTicketText />}</div>} */}
                                        </div>
                                    </CardComponent>
                                ))}
                            </Slider>
                            : <div />
                        }
                    </div>
                </div>
            </div>
        </section >
    );
}

export default UsefulLinks