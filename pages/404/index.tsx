import React from 'react'

import css from './not-found.module.scss'
import Link from 'next/link'
import Title from 'src/core/shared/title/title.component'
import ButtonComponent from 'src/core/shared/button/button.component'
import { NextPage } from 'next'



const FastStart: NextPage = () => {
        return (
            <div className={`${css['not-found']} common`}>
                <span className={`${css['not-found__logo']}`}>404</span>
                <Title className='mt-8 mb-8' text='Səhifə mövcud deyil' size='small' />
                <p>Axtardığınız səhifə mövcud deyil, və ya ünvanı dəyişdirilib. Keçid linkini bir daha yoxlayın
                    və ya <Link href='/' className='link'>Dəstək Mərkəzinə</Link> müraciət edin.</p>

                <ButtonComponent color='dark' classNames='mt-40'>
                    Ana səhifəyə qayıt
                </ButtonComponent>
            </div>
        )
}

export default FastStart