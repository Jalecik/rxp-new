import React, { useState } from 'react';
import css from './organizations.module.scss';
import CardComponent from 'src/core/shared/card/card.component';
import Image from 'next/image';
import Link from 'next/link';
import { IOrganizationsData } from 'src/features/organizations/types/organizations';


const OrganizationsCard = ({data}: IOrganizationsData) => {
    return (
        <div className="container p-0 mt-32">
            <div className={`${css.organizations} row`}>
                {data.map((item, index) => (
                    <Link href={`/organizations/${item.slug}`} key={index} className={`col-md-3 p-0 ${css['organizations-link']}`}>
                        <CardComponent classes={`${css['organizations-link__card']} p-24 ${item.serviceCount == 0 ?? 'disabled'}`}>
                            {item.image && <img src={item.image} alt="icon" />}
                            <h5 className={`${item.serviceCount == 0 ? 'disabled' : ''}`}>{item.name}</h5>
                            <span>{item.serviceCount} {item.description}</span>
                        </CardComponent>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default OrganizationsCard