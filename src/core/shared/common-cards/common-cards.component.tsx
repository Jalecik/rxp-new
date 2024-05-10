import React, { useCallback } from 'react';
import CardComponent from 'src/core/shared/card/card.component';

import { ICommonCards } from './common-cards';
import css from './common-cards.module.scss'


const CommonCard = ({ icon, children, title, badgeTitle, isHasBadge = false, style, color }: ICommonCards) => {

    const badgeStatus = useCallback(() => {
        switch (color) {
            case 'new':
                return css.green;
            case 'soon':
                return css.blue;
            default:
                return css.blue;
        }
    }, [color]);

    return (
        <CardComponent classes={`${css['common-cards']}`} style={style}>
            {icon && <div className={`${css['common-cards_icon']} d-flex justify-between`}>
                {/* {icon} */}
                <img src={icon} alt='image'/>
                {isHasBadge == true && <div className={`${badgeStatus()} ${css['common-cards_badge']}`}>
                    <span>{badgeTitle}</span>
                </div>}
            </div>}
            <h6>{title}</h6>
            {children}
        </CardComponent>
    );
};


export default CommonCard;
