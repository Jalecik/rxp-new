import React, { useCallback } from 'react';
import css from './badge.module.scss';
import { IBadge } from './badge';


const Badge = ({ badgeTitle, status, className }: IBadge) => {

    const badgeStatus = useCallback(() => {
        switch (status) {
            case 'green':
                return css.green;
            case 'orange':
                return css.orange;
            case 'blue':
                return css.blue;
            case 'notRegistered':
                return css.blue;
            default:
                return css.blue;
        }
    }, [status]);

    return (
        <div className={`${badgeStatus()} ${css.badge} ${className}`}>
            <span>{badgeTitle}</span>
        </div>
    );
};


export default Badge;
