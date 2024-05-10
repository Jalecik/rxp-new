import React, { useState } from 'react'
import Title from 'src/core/shared/title/title.component';
import CommonCard from 'src/core/shared/common-cards/common-cards.component';
import { IAboutReport } from './about-report';
import { ArrowRight } from 'assets/images/common';
import Link from 'next/link';
import moment from 'moment';

import css from './about-report.module.scss';


const AboutReportComp = ({ title, list, listStyle }: IAboutReport) => {
    return (
        <section className={`${css['about-report']} mt-32 p-0`}>
            <div className="container container-custom">
                <div className="row">
                    <Title text={title} size='large' />
                    <ul className={`${css['about-report__list']} row mt-20`}>
                        {list.map((item, index) => (
                            <li key={index} className={`${listStyle} col-md-4 mb-25`}>
                                <CommonCard
                                    title={moment(item.date, 'hh:mm DD.MM.YYYY').year() + ' ' +  item?.name}>
                                    <p className={`${css['list-item__text']} text-ellipsis`}>{item.description}</p>
                                    <Link href={`reports/${item.slug}`} className='d-flex' style={{padding: '8px 8px 8px 0px'}}>
                                       <ArrowRight />
                                       <span>Daha çox</span>
                                    </Link>
                                </CommonCard>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutReportComp