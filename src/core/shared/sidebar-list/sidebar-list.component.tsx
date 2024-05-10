import Link from 'next/link';
import css from './sidebar-list.module.scss';
import { ISidebarListTypes } from './sidebar-list';
import { ArrowRight } from 'assets/images/common';
import { useState } from 'react';

const SidebarList = ({ list, className, queueTitle, queueText, children, linkTitle, queueLink = '#', isQueue = true }: ISidebarListTypes) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    }

    return (
        <div className={`${className} d-flex-res`}>
            <div className={`col-sm-12 col-md-8 ${css['sidebar-content']}`}>
                {children}
                {(list[activeTab] as any).content}
            </div>
            <div className={`${css.sidebar}`}>
                <div className={`${css['sidebar-inner']} d-sm-none`}>
                    <ul className={`${css['sidebar-list']}`}>
                        {list.map((item, index) => (
                            <li key={index}>
                                <div onClick={(event) => handleTabClick(index)}>
                                    {item.title}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                {isQueue && <div className={`${css['digital-queue']} d-sm-none`}>
                    <h6>{queueTitle}</h6>
                    <p>{queueText}</p>
                    <Link href={queueLink}>
                        {linkTitle} <ArrowRight width={24} height={24} />
                    </Link>
                </div>}
            </div>
        </div>
    );
}


export default SidebarList


