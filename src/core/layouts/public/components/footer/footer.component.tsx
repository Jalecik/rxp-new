import React from 'react';
import css from './footer.module.scss';
import { FooterPhoneIcon, LinkIcon, NotifyIcon } from 'assets/images/common';
import Link from 'next/link';
import ButtonComponent from 'src/core/shared/button/button.component';
import { useRouter } from 'next/router';
import FooterStat from 'src/core/shared/footer-stat/footer-stat.component';



const FooterComponent = ({statCount}:any) => {

    const router = useRouter();

    const statisticsData = [
        {
            title: 'Xidmət sayı',
            value:  ''
        },
        {
            title: 'Gündəlik daxilolma sayı',
            value: 'djdjdjd'
        },
        {
            title: 'Gündəlik müraciət sayı',
            value: 'ggsgg'
        }
    ]

    const subFooter = [
        {
            title: 'İstifadə şərtləri',
            link: '#'
        },
        {
            title: 'Fərdi məlumatlardan istifadə',
            link: '#'
        },
    ]

    const footerList = [
        {label: 'Haqqımızda', link: '/about'},
        {label: 'Yeniliklər', link: '/news'},
        {label: 'Açıq məlumatlar', link: '/open-data'},
        {label: 'Dövlət xidmətləri', link: '#'},
    ]

    return (
        <footer className={`${css.footer}`}>
            {router.pathname == '/' && <><div className="container container-custom">
                <FooterStat listElemStyle={`${css['stat-list']}`} />
            </div>
            <div className='col-12 d-sm-none'>
                <ButtonComponent classNames={`${css['footer-feedback']} d-flex`}>
                <NotifyIcon /> <span className='ml-8'>Əks əlaqə</span>
            </ButtonComponent></div><hr /></>}
            <div className="container container-custom">
                <div className="row">
                    <div className="col-sm-12 col-md-2 p-0">
                        <div className={`${css['footer-call']} d-flex mt-15`}>
                            <FooterPhoneIcon />
                            <div className='ml-12'>
                                <span>168</span>
                                <p>Çağrı Mərkəzi</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${css['footer-list']} col-sm-12  col-md-10`}>
                        <ul className='d-flex justify-end align-center'>
                            {footerList.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link}>
                                        {item.label}  {footerList.length -1  == index && <LinkIcon/>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container container-custom">
                <div className={`${css['footer-sub']} row  justify-between align-center`}>
                    <div className="col-sm-12 col-md-6">
                        <p>© 2023, Rəqəmsal Xidmətlər Portalı. Bütün hüquqlar qorunur.</p>
                    </div>
                    <div className="col-sm-12 col-md-6 justify-end align-center">
                        <ul className='d-flex'>
                            {subFooter.map((item, index) => (
                                <li key={index}>
                                    <Link href={item.link}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
