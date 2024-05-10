import { connect } from 'react-redux'
import React, { Component } from 'react'

import Title from 'src/core/shared/title/title.component'
import ButtonComponent from 'src/core/shared/button/button.component'
import { BlockIcon } from 'assets/images/common'
import { NextPage } from 'next'

const NoAccess: NextPage = () => {
    return (
            <div className={'common'}>
                <BlockIcon/>
                <Title className='mt-12 mb-8' text='Giriş qadağandır' size='small' />
                <p>Bu səhifəyə daxil olma səlahiyyətiniz yoxdur.</p>

                <ButtonComponent color='dark' classNames='mt-40'>
                    Ana səhifəyə qayıt
                </ButtonComponent>
            </div>
        )
}

export default NoAccess