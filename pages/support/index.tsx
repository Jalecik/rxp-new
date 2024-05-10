import { NextPage } from 'next';
import React from 'react';
import css from './support.module.scss';
import Title from 'src/core/shared/title/title.component';
import CommonCard from 'src/core/shared/common-cards/common-cards.component';
import { PlaySupportIcon, QuestionIcon } from 'assets/images/support/extra';
import { ArrowRight } from 'assets/images/common';
import Link from 'next/link';

const supportArr = [
    { id: 1, title: 'Təlimat', icon: <PlaySupportIcon />, link: '/support/1' },
    { id: 2, title: 'Mütəmadi Verilən Suallar', icon: <QuestionIcon />, link: '/support/2' },
    { id: 3, title: 'Qanunlar', icon: <PlaySupportIcon />, link: '/support/3' },
]

const Support: NextPage = () => {
    return (
        <section className='pt-32 pb-150'>
            <div className="container container-custom">
                <div className='row'>
                    <div className="col-12 p-0">
                        <Title text='Dəstək mərkəzi' size='large' />
                    </div>
                    <div className={`${css['support']} col-12 mt-32`}>
                        <ul className={`${css['support-list']} custom-list`}>{supportArr.map((item, index) => (
                            <li key={index} className="col-md-4 mb-25">
                                <Link href={item.link}><CommonCard
                                    title={item.title}
                                    icon={item.icon}>
                                    <div className='d-flex align-center pt-8 pb-8'>
                                        <ArrowRight />
                                        <span style={{ color: '#0085FF' }}>Daha çox</span>
                                    </div>
                                </CommonCard>
                                </Link>
                            </li>
                        ))}</ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Support;
