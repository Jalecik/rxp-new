import Image from 'next/image';
import React, { useState } from 'react';
import css from './details-sidebar.module.scss';
import { ArrowRight } from 'assets/images/common';
import { IDetailsInterface } from './details-sidebar';
import Link from 'next/link';

const DetailsSidebar = ({ resultList, title,url, allData, className, isImg=true }: IDetailsInterface) => {
    return (
        <><div className={`${css['detail-title']} ${className}`}>{title}</div>
            <ul className={css['detail-list']}>
                {resultList && resultList.length > 0 && resultList.map((item: any, index: number) => (
                    <li key={index}>
                        {item.slug && 
                        <Link  className='d-flex' href={item.slug}>
                            {item.image && isImg && <img src={item.image} alt="icon" />}
                            <div className={css['detail_inner']}>
                                <h5>{item.name}</h5>
                                {item.serviceCount && <span>{item.serviceCount} xidmət</span>}
                                {item.date && <span>{item.date}</span>}
                            </div></Link>}
                    </li>
                ))}
            </ul>
            <Link href={url} className={css['detail_all']}>
                <ArrowRight color='#0085FF' /> {allData}
            </Link>
        </>
    );
}

export default DetailsSidebar