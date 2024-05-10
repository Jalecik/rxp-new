import React, { useState } from 'react';
import css from './about-development.module.scss';
import Title from 'src/core/shared/title/title.component';
import Image from 'next/image';
import ModalComp from 'src/core/shared/modal/modal.component';
import SDG1 from 'assets/images/about/develop/SDG1.png';
import { LinkIcon } from 'assets/images/common';

type IAboutDevelop = {
    title: string;
    text: string;
    list: IDevelopList[];
}
type IDevelopList = {
    id: number;
    isSelect: boolean;
    name: string;
    description: string;
    link: string;
    image: string;
}
export const AboutDevelpmentComp = ({ title, text, list }: IAboutDevelop) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalData, setModalData] = useState({} as IDevelopList);

    const handleModalClick = (value: IDevelopList) => {
        setIsModalVisible(!isModalVisible);
        setModalData(value);
    }

    return (
        <section className={`${css['about-develop']} mt-32 p-0`}>
            <div className="container container-custom">
                <div className="row">
                    <Title text={title} size='large' />
                    <p>{text}</p>
                    <ul className={`${css['about-develop_list']} row mt-20`}>
                        {list.map((item, index) => (
                            <li 
                            key={index} 
                              onClick={() => handleModalClick(item)} 
                              className={`${css['about-develop_list__item']} ${item.isSelect && css.selected}  ${css['list-item']} col-xs-12 col-sm-6 col-md-2`}>
                                <div className={`${css['list-item__overlay']}`}></div>
                                <img src={item.image} alt={item.name} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='col-8'>
                <ModalComp
                    isModalVisible={isModalVisible}
                    className={`${css['about-develop__modal']}`}
                    isFooterBtn={false}
                    width={'auto'}
                    handleCloseModal={() => setIsModalVisible(false)}>
                    <div className={`row ${css['about-develop__modal--content']}`}>
                        <div className="col-4">
                            <img src={modalData?.image} alt={modalData?.name} />
                        </div>
                        <div className="col-8 p-0 pl-8">
                            <Title text={modalData?.name} size='small' />
                            <p className='p-0 pt-24'>{modalData?.description}</p>

                            <span className='details'>Ətraflı<LinkIcon color='#0085FF' /></span>

                        </div>
                    </div>
                </ModalComp>
            </div>
        </section>
    );
};
export default AboutDevelpmentComp;