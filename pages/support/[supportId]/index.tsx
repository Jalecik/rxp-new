import { NextPage } from 'next';
import React from 'react';
import ResultList from 'src/core/shared/result-list/result-list.component';

import SubTitle from 'src/core/shared/sub-title/sub-title.component';
import { PlaySupportIcon } from 'assets/images/support/extra';
import Tabs from 'src/core/shared/tabs/tabs.component';

const list = [
    { title: 'Təlimat', link: '/support/1' },
    { title: 'Mütəmadi Verilən Suallar', link: '/support/2' },
    { title: 'Qanunlar', link: '/support/3' },

]

const resultList = [
    {
        title: 'Aqrobağ üçün müraciət',
        link: '/services',
        icon: <PlaySupportIcon />,
    },
    {
        title: 'Vəhşi heyvanların ovuna icazələrin verilməsi',
        link: '/services',
        icon: <PlaySupportIcon />,
    },
    {
        title: 'Su obyektlərindən xüsusi məqsədlər üçün istifadəyə icazənin verilməsi',
        link: '/services',
        icon: <PlaySupportIcon />,
    },
    {
        title: 'Ozondağıdıcı maddələr və tərkibində belə maddələr olan məhsulların dövriyyəsinə icazə verilməsi',
        link: '/services',
        icon: <PlaySupportIcon />,
    },
    {
        title: 'Ovçuluq biletinin verilməsi',
        link: '/services',
        icon: <PlaySupportIcon />,
    }
]

const tabs = [
    {
        header: 'Təlimat', content: <>
            <ResultList className={'mt-24 mb-34'} list={resultList} /></>
    },
    {
        header: 'Mütəmadi Verilən Suallar', content: <div>
            <h6>Ovçuluq biletinin əldə edilməsi ödənişlidir?</h6>
            <p>Bəli. 2.2.1. Azərbaycan Respublikası Nazirlər Kabinetinin 2004-cü il 6 noyabr tarixli 176 nömrəli Qərarı ilə təsdiq edilmiş “Heyvanlar aləmindən istifadəyə görə ödəəmələrin növləri, dərəcələri, tətbiq edilmə qaydaları və qeyri-qanuni heyvan ovuna cərimələr”in 2.1-ci bəndinə əsasən heyvanlar aləmindən istifadəyə görə ödəmələrin növləri və dərəcələri üzrə ovuna icazə verilən vəhşi heyvan növlərindən dovşana 2 manat 20 qəpik, çaqqala 3 manat 96 qəpik, yenota və qunduza 1 manat 65 qəpik, təkəyə 24 manat 75 qəpik, çöl donuzuna (qabana) 16 manat 50 qəpik məbləğində ödəmə nəzərdə tutulmuşdur.</p>
            <ResultList className={'mt-24 mb-34'} list={resultList} />
        </div>
    },
    { header: 'Qanunlar', content: <ResultList className={'mt-24 mb-34'} list={resultList} />},
];

const SupportDetail: NextPage = () => {
    return (
        <section>
            <div className="container container-custom mt-40">
                <div className='row'>
                    <div className="col-md-12 p-0">
                        <SubTitle style={{ color: '#4E5E87', fontFamily: 'IBM Plex Sans Regular' }} text='Qurumlar' />
                    </div>
                    <div className="col-12 p-0 mt-30">
                        <Tabs tabs={tabs} contentTitle={''} content={undefined} />
                        {/* <div className={`${css['support-detail']} col-xs-12 col-sm-12 col-md-8`}>
                        </div> */}
                    </div>

                </div>
            </div>
        </section >
    );
}

export default SupportDetail;
