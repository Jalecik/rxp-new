import { LogoRXP } from 'assets/images/logo';
import StepsComp from 'components/fast-start/steps/steps.component';
import { NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import ResultList from 'src/core/shared/result-list/result-list.component';
import Title from 'src/core/shared/title/title.component';
import css from './fast-start.module.scss';
import { ArrowLeft, ArrowRight } from 'assets/images/common';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CommonCard from 'src/core/shared/common-cards/common-cards.component';
import ButtonComponent from 'src/core/shared/button/button.component';
import { DislikeIcon, LikeIcon, ThunderFastIcon } from 'assets/images/fast-start/fast-start';
import { useGetInitialFastStart } from 'src/features/fast-start/actions/fast-start.queries';
import { usePostFastStartLastItem } from 'src/features/fast-start/actions/fast-start.mutation';
import { useMutation } from 'react-query';
import { getFastStartFurther } from 'src/features/fast-start/services/fast-start.service';


const FastStart: NextPage = () => {
    const router = useRouter();

    const [clickedSlug, setClickedSlug] = useState('');
    const [slugArr, setSlugArr] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(-1)

    const { data: fastStartData, isLoading, refetch } = useGetInitialFastStart();
    const { mutate: mutateFastStartLastItem, data: fastStartLastItem } = usePostFastStartLastItem();

    const { mutate: fetchDataMutation, data: fastStartFurther } = useMutation(
        async (slug) => {
            const response = await getFastStartFurther(slug);
            return response;
        },
        {
            onSuccess: (data) => {
                if (data.hasDetail) {
                    mutateFastStartLastItem(data.id);
                }
            },
            onError: (error) => {
                console.error('Error:', error);
            },
        }
    );


    // console.log('fastStartData:', fastStartData);
    console.log('slugArr:', slugArr);
    console.log('currentIndex:', currentIndex);

    const handleNext = () => {
        // setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        if (slugArr[currentIndex - 1]) {
            //@ts-ignore
            fetchDataMutation(slugArr[currentIndex - 1]);
            setCurrentIndex(prevIndex => prevIndex - 1);
        } else {
            refetch()
        }
    };

    const handleClick = (id: number, slug: string) => {
        setClickedSlug(slug);
        setSlugArr([...slugArr, slug]);
        setCurrentIndex(prevIndex => prevIndex + 1)
        //@ts-ignore
        fetchDataMutation(slug);
    }

    return (
        <div className={`container container-custom ${css['fast-start']}`}>
            <div className="row" style={{width: '100%'}}>
                <div className="mt-40 col-12 pl-0 ml-0  d-sm-none">
                    <Link href={{ pathname: '/', query: { ...router.query } }}>
                        <LogoRXP />
                    </Link>
                </div>
                <div className={`${css['fast-start_left']} col-sm-12 col-md-8 mt-23`}>
                    <div className="d-flex justify-between">
                        <div className={`${css['fast-start_header']} d-flex`}>
                            {currentIndex == 0 || currentIndex == -1 ? <>
                                <ThunderFastIcon />
                                <span>Sürətli başla</span></>
                                : <><ArrowLeft />
                                    <span
                                        onClick={handleBack}
                                        style={{ color: '#4E5E87', fontFamily: 'IBM Plex Sans Regular' }}>
                                        Geri
                                    </span></>}
                        </div>
                    </div>

                    <div className='mt-46'>
                        <div className={`${css['fast-right']}`}>
                            {fastStartFurther && fastStartFurther?.data && slugArr[currentIndex - 1] ?
                                fastStartFurther?.hasDetail == false ?
                                    <><Title text={fastStartFurther?.title} size='small' />
                                        <ResultList
                                            isLink={false}
                                            url='fast-start'
                                            click={(id: number, slug: string, item: any) => handleClick(id, slug)}
                                            list={fastStartFurther?.data} /></>
                                    : <div className='mt-32' style={{ width: '100%' }}>
                                        <ul className={`${css['services-list']} row p-0`} style={{ width: '100%' }}>{fastStartLastItem?.services?.map((item: any, index: number) => (
                                            <li key={index} className="col-md-6 pl-10 pr-17 mb-25 ">
                                                <Link href={item.slug}><CommonCard
                                                    title={item.name}
                                                    icon={item.image}
                                                /></Link>
                                            </li>
                                        ))}</ul>

                                        <Link href={'/services'} className={`${css['all-services']} d-flex`}>
                                            <ArrowRight color='#0085FF' width={24} height={24} /> <span> Bütün xidmətlər</span>
                                        </Link>

                                        <div className={css.feedback}><p>Sürətli keçid sizə xidmət tapmaqda faydalı oldu?</p>
                                            <ul className='d-flex'>
                                                <li>
                                                    <ButtonComponent classNames={'d-flex justify-center ml-10'} color='primary'>
                                                        <LikeIcon /> <span className='ml-3'>Bəli</span>
                                                    </ButtonComponent>
                                                </li>
                                                <li>
                                                    <ButtonComponent classNames={'d-flex justify-center ml-10'} color='primary'>
                                                        <DislikeIcon /> <span className='ml-3'>Xeyr</span>
                                                    </ButtonComponent>
                                                </li>
                                            </ul></div>
                                    </div>
                                : <><Title text={fastStartData?.title} size='small' />
                                    <ResultList
                                        isLink={false}
                                        url={'fast-start'}
                                        click={(id: number, slug: string) => handleClick(id, slug)}
                                        list={fastStartData?.data} /></>}
                </div></div></div>
                <div className={`col-sm-12 d-sm-none col-md-4 p-0 ${css.steps}`}>
                    <StepsComp stepsArr={fastStartLastItem ? fastStartLastItem.sidebar : (fastStartFurther ? fastStartFurther?.data : fastStartData?.data)} className='mt-46' stepsList={fastStartFurther && fastStartFurther?.sidebar ? fastStartFurther?.sidebar : fastStartData?.sidebar} />
                </div>
            </div>
        </div>
    );
}

export default FastStart;
