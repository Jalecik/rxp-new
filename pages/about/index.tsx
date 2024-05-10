import AboutCommonInfoComp from 'components/about/about-info/about-info.component';
import AdvantagesCoponent from 'components/home/advantages/advantages.component';
import { NextPage } from 'next';
import React from 'react';
import FooterStat from 'src/core/shared/footer-stat/footer-stat.component';
import css from './about.module.scss';
import AboutDevelpmentComp from 'components/about/about-development/about-development.component';
import AboutReportComp from 'components/about/about-report/about-report.component';
import RewardsComp from 'components/about/rewards/rewards.component';

import { dataSerialize } from 'src/core/helpers/common';
import { getAboutUsData, getDevelopmentGoals, getReportData, getRewardsData } from 'src/features/about/services/about.service';
import Head from 'next/head';
import { getHomeAdvantages } from 'src/features/home/services/home.service';


export async function getServerSideProps() {
    const reports = await getReportData();
    const rewards = await getRewardsData();
    const aboutUs = await getAboutUsData();
    const advantageResult = await getHomeAdvantages();
    const developmentGoals = await getDevelopmentGoals();
    return {
        props: {
            reports: dataSerialize(reports),
            rewards: dataSerialize(rewards),
            aboutUs: dataSerialize(aboutUs),
            advantageResult: dataSerialize(advantageResult),
            developmentGoals: dataSerialize(developmentGoals)
        }
    };
}


const AboutPage: NextPage = ({ reports, rewards, aboutUs, advantageResult,developmentGoals }: any) => {
    console.log('developmentGoals', developmentGoals);

    return (
        <><Head>
            <title>{aboutUs?.metaData?.title}</title>
            <meta name='description' content={aboutUs?.metaData?.description} key='desc' />
         </Head><section className={css.about}>
                <AboutCommonInfoComp text={aboutUs?.description} image={aboutUs?.image}/>
                <AdvantagesCoponent advantagesList={advantageResult} />
                <div className={`${css['about-stat']} container-fluid`}>
                    <div className="container container-custom pt-40 pb-44">
                        <FooterStat
                            isFooter={false}
                            listElemStyle={css['about-stat__elem']} />
                    </div>
                </div>
                <AboutDevelpmentComp
                    title={developmentGoals?.name}
                    text={developmentGoals?.description}
                    list={developmentGoals?.items} />
                <AboutReportComp listStyle='stat-list' list={reports} title='Hesabatlar' />
                <RewardsComp title={'Mükafatlar'} list={rewards} />

            </section></>
    );
}


export default AboutPage;
