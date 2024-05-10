import Image from 'next/image';
import React, { useState } from 'react';
import css from './other-organizations.module.scss';
import { ArrowRight } from 'assets/images/common';

const OtherOrganizations = ({ resultList }: any) => {
    return (
        <><div className={css['org-detail_title']}>Digər qurumlar</div>
            <ul className={css['org-detail']}>
                {resultList.map((item: any, index: number) => (
                    <li key={index} className='d-flex'>
                        <Image src={item.icon} alt="icon" />
                        <div className={css['org-detail_inner']}>
                            <h5>{item.title}</h5>
                            <span>{item.services}</span>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={css['org-detail_all']}>
               <ArrowRight color='#0085FF'/> Bütün qurumlar
            </div>
        </>
    );
}

export default OtherOrganizations