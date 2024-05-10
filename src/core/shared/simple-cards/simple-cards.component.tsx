import React from 'react';
import CardComponent from 'src/core/shared/card/card.component';

import { ISimpleCards } from './simple-cards';
import css from './simple-cards.module.scss'


const SimpleCards = ({ icon, title}: ISimpleCards) => {
    return (
        <CardComponent classes={`${css['simple-cards']}`}>
            <div className={`${css['simple-cards_inner']}`}>
                {/* {icon} */}
                <img src={icon} alt="icon" />
                <h6>{title}</h6>
            </div>
        </CardComponent>

    );
};


export default SimpleCards;
