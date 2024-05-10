import OrganizationDetailComp from 'components/organizations-detail/detail/organization-detail.comonents';
import { GetServerSideProps, NextPage } from 'next';
import React from 'react';
import SubTitle from 'src/core/shared/sub-title/sub-title.component';
import { useRouter } from 'next/router';
import DetailsSidebar from 'src/core/shared/details-sidebar/details-sidebar.component';
import { dataSerialize } from 'src/core/helpers/common';
import { getOrganizationServicesList, getOrganizationsDetail, getOtherOrganizationsList } from 'src/features/organizations/services/organization.service';
import Head from 'next/head';
import { toast } from 'react-toastify';
import { showToast } from 'src/core/shared/notification/notification';

const resultList = [
    {
        title: 'Meşələrin İnkişafı Xidməti',
        link: '/services',
        services: '6 xidmət',
        icon: 'http://rxp.etsn.az//images/institutions/1712131680.svg',
    },
    {
        title: 'Milli Hidrometeorologiya Xidməti',
        link: '/services',
        icon: 'http://rxp.etsn.az//images/institutions/1712131680.svg',
        services: '6 xidmət'
    },
    {
        title: 'Dövlət Ekoloji Təhlükəsizlik Xidməti',
        link: '/services',
        icon: 'http://rxp.etsn.az//images/institutions/1712131680.svg',
        services: '6 xidmət'
    },
    {
        title: '“Təhlükəli Tullantılar” MMC',
        link: '/services',
        icon: 'http://rxp.etsn.az//images/institutions/1712131680.svg',
        services: '6 xidmət'
    },
    {
        title: 'Dövlət Ekoloji Ekspertiza Agentliyi',
        link: '/services',
        icon: 'http://rxp.etsn.az//images/institutions/1712131680.svg',
        services: '6 xidmət'
    },
    {
        title: 'Dövlət Mineral Xammal Ehtiyatlarından İstifadə Agentliyi',
        link: '/services',
        icon: 'http://rxp.etsn.az//images/institutions/1712131680.svg',
        services: '6 xidmət'
    },
]



export const getServerSideProps: GetServerSideProps = async (context) => {
    const query = context.query?.organizationId ?? '';

    try {
        const organizationDetailData = await getOrganizationsDetail(query.toString());
        const organizationServicesList = await getOrganizationServicesList(query.toString());
        const otherOrganizations = await getOtherOrganizationsList();
            return {
            props: {
                organizationDetailData: dataSerialize(organizationDetailData),
                organizationServicesList: dataSerialize(organizationServicesList),
                otherOrganizations: dataSerialize(otherOrganizations)
            }
        };
      } catch (error) {
        //@ts-ignore
         //@ts-ignore
         toast.error(error.response.data.message);
         //@ts-ignore
        return { props: { error: { message: error.response.data.message } } };
      }
};



const OrganizationId: NextPage = ({ organizationDetailData, organizationServicesList,otherOrganizations, error }: any) => {
    const router = useRouter();
    const handlePrevPage = () => {
        router.back();
    }

    if(error){
        showToast(error, 'error');
    }

    return (
        <section className='pt-32 pb-150'>
            <Head>
                <title>{organizationDetailData?.metaData?.title}</title>
                <meta name='description' content={organizationDetailData?.description} key='desc' />
            </Head>
            <div className="container container-custom">
                <div className='row'>
                    <div className="col-12 p-0">
                        <SubTitle 
                          // handleClick={() => handlePrevPage()}
                         style={{ color: '#4E5E87', fontFamily: 'IBM Plex Sans Regular' }} text='Qurumlar' />
                    </div>
                    <div className="col-sm-12 col-md-8 pl-0">
                        <OrganizationDetailComp
                            organizationDetailData={organizationDetailData}
                            resultList={organizationServicesList} />
                    </div>
                    <div className="col-sm-12 col-md-4 pr-0">
                        <DetailsSidebar url='/news' resultList={otherOrganizations} title='Digər yeniliklər' allData='Bütün yeniliklər' />
                        {/* <OtherOrganizations resultList={resultList} /> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OrganizationId;


