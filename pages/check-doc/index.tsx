import { connect } from 'react-redux'
import React, { FC } from 'react'

import { NextPage } from 'next'

import css from './check-doc.module.scss';

import CardComponent from 'src/core/shared/card/card.component';
import Title from 'src/core/shared/title/title.component';
import { DownloadIcon, NotificationIcon, PrintIcon } from 'assets/images/common';
import QrCodeImg from 'assets/images/qr-code.png';
import Image from 'next/image';
import ViewerWrapper from 'src/core/shared/pdfViewer/pdfViewer.component';

const list = [
    { title: 'Sənədin növü', text: 'Xüsusi razılıq və icazə' },
    { title: 'Yüklənmə tarixi', text: '15.03.2023' },
    { title: 'Sənədin nömrəsi', text: 'KLR2192039104' },
    { title: 'Son etibarlılıq müddəti', text: '15.03.2028' },
    { title: 'İmza', text: 'Elektron imzalanmışdır' },
]


const CheckDoc: FC = () => {
    return (
        <div className="container container-custom">
            <div className="row">
                <div className={css.doc}>
                    <div className={`${css['doc-title']} col-12`}>
                        <Title text='Şəki rayon, Aşağı Şabalıd kəndi aqrobağı haqqında' size='large' />
                        <ul className='d-flex'>
                            <li><PrintIcon /></li>
                            <li><DownloadIcon /></li>
                        </ul>
                    </div>

                    <CardComponent classes={`${css['doc-card']} mt-16 row p-32`}>
                        <div className={`${css['doc-card__info']} ${css['doc-info']} col-5`}>
                            <ul>{list.map((item,index) => (
                                <li key={index}>
                                    <span>{item.title}</span>
                                    <p>{item.text}</p></li>
                            ))}</ul>

                            <div className={`${css['doc-info__footer']}`}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Image src={QrCodeImg} alt='qr-code' />
                                    <span>Sənədi başqa cihazda aç</span>
                                </div>
                                <NotificationIcon />
                            </div>

                        </div>
                        <div className="col-7 pr-0">
                            <ViewerWrapper fileUrl={'https://api.printnode.com/static/test/pdf/multipage.pdf'} />
                        </div>
                    </CardComponent>
                </div>
            </div>
        </div>

    )
}

export default CheckDoc