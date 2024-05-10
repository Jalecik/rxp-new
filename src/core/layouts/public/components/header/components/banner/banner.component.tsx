import React, { useEffect, useState } from 'react';
import { Button, Input, Space } from 'antd';

import Title from 'src/core/shared/title/title.component';
import css from './banner.module.scss';
import { SearchIcon, ThunderIco } from 'assets/images/header';
import InfoCard from './components/info-card/info-card.component';
import Services from 'assets/images/header/services.png'
import Organizations from 'assets/images/header/organizations.png'
import CardComponent from 'src/core/shared/card/card.component';
import { DeerIcon } from 'assets/images/common';
import Link from 'next/link';


const listData = [
    {
        id: 1,
        title: 'Sürətli başla',
        icon: <ThunderIco />,
        link: '/fast-start'
    },
    {
        id: 2,
        title: 'Ov üçün icazə',
        icon: <SearchIcon width='16' height='16' />,
        link: '/'
    },
    {
        id: 3,
        title: 'Yaşıllığın götürülməsi',
        icon: <SearchIcon width='16' height='16' />,
        link: '/'
    },
    {
        id: 4,
        title: 'Oduncaq tədarükü',
        icon: <SearchIcon width='16' height='16' />,
        link: '/'
    }
]

const infoData = [
    {
        id: 1,
        title: 'Xidmətlər',
        text: "Portalda yararlana biləcəyiniz bütün xidmətlər",
        linkName: 'Bütün xidmətlər',
        link: '/services',
        imgUrl: Services
    },
    {
        id: 2,
        title: 'Qurumlar',
        text: "Xidmət təqdim edən bütün tabeli qurumlar",
        linkName: 'Bütün qurumlar',
        link: '/organizations',
        imgUrl: Organizations
    },

]

const searchResult = [
    {
        id: 1,
        title: 'Sürətli başla',
        icon: <DeerIcon />,
    },
    {
        id: 2,
        title: 'Ov üçün icazə',
        icon: <DeerIcon />,
    },
    {
        id: 3,
        title: 'Yaşıllığın götürülməsi',
        icon: <DeerIcon />,
    },
    {
        id: 4,
        title: 'Oduncaq tədarükü',
        icon: <DeerIcon />,
    }

]


const Banner = () => {
    const [searchValue, setSearchValue] = useState('');

    const placeholderText: string = 'Məsələn, ovçuluq icazəsi...';
    const [typedText, setTypedText] = useState<string>('');
  
    useEffect(() => {
        let currentIndex: number = 0;
    
        const typingAnimation = setInterval(() => {
          setTypedText((prevTypedText) => {
            if (currentIndex >= placeholderText.length) {
              currentIndex = 0; // Reset index to restart typing
              return '';
            }
            const nextChar: string = placeholderText[currentIndex];
            currentIndex++;
            return prevTypedText + nextChar;
          });
        }, 200); // Typing speed
    
        return () => clearInterval(typingAnimation);
      }, []);

    const handleChange = (e: any) => {
        setSearchValue(e.target.value);
    }

    return (
        <><div className={`container-fluid ${css.banner}`}>
            <div className={`row ${css['banner-inner']}`}>
                <div className="container container-custom">
                    <div className="row">
                        <div className={`${css['banner-content']} col-md-12`}>
                            <Title text="Sizə necə kömək edə bilərik?" />

                            <div className={css['common-search']}>
                                <Input.Group className={`${css.search} mt-25 d-flex`}>
                                    <Input size='large'
                                        className={css.search_input}
                                        onChange={handleChange}
                                        placeholder={typedText} />
                                    <Button className={css.search_btn} onClick={() => (console.log('vvvvv'))}>
                                        <SearchIcon /><span className='ml-5 d-sm-none'>Axtar</span>
                                    </Button>
                                </Input.Group>
                            </div>

                            {/* <div class="centered">
                                <input type="text" id="searchbox" name="searchbox" placeholder="Search term">
                            </div> */}

                            {searchValue && <div className={`${css['search-result']} col-6 mt-10`}>
                                <CardComponent classes={`${css['search-result_card']}`}>
                                    <div className={`${css['search-result_card__inner']}`}>
                                        {searchResult.map((item) => {
                                            return (
                                                <Link key={item.id} href={'/search-result'}><div key={item.id} className={css['search-result_item']}>
                                                    {item.icon}
                                                    <p className='ml-10'>Lorem ipsum dolor<span>{item.title}</span>sit amet</p>
                                                </div></Link>
                                            );
                                        })}
                                    </div>
                                </CardComponent>
                            </div>}


                            <ul className={`${css['list-start']} row`}>
                                {listData.map((item) => {
                                    return (
                                        <li key={item.id} className=''>
                                            <Link href={`${item.link}`}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="container container-custom">
                <ul className={`${css['info-list']} row`}>
                    {infoData.map((item) => {
                        return (
                            <li key={item.id} className='col-xs-12 col-sm-12 col-md-6'>
                                <InfoCard
                                    key={item.id}
                                    title={item.title}
                                    text={item.text}
                                    linkName={item.linkName}
                                    imgUrl={item.imgUrl}
                                    link={item.link} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};


export default Banner;
