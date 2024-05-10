import ServicesDetailComp from 'components/services-detail/detail/services-detail.component';
import VideoInstructionComp from 'components/services-detail/video-instructions/video-instructions.component';
import { NextPage } from 'next';
import React from 'react';
import SubTitle from 'src/core/shared/sub-title/sub-title.component';
import css from './services-detail.module.scss';
import { commonServerSideProps } from 'src/core/helpers/common';
import { getServicesDetail } from 'src/features/common/services/serviceDetail';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { IServiceDetail } from 'src/features/common/types/common';
import { showToast } from 'src/core/shared/notification/notification';


export async function getServerSideProps(context: any) {
    const query = context.query?.servicesId ?? '';
    return commonServerSideProps(getServicesDetail, query[0], query[1]);
}

type ServicesDetailProps = {
    data: IServiceDetail;
    error: string;
};

const ServicesDetail: NextPage<ServicesDetailProps> = ({ data, error }) => {
    const router = useRouter();

    const goToPreviousPage = () => {
        router.push('/organizations');
    };

    if(error){
        showToast(error, 'error');
    }
    return (
        <><Head>
            <title>{data?.metaData?.title}</title>
            <meta name='description' content={data?.description} key='desc' />
        </Head>
            <section className='pt-32 pb-150'>
                <div className="container container-custom">
                    <div className='row'>
                        <div className="col-12 p-0">
                            <SubTitle handleClick={() => goToPreviousPage()} text='Xidmətlər' />
                        </div>
                        <div className={css['services-detail']}>
                            <div className="col-sm-12 col-md-9 pl-0">
                                <ServicesDetailComp
                                    detailData={data} />
                            </div>
                            <div className="col-sm-12 col-md-3 p-0">
                                <VideoInstructionComp detailData={data} />
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    );
}

export default ServicesDetail;
