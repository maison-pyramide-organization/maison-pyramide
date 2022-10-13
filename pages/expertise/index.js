import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ParallaxProvider , Parallax } from "react-scroll-parallax";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AnimatePresence, motion } from 'framer-motion'

import Layout from "../../components/layout/Layout";
import expImg from "../../public/imgs/Group 156184.png";
import mobileexpImg from "../../public/imgs/mobile/mobileexpgirl.png";
import expImg2 from "../../public/imgs/coatgirl.png";
import expImg3 from "../../public/imgs/azzie.png";
import expImg4 from "../../public/imgs/shelves.png";
import expImg5 from "../../public/imgs/mics.png";
import expImg6 from "../../public/imgs/pa.png";

import expertiseStyles from "./Expertise.module.scss";
import ExpertiseService from "../api/services/ExpertiseService";

const IsMobileComponent = dynamic(
  () => {
    return import("../../components/isMobile/IsMobileComponent");
  },
  { ssr: false }
);
const ParallaxCache = dynamic(
  () => {
    return import("../../components/parallaxCache/parallaxCache");
  },
  { ssr: false }
);

export default function Expertise() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(null);
  const [isTextExpand, setIsTextExpand] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [loadingFlag, setLoadingFlag] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [_expertise , setExpertise] = useState([]);

  const headerVariants = {
    hidden: { opacity: 0, y: "10%" ,scale:1.05},
    enter: { opacity: 1, y: 0 ,scale:1}
  }
  const textVariants = {
    hidden: { opacity: 0, x: 15 },
    enter: { opacity: 1, x: 0 }
  }

  const useHandleMobile = (value) => {
    useEffect(() => {
      setIsMobile(value);
    }, []);
  };

  const toggleExpandText = (e,i) => {
    e.stopPropagation();
    let isTextExpandArr = [...isTextExpand];
    isTextExpandArr[i] = !isTextExpandArr[i];
    setIsTextExpand(isTextExpandArr);

    let tempLoading = [...loadingFlag];
    tempLoading[i] = true;
    setLoadingFlag(tempLoading);

    setTimeout(() => {
      let tempLoading = [...loadingFlag];
      tempLoading[i] = false;
      setLoadingFlag(tempLoading);
    }, 100);
  };


  useEffect(() => {
    ExpertiseService.getExpertise().then((res) => {
      setExpertise(res.data);
    }).catch(err => {
      console.log(err);
    })
  },[]);

  const animatedText = (text) => {
    let textArr = text?.split(" ");
    textArr?.map((word,i)=>{
      textArr[i] =  <motion.span
      initial="hidden"
      whileInView="enter"
      exit="exit"
      variants={textVariants}
      transition={{ duration: 1,delay: i*.02, ease: "easeInOut",type: 'linear' }}
       >
        {word+' '}
        </motion.span>
    })
    return textArr;
  }
  const handleClick = (id) => {
    if(id){
        router.push(`/clients/${id}`)
    }
}

  return (
    <>
      <ParallaxProvider>
      <IsMobileComponent handleMobile={useHandleMobile} />
      <section className={expertiseStyles.main}>
        <Container fluid>
          <Row className={expertiseStyles.exp_row}>
            <Col md={6} className={expertiseStyles.exp_img}>
                {isMobile ? (
                  <Image src={mobileexpImg} layout="responsive"></Image>
                ) : (
                  <Image src={expImg} layout="fill"></Image>
                )}
            </Col>
            <Col md={6}>
              <div className={expertiseStyles.title}>

              <AnimatePresence>
                <motion.h1
                  initial="hidden"
                  whileInView="enter"
                  exit="exit"
                  variants={headerVariants}
                  transition={{ duration: 1.2, ease: "easeInOut",type: 'linear' }}
                >
                  INNOVATIVE <br />
                  SOLUTIONS FOR YOUR BUSINESS <br /> TO STRIVE ON A GLOBAL LEVEL
              </motion.h1>
              </AnimatePresence>
                <p>
                <AnimatePresence>
                  {animatedText("We elevate fashion, lifestyle, luxury, and media brands by blending intelligent strategy with highly creative execution. Our deep connections with millennial culture help businesses find relevance in today's world. Our five main areas of expertise: Media, Public Affairs, Lifestyle, Retail, and Fashion.")}
                </AnimatePresence>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={expertiseStyles.main_area}>
        <Container>
          
          <motion.h2
              initial="hidden"
              whileInView="enter"
              exit="exit"
              variants={headerVariants}
              transition={{ duration: 1.2, ease: "easeInOut",type: 'linear' }}
              className="text-center"
              >
            Our five main areas of expertise
            </motion.h2>
          {_expertise.map((exp , ind) => {
            return(

              (ind % 2 == 0) ? (
              <Row key={ind} onClick={() => handleClick(exp.attributes.feature)}>
              <Col md={5}>
              <Parallax translateY={[isMobile?0:10,isMobile?0: -1]} >
              <ParallaxCache />
                <div className={expertiseStyles.exp_img}>
                  <h3 className="mobile">{exp.attributes.title}</h3>

                  <Image src={exp?.attributes?.image?.custom_data?.url} layout="responsive" width={100} objectFit={"cover"} height={130}></Image>
                  <footer className={expertiseStyles.footer}>
                    <div className={expertiseStyles.feat_project}>
                      {exp.attributes?.featured? (
                        <h4>FEATURED PROJECT</h4>
                      ):
                      exp.attributes?.featured_image && (
                        <h4>FEATURED IMAGE</h4>
                      )
                      }
                      <p>{exp.attributes?.name}</p>
                      
                      <span>{exp.attributes?.tag}</span>
                    </div>
                    {exp.attributes?.feature && ( 
                    <div className={expertiseStyles.icon}>
                      <span className={expertiseStyles.close}></span>
                    </div>
                    )}
                  </footer>
                </div>
              </Parallax>

              </Col>
              <Col md={7}>
              <Parallax translateY={[isMobile?0:60,isMobile?0: 0]} >
              <ParallaxCache />
                <div className={expertiseStyles.text}>
                  <motion.h3 
                    className="disktop_only"
                    initial="hidden"
                    whileInView="enter"
                    exit="exit"
                    variants={headerVariants}
                    transition={{ duration: 1.2,delay:.5, ease: "easeInOut",type: 'linear' }}
                  >{exp.attributes?.title}</motion.h3>
                  <pre>
                    {animatedText(exp.attributes?.description)}
                  </pre>
                  <br />
                  <p>
                    {!isTextExpand[ind] && isMobile ? (
                      <p
                        onClick={(e) => toggleExpandText(e,ind)}
                        className={`${expertiseStyles.read_more} mt-4`}
                      >
                        READ MORE
                      </p>
                    ) : (
                      <>
                        <TransitionGroup>
                          {!loadingFlag[ind] && (
                            <CSSTransition
                              key={3}
                              timeout={500}
                              classNames={"readMore"}
                            >
                              <pre>
                                {animatedText(exp.attributes?.sub_description)}
                                {isMobile && (

                                <p
                                  onClick={(e) => toggleExpandText(e,ind)}
                                  className={`${expertiseStyles.read_more} mt-4`}
                                >
                                  READ LESS
                                </p>
                                )}
                              </pre>
                            </CSSTransition>
                          )}
                        </TransitionGroup>
                      </>
                    )}
                  </p>
                </div>
              </Parallax>
              </Col>
            </Row>
              ):
              <Row className={expertiseStyles.reverse_mobile_row} onClick={() => handleClick(exp.attributes.feature)}>
              <Col md={7}>
              <Parallax translateY={[isMobile?0:60,isMobile?0: 0]} >
              <ParallaxCache />
              <div className={`${expertiseStyles.text} ${expertiseStyles.left_text}`}>
                  <motion.h3 
                    className="disktop_only"
                    initial="hidden"
                    whileInView="enter"
                    exit="exit"
                    variants={headerVariants}
                    transition={{ duration: 1.2,delay:.5, ease: "easeInOut",type: 'linear' }}
                  >{exp.attributes.title}</motion.h3>
                  <p>
                  {animatedText(exp.attributes?.description)}
                  </p>
                  <br />
                  <p>
                    {!isTextExpand[ind] && isMobile ? (
                      <p
                        onClick={(e) => toggleExpandText(e,ind)}
                        className={`${expertiseStyles.read_more} mt-4`}
                      >
                        READ MORE
                      </p>
                    ) : (
                      <>
                        <TransitionGroup>
                          {!loadingFlag[ind] && (
                            <CSSTransition
                              key={3}
                              timeout={500}
                              classNames={"readMore"}
                            >
                              <p>
                              {animatedText(exp.attributes?.sub_description)}
                                {isMobile && (
  
                                <p
                                  onClick={(e) => toggleExpandText(e,ind)}
                                  className={`${expertiseStyles.read_more} mt-4`}
                                >
                                  READ LESS
                                </p>
                                )}
                              </p>
                            </CSSTransition>
                          )}
                        </TransitionGroup>
                      </>
                    )}
                  </p>
                </div>
                </Parallax>
              </Col>
  
              <Col md={5}>
              <Parallax translateY={[isMobile?0:10,isMobile?0: -1]} >
              <ParallaxCache />
                <div className={expertiseStyles.exp_img}>
                  <h3 className="mobile">{exp.attributes?.title}</h3>
                  <Image src={exp?.attributes?.image?.custom_data?.url} width={100} objectFit={"cover"} height={130} layout="responsive"></Image>
                  <footer className={expertiseStyles.footer}>
                    <div className={expertiseStyles.feat_project}>
                      {exp.attributes?.featured && (
                        <h4>FEATURED PROJECT</h4>
                      )}
                      <p>{exp.attributes?.name}</p>
                      {/* {exp.attributes?.featured && (
                      <span>Featured Project</span>
                      )} */}
                      <span>{exp.attributes?.tag}</span>
                    </div>
                    {exp.attributes?.feature && ( 
                    <div className={expertiseStyles.icon}>
                      <span className={expertiseStyles.close}></span>
                    </div>
                    )}
                  </footer>
                </div>
                </Parallax>
              </Col>
            </Row>
            )
          })}
        </Container>
      </section>
      </ParallaxProvider>
    </>
  );
}
