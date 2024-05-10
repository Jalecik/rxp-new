import { NextPage } from 'next';
import React from 'react';
import ResultList from 'src/core/shared/result-list/result-list.component';
import SidebarList from 'src/core/shared/sidebar-list/sidebar-list.component';
import SearchComponent from 'src/core/shared/search/search.component';
import Title from 'src/core/shared/title/title.component';

import css from './search-result.module.scss';


const resultList = [
    {
        title: 'Meşəbağ üçün müraciət',
        link: '/services',
        // icon: <DeerIcon />,
    },
    {
        title: 'Vəhşi heyvanların ovuna icazələrin verilməsi',
        link: '/services',
        // icon: <DeerIcon />,
    },
    {
        title: 'Yaşıllıqların götürülməsinə dair rəyin verilməsi',
        link: '/services',
        // icon: <DeerIcon />,
    },
    {
        title: 'Su obyektlərin xüsusi məqsədlər üçün istifadəyə icazənin verilməsi',
        link: '/services',
        // icon: <DeerIcon />,
    },
    {
        title: 'Yerin təki sahəsinə “Dağ-mədən” ayırması statusunun verilməsi',
        link: '/services',
        // icon: <DeerIcon />,
    },
    {
        title: 'Ozondağıdıcı maddələr və tərkibində belə maddələr olan məhsulların dövriyyəsinə icazə verilməsi',
        link: '/services',
        // icon: <DeerIcon />,
    },
]

const resultList2 = [
    {
        title: 'Meşəbağ üçün müraciət',
        link: '/services',
        // icon: <DeerIcon />,
    },
    {
        title: 'Vəhşi heyvanların ovuna icazələrin verilməsi',
        link: '/services',
        // icon: <DeerIcon />,
    },
    {
        title: 'Yaşıllıqların götürülməsinə dair rəyin verilməsi',
        link: '/services',
        // icon: <DeerIcon />,
    }
]
const list = [
    { title: 'Kömək', content: <ResultList className={'mt-24 mb-34'} list={resultList} /> },
    { title: 'Texniki dəstək', content: <ResultList className={'mt-24 mb-34'} list={resultList} /> },
    { title: 'Digər', content: <ResultList className={'mt-24 mb-34'} list={resultList2} /> },

]
const SearchResult: NextPage = () => {
    return (
        <section>
            <div className="container container-custom mt-40">

                <SidebarList
                    list={list}
                    className='mt-40'
                    queueTitle='Elektron növbə'
                    queueText='Elektron növbə vasitəsilə vaxtınıza qənaət edin.'
                    linkTitle='Növbəyə yazıl'>
                    <div className="col-xs-12 col-sm-12 col-md-12 p-0">
                        <div className="col-md-12 p-0 mb-32">
                            <Title  text='Xidmətlər' size='extraLarge' />
                        </div>
                        <SearchComponent  placeholder='Məsələn, ovçuluq icazəsi' />
                        <div className={css['search-result']}>
                            6 nəticə
                        </div>
                    </div>
                </SidebarList>
            </div>
        </section >
    );
}

export default SearchResult;
