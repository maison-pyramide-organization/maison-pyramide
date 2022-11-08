import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";

import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import ServiceService from "../api/services/ServiceService";

import Layout from "../../components/layout/Layout";
import serviceImg from "../../public/imgs/servicesImg.png";
import womanInSuit from "../../public/imgs/womaninsuit.png";

import servicesStyles from "./Services.module.scss";
import service1 from "../../public/imgs/service1.1.jpeg";
import service2 from "../../public/imgs/service2.1.jpeg";
import service3 from "../../public/imgs/service3.1.jpeg";
import service4 from "../../public/imgs/service4.jpg";
import service5 from "../../public/imgs/service5.1.jpeg";
import service6 from "../../public/imgs/service6.1.jpeg";
import service7 from "../../public/imgs/service7.1.jpeg";

const ParallaxCache = dynamic(
  () => {
    return import("../../components/parallaxCache/parallaxCache");
  },
  { ssr: false }
);

function Services() {
  const imgs = [
    {
      img: service1,
      // clientName: "MDLBEAST",
      // tag1: "SOUNDSTORM 2019",
      // tag2: "FEATURED IMAGE",
      // id: 1,
    },
  ];

  const [services , setServices] = useState([]);
  const [selectedImg, setSelectedImg] = useState(imgs[0]);
  const [loadingFlag, setLoadingFlag] = useState(false);


  useEffect(() => {
    getServices()
  },[])

  const handleClick = (e, target) => {
    setSelectedImg(services[e]?.attributes);
    if (target && target.getAttribute("aria-expanded") == "true") {
      setSelectedImg(imgs[0]);
    }
    if (!target) {
      setTimeout(() => {
        setSelectedImg(imgs[0]);
      }, 100);
    }
    setLoadingFlag(true);

   
  };
  useEffect(() => {
    setTimeout(() => {
      setLoadingFlag(false);
    }, 1000);
  },[selectedImg]);

  const getServices = () => {
    ServiceService.getServices().then(res => {
      setServices(res.data);
    })
  }

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => {
      handleClick(0);
    });

    return (
      <div className={servicesStyles.close} onClick={decoratedOnClick}>
        <span></span>
      </div>
    );
  }

  return (
    <Layout>
      <ParallaxProvider>
        <ParallaxCache />
      </ParallaxProvider>
      {services.map((serv,key) => {
        return(
          <link key={key} rel="preload" as="image" href={serv?.attributes?.image?.custom_data?.url}></link>
        )
      })}

      <section className={servicesStyles.services}>
      {/* <link rel="preload" as="image" href={service1.src}></link>
      <link rel="preload" as="image" href={service2.src}></link>
      <link rel="preload" as="image" href={service3.src}></link>
      <link rel="preload" as="image" href={service4.src}></link>
      <link rel="preload" as="image" href={service5.src}></link>
      <link rel="preload" as="image" href={service6.src}></link>
      <link rel="preload" as="image" href={service7.src}></link> */}
      
        <Container fluid>
          <h1 className="text-center">
            We’re a one-stop solution <br />
            platform for rising brands
          </h1>
          <Row>
            <Col md={5} className="disktop_only">
              <div className={servicesStyles.img_section}>
                <TransitionGroup>
                  {!loadingFlag && (
                    <CSSTransition key={3} timeout={3000} classNames={"item"}>
                      <div>
                        <Image
                          id="fadeImage"
                          unoptimized={true}
                          src={selectedImg.img || selectedImg?.image?.custom_data?.url}
                          loading="eager"
                          alt="girl"
                          layout="responsive"
                          objectFit="cover"
                          height={100}
                          width={70}
                        ></Image>
                      </div>
                    </CSSTransition>
                  )}
                </TransitionGroup>

                <div className={servicesStyles.img_text}>
                  <div>
                    <p className="mb-2">{selectedImg?.featured && 'FEATURED IMAGE'}</p>
                    <h2>{selectedImg?.client_name}</h2>
                    <p>{selectedImg?.img_title}</p>
                  </div>
                  {selectedImg.feature > 10 && (
                  <div className={servicesStyles.arrow_conatiner}>
                    <Link href={`/clients/${selectedImg.feature}`}>
                      <span className={servicesStyles.arrow}>
                        <div></div>
                      </span>
                    </Link>
                  </div>
                  )}
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <p className={servicesStyles.text}>
                We offer outside-the-box solutions to boost
brand reputation, reach and sales. We speak
the millennial tongue and know the
consumer. We have the confidence, the
connections and the creativity - to make
things happen.
<br/>
<br/>
Explore our full range of brand-building
services:
                </p>
                <Accordion className={servicesStyles.accordion}>
                  { services?.length && services.map((item , i) => {
                    return(

                    <Accordion.Item
                      eventKey={i}
                      key={i}
                      onClick={() => handleClick(i, event.target)}
                    >
                      <Accordion.Header>{item?.attributes?.title}</Accordion.Header>
                      <Accordion.Body>
                        <div className={servicesStyles.acc_body}>
                          {item?.attributes?.powered_by?.custom_data?.url && (
                          <Row>
                            <Col xs={5} md={2}>
                          <p>
                            POWERED BY
                          </p>
                          </Col>
                          <Col className="align-self-center" xs={7} md={10}>   
                          <Image
                              src={item.attributes.powered_by.custom_data.url}
                              height={15}
                              width={118}
                            />
                            </Col>
                          </Row>
                          )}

                          <p>
                           {item?.attributes?.description}
                          </p>
                          <div className={`${servicesStyles.img_section} mobile`}>
                            <Image
                              src={item?.attributes?.image?.custom_data?.url}
                              alt={item?.attributes?.img_title}
                              layout="responsive"
                              unoptimized={true}
                              objectFit="cover"
                              height={100}
                              width={70}
                            ></Image>
                            <div className={servicesStyles.img_text}>
                            <div>
                              <h2>{item?.attributes?.client_name}</h2>
                              <p>{item?.attributes?.img_title}</p>
                              {item?.attributes?.featured && (
                                <p>FEATURED IMAGE</p>
                              )}
                            </div>
                            {item?.attributes?.feature && (
                            <div className={servicesStyles.arrow_conatiner}>
                              <Link href={`/clients/${item?.attributes?.feature}`}>
                                <span className={servicesStyles.arrow}>
                                  <div></div>
                                </span>
                              </Link>
                            </div>
                            )}
                            </div>
                          </div>
                          <ul>
                            {JSON.parse(item?.attributes?.service_item).map((serv,key) => {
                              return(
                                <li key={key}>{serv}</li>
                              )
                            })}
                          </ul>
                        </div>

                        {/* <CustomToggle eventKey="0" /> */}
                      </Accordion.Body>
                    </Accordion.Item>
                    )
                  })}

                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
}
export default Services;
