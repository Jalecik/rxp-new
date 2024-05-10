import { NextPage } from 'next';
import React from 'react';
import SubTitle from 'src/core/shared/sub-title/sub-title.component';
import { useRouter } from 'next/router';
import DetailsSidebar from 'src/core/shared/details-sidebar/details-sidebar.component';
import InnovationsDetailComp from 'components/innovations-detail/innovations-detail.component';

const NewsDetail: NextPage = () => {
    const router = useRouter();

    const handlePrevPage = () => {
        router.back();
    }

    const resultList = [
        { title: 'Meşə-bağların qeydiyyatı ilə bağlı', detail: '29.04.2023' },
        { title: 'Meşə-bağların qeydiyyatı ilə bağlı', detail: '29.04.2023' },
        { title: 'Meşə-bağların qeydiyyatı ilə bağlı', detail: '29.04.2023' },
        { title: 'Meşə-bağların qeydiyyatı ilə bağlı', detail: '29.04.2023' },
        { title: 'Meşə-bağların qeydiyyatı ilə bağlı', detail: '29.04.2023' },
        { title: 'Meşə-bağların qeydiyyatı ilə bağlı', detail: '29.04.2023' },
    ]

    return (
        <section className='pt-32 pb-150'>
            <div className="container container-custom">
                <div className='row'>
                    <div className="col-12 p-0">
                        <SubTitle
                            // handleClick={() => console.log()}
                            style={{ color: '#4E5E87', fontFamily: 'IBM Plex Sans Regular' }}
                            text='Yeniliklər' />
                    </div>
                    <div className="col-sm-12 col-md-8 p-0">
                        <InnovationsDetailComp />
                    </div>
                    <div className="col-sm-12 col-md-4 p-0 pl-20">
                        <DetailsSidebar
                            className='mt-14'
                            url='/news'
                            resultList={resultList}
                            title='Digər yeniliklər'
                            allData='Bütün yeniliklər' />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NewsDetail;


