import React from 'react'

import Title from 'src/core/shared/title/title.component'
import ButtonComponent from 'src/core/shared/button/button.component'
import { ConstructionIcon } from 'assets/images/common'
import { NextPage } from 'next'

const UnderConstruction: NextPage = () => {
        return (
            <div className={`common`}>
                <ConstructionIcon />
                <Title className='mt-12 mb-8' text='Portal müvəqqəti olaraq işləmir' size='small' />
                <p>Lorem ipsum dolor sit amet consecteur aliguam pellentesque dorohedoro lorem ipsum aliguam.</p>

                <ButtonComponent color='dark' classNames='mt-40'>
                    Ana səhifəyə qayıt
                </ButtonComponent>
            </div>
        )
    }

export default UnderConstruction