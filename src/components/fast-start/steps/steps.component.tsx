import React, { ReactHTMLElement, useState } from 'react';
import css from './steps.module.scss'
import { CheckedIcon } from 'assets/images/common';

interface IStepsList {
    split: any;
    title: 'string',
    isActive: boolean,
    icon?: SVGSVGElement,
    id: number
}
const StepsComp = ({ stepsList, className }: any) => {
    console.log('stepsList:', stepsList);
    return (
        <div className={`container mt-32 ${className} p-0`}>
            <div className={`${css.steps} row`}>
                <ul>
                    {stepsList?.map((item: IStepsList, index: number) => (
                        <li className={index !== stepsList.length - 1 ? css['steps-list_active'] : css['steps-list']} key={index}>
                            {index !== stepsList?.length - 1
                            ? <span>{<CheckedIcon/>}</span>
                            //@ts-ignore
                            : <span>{item.split('.')[0]}</span>}
                              <div className='ml-16'>{item.split('.')[1]}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default StepsComp