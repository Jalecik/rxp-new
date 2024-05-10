import { NextPage } from 'next';
import React from 'react';
import SubTitle from 'src/core/shared/sub-title/sub-title.component';
import { useRouter } from 'next/router';
import InnovationsDetailComp from 'components/innovations-detail/innovations-detail.component';
import DetailsSidebar from 'src/core/shared/details-sidebar/details-sidebar.component';
import { getReportData, getReportsDetail } from 'src/features/about/services/about.service';
import { dataSerialize } from 'src/core/helpers/common';
import Head from 'next/head';

type ReportData = {
    reportsId: string
};

export async function getServerSideProps(context: ReportData & { query: { reportsId: string } }) {
    const id = context?.query?.reportsId ?? '';
    const reportsDetail = await getReportsDetail(id);
    const reportsList = await getReportData();

    return {
        props: {
            reportsDetail: dataSerialize(reportsDetail),
            reportsList: dataSerialize(reportsList)
        }
    };
    return {
        notFound: true,
    }
}

const Reports: NextPage = ({reportsDetail,reportsList }:any) => {
    const router = useRouter();
    const handlePrevPage = () => {
        router.back();
    }
    return (
        <><Head>
            <title>{reportsDetail?.metaData?.title}</title>
            <meta name='description' content={reportsDetail?.metaData?.description} key='desc' />
        </Head><section className='pt-32 pb-150'>
                <div className="container container-custom">
                    <div className='row'>
                        <div className="col-12 p-0">
                            <SubTitle
                                handleClick={() => handlePrevPage()}
                                style={{ color: '#4E5E87', fontFamily: 'IBM Plex Sans Regular' }}
                                text='Yeniliklər' />
                        </div>
                        <div className="col-sm-12 col-md-8 p-0">
                            <InnovationsDetailComp 
                               reportsDetail={reportsDetail}/>
                        </div>
                        <div className="col-sm-12 col-md-4 p-0 pl-20">
                            <DetailsSidebar
                                className='mt-14'
                                isImg={false}
                                url='/news'
                                resultList={reportsList}
                                title='Digər yeniliklər'
                                allData='Bütün yeniliklər' />
                        </div>
                    </div>
                </div>
            </section></>
    );
}

export default Reports;


