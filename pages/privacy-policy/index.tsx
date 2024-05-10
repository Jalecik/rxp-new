import React from 'react'

import Title from 'src/core/shared/title/title.component'
import { NextPage } from 'next'

import css from './privacy-policy.module.scss'

const list = ['Cras vehicula ligula et ultricies vestibulum.',
    'Nullam aliquet arcu eget est tristique, sed auctor purus tincidunt.',
    'Duis aliquet libero eu justo facilisis accumsan.',
    'Mauris ut turpis dictum, facilisis dolor sit amet, mattis purus.',
    'Nulla tincidunt nisl in eros rutrum, sed interdum leo pharetra.',
    'Vestibulum id ex sed elit posuere dictum.'
]


const UnderConstruction: NextPage = () => (
    <div className={`${css.privacy} container container-custom`}>
        <div className="row">
            <div className="col-12 p-0">
                <Title className='mt-12 mb-8 ml-0 pl-0' text='İstifadə şərtləri' size='small' />
            </div>

            <Title className='mt-24 mb-24' text='Lorem ipsum dolor sit amet consecteur' size='extraSmall' />
            <p>Aliquam id ornare nisl. Maecenas sit amet magna non neque pharetra
                posuere sit amet sit amet felis. Suspendisse rhoncus mattis nulla et venenatis.
                Maecenas libero arcu, lobortis sit amet purus eu, sollicitudin commodo tellus. Aenean mi metus, venenatis at interdum id, feugiat in velit. Suspendisse in lorem pretium lorem facilisis luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut tempus pulvinar auctor. Sed dignissim hendrerit semper. Vivamus eu suscipit magna, vitae viverra lectus. Curabitur fermentum enim justo, ut sagittis mauris ultricies non. Aenean sem tortor, tincidunt quis felis quis, sagittis tempus nibh.
                Sed massa erat, aliquam sed pulvinar id, porttitor eu nunc.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sem id mollis vehicula.
                Cras nec velit quis odio varius consequat non nec neque.
                Sed quis tortor feugiat, tincidunt risus et, interdum arcu.
                Donec lobortis mi vel massa tristique, nec malesuada massa fermentum.
                Duis dictum consectetur bibendum. Aliquam magna leo,
                ullamcorper nec aliquam vel, commodo quis libero.
                Cras tempus nisi massa, et auctor odio sollicitudin vel.
                Aenean facilisis facilisis nulla feugiat maximus.
                Morbi aliquam quam diam, at hendrerit purus eleifend et.</p>

            <Title className='mt-24 mb-24'
                text='Lorem ipsum dolor sit amet consecteur'
                size='extraSmall' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed congue sem id mollis vehicula. Cras nec velit quis odio varius consequat non nec neque. Sed quis tortor feugiat, tincidunt risus et, interdum arcu. Donec lobortis mi vel massa tristique, nec malesuada massa fermentum. Duis dictum consectetur bibendum. Aliquam magna leo, ullamcorper nec aliquam vel, commodo quis libero. Cras tempus nisi massa, et auctor odio sollicitudin vel. Aenean facilisis facilisis nulla feugiat maximus.
                Morbi aliquam quam diam, at hendrerit purus eleifend et.</p>

            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>Nulla eu risus at purus euismod accumsan porta a libero. Donec id fermentum risus, ac vehicula ex. Donec eu libero in sapien suscipit varius aliquet non lectus. Vivamus magna nulla, aliquam ut elementum ut, luctus a urna. Vivamus hendrerit velit laoreet, convallis elit vitae, sodales urna. Donec sit amet faucibus erat. Sed dignissim mi nec posuere aliquet. Donec et pharetra mauri</p>
            <p>Nullam posuere et lectus ac facilisis. Nam augue neque, bibendum eu augue vel, aliquam euismod justo. Vivamus aliquet in enim lacinia mollis. Sed sit amet sodales nisl. Donec non posuere ligula. Mauris quis eros volutpat, lobortis eros a, ullamcorper leo. Aliquam eu purus sodales, feugiat mauris eget, aliquet est. Donec faucibus sit amet nulla id vulputate. Duis vitae pretium erat. Fusce eleifend luctus facilisis.</p>
        </div>
    </div>
)

export default UnderConstruction
