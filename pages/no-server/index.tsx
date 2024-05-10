import React from 'react'

import Title from 'src/core/shared/title/title.component'
import ButtonComponent from 'src/core/shared/button/button.component'
import { ServerIcon } from 'assets/images/common'
import { NextPage } from 'next'


const NoServer: NextPage = () => {
    return (
        <div className={`common`}>
            <ServerIcon />
            <Title className='mt-12 mb-8' text='Giriş qadağandır' size='small' />
            <p>Bu səhifəyə daxil olma səlahiyyətiniz yoxdur.</p>

            <ButtonComponent color='dark' classNames='mt-40'>
                Ana səhifəyə qayıt
            </ButtonComponent>
        </div>
    )
}
export default NoServer