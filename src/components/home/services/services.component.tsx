import React, { useState } from 'react'

import css from './services.module.scss'
import CommonCard from 'src/core/shared/common-cards/common-cards.component';
import { TabBtnİcon } from 'assets/images/services';
import Title from 'src/core/shared/title/title.component';
import ButtonComponent from 'src/core/shared/button/button.component';
import SimpleCards from 'src/core/shared/simple-cards/simple-cards.component';
import Link from 'next/link';




const ServicesComponent = ({selectedServicesList,categoriesList }:any) => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };

    return (
        <section className={`${css.services}`}>
            <div className="container container-custom">
                <div className="row">

                    <div className={`${css['services-title']} col-12 row p-0`}>
                        <div className={`col-sm-12 col-md-7 col-lg-8 pl-0`}>
                            <Title size='large' text="Seçilən xidmətlər?" />
                        </div>
                        <div className={`${css['services-tabs_btn']} col-sm-12 col-md-5 col-lg-4 d-flex justify-end`}>
                            <div className={`${css['tabs-btn']}`}>
                                <ButtonComponent
                                    classNames={`d-flex ${css['tab-btn']} ${activeTab === 'tab1' ? css.active : ''}`}
                                    click={() => handleTabClick('tab1')}>
                                    <div className='d-flex align-center' style={{margin: 'auto'}}><TabBtnİcon /> <span className='ml-7'>Xidmətlər</span></div>
                                </ButtonComponent>
                                <ButtonComponent
                                    classNames={`ml-5 ${css['tab-btn']} ${activeTab === 'tab2' ? css.active : ''}`}
                                    click={() => handleTabClick('tab2')}>
                                    Kateqoriyalar
                                </ButtonComponent>
                            </div>
                        </div>
                    </div>

                    {activeTab === 'tab1' ? <ul className={`${css['tab-list']} custom-list`}>{selectedServicesList.map((item:any, index:number) => (
                        <li key={index} className="col-sm-12 col-md-4 mb-25">
                            <Link href={`services/${item.slug}`}><CommonCard
                                title={item.name}
                                icon={item.image}
                                color={item.status.color}
                                isHasBadge={item.status ? true : false}
                                badgeTitle={item.status.name}
                            /></Link>
                        </li>
                    ))}</ul> : <ul className={`${css['tab-list']} custom-list`}>{categoriesList.map((item:any, index:number) => (
                        <li key={index} className="col-md-4  mb-25">
                            <Link href={`services`}><SimpleCards
                                title={item.name}
                                icon={item.image}
                            /></Link>
                        </li>))}</ul>}
                </div>
            </div>

        </section>
    );
}

export default ServicesComponent