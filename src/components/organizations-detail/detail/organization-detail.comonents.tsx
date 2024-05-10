import React, { useState } from 'react';

import Title from 'src/core/shared/title/title.component';


import css from './organizations-detail.module.scss';
import ResultList from 'src/core/shared/result-list/result-list.component';


const OrganizationDetailComp = ({organizationDetailData, resultList}:any) => {
    return (
        <div className={`${css['organizations-detail']}`}>
            <div className="col-12 p-0">
                <img  src={organizationDetailData?.image} alt='organization image'/>
                <div className='mt-13'>
                    <Title text={organizationDetailData?.name} size='large' />
                </div>
            </div>
            <div className={`${css['organizations-detail_content']}`}>
                <h3>Ümumi məlumat</h3>
                <p>{organizationDetailData?.description}</p>

                <h3>Quruma aid xidmətlər</h3>
                <ResultList className={'mt-24 mb-34'} list={resultList} />
            </div>
        </div>
    );
}

export default OrganizationDetailComp