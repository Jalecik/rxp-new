import React, { useEffect, useState } from 'react';
import css from './footer-stat.module.scss';
import { useGetFooterStat } from 'src/features/home/actions/home.queries';

interface Statistic {
    title: string;
    value: string;
  }

const statisticsData = [
    {
        title: 'Xidmət sayı',
        value: ''
    },
    {
        title: 'Gündəlik daxilolma sayı',
        value: ''
    },
    {
        title: 'Gündəlik müraciət sayı',
        value: ''
    }
]


const FooterStat = ({ listElemStyle, isFooter=true }: any) => {
    const [statData, setStatData] = useState<Statistic[]>(statisticsData);
    const {data: footerStat, isLoading} = useGetFooterStat();

    useEffect(() => {
        if (footerStat) {
            setStatData([
                {
                    title: 'Xidmət sayı',
                    value: (footerStat?.totalService).toString()
                },
                {
                    title: 'Gündəlik daxilolma sayı',
                    value: (footerStat?.totalVisits).toString()
                },
                {
                    title: 'Gündəlik müraciət sayı',
                    value:  (footerStat?.totalAppeal).toString()
                }
            ]); 
        }
      }, [footerStat]);

    return (
        <div className="row">
            <ul className={`${css['footer-stat_list']}`} style={{ width: '100%' }}>
                {statData?.map((item, index) => (
                    <li key={index} className={`${listElemStyle} col-sm-12 col-md-4 d-flex align-center`}>
                        <div className={`${css['stat-inner']} ${!isFooter && css['stat-inner__about']}`}>
                            <p>{item?.title}</p>
                            <div className={`${css.footer_stat_count}`}>
                                {item?.value?.split('').map((item, index) => (
                                    <span key={index}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterStat;
