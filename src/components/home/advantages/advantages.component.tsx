import React, { useState } from 'react'

import css from './advantages.module.scss'

import Image from 'next/image'
import Title from 'src/core/shared/title/title.component'
import { IAdvantagesComponentProps } from './advantages'




const AdvantagesCoponent = ({advantagesList}: { advantagesList: IAdvantagesComponentProps[]}) => {
    return (
        <section className={`${css.advantages} mt-64`}>
            <div className="container container-custom">
                <div className="row">

                    <div className="col-sm-12 col-md-9  pl-0 mb-20">
                        <Title size='large' text="Portalın üstünlükləri?" />
                    </div>
                    <ul className={`${css['advantages-cards']} custom-list`}>
                    {advantagesList?.map((item, index) => (
                        <li className='col-sm-12 col-md-4' key={index}>
                            <Image width={328} height={230} src={item.image} alt="advantages_image" />
                            {/* <img src={item.image} alt='advantages_image' /> */}
                            <h6>{item.name}</h6>
                            <p>{item.description}</p>
                        </li>

                    ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AdvantagesCoponent