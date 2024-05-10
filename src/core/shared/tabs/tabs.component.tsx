import css from './tab.module.scss';
import { ITabTypes } from './tabs';
import { useState } from 'react';
import Title from '../title/title.component';
import Badge from '../badge/badge.component';
import ResultList from '../result-list/result-list.component';

const Tabs = ({ tabs, content, className, isTitle = true, children, handleTabchange }: ITabTypes) => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number, id: number) => {
        setActiveTab(index);
        if (handleTabchange) {
            handleTabchange(id);
        }
    }
    return (
        <div className='d-flex'>
            <div className={`${css.tabs} ${className} d-sm-none col-sm-12 col-md-4 pr-16`}>
                <div className={`${css['tabs-inner']}`}>
                    <ul className={`${css['tabs-list']} `}>
                        {tabs?.map((tab: any, index: number) => (
                            <li key={index} className={`d-flex justify-between ${index === activeTab ? css.active : ''}`}
                                onClick={() => handleTabClick(index, tab?.id)}>
                                <span className={css['tabs-header']}>{tab.name}</span>
                                {tab.count && <div className={css['tabs-count']}>{tab.count}</div>}
                                {tab.status && <Badge className='ml-8 mr-0' badgeTitle={tab.status?.name} status={tab.status?.color} />}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`col-sm-12 col-md-8 ${css['tabs-content']} pr-0`}>
                {children}
                {isTitle && <Title text={(tabs[activeTab] as any).header} size='extraSmall' />}
                {/* {(tabs[activeTab] as any).content} */}
                <ResultList className={'mt-24 mb-32'} list={content} />
            </div></div>
    );
}


export default Tabs


