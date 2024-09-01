import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { useEffect, useRef, useState } from "react";

import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";

import ServiceService from "../api/services/ServiceService";

import servicesStyles from "./Services.module.scss";
import service1 from "../../public/imgs/service-new.png";

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
    },
  ];
  const POWERED_BY = {
    "THE SHOWROOM": "https://eshowroom.maisonpyramide.com/",
    "EGO&EAST": "https://www.instagram.com/egoandeast/",
  };

  const [services, setServices] = useState([]);
  const [selectedImg, setSelectedImg] = useState(imgs[0]);
  const [loadingFlag, setLoadingFlag] = useState(false);
  const [mainText, setMainText] = useState();

  const headerVariants = {
    hidden: { opacity: 0, y: "10%", scale: 1.05 },
    // hidden: { opacity: 0, y: "80%" ,scale:1.05},
    enter: { opacity: 1, y: 0, scale: 1 },
  };
  const textVariants = {
    hidden: { opacity: 0, x: 15 },
    enter: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    getServices();
    let text =
      "We offer outside-the-box solutions to boost brand reputation, reach and sales. We speak the millennial tongue and know the consumer. We have the confidence, the connections and the creativity - to make things happen.";
    let textArr = text?.split(" ");
    textArr?.map((word, i) => {
      textArr[i] = (
        <motion.span
          key={i}
          initial="hidden"
          // animate="enter"
          exit="exit"
          whileInView={"enter"}
          viewport={{ once: true }}
          variants={textVariants}
          transition={{
            duration: 1,
            delay: i * 0.02,
            ease: "easeInOut",
            type: "linear",
          }}
        >
          {word + " "}
        </motion.span>
      );
    });
    setMainText(textArr);
  }, []);

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
  }, [selectedImg]);

  const getServices = () => {
    ServiceService.getServices().then((res) => {
      setServices(res.data);
    });
  };

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
    <section>
      <ParallaxProvider>
        <ParallaxCache />
      </ParallaxProvider>
      {services.map((serv, key) => {
        return (
          <link
            key={key}
            rel="preload"
            as="image"
            href={serv?.attributes?.image?.custom_data?.url}
          ></link>
        );
      })}

      <section className={servicesStyles.services}>
        <Container fluid>
          <header className="text-center">
            <div>
              <motion.h1
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={headerVariants}
                transition={{
                  duration: 1.2,
                  ease: "easeInOut",
                  type: "linear",
                }}
              >
                We’re a one-stop solution <br />
                platform for rising brands.
              </motion.h1>
            </div>
          </header>
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
                          src={
                            selectedImg.img ||
                            selectedImg?.image?.custom_data?.url
                          }
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
                    <p className="mb-2">
                      {selectedImg?.featured && "FEATURED IMAGE"}
                    </p>
                    <h2>{selectedImg?.client_name}</h2>
                    <p>{selectedImg?.img_title}</p>
                  </div>
                  {selectedImg.feature?.length > 5 && (
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
                <p className={servicesStyles.text}>{mainText}</p>
                <p>Explore our full range of brand-building services:</p>
                <Accordion className={servicesStyles.accordion}>
                  {services?.length &&
                    services.map((item, i) => {
                      return (
                        <Accordion.Item
                          eventKey={i}
                          key={i}
                          onClick={() => handleClick(i, event.target)}
                        >
                          <Accordion.Header>
                            {item?.attributes?.title}
                          </Accordion.Header>
                          <Accordion.Body>
                            <div className={servicesStyles.acc_body}>
                              {item?.attributes?.powered_by && (
                                <div className={servicesStyles.powered_by}>
                                  <span className={servicesStyles.title}>
                                    POWERED BY{" "}
                                    <a
                                      href={
                                        POWERED_BY[item?.attributes?.powered_by]
                                      }
                                      target={"_blank"}
                                      rel="noreferrer"
                                    >
                                      {item?.attributes?.powered_by ===
                                      "EGO&EAST"
                                        ? "EGO & EAST"
                                        : item?.attributes?.powered_by}
                                    </a>
                                  </span>
                                </div>
                              )}

                              <p>{item?.attributes?.description}</p>
                              <div
                                className={`${servicesStyles.img_section} mobile`}
                              >
                                <Image
                                  src={
                                    item?.attributes?.image?.custom_data?.url
                                  }
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
                                    <div
                                      className={servicesStyles.arrow_conatiner}
                                    >
                                      <Link
                                        href={`/clients/${item?.attributes?.feature}`}
                                      >
                                        <span className={servicesStyles.arrow}>
                                          <div></div>
                                        </span>
                                      </Link>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <ul>
                                {JSON.parse(item?.attributes?.service_item).map(
                                  (serv, key) => {
                                    return <li key={key}>{serv}</li>;
                                  }
                                )}
                              </ul>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}
export default Services;
