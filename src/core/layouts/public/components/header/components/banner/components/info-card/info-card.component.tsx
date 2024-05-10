import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import CardComponent from 'src/core/shared/card/card.component';
import Title from 'src/core/shared/title/title.component';
import { IInfoCard } from 'src/core/layouts/public/public';

import css from './info-card.module.scss';
import { ArowRightIcon } from 'assets/images/header';

const InfoCard = ({ title, text, linkName, link , imgUrl, style}: IInfoCard) => {
    return (
        <CardComponent classes={`${css['info-card']} d-flex`} style={style}>
            <div className= {`${css['info-card_inner']}`}>
                <Title text={title} />
                <p>{text}</p>
                <Link href={link} className={`${css['info-card_link']} d-flex`}>
                    <ArowRightIcon/><span>{linkName}</span>
                </Link>
            </div>
            <div className={css['info-card_img']}>
                <Image src={imgUrl} alt='info-list-image'/>
            </div>
        </CardComponent>
    );
};


export default InfoCard;
