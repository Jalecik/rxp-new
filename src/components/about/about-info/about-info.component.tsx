import React, { useState } from 'react'

import css from './about-info.module.scss'

import Title from 'src/core/shared/title/title.component';

const AboutCommonInfoComp = ({text, image}: {text: string, image: string }) => {
    return (
        <section className={`${css['about-info']}`}>
            <div className="container container-custom">
                <div className="row flex-row">
                    <div className="col-12 p-0 mbt-16">
                        <Title text='Haqqımızda' size='large' />
                    </div>
                    <div className='d-reverse mt-32'>
                    <div className={`${css['about-info__content']} col-sm-12 col-md-7 p-0`}>
                        <p>{text}</p>
                    </div>
                    <div className="col-sm-12 col-md-5 p-0 ml-32">
                        <div className={`${css['about-info__img']}`}>
                            <img src={image} alt="about_image" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutCommonInfoComp