import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import { useEffect, useState } from "react";

import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
      clientName: "MDLBEAST",
      tag1: "SOUNDSTORM 2019",
      tag2: "FEATURED IMAGE",
      id: 1,
    },
    
    {
      img: service2,
      clientName: "SRMG",
      tag1: "HA HUB x THREADS STYLING",
      tag2: "FEATURED IMAGE",
      id: 2,
    },
    {
      img: service3,
      clientName: "NATHALIE FANJ",
      tag1: "ALULA X VOGUE ARABIA PRODUCTION",
      tag2: "FEATURED IMAGE",
      id: 3,
    },
    {
      img: service4,
      clientName: "ARCHIPEL",
      tag1: "IMAGE & COMMUNICATION RELAUNCH",
      tag2: "FEATURED PROJECT",
      id: 110636839,
    },
    {
      img: service5,
      clientName: "EMAAR MISR",
      tag1: "ELIE SAAB X EMAAR",
      tag2: "FEATURED PROJECT",
      id: 111327422,
    },
    // no image provided, so used as dublicate as the previous one
    {
      img: service6,
      clientName: "L’ATELIER NAWBAR",
      tag1: "PRODUCT DEVELOPMENT & WHOLESALE LAUNCH",
      tag2: "FEATURED PROJECT",
      id: 111327549,
    },
    {
      img: service7,
      clientName: "SRMG",
      tag1: "HIA HUB X VALENTINO",
      tag2: "FEATURED IMAGE ",
      id: 7,
    },
    {
      img: service7,
      clientName: "SRMG",
      tag1: "HIA HUB X VALENTINO",
      tag2: "FEATURED IMAGE",
      id: 0,
    },
  ];
  const [selectedImg, setSelectedImg] = useState(imgs[0]);
  const [loadingFlag, setLoadingFlag] = useState(false);

  const handleClick = (e, target) => {
    setSelectedImg(imgs[e]);
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
  },[selectedImg])

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

      <section className={servicesStyles.services}>
      <link rel="preload" as="image" href={service1.src}></link>
      <link rel="preload" as="image" href={service2.src}></link>
      <link rel="preload" as="image" href={service3.src}></link>
      <link rel="preload" as="image" href={service4.src}></link>
      <link rel="preload" as="image" href={service5.src}></link>
      <link rel="preload" as="image" href={service6.src}></link>
      <link rel="preload" as="image" href={service7.src}></link>
        <Container fluid>
          <h1 className="text-center">
            We’re a one-stop solution <br />
            platform for rising talent.
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
                          src={selectedImg.img}
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
                    <p className="mb-2">{selectedImg?.tag2}</p>
                    <h2>{selectedImg?.clientName}</h2>
                    <p>{selectedImg?.tag1}</p>
                  </div>
                  {selectedImg.id > 10 && (
                  <div className={servicesStyles.arrow_conatiner}>
                    <Link href={`/clients/${selectedImg.id}`}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  consectetur eget tincidunt cursus praesent. Proin duis risus
                  tortor ipsum ipsum mauris. Ridiculus quisque cursus quisque
                  nisl elementum elementum.{" "}
                </p>
                <Accordion className={servicesStyles.accordion}>
                  <Accordion.Item
                    eventKey="0"
                    onClick={() => handleClick(1, event.target)}
                  >
                    <Accordion.Header>Brand Partnerships</Accordion.Header>
                    <Accordion.Body>
                      <div className={servicesStyles.acc_body}>
                        {/* <h3 className="disktop_only">
                          Talent Booking & Management
                        </h3> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A consectetur eget tincidunt cursus praesent.
                          Proin duis risus tortor ipsum ipsum mauris. Ridiculus
                          quisque cursus quisque nisl elementum elementum.
                          Cursus enim quis aliquam urna ac ultricies tristique
                          sociis fames.
                        </p>
                        <div className={`${servicesStyles.img_section} mobile`}>
                          <Image
                            src={selectedImg.img}
                            alt="girl"
                            layout="responsive"
                            unoptimized={true}
                            objectFit="cover"
                            height={100}
                            width={70}
                          ></Image>
                          <div className={servicesStyles.img_text}>
                          <div>
                            <h2>{selectedImg?.clientName}</h2>
                            <p>{selectedImg?.tag1}</p>
                            <p>{selectedImg?.tag2}</p>
                          </div>
                            <div className={servicesStyles.arrow_conatiner}>
                              <span className={servicesStyles.arrow}>
                                <div></div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                        </ul>
                      </div>

                      {/* <CustomToggle eventKey="0" /> */}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="1"
                    onClick={() => handleClick(7, event.target)}
                  >
                    <Accordion.Header>
                      Event / Concept <br className="mobile" /> Development
                    </Accordion.Header>                    <Accordion.Body>
                      <div className={servicesStyles.acc_body}>
                        {/* <h3 className="disktop_only">
                          Talent Booking & Management
                        </h3> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A consectetur eget tincidunt cursus praesent.
                          Proin duis risus tortor ipsum ipsum mauris. Ridiculus
                          quisque cursus quisque nisl elementum elementum.
                          Cursus enim quis aliquam urna ac ultricies tristique
                          sociis fames.
                        </p>
                        <div className={`${servicesStyles.img_section} mobile`}>
                          <Image
                            src={selectedImg.img}
                            alt="girl"
                            layout="responsive"
                            objectFit="cover"
                            height={100}
                            width={70}
                          ></Image>
                          <div className={servicesStyles.img_text}>
                          <div>
                            <h2>{selectedImg?.clientName}</h2>
                            <p>{selectedImg?.tag1}</p>
                            <p>{selectedImg?.tag2}</p>
                          </div>
                            <div className={servicesStyles.arrow_conatiner}>
                              <span className={servicesStyles.arrow}>
                                <div></div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                        </ul>
                      </div>

                      {/* <CustomToggle eventKey="0" /> */}
                    </Accordion.Body>
                  </Accordion.Item>
                  {/* <Accordion.Item eventKey="1" 
                  onClick={() => handleClick(6, event.target)}
                  >
                  
                    <Accordion.Body>
                      <div className={servicesStyles.acc_body}>
                        <h3 className="disktop_only">
                          Talent Booking & Management
                        </h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A consectetur eget tincidunt cursus praesent.
                          Proin duis risus tortor ipsum ipsum mauris. Ridiculus
                          quisque cursus quisque nisl elementum elementum.
                          Cursus enim quis aliquam urna ac ultricies tristique
                          sociis fames.
                        </p>
                        <ul>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                        </ul>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item> */}

                  <Accordion.Item eventKey="2" 
                  onClick={() => handleClick(2, event.target)}
                  >
                    <Accordion.Header>
                      Talent Booking & Management{" "}
                    </Accordion.Header>
                    <Accordion.Body>
                    <div className={servicesStyles.acc_body}>
                        {/* <h3 className="disktop_only">
                          Talent Booking & Management
                        </h3> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A consectetur eget tincidunt cursus praesent.
                          Proin duis risus tortor ipsum ipsum mauris. Ridiculus
                          quisque cursus quisque nisl elementum elementum.
                          Cursus enim quis aliquam urna ac ultricies tristique
                          sociis fames.
                        </p>
                        <div className={`${servicesStyles.img_section} mobile`}>
                          <Image
                            src={selectedImg.img}
                            alt="girl"
                            layout="responsive"
                            objectFit="cover"
                            height={100}
                            width={70}
                          ></Image>
                          <div className={servicesStyles.img_text}>
                          <div>
                            <h2>{selectedImg?.clientName}</h2>
                            <p>{selectedImg?.tag1}</p>
                            <p>{selectedImg?.tag2}</p>
                          </div>
                            <div className={servicesStyles.arrow_conatiner}>
                              <span className={servicesStyles.arrow}>
                                <div></div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                        </ul>
                      </div>

                      {/* <CustomToggle eventKey="2" /> */}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3"
                    onClick={() => handleClick(3, event.target)}
                  >
                    <Accordion.Header>Strategy Consulting </Accordion.Header>
                    <Accordion.Body>
                    <div className={servicesStyles.acc_body}>
                        {/* <h3 className="disktop_only">
                          Talent Booking & Management
                        </h3> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A consectetur eget tincidunt cursus praesent.
                          Proin duis risus tortor ipsum ipsum mauris. Ridiculus
                          quisque cursus quisque nisl elementum elementum.
                          Cursus enim quis aliquam urna ac ultricies tristique
                          sociis fames.
                        </p>
                        <div className={`${servicesStyles.img_section} mobile`}>
                          <Image
                            src={selectedImg.img}
                            alt="girl"
                            layout="responsive"
                            objectFit="cover"
                            height={100}
                            width={70}
                          ></Image>
                          <div className={servicesStyles.img_text}>
                          <div>
                            <h2>{selectedImg?.clientName}</h2>
                            <p>{selectedImg?.tag1}</p>
                            <p>{selectedImg?.tag2}</p>
                          </div>
                            <div className={servicesStyles.arrow_conatiner}>
                              <span className={servicesStyles.arrow}>
                                <div></div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                        </ul>
                      </div>
                      {/* <CustomToggle eventKey="3" /> */}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4"
                    onClick={() => handleClick(4, event.target)}
                  >
                    <Accordion.Header>PR & Marketing</Accordion.Header>
                    <Accordion.Body>
                    <div className={servicesStyles.acc_body}>
                        {/* <h3 className="disktop_only">
                          Talent Booking & Management
                        </h3> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A consectetur eget tincidunt cursus praesent.
                          Proin duis risus tortor ipsum ipsum mauris. Ridiculus
                          quisque cursus quisque nisl elementum elementum.
                          Cursus enim quis aliquam urna ac ultricies tristique
                          sociis fames.
                        </p>
                        <div className={`${servicesStyles.img_section} mobile`}>
                          <Image
                            src={selectedImg.img}
                            alt="girl"
                            layout="responsive"
                            objectFit="cover"
                            height={100}
                            width={70}
                          ></Image>
                          <div className={servicesStyles.img_text}>
                          <div>
                            <h2>{selectedImg?.clientName}</h2>
                            <p>{selectedImg?.tag1}</p>
                            <p>{selectedImg?.tag2}</p>
                          </div>
                            <div className={servicesStyles.arrow_conatiner}>
                              <span className={servicesStyles.arrow}>
                                <div></div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                        </ul>
                      </div>

                      {/* <CustomToggle eventKey="4" /> */}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5"
                    onClick={() => handleClick(5, event.target)}
                  >
                    <Accordion.Header>Sales & Distribution</Accordion.Header>
                    <Accordion.Body>
                    <div className={servicesStyles.acc_body}>
                        {/* <h3 className="disktop_only">
                          Talent Booking & Management
                        </h3> */}
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. A consectetur eget tincidunt cursus praesent.
                          Proin duis risus tortor ipsum ipsum mauris. Ridiculus
                          quisque cursus quisque nisl elementum elementum.
                          Cursus enim quis aliquam urna ac ultricies tristique
                          sociis fames.
                        </p>
                        <div className={`${servicesStyles.img_section} mobile`}>
                          <Image
                            src={selectedImg.img}
                            alt="girl"
                            layout="responsive"
                            objectFit="cover"
                            height={100}
                            width={70}
                          ></Image>
                          <div className={servicesStyles.img_text}>
                          <div>
                            <h2>{selectedImg?.clientName}</h2>
                            <p>{selectedImg?.tag1}</p>
                            <p>{selectedImg?.tag2}</p>
                          </div>
                            <div className={servicesStyles.arrow_conatiner}>
                              <span className={servicesStyles.arrow}>
                                <div></div>
                              </span>
                            </div>
                          </div>
                        </div>
                        <ul>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                          <li>Service list item</li>
                        </ul>
                      </div>
                      {/* <CustomToggle eventKey="5" /> */}
                    </Accordion.Body>
                  </Accordion.Item>
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
