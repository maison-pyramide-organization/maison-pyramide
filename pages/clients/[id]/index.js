import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { AnimatePresence, motion } from 'framer-motion';

import Layout from "../../../components/layout/Layout";
// import projectBanner from "../../../public/imgs/projectviewimg.png";
// import mobileBanner from "../../../public/imgs/mobile/orangegirlmobile.png";
// import projectimg1 from '../../../public/imgs/projectview1.png';
// import projectimg1mobile from '../../../public/imgs/mobile/twogirlsmobile.png';
// import projectimg2 from '../../../public/imgs/projectview2.png';
// import projectimg3 from '../../../public/imgs/projectview3.png';
// import projectimg4 from '../../../public/imgs/projectview4.png';
// import projectResults from '../../../public/imgs/projectresults.png';

import projectStyles from "./Project.module.scss";
import FeatureService from "../../api/services/FeatureService";

const SliderComponent = dynamic(
    () => {
        return import("../../../components/slider/sliderComponent");
    },
    { ssr: false }
);
const ParallaxCache = dynamic(
    () => {
        return import("../../../components/parallaxCache/parallaxCache");
    },
    { ssr: false }
);
const GlassEffectComponent = dynamic(
    () => {
        return import("./GlassEffectComponent");
    },
    { ssr: false }
);
const IsMobileComponent = dynamic(
    () => {
        return import("../../../components/isMobile/IsMobileComponent");
    },
    { ssr: false }
);

