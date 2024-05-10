import React, { useState } from 'react';
import css from './organizations.module.scss';
import CardComponent from 'src/core/shared/card/card.component';

import Org1 from 'assets/images/organizations/org1.svg'
import Org2 from 'assets/images/organizations/org2.svg'
import Org3 from 'assets/images/organizations/orgdisabled.svg'
import Org4 from 'assets/images/organizations/org4.svg'
import Image from 'next/image';

const data = [
    { id: 1, title: 'Meşələrin İnkişafı Xidməti', services: '6 xidmət', Icon: Org1 },
    { id: 2, title: 'Bioloji Müxtəlifliyin Qorunması Xidməti', services: '6 xidmət', Icon: Org2 },
    { id: 3, title: 'Milli Hidrometeorologiya Xidməti', services: 'Bu quruma aid xidmət yoxdur', Icon: Org3 },
    { id: 4, title: 'Dövlət Ekoloji Təhlükəsizlik Xidməti', services: '6 xidmət', Icon: Org4 },


    { id: 5, title: 'Meşələrin İnkişafı Xidməti', services: '6 xidmət', Icon: Org1 },
    { id: 6, title: 'Bioloji Müxtəlifliyin Qorunması Xidməti', services: '6 xidmət', Icon: Org2 },
    { id: 7, title: 'Milli Hidrometeorologiya Xidməti', services: 'Bu quruma aid xidmət yoxdur', Icon: Org3 },
    { id: 8, title: 'Dövlət Ekoloji Təhlükəsizlik Xidməti', services: '6 xidmət', Icon: Org4 },

    { id: 9, title: 'Meşələrin İnkişafı Xidməti', services: '6 xidmət', Icon: Org1 },
    { id: 10, title: 'Bioloji Müxtəlifliyin Qorunması Xidməti', services: '6 xidmət', Icon: Org2 },
    { id: 11, title: 'Milli Hidrometeorologiya Xidməti', services: 'Bu quruma aid xidmət yoxdur', Icon: Org3 },
    { id: 12, title: 'Dövlət Ekoloji Təhlükəsizlik Xidməti', services: '6 xidmət', Icon: Org4 },
]

const SearchSidebar = () => {
    return (
        <div className="container mt-32">
            <div className={`${css.organizations} row`}>
                <ul>
                    {data.map((item, index) => (
                        <div key={index} className="col-md-3 p-0">
                            <CardComponent classes={`${css['organizations-card']} p-24`}>
                                {item.Icon && <Image src={item.Icon} alt="icon" />}
                                <h5>{item.title}</h5>
                                <span>{item.services}</span>
                            </CardComponent>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SearchSidebar