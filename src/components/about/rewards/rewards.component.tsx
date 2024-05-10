import React, { useState } from 'react'

import css from './rewards.module.scss'

import Title from 'src/core/shared/title/title.component';
import { IReward } from './rewards';
import { LinkIcon } from 'assets/images/common';
import Link from 'next/link';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const RewardsComp = ({ title, list }: IReward) => {
    var settings = {
        dots: false,
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
        <section className={`${css.reward} p-0`}>
            <div className="container container-custom">
                <div className="row">
                    <Title text={title} size='large' />

                    <ul className={`${css['reward-list']} mt-20 col-md-12 pl-0 pr-0 slider-container`}>
                        {list ?
                            <Slider {...settings}>
                                {list?.map((item: any, index: any) => (
                                    <Link href={item?.link} key={item.id}>
                                        <li key={index}>
                                            <div className={css['reward-list__img']}>
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <h4>{item.name}</h4>
                                            <span className='details'>Ətraflı<LinkIcon color='#0085FF' /></span>
                                        </li>
                                    </Link>
                                ))}
                            </Slider>
                            : <div />
                        }
                    </ul>
                    {/* <ul className={`${css['reward-list']} mt-20`}>
                        {list.map((item, index) => (
                            <Link href={item.link}><li key={index}>
                                <div className={css['reward-list__img']}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <h4>{item.name}</h4>
                                <span className='details'>Ətraflı<LinkIcon color='#0085FF' /></span>
                            </li></Link>
                        ))}
                    </ul> */}
                </div>
            </div>
        </section>
    );
}

export default RewardsComp