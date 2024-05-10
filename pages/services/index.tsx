import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import ResultList from 'src/core/shared/result-list/result-list.component';
import SearchComponent from 'src/core/shared/search/search.component';
import SelectionComponent from 'src/core/shared/select/select.component';
import Title from 'src/core/shared/title/title.component';
import ButtonComponent from 'src/core/shared/button/button.component';

import css from './services.module.scss';

import { ArrowRight, DeerIcon } from 'assets/images/common';
import { Pagination } from 'antd';
import Tabs from 'src/core/shared/tabs/tabs.component';
import { commonServerSideProps, dataSerialize } from 'src/core/helpers/common';
import { getCategories} from 'src/features/common/services/serviceDetail';
import { showToast } from 'src/core/shared/notification/notification';
import Head from 'next/head';
import { usePostServices } from 'src/features/services/actions/services.mutations';



// export async function getServerSideProps() {
//     return commonServerSideProps(getCategories);
//   }



export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const categories = await getCategories();
        const newData = [...categories];
        newData.unshift({id: null, name: 'Bütün xidmətlər'});
        return {
            props: {
                categories: dataSerialize(newData)
            }
        };
    } catch (error) {
        //@ts-ignore
        //@ts-ignore
        console.error(error.response.data.message);
        //@ts-ignore
        return { props: { error: { message: error.response.data.message } } };
    }
};

const Services: NextPage = ({ categories, error }: any) => {
    const { mutate: mutatePostServices ,isLoading, isError, isSuccess, data: servicesData} = usePostServices();
    
    const [currentPage, setCurrentPage] = useState(1);
    const [clickedId, setClickedId] = useState(null);
    const startIndex = (currentPage - 1) * 10;
    const endIndex = Math.min(startIndex + 9, servicesData?.length - 1);
    const currentItems = servicesData?.slice(startIndex, endIndex + 1);

    useEffect(() => {
        mutatePostServices(null);
    }, [])

    const handleTabchange = (id: any) => {
        setClickedId(id);
        mutatePostServices(id);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (error) {
        showToast(error, 'error');
    }
    return (
        <section className='pb-100'>
            <Head>
                <title>{'Ekologiya və təbii sərvətlər nazirliyi Qurumlar'}</title>
                <meta name='description' content={'Ekologiya və təbii sərvətlər nazirliyi tabeliyinde olan qurumlar'} key='desc' />
            </Head>
            <div className="container container-custom mt-40">
                <div className='row'>
                    <div className="col-md-12 pl-0 mb-32">
                        <Title text='Xidmətlər' size='large' />
                    </div>

                    <ButtonComponent width={'100%'} color='primary' classNames='mb-40 d-md-none'>
                        <span className='d-flex align-center justify-center'><ArrowRight />  Elektron növbəyə yazıl</span>
                    </ButtonComponent>
                    <SelectionComponent
                        classNames='mb-24 d-md-none select-mobile'
                        label={'Kateqoriya'}
                        defaultValue={'1'}
                        options={[{ label: 'Bütün xidmətlər', value: '1' }]} />
                    <div className={`${css['services-list']}`}>
                        <Tabs handleTabchange={handleTabchange} 
                          isTitle={false} 
                          tabs={categories} 
                          contentTitle='' 
                          content={currentItems}
                          >
                            <SearchComponent placeholder='Məsələn, ovçuluq icazəsi' />
                        </Tabs>
                        <div className="row">
                            <div className="col-4 d-sm-none"></div>
                            <div className="col-sm-12 col-md-8">
                                <Pagination
                                    className='mb-32'

                                    current={currentPage}
                                    onChange={handlePageChange}
                                    // onChange={(page, size) => { setPageIndex(page); setPageSize(size) }}
                                    total={servicesData?.length} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Services;
