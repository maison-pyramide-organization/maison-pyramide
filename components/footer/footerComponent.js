import footerStyle from "./FooterStyle.module.scss";
import Link from "next/link";
import { Container, Row, Col, Accordion } from "react-bootstrap";

export default function FooterComponent() {
  return (
    <>
      <footer className={footerStyle.footer}>
        <div className={footerStyle.poly}></div>
        <Container fluid className="footer-container">
          <div className={footerStyle.footer_parent}>
            <Row className={`${footerStyle.footer_row}`}>
              <Col md={7}>
                <Row className={`${footerStyle.footer_row}`}>
                  {/* LOCATIONS */}
                  <Col md={4} sm={6}>
                    <div className={footerStyle.locations}>
                      <div className={footerStyle.location}>
                        <span className={footerStyle.title}>DUBAI</span>
                        <p className={footerStyle.email}>
                          <a href="mailto:dubai@maisonpyramide.com">
                            dubai@maisonpyramide.com
                          </a>
                        </p>
                      </div>
                      <div className={footerStyle.location}>
                        <span className={footerStyle.title}>RIYADH</span>
                        <p className={footerStyle.email}>
                          <a href="mailto:riyadh@maisonpyramide.com">
                            riyadh@maisonpyramide.com
                          </a>
                        </p>
                      </div>
                      <div className={footerStyle.location}>
                        <span className={`${footerStyle.title}`}>CAIRO</span>
                        <p className={footerStyle.email}>
                          <a href="mailto:cairo@maisonpyramide.com">
                            cairo@maisonpyramide.com
                          </a>
                        </p>
                      </div>
                      <div className={footerStyle.location}>
                        <span className={`${footerStyle.title}`}>PARIS</span>
                        <p className={footerStyle.email}>
                          <a href="mailto:showroom@maisonpyramide.com">
                            showroom@maisonpyramide.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </Col>

                  {/* NEWS LETTER */}
                  <Col md={8} sm={6}>
                    <div className={footerStyle.update}>
                      <span>KEEP UP TO DATE WITH US</span>
                      <div id="mc_embed_signup">
                        <form
                          action="https://maisonpyramide.us14.list-manage.com/subscribe/post?u=9e473ed39a27b1b3f8a27575f&amp;id=5d4ae596a6"
                          method="post"
                          id="mc-embedded-subscribe-form"
                          name="mc-embedded-subscribe-form"
                          target="_blank"
                        >
                          <div id="mc_embed_signup_scroll">
                            <div className={footerStyle.inpt_wrapper}>
                              <button
                                type="submit"
                                value="Subscribe"
                                className="footer-btn"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                              >
                                <span className={footerStyle.chev_right}></span>
                              </button>
                              <input
                                className={footerStyle.inpt}
                                name="EMAIL"
                                type="email"
                                placeholder="Enter your email"
                              ></input>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </Col>

                  {/* MOBILE LOCATIONS */}
                  <Col md={4} className="mobile">
                    <div className={`${footerStyle.mobile_locations}`}>
                      <div className={footerStyle.inpt_wrapper}>
                        <Accordion className={footerStyle.accordion}>
                          <Accordion.Item eventKey="0">
                            <Accordion.Header>DUBAI</Accordion.Header>
                            <Accordion.Body>
                              <div className={footerStyle.acc_body}>
                                <p className={footerStyle.tel}>
                                  Unit B201, Building 7, Dubai design district.
                                </p>
                                <p className={footerStyle.email}>
                                  <a href="mailto:dubai@maisonpyramide.com">
                                    dubai@maisonpyramide.com
                                  </a>
                                </p>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="1">
                            <Accordion.Header>CAIRO</Accordion.Header>
                            <Accordion.Body>
                              <div className={footerStyle.acc_body}>
                                <p className={footerStyle.tel}>
                                  14 Kamal Al Tawil, Zamalek
                                </p>
                                <p className={footerStyle.email}>
                                  <a href="mailto:cairo@maisonpyramide.com">
                                    cairo@maisonpyramide.com{" "}
                                  </a>
                                </p>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="2">
                            <Accordion.Header>RIYADH</Accordion.Header>
                            <Accordion.Body>
                              <div className={footerStyle.acc_body}>
                                <p className={footerStyle.email}>
                                  <a href="mailto:riyadh@maisonpyramide.com">
                                    riyadh@maisonpyramide.com
                                  </a>
                                </p>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="3">
                            <Accordion.Header>PARIS</Accordion.Header>
                            <Accordion.Body>
                              <div className={footerStyle.acc_body}>
                                <p className={footerStyle.email}>
                                  <a href="mailto:showroom@maisonpyramide.com">
                                    showroom@maisonpyramide.com
                                  </a>
                                </p>
                              </div>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>

              {/* QUESTIONS */}
              <Col md={5}>
                <Row className={``}>
                  <Col md={6} sm={6}>
                    <div className={footerStyle.touch}>
                      <p>
                        WANT TO GET IN TOUCH WITH US <br className="mobile" />{" "}
                        ABOUT OUR SERVICES?
                      </p>
                      <Link href="/contact">
                        <button>
                          <a>GET IN CONTACT</a>
                        </button>
                      </Link>
                    </div>
                  </Col>
                  <Col md={6} sm={6}>
                    <div className={footerStyle.touch}>
                      <p>
                        WANT TO CHECK OUT OUR <br className="mobile" /> OPEN JOB
                        POSITIONS?
                      </p>
                      <Link href="/join">
                        <button>
                          <a>APPLY HERE</a>
                        </button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* SOCIAL  */}
            <div className={footerStyle.bottom}>
              <p className="mobile">
                <a
                  href="https://www.instagram.com/maisonpyramide/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  INSTAGRAM
                </a>
                |
                <a
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/maison-pyramide"
                  target={"_blank"}
                >
                  LINKEDIN
                </a>
                |
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://showroom.maisonpyramide.com/"
                >
                  E-SHOWROOM
                </a>
                |
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.instagram.com/egoandeast/"
                >
                  EGO&EAST
                </a>
              </p>

              <p>2022 ALL RIGHTS RESERVED</p>

              <p className={`${footerStyle.social} disktop_only`}>
                <a
                  href="https://www.instagram.com/maisonpyramide/"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  INSTAGRAM
                </a>
                |
                <a
                  href="https://www.linkedin.com/company/maison-pyramide"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  LINKEDIN
                </a>
                |
                <a
                  target={"_blank"}
                  rel="noreferrer"
                  href="https://showroom.maisonpyramide.com/"
                >
                  E-SHOWROOM
                </a>
                |
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  href="https://www.instagram.com/egoandeast/"
                >
                  EGO&EAST
                </a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
