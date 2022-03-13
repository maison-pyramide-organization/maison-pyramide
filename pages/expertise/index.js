import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ParallaxProvider , Parallax } from "react-scroll-parallax";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
  // const expertiseText = useState(router.query.section);

  const useHandleMobile = (value) => {
    useEffect(() => {
      setIsMobile(value);
    }, []);
  };

  const toggleExpandText = (i) => {
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
      console.log({res});
      setExpertise(res.data);
    }).catch(err => {
      console.log(err);
    })
  },[]);
  const handleClick = (id) => {
    if(id){
        router.push(`/clients/${id}`)
    }
}

  return (
    <Layout>
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
                <h1>
                  INNOVATIVE <br />
                  SOLUTIONS FOR YOUR BUSINESS <br /> TO STRIVE ON A GLOBAL LEVEL
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  consectetur eget tincidunt cursus praesent. Proin duis risus
                  tortor ipsum ipsum mauris. Ridiculus quisque cursus quisque
                  nisl elementum elementum.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={expertiseStyles.main_area}>
        <Container>
          <h2 className="text-center">Our five main areas expertise</h2>
          {_expertise.map((exp , ind) => {
            return(

              (ind % 2 == 0) ? (
              <Row key={ind} onClick={() => handleClick(exp.attributes.feature)}>
              <Col md={5}>
              <Parallax translateY={[isMobile?0:10,isMobile?0: -10]} >
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
                      {/* {exp.attributes?.featured ? (
                      <span>Featured Project</span>
                      ):
                      exp.attributes?.featured_image && (
                        <h4>FEATURED IMAGE</h4>
                      )
                      } */}
                     {/* <br /> */}
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
              <Parallax translateY={[isMobile?0:50,isMobile?0: -10]} >
              <ParallaxCache />
                <div className={expertiseStyles.text}>
                  <h3 className="disktop_only">{exp.attributes?.title}</h3>
                  <p>
                    {exp.attributes?.description}
                  </p>
                  <br />
                  <p>
                    {!isTextExpand[0] && isMobile ? (
                      <p
                        onClick={() => toggleExpandText(0)}
                        className={`${expertiseStyles.read_more} mt-4`}
                      >
                        READ MORE
                      </p>
                    ) : (
                      <>
                        <TransitionGroup>
                          {!loadingFlag[0] && (
                            <CSSTransition
                              key={3}
                              timeout={500}
                              classNames={"readMore"}
                            >
                              <p>
                                {exp.attributes?.sub_description}
                                {isMobile && (

                                <p
                                  onClick={() => toggleExpandText(0)}
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
            </Row>
              ):
              <Row className={expertiseStyles.reverse_mobile_row} onClick={() => handleClick(exp.attributes.feature)}>
              <Col md={7}>
              <Parallax translateY={[isMobile?0:50,isMobile?0: -20]} >
              <ParallaxCache />
              <div className={`${expertiseStyles.text} ${expertiseStyles.left_text}`}>
                  <h3 className="disktop_only">{exp.attributes.title}</h3>
                  <p>
                  {exp.attributes?.description}
                  </p>
                  <br />
                  <p>
                    {!isTextExpand[0] && isMobile ? (
                      <p
                        onClick={() => toggleExpandText(0)}
                        className={`${expertiseStyles.read_more} mt-4`}
                      >
                        READ MORE
                      </p>
                    ) : (
                      <>
                        <TransitionGroup>
                          {!loadingFlag[0] && (
                            <CSSTransition
                              key={3}
                              timeout={500}
                              classNames={"readMore"}
                            >
                              <p>
                              {exp.attributes?.sub_description}
                                {isMobile && (
  
                                <p
                                  onClick={() => toggleExpandText(0)}
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
              <Parallax translateY={[isMobile?0:50,isMobile?0: -70]} >
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
    </Layout>
  );
}
