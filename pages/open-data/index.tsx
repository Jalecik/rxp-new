import { Pagination } from 'antd';
import { NextPage } from 'next';
import React from 'react';
import DataList from 'src/core/shared/data-list/data-list.component';
import Tabs from 'src/core/shared/tabs/tabs.component';
import Title from 'src/core/shared/title/title.component';
import SelectionComponent from 'src/core/shared/select/select.component';

import css from './open-data.module.scss';

const resultList = [
    {
        title: 'Aqrobağ üçün müraciət',
        text: 'Azərbaycan meşələrinin kordinatları haqqında məlumat',
        link: '/services',
    },
    {
        title: 'Vəhşi heyvanların ovuna icazələrin verilməsi',
        text: 'Azərbaycanda obyektlərin və məkanların koordinatları haqqında məlumat',
        link: '/services',
    },
    {
        title: 'Su obyektlərindən xüsusi məqsədlər üçün istifadəyə icazənin verilməsi',
        text: 'Azərbaycan şəhərlərinin və inzibati ərazi vahidlərinin koordinatları haqqında məlumat',
        link: '/services',
    },
    {
        title: 'Ozondağıdıcı maddələr və tərkibində belə maddələr olan məhsulların dövriyyəsinə icazə verilməsi',
        text: 'Azərbaycanın dövlət sərhədlərinin koordinatları haqqında məlumat',
        link: '/services',
    },
    {
        title: 'Ovçuluq biletinin verilməsi',
        text: 'Azərbaycanın dövlət sərhədlərinin koordinatları haqqında məlumat',
        link: '/services',
    }
]

const OpenData: NextPage = () => {

    const tabs = [
        {
            header: 'Bütün kateqoriyalar', count: '401', content: <>
                <DataList className={'mt-24 mb-34'} list={resultList} /></>
        },
        {
            header: 'Kənd təsərrüfatı', count: '16', content: <div>
                <h6>Ovçuluq biletinin əldə edilməsi ödənişlidir?</h6>
                <p>Bəli. 2.2.1. Azərbaycan Respublikası Nazirlər Kabinetinin 2004-cü il 6 noyabr tarixli 176 nömrəli Qərarı ilə təsdiq edilmiş “Heyvanlar aləmindən istifadəyə görə ödəəmələrin növləri, dərəcələri, tətbiq edilmə qaydaları və qeyri-qanuni heyvan ovuna cərimələr”in 2.1-ci bəndinə əsasən heyvanlar aləmindən istifadəyə görə ödəmələrin növləri və dərəcələri üzrə ovuna icazə verilən vəhşi heyvan növlərindən dovşana 2 manat 20 qəpik, çaqqala 3 manat 96 qəpik, yenota və qunduza 1 manat 65 qəpik, təkəyə 24 manat 75 qəpik, çöl donuzuna (qabana) 16 manat 50 qəpik məbləğində ödəmə nəzərdə tutulmuşdur.</p>
                <DataList className={'mt-24 mb-34'} list={resultList} />
            </div>
        },
        { header: 'Faydalı qazıntılar', count: '2', content: <DataList className={'mt-24 mb-34'} list={resultList} /> },
        {
            header: 'Meşə',
            count: '220',
            content: <DataList className={'mt-24 mb-34'} list={resultList} />
        },
        {
            header: 'Ov icazələri',
            count: '38',
            content: <DataList className={'mt-24 mb-34'} list={resultList} />
        },
        {
            header: 'İctimai obyektlərlə bağlı icazələr',
            count: '120',
            badge: { badgeTitle: 'Yeni', badgeStatus: 'soon' },
            content: <DataList className={'mt-24 mb-34'} list={resultList} />
        },
        {
            header: 'Digər',
            content: <DataList className={'mt-24 mb-34'} list={resultList} />
        }
    ];

    return (
        <section>
            <div className="container container-custom mt-40">
                <div className='row'>
                    <div className="col-md-12 mb-32 p-0">
                        <Title text='Açıq məlumatlar' size='large' />
                    </div>
                    <SelectionComponent
                        classNames={`mb-24 d-md-none select-mobile`}
                        label={'Kateqoriya'}
                        defaultValue={'1'}
                        //   placeholder='Kateqoriya' 
                        options={[{ label: 'Bütün xidmətlər', value: '1' }]} />
                    <Tabs tabs={tabs} content={undefined} />
                    <Pagination
                        className='mb-32 pagination'
                        current={1}
                        onChange={() => console.log()} total={50} />

                </div>
            </div>
        </section>
    );
}

export default OpenData;
