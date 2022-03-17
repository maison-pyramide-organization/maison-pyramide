import Link from 'next/link';


import { useEffect, useState , useLayoutEffect} from 'react';
import { Container, Row, Col, Accordion } from "react-bootstrap";

import { Parallax , ParallaxProvider } from 'react-scroll-parallax';

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
import footerStyle from "./FooterStyle.module.scss";


// const HandleFooterScroll = dynamic(
//   () => {
//     return import("../footerScroll/HandleFooterScroll");
//   },
//   { ssr: false }
// );

// const IsMobileComponent = dynamic(
//   () => {
//       return import("../isMobile/IsMobileComponent");
//   },
//   { ssr: false }
// );


const ScrollingFooter = () => {

  return ( 
  
    <>
   
    </>
  )
}

export default function FooterComponent() {
  // const [translateAmount,setTranslateAmount] = useState(0); 
  // const [isMobile, setIsMobile] = useState(null);
  return (
<>
{/* <HandleFooterScroll handleFooterStyle={handleFooterStyle}/>
<IsMobileComponent handleMobile={useHandleMobile}/> */}
    <footer className={footerStyle.footer}>
      <div className={footerStyle.poly}></div>
      <Container fluid className="footer-container">

            <div className={footerStyle.footer_parent}>
            {/* <h1 className={`${footerStyle.mobile_h1} mobile`}>M.P</h1> */}
            <Row className={`${footerStyle.footer_row}`}>
              <Col md={7}>
              <Row className={`${footerStyle.footer_row}`}>
              <Col md={4} sm={6}>
                <div className={footerStyle.locations}>
                  <div className={footerStyle.location}>
                    <span className={`${footerStyle.title}`}>CAIRO</span>
                    <p className={footerStyle.tel}>+20 106 0091742</p>
                    <p className={footerStyle.email}>contact@maisonpyramide.com</p>
                  </div>
                  <div className={footerStyle.location}>
                    <span className={footerStyle.title}>DUBAI</span>
                    <p className={footerStyle.tel}>+20 106 0091742</p>
                    <p className={footerStyle.email}>contact@maisonpyramide.com</p>
                  </div>
                  {/* <div className={footerStyle.location}>
                    <span className={footerStyle.title}>LONDON</span>
                    <p className={footerStyle.tel}>+20 106 0091742</p>
                    <p className={footerStyle.email}>contact@maisonpyramide.com</p>
                  </div> */}
                </div>
              </Col>
              <Col md={8} sm={6}>
                <div className={footerStyle.update}>
                  <span>KEEP UP TO DATE WITH US</span>



{/* <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"> */}

<div id="mc_embed_signup">
{/* <form action="https://maisonpyramide.us15.list-manage.com/subscribe/post?u=c63c326f60b5a465903f3bf0c&amp;id=a72f29e8ae" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank"> */}
<form action="https://maisonpyramide.us15.list-manage.com/subscribe/post?u=c63c326f60b5a465903f3bf0c&amp;id=f4792e5b8d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
    <div id="mc_embed_signup_scroll">
    <div className={footerStyle.inpt_wrapper}>
      <button type="submit" value="Subscribe" className='footer-btn' name="subscribe" id="mc-embedded-subscribe">

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
{/* </link> */}



                  {/* <div className={footerStyle.inpt_wrapper}>
                    <span className={footerStyle.chev_right}></span>
                    <input
                      className={footerStyle.inpt}
                      placeholder="Enter your email"
                    ></input>
                  </div> */}
                </div>
              </Col>
              <Col md={4} className="mobile">
                <div className={`${footerStyle.mobile_locations}`}>
                  <div className={footerStyle.inpt_wrapper}>
                    <Accordion className={footerStyle.accordion}>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            CAIRO
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className={footerStyle.acc_body}>
                                <p className={footerStyle.tel}>+20 106 0091742</p>
                                <p className={footerStyle.email}>contact@maisonpyramide.com</p>
                            </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                        DUBAI
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className={footerStyle.acc_body}>
                                <p className={footerStyle.tel}>+20 106 0091742</p>
                                <p className={footerStyle.email}>contact@maisonpyramide.com</p>
                            </div>
                        </Accordion.Body>
                      </Accordion.Item>

                      {/* <Accordion.Item eventKey="2">
                        <Accordion.Header>LONDON </Accordion.Header>
                        <Accordion.Body>
                            <div className={footerStyle.acc_body}>
                                <p className={footerStyle.tel}>+20 106 0091742</p>
                                <p className={footerStyle.email}>contact@maisonpyramide.com</p>
                            </div>
                        </Accordion.Body>
                      </Accordion.Item> */}
                    </Accordion>
                  </div>
                </div>
              </Col>
            
            </Row>
              </Col>
          
          <Col md={5}>
          <Row  className={``}>
            <Col md={6} sm={6}>
                <div className={footerStyle.touch}>
                  <p>WANT TO GET IN TOUCH WITH US  <br className='mobile'/> ABOUT OUR SERVICES?</p>
                  <Link href="/contact">
                    <button>
                      <a>
                      GET IN CONTACT
                      </a>
                      </button>
                    </Link>
                </div>
              </Col>
              <Col md={6} sm={6}>
                <div className={footerStyle.touch}>
                  <p>WANT TO CHECK OUT OUR <br className='mobile'/> OPEN JOB POSITIONS?</p>
                  <Link href="/join">
                    <button>
                      <a>
                      APPLY HERE
                      </a>
                      </button>
                    </Link>
                </div>
              </Col>
            </Row>
          </Col>
          
            </Row>
            

            <div className={footerStyle.bottom}>
            <p className='mobile'><a href="https://www.instagram.com/maisonpyramide/">INSTAGRAM</a> | <a href="https://www.linkedin.com/company/maison-pyramide">LINKEDIN</a> | <a href="https://eshowroom.maisonpyramide.com/">E-SHOWROOM</a></p>

            <Link href="/privacy">
              <p className={footerStyle.link}>TERMS AND CONDITIONS. PRIVACY POLICY</p>
            </Link>

              <p className='disktop_only'><a href="https://www.instagram.com/maisonpyramide/">INSTAGRAM</a> | <a href="https://www.linkedin.com/company/maison-pyramide">LINKEDIN</a> | <a href="https://eshowroom.maisonpyramide.com/">E-SHOWROOM</a></p>

              <p>2021 ALL RIGHTS RESERVED</p>
            </div>
            </div>
      </Container>
    </footer>    
    </>
  );
}