export default function Project() {
    const [isBreak, setIsBreak] = useState(false);
    const [isMobile, setIsMobile] = useState(null);
    const [data, setData] = useState({});
    const query = useRouter();
    const id = query?.query?.id;

    const headerVariants = {
        hidden: { opacity: 0, y: "30%", scale: 1.05 },
        enter: { opacity: 1, y: 0, scale: 1 }
    }
    const textVariants = {
        hidden: { opacity: 0, x: 15 },
        enter: { opacity: 1, x: 0 }
    }

    useEffect(() => {
        if(id){
        FeatureService.getFeature(id).then(res => {
            setData(res.data.attributes);
        }).catch(err => {
            console.log(err);
        })
    }
    }, [id, query?.query?.id]);


    const handleScroll = (amount, direction) => {
        if (direction == 'down' && amount > 650) {
            setIsBreak(true);
        }
        else if (direction == 'up' && amount < 650) {
            setIsBreak(false)
        }
    }
    const animatedText = (text) => {
        let textArr = text?.split(" ");
        textArr?.map((word, i) => {
            textArr[i] = <motion.span
                key={i}
                initial="hidden"
                whileInView="enter"
                exit="exit"
                variants={textVariants}
                transition={{ duration: 1, delay: i * .02, ease: "easeInOut", type: 'linear' }}
            >
                {word + ' '}
            </motion.span>
        })
        return textArr;
    }


    const useHandleMobile = (value) => {
        useEffect(() => {
            setIsMobile(value)
        }, [])
    }
    console.log("data",data)
    return (
        <>
            <IsMobileComponent handleMobile={useHandleMobile} />
            {/* {isMobile? (
                <>
                    <link rel="preload" as="video" type="video/mp4" href={data?.mobile_video?.custom_data?.url}></link>
                </>
                ):
                (
                <>
                    <link rel="preload" as="video" type="video/mp4" href={data?.video?.custom_data?.url}></link>
                </>

            )} */}
            
            {data && (

                <ParallaxProvider>
                    <ParallaxCache />
                    <header className={projectStyles.header} style={{ backgroundColor: data.background_color ? `rgba(${data.background_color.red},${data.background_color.green},${data.background_color.blue},${data.background_color.alpha})` : '' }}>
                        <AnimatePresence>
                            <motion.h1
                                initial="hidden"
                                // animate="enter"
                                whileInView={"enter"}
                                // viewport={{ once: true }}
                                variants={headerVariants}
                                className="text-center"
                                transition={{ duration: 1.2, ease: "easeInOut", type: 'linear' }}
                                style={{ color: data.font_color ? `rgba(${data.font_color.red},${data.font_color.green},${data.font_color.blue},${data.font_color.alpha})` : '' }}
                            >
                                {data.header_title}
                            </motion.h1>
                        </AnimatePresence>
                        <p style={{ color: data.font_color ? `rgba(${data.font_color.red},${data.font_color.green},${data.font_color.blue},${data.font_color.alpha})` : '' }}>
                            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non enim velit massa <br className="disktop_only"/> venenatis. Eget quis quisque nunc tellus consequat egestas non. */}
                            {animatedText(data.header_description)}
                        </p>
                    </header>

                    <section className={projectStyles.project_info}>
                        <ParallaxProvider>
                            <Parallax translateY={[isMobile ? 0 : 0, isMobile ? -20 : -20]}>
                                <ParallaxCache />
                                {isMobile ? (
                                    <>
                                        {data?.mobile_image?.custom_data?.url ? (//mobile image
                                            <div className={projectStyles.project_img} style={{ backgroundImage: `url(${data?.mobile_image?.custom_data?.url})` }}>
                                                <div className={projectStyles.breakingImgCont}>
                                                    <GlassEffectComponent handleScroll={handleScroll} />
                                                    <div className={`${projectStyles.glass} ${isBreak ? projectStyles.glass1 : projectStyles.glass2}`} style={{ backgroundImage: `url(${data?.mobile_image?.custom_data?.url})` }}></div>
                                                </div>
                                            </div>
                                        ) :
                                            (//mobile video
                                                <video autoPlay playsInline muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={data?.mobile_video?.custom_data?.url}>
                                                </video>
                                            )}
                                    </>
                                ) : (//desktop
                                    <>
                                        {data?.image?.custom_data?.url ? (//image
                                            <div className={projectStyles.project_img} style={{ backgroundImage: `url(${data?.image?.custom_data?.url})` }}>
                                                <div className={projectStyles.breakingImgCont}>
                                                    <GlassEffectComponent handleScroll={handleScroll} />
                                                    <div className={`${projectStyles.glass} ${isBreak ? projectStyles.glass1 : projectStyles.glass2}`} style={{ backgroundImage: `url(${data?.image?.custom_data?.url})` }}></div>
                                                </div>
                                            </div>
                                        ) :
                                            (//video
                                                <video autoPlay playsInline muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }} src={data?.video?.custom_data?.url}>
                                                </video>
                                            )}
                                    </>
                                )}

                            </Parallax>
                        </ParallaxProvider>
                        <ParallaxProvider>
                            <Parallax translateY={[isMobile ? 20 : 20, isMobile ? -20 : -20, 'easeOutQuint']}>
                                {/* <Parallax translateY={[10, -90,'easeOutQuint']}> */}
                                <ParallaxCache />
                                <div className={projectStyles.project_text}>
                                    <Container fluid>
                                        <Row className={projectStyles.info_row}>
                                            <Col md={6} className="mobile mb-3">
                                                <p>INTRO</p>
                                                <p>
                                                {animatedText(data.intro)}
                                                    {/* {Lorem ipsum dolor sit amet, consect adipiscing elit. Hendrerit sed cursus mattis id sed viverra. Nibh nulla consequat lorem turpis. Sit morbi sed tempus, amet, mattis. Sagittis velit lectus in eget nec sagittis adipiscing porta. Aliquet commodo, velit feugiat egestas.
    Eu, dignissim tortor, eu quis. Fer}mentum risus lobortis sed leo adipiscing interdum etiam ornare vel. Eu et ullamcorper. */}
                                                </p>
                                            </Col>
                                            <Col md={1} xs={4}>
                                                <p className="mb-4">YEAR</p>
                                                <p>2020</p>
                                            </Col>
                                            <Col md={4} xs={8}>
                                                <p className="mb-4">
                                                    SERVICES
                                                </p>
                                                <div>
                                                    <ul>
                                                        {data.services && JSON.parse(data.services).map((service, key) => {
                                                            return (
                                                                <li key={key}>
                                                                    {service}
                                                                </li>
                                                            )
                                                        })}
                                                    </ul>
                                                </div>
                                            </Col>
                                            <Col md={6} className="disktop_only">
                                                <p>INTRO</p>
                                                <p className={projectStyles.intro_text}>
                                                {animatedText(data.intro)}
                                                </p>
                                            </Col>
                                        </Row>


                                    </Container>
                                </div>
                            </Parallax>
                        </ParallaxProvider>
                        <Container className={projectStyles.images}>
                            <ParallaxProvider>
                                <Parallax translateY={[isMobile ? 20 : 20, isMobile ? -20 : -20, 'easeOutQuint']}>
                                    <ParallaxCache />
                                    <Row style={{ justifyContent: 'space-around' }}>
                                        <Col md={5} className="mb-4">

                                            {
                                                data.challenge_images && (
                                                    <Image src={data?.challenge_images[0]?.custom_data?.url} unoptimized={true} width={100} height={130} objectFit={'cover'} layout="responsive"></Image>
                                                )
                                            }
                                        </Col>
                                        <Col md={5}>
                                            {
                                                data.challenge_images && (
                                                    <Image src={data?.challenge_images[1]?.custom_data?.url} unoptimized={true} width={100} height={130} objectFit={'cover'} layout="responsive"></Image>
                                                )
                                            }
                                        </Col>
                                    </Row>
                                </Parallax>
                            </ParallaxProvider>
                        </Container>
                    </section>
                    <ParallaxProvider>
                        <ParallaxCache />
                        <Parallax translateY={[isMobile ? 20 : 20, isMobile ? -20 : -20, 'easeOutQuint']}>
                            <section className={projectStyles.challenge}>
                                <Container>
                                    {/* <h2>
                The Challenge
            </h2> */}
                                    <p>
                                        {animatedText(data.challenge_description)}
                                    </p>


                                </Container>
                                <Container fluid>
                                    {/* <ParallaxProvider>
                        <Parallax translateY={[0, isMobile?0:-20,'easeOutQuint']}> */}
                                    <ParallaxCache />
                                    <div className={projectStyles.solution}>
                                        <div className="disktop_only">
                                            {data.solution_images && (
                                                <Image src={data.solution_images[0]?.custom_data?.url} unoptimized={true} width={100} height={50} objectFit={"cover"} layout="responsive"></Image>
                                            )}

                                        </div>
                                        <div className="mobile w-75">
                                            {data.solution_images && (
                                                <Image src={data.solution_images[0]?.custom_data?.url} unoptimized={true} width={80} height={115} objectFit={"cover"} layout="responsive"></Image>
                                            )}
                                        </div>
                                        <Container>
                                            <Row className={projectStyles.sol_row}>
                                                <Col md={5} className={`${projectStyles.sol_row_img} text-center`}>

                                                    {data.solution_images && (
                                                        <Image className={projectStyles.sol_row_img_cont} unoptimized={true} src={data.solution_images[1]?.custom_data?.url} objectFit={"cover"} width={300} height={500}></Image>
                                                    )}
                                                </Col>
                                                <Col md={7}>
                                                    <div className={projectStyles.sol_text}>
                                                        {/* <h3>Our Solution</h3> */}
                                                        <pre>
                                                            {/* Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.
                                <br className="mobile"/>
                                <br className="mobile"/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque.
<p className="disktop_only">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque. 

</p> */}
                                                            {animatedText(data.solution_description)}
                                                        </pre>
                                                    </div>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                    {/* </Parallax>
                        </ParallaxProvider>       */}
                                </Container>

                            </section>

                        </Parallax>
                    </ParallaxProvider>

                    <ParallaxProvider>
                        <ParallaxCache />
                        <Parallax translateY={[isMobile ? 20 : 20, isMobile ? -40 : -40, 'easeOutQuint']}>

                            <section className={projectStyles.project_slider}>
                                {data?.slider_images && data?.slider_images.length && (
                                    <SliderComponent images={data?.slider_images} />
                                )}
                            </section>
                        </Parallax>
                    </ParallaxProvider>

                    <ParallaxProvider>
                        <ParallaxCache />
                        <Parallax translateY={[isMobile ? 20 : 20, isMobile ? -20 : -35, 'easeOutQuint']}>
                            <section className={projectStyles.project_results}>
                                <Container>
                                    <Row>
                                        <Col md={6}>
                                            <div className={projectStyles.content}>

                                                <div className={projectStyles.text}>
                                                    {/* <h3>The Results</h3> */}
                                                    <pre>
                                                        {animatedText(data.results_description)}
                                                    </pre>
                                                </div>
                                            </div>

                                        </Col>
                                        <Col md={6}>
                                            {data?.results_image?.custom_data && (
                                                <Image src={data?.results_image?.custom_data?.url} objectFit={"cover"} unoptimized={true} width={100} height={130} layout={"responsive"}></Image>
                                            )
                                            }
                                        </Col>
                                    </Row>
                                </Container>
                            </section>

                        </Parallax>
                    </ParallaxProvider>

                </ParallaxProvider>
            )}
        </>
    );
}
