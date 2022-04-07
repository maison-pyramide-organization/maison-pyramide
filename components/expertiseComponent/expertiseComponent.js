import Image from 'next/image'
import Link from 'next/link';
import dynamic from "next/dynamic";

import { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import {
    TransitionGroup,
    CSSTransition,
} from "react-transition-group";

import expertStyles from './Expertise.module.scss';

// import expimg from '../../public/imgs/expbg.png';
// import expimg2 from '../../public/imgs/homebg.png';
// import LoaderComponent from '../loader/Loader';

import expImgMobile from '../../public/imgs/mobile/expertbgM.png';
import expimgt from '../../public/imgs/expbg.png';
import expimg from '../../public/imgs/Untitled-4-04.png';
import expimg2 from '../../public/imgs/Untitled-4-03.png';
import expimg3 from '../../public/imgs/Untitled-4-02.png';
import expimg4 from '../../public/imgs/Untitled-4-05.png';
import expimg5 from '../../public/imgs/Untitled-4-01.png';

import expmobileimg1 from '../../public/imgs/mob-exp-10.png';
import expmobileimg2 from '../../public/imgs/mob-exp-09.png';
import expmobileimg3 from '../../public/imgs/mob-exp-08.png';
import expmobileimg4 from '../../public/imgs/mob-exp-07.png';
import expmobileimg5 from '../../public/imgs/mob-exp-06.png';

const IsMobileComponent = dynamic(
    () => {
        return import("../isMobile/IsMobileComponent");
    },
    { ssr: false }
);


const ParallaxCache = dynamic(
    () => {
        return import("../parallaxCache/parallaxCache");
    },
    { ssr: false }
);

function ClientComponent() {

    const [isMobile, setIsMobile] = useState(null);
    // const [isLoading , setIsLoading] = useState(true);
    const [isHideText, setIsHideText] = useState(false);
    const [loadingFlag, setLoadingFlag] = useState(false);
    const [revealing, setRevealing] = useState(false);

    const [expertise, setExpertise] = useState(0);
    const [expertiseText, setExpertiseText] = useState();
    const [expContent, setExpContent] = useState([
        {
            description: "We help gobal and MENA-based companies identify opportunities to thrive - and to grow. Our expertise extends across a range of industry verticals, in the worlds of fashion, media, retail, lifestyle, and public affairs.",
            img: expimg,
            mobileImg: expmobileimg1
        },
        {
            description: "We help gobal and MENA-based companies identify opportunities to thrive - and to grow. Our expertise extends across a range of industry verticals, in the worlds of fashion, media, retail, lifestyle, and public affairs.",
            img: expimg2,
            mobileImg: expmobileimg2

        },
        {
            description: "We help gobal and MENA-based companies identify opportunities to thrive - and to grow. Our expertise extends across a range of industry verticals, in the worlds of fashion, media, retail, lifestyle, and public affairs.",
            img: expimg3,
            mobileImg: expmobileimg3
        },
        {
            description: "We help gobal and MENA-based companies identify opportunities to thrive - and to grow. Our expertise extends across a range of industry verticals, in the worlds of fashion, media, retail, lifestyle, and public affairs.",
            img: expimg4,
            mobileImg: expmobileimg4
        },
        {
            description: "We heip gobal and MENA-based companies identify opportunities to thrive - and to grow. Our expertise extends across a range of industry verticals, in the worlds of fashion, media, retail, lifestyle, and public affairs.",
            img: expimg5,
            mobileImg: expmobileimg5
        }
    ]);
    const [nextImg, setNextImg] = useState(expimg);

    const useHandleMobile = (value) => {
        useEffect(() => {
            setIsMobile(value)
        }, [])
    }

    const handleExpertise = (n) => {
        if(n == expertise){
            return false;
        }
        setIsHideText(true);
        setLoadingFlag(true);
        if (isMobile) {
            setNextImg(expContent[n].mobileImg)
        }
        else {
            setNextImg(expContent[n].img);
        }
        setTimeout(() => {
            setRevealing(true);
        }, 200);
        setTimeout(() => {
            setExpertise(n);            
        }, 1000);
    }
    useEffect(() => {
        setTimeout(() => {
            setRevealing(false);
            setLoadingFlag(false);
            setIsHideText(false);

        }, 100);
    },[expertise])

    useEffect(() => {
        switch (expertise) {
            case 0:
                return setExpertiseText('fashion');
            case 1:
                return setExpertiseText('media');
            case 2:
                return setExpertiseText('lifestyle');
            case 3:
                return setExpertiseText('public-affairs');
            case 4:
                return setExpertiseText('retail');
        }
    }, [expertise]);

    // useEffect(() => {
    //     if(nextImg){
    //         setTimeout(() => {
                
    //             setIsLoading(false);
    //         }, 1000);
    //     }
    // },[])


    return (
        <ParallaxProvider>
            {/* <LoaderComponent isLoading={isLoading}/> */}

            <Parallax translateY={[isMobile ? 10 : 7, isMobile ? -10 : -30, isMobile?'easeOutQuint':'easeOutQuint']} style={{ background: 'linear-gradient(#F4F3EF 50%,transparent 50%)' }}>
                <ParallaxCache />
            {isMobile? (
                <>
                    <link rel="preload" as="image" href={expmobileimg1.src}></link>
                    <link rel="preload" as="image" href={expmobileimg2.src}></link>
                    <link rel="preload" as="image" href={expmobileimg3.src}></link>
                    <link rel="preload" as="image" href={expmobileimg4.src}></link>
                    <link rel="preload" as="image" href={expmobileimg5.src}></link>
                </>
                ):
                (
                <>
                    <link rel="preload" as="image" href={expimg.src}></link>
                    <link rel="preload" as="image" href={expimg2.src}></link>
                    <link rel="preload" as="image" href={expimg3.src}></link>
                    <link rel="preload" as="image" href={expimg4.src}></link>
                    <link rel="preload" as="image" href={expimg5.src}></link>
                </>

            )}
                <section className={expertStyles.expertise}>
                    <IsMobileComponent handleMobile={useHandleMobile} />
                    <div className={expertStyles.expBgWrap}>

                        <TransitionGroup>
                            {loadingFlag && (
                                <CSSTransition key={1} timeout={1000} classNames={'revealingContainer'}>
                                    <div className={expertStyles.wrapper}>

                                        <TransitionGroup className={expertStyles.loaderContainer}>
                                            {revealing && (
                                                <CSSTransition key={3} timeout={2000} classNames={'revealing2'}>
                                                    <div className={expertStyles.loader} style={{ backgroundImage: `url(${nextImg.src})` }}>
                                                    </div>
                                                </CSSTransition>
                                            )}
                                        </TransitionGroup>
                                        <TransitionGroup className={expertStyles.loaderContainer}>
                                            {revealing && (
                                                <CSSTransition key={3} timeout={2000} classNames={'revealing2'}>
                                                    <div className={expertStyles.loader} style={{ backgroundImage: `url(${nextImg.src})` }}>
                                                    </div>
                                                </CSSTransition>
                                            )}
                                        </TransitionGroup>
                                        <TransitionGroup className={expertStyles.loaderContainer}>
                                            {revealing && (
                                                <CSSTransition key={3} timeout={2000} classNames={'revealing2'}>
                                                    <div className={expertStyles.loader} style={{ backgroundImage: `url(${nextImg.src})` }}>
                                                    </div>
                                                </CSSTransition>
                                            )}
                                        </TransitionGroup>
                                        <TransitionGroup className={expertStyles.loaderContainer}>
                                            {revealing && (
                                                <CSSTransition key={3} timeout={2000} classNames={'revealing2'}>
                                                    <div className={expertStyles.loader} style={{ backgroundImage: `url(${nextImg.src})` }}>
                                                    </div>
                                                </CSSTransition>
                                            )}
                                        </TransitionGroup>
                                        <TransitionGroup className={expertStyles.loaderContainer}>
                                            {revealing && (
                                                <CSSTransition key={3} timeout={2000} classNames={'revealing2'}>
                                                    <div className={expertStyles.loader} style={{ backgroundImage: `url(${nextImg.src})` }}>
                                                    </div>
                                                </CSSTransition>
                                            )}
                                        </TransitionGroup>
                                    </div>
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                        <div>
                            <Image
                                alt="expertise"
                                unoptimized={true}
                                loading="eager"                              
                                // src={isMobile ? expContent[expertise].mobileImg : expContent[expertise].img}
                                src={isMobile ? expContent[expertise].mobileImg : expContent[expertise].img}
                                layout="responsive"
                                objectFit="cover"
                                // objectPosition="20% 20%"
                                // quality={100}
                            />
                        </div>
                        {/* <TransitionGroup> */}
                            {/* {!isHideText && ( */}
                                {/* <CSSTransition key={3} timeout={500} classNames={'item'}> */}

                                    <div className={expertStyles.expBgText}>
                                        <h1>Our Expertise</h1>
                                        <Container>
                                            <div className={expertStyles.elements}>
                                                <ul>
                                                    <li className={expertise == 0 ? expertStyles.active : ''} onClick={() => handleExpertise(0)}>
                                                        Fashion
                                                    </li>
                                                    <li className={expertise == 1 ? expertStyles.active : ''} onClick={() => handleExpertise(1)}>
                                                        Media
                                                    </li>
                                                    <li className={expertise == 2 ? expertStyles.active : ''} onClick={() => handleExpertise(2)}>
                                                        Lifestyle
                                                    </li>
                                                    <li className={expertise == 3 ? expertStyles.active : ''} onClick={() => handleExpertise(3)}>
                                                        Public Affairs
                                                    </li>
                                                    <li className={expertise == 4 ? expertStyles.active : ''} onClick={() => handleExpertise(4)}>
                                                        Retail
                                                    </li>
                                                </ul>
                                                <div className="text-center">
                                                    <p>{expContent[expertise].description}</p>
                                                    <div className={expertStyles.myBtn}>

                                                        <Link href={`/expertise`}>
                                                            <button>
                                                                <a>
                                                                    LEARN MORE
                                                                </a>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Container>
                                    </div>
                                {/* </CSSTransition> */}
                            {/* )} */}
                        {/* </TransitionGroup> */}
                    </div>

                </section>
            </Parallax>
        </ParallaxProvider>
    )

}


export default ClientComponent;

