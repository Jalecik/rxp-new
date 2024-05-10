import { NextPage } from 'next';
import React from 'react';
import Title from 'src/core/shared/title/title.component';
import css from './news.module.scss';
import CommonCard from 'src/core/shared/common-cards/common-cards.component';
import { Pagination } from 'antd';
import Link from 'next/link';
import { getNewsData } from 'src/features/news/services/news.service';


const list = [
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque aaaaaaaaaaaaaa', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque aaaaaaaaaaaa', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque aaaaaaaa', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque', date: '29.04.2023' },

    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque aaaaaaaaaaaaaa', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque aaaaaaaaaaaa', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque aaaaaaaa', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque', date: '29.04.2023' },

    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque aaaaaaaaaaaaaa', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque aaaaaaaaaaaa', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque aaaaaaaa', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque', date: '29.04.2023' },
    { title: '2023 – İllik hesabat', text: 'Lorem ipsum dolor sit amet consecteur aliguam pellentesque lorem ipsum dolor sit amet consecteur aliguam pellentesque', date: '29.04.2023' },
]


export const getServerSideProps = async () => {
    try {
      const data = await getNewsData();
      return { props: { data } };
    } catch (error) {
        console.error('Error:', error);
      return { props: { error: { message: 'Xəta arandı' } } };
    }
  };

const News: NextPage = () => {

    return (
        <section>
            <div className="container container-custom mt-40">
                <div className='row'>
                    <div className="col-md-12 p-0">
                        <Title className='p-0' text='Yeniliklər' size='large' />
                    </div>
                        <ul className={`${css['innovations-list']} mt-20`}>
                            {list.map((item, index) => (
                                <li key={index} className="mb-25">
                                    <Link href={'/news/1'}>
                                        <CommonCard
                                            style={{ height: '100%', padding: '24px', background: 'red' }}
                                            title={item.title}>
                                            <div className={`${css['innovations-list__text']} text-ellipsis`}>
                                                <p>{item.text}</p>
                                            </div>
                                            <span>{item.date}</span>
                                        </CommonCard>
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    <Pagination className='mb-32 pagination' current={1} onChange={() => console.log()} total={50} />

                </div>
            </div>
        </section>
    );
}

export default News;
