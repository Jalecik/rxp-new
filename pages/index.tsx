// import { useEffect } from 'react';
import React from 'react';
import ServicesComponent from 'components/home/services/services.component';
import AdvantagesCoponent from 'components/home/advantages/advantages.component';
import SupportComponent from 'components/home/support/support.component';
import UsefulLinks from 'components/home/useful-links/useful-links.component';
import Banner from 'src/core/layouts/public/components/header/components/banner/banner.component';
import { dataSerialize } from 'src/core/helpers/common';
import { getCategoriesList, getHomeAdvantages, getSelectedServices, getUsefullLinks } from 'src/features/home/services/home.service';
import { NextPage } from 'next';
import UserWay from 'components/userway/userway';


export async function getServerSideProps() {
    const advantageResult = await getHomeAdvantages();
    const sliderData = await getUsefullLinks();
    const selectedServices = await getSelectedServices();
    const selectedCategories = await getCategoriesList();
    return {
        props: {
            advantageResult: dataSerialize(advantageResult),
            sliderData: dataSerialize(sliderData),
            selectedCategories: dataSerialize(selectedCategories),
            selectedServices: dataSerialize(selectedServices)
        }
    };
}

const  HomeComponent: NextPage = ({ advantageResult, sliderData, selectedServices, selectedCategories }: any) =>  {
    return (
        <div>
            <Banner />
            <UserWay />

            <ServicesComponent 
               categoriesList={selectedCategories} 
               selectedServicesList={selectedServices} />
            {advantageResult && <AdvantagesCoponent advantagesList={advantageResult} />}
            <SupportComponent />
            <UsefulLinks sliderData={sliderData}/>
        </div>
    );
}

export default HomeComponent;
