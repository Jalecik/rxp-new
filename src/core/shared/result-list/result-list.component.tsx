import Link from 'next/link';
import css from './result-list.module.scss';
import { IResultListTypes } from './result-list';
import { ArrowRight } from 'assets/images/common';
import Badge from '../badge/badge.component';

const ResultList = ({ list, className,url, click, isLink = true }: IResultListTypes) => {
    return (
        <div className={`${css.result} ${className}`}>
            <div className={`${css['result-inner']}`}>
                <ul className={`${css['result-list']}`}>
                    {list?.map((item, index) => (
                        isLink ? <li key={index}>
                            <Link href={`/${url}/${item.slug}`}>
                                <div className={`${css['result-list_item']}`}>
                                    <div className='d-flex align-center'>
                                        {item.image && <img src={`${item.image}`} alt='icon'/>}
                                        {/* <Image src={item.image} alt='icon' width={50} height={50} /> */}
                                        <span className={item.badgeStatus == 'soon' ? 'disabled' : ''}>{item.name}</span></div>
                                        <div className='d-flex align-center'>  {item.status && <Badge badgeTitle={item.status?.name} status={item.status?.color} />}
                                        <div className='pr-16'><ArrowRight /></div></div>
                                </div>
                            </Link>
                        </li> : <li key={index} onClick={() => click(item.id, item.slug)}>
                            <div className={`${css['result-list_item']}`}>
                                <div className='d-flex align-center'>
                                    {/* <div>{item.icon}</div> */}
                                    {item.image && <img src={item.image} alt='icon'/>}
                                     <span className={item.badgeStatus == 'soon' ? 'disabled' : ''}>{item.name}</span>
                                    </div>
                                <div className='d-flex align-center'>  {item.status && <Badge badgeTitle={item.status?.name} status={item.status?.color} />}
                                    <div className='pr-16'><ArrowRight /></div></div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}


export default ResultList


