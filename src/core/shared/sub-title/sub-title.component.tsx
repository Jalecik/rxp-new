import React from 'react';
import { ISubTitleTypes } from './sub-title';
import css from './sub-title.module.scss';
import { ArrowLeft } from 'assets/images/common';

function SubTitle({ text, className = '', style, handleClick }: ISubTitleTypes) {
    return (
        <div 
        //    onClick={handleClick} 
           style={style} className={`${css.subtitle} ${className}`}>
            <ArrowLeft /> {text}
        </div>
    );
}

export default SubTitle;
