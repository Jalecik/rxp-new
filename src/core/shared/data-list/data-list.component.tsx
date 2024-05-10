import Link from 'next/link';
import css from './data-list.module.scss';
import { IResultListTypes } from './data-list';
import { ArrowRight, LinkIcon } from 'assets/images/common';

const DataList = ({ list, className, click}: IResultListTypes) => {
    return (
        <div className={`${css['data-list']} ${className}`}>
            <div className={`${css['data-list__inner']}`}>
                <ul>
                    {list.map((item, index) => (
                        <li key={index}>
                            <Link href={item.link}>
                                <h5 className='m-0'>
                                    {item.title}
                                </h5>
                                <p className='pb-16 pt-16'>{item.text}</p>
                                <span className='details'>Ətraflı<LinkIcon color='#0085FF' /></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default DataList


