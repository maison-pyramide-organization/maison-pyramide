import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ParallaxProvider ,Parallax} from "react-scroll-parallax";

import Layout from "../../components/layout/Layout";
import groupImg from "../../public/imgs/office.jpg";
import groupImg1 from "../../public/imgs/bw.png";
import groupImg2 from "../../public/imgs/giovanina.jpeg";
import groupImg3 from "../../public/imgs/maria.jpeg";
import groupImg4 from "../../public/imgs/nat.jpeg";
import sliderImg from "../../public/imgs/sliderimg.png";
import sliderImg2 from "../../public/imgs/sliderimg2.png";
import pressImg from "../../public/imgs/Coveteur.png";
import pressImg2 from "../../public/imgs/Vogue.jpeg";
import pressImg3 from "../../public/imgs/WWD.jpeg";


import groupStyles from "./Group.module.scss";
const GroupSlider = dynamic(
  () => {
    return import("../../components/groupSlider/GroupSlider");
  },
  { ssr: false }
);
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

export default function Group() {
  const [isMobile, setIsMobile] = useState(null);
  const router = useRouter();

  const useHandleMobile = (value) =>{
    useEffect(() => {
        setIsMobile(value)
    },[])
  }
  const [isTextExpand, setIsTextExpand] = useState([
    false,
    false,
    false,
    false
  ]);

  const toggleExpandText = (i) => {
    let isTextExpandArr = [...isTextExpand];
    isTextExpandArr[i] = !isTextExpandArr[i];

    setIsTextExpand(isTextExpandArr)
  }
  const handlePost = (link) => {
    // router.push(link);
    window.open(link, '_blank');

  }
  return (
    <Layout>
      <ParallaxProvider>
        <ParallaxCache/>
      </ParallaxProvider>
      <IsMobileComponent handleMobile={useHandleMobile}/>
      <header className={groupStyles.header}>
        <h1>MAISON PYRAMIDE GROUP</h1>
      </header>
      <section className={groupStyles.info}>
      <ParallaxProvider>
        <ParallaxCache/>
        <Parallax translateY={[isMobile?0:20, isMobile?0:-30]}>
        <Container>
          <p className={groupStyles.text}>
            An international platform supporting the pace of innovation and
            growth of young emerging and established entities looking to scale
            every vertical of their business. The platform has a global network
            of trend-setting corporations, media and influencers, made up of
            young entrepreneurs, opinion leaders and innovators with acumulative
            audience of 500 million and reach of over 1 billion.
          </p>
          <ul>
            <li className="text-center">
              <p>CAIRO</p>
              <span>+20 106 0091742</span>
              <span>contact@maisonpyramide.com</span>
            </li>
            <li className="text-center">
              <p>DUBAI</p>
              <span>+20 106 0091742</span>
              <span>contact@maisonpyramide.com</span>
            </li>
            {/* <li className="text-center">
              <p>LONDON</p>
              <span>+20 106 0091742</span>
              <span>contact@maisonpyramide.com</span>
            </li> */}
          </ul>
        </Container>
        </Parallax>
        </ParallaxProvider>

        <Container fluid>
        <ParallaxProvider>
        <ParallaxCache/>
        <Parallax translateY={[isMobile?0:30, isMobile?0:-30,'easeOutQuint']}>
          <div className={groupStyles.office}>
            <Row>
            <Col md={12} className={`${groupStyles.office_network_img} mobile`}>
                <Image src={groupImg}></Image>
              </Col>
              <Col md={4}>
                <div className={groupStyles.office_network}>
                  <h2>
                    Office <br className="disktop_only" /> Network
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc,
                    sed ornare sed tortor consectetur suspendisse commodo,
                    posuere tortor.
                  </p>
                </div>
              </Col>
              <Col md={4} className={`disktop_only`}>
                <Image src={groupImg}></Image>
              </Col>
              <Col md={4}>
                <div className={`${groupStyles.office_network} ${groupStyles.office_network_text}`}>
                  <p>
                  Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. 
                  <br/>
                  <br/>
                  {!isMobile && (
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque.'
                  )}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          </Parallax>
        </ParallaxProvider>

        <ParallaxProvider>
        <ParallaxCache/>
        <Parallax translateY={[isMobile?0:30, isMobile?0:-30,'easeOutQuint']}>
          <div className={groupStyles.leader}>
            <h2 className="text-center pb-3">Leadership Team</h2>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed
              ornare sed tortor
              <br className="disktop_only" /> consectetur suspendisse commodo, posuere tortor. Morbi
              aliquam, et mattis integer.
            </p>

            <Row>
              <Col md={3}>
                <div className={groupStyles.card}>
                  <Image className={groupStyles.img} src={groupImg2} height={150} objectFit={"cover"} width={100} layout="responsive"></Image>
                  <h3>Giovanina Attieh</h3>
                  <p>Co-Founder & Partner</p>
                  <p className={groupStyles.desc}>
                  15 years in the retail industry, with Vivienne Westwood in Milan and Al Ostoura as head buyer for luxury brands such as Chloe & Alexander McQueen. <br></br>
                    {isMobile && !isTextExpand[0] ?(
                      <p className={`${groupStyles.read_more} pt-3`} onClick={() => toggleExpandText(0)}>
                        READ MORE

                      </p>
                    ):
                    <></>
                    // <span>
                    //   Dictum eget ultrices quis nulla sagittis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisi, diam condimentum neque. Dictum eget ultrices quis nulla sagittis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisi, diam condimentum neque. Dictum eget ultrices quis nulla sagittis pretium.
                    //   <br></br>
                    //   {isMobile && (
                    //   <p className={`${groupStyles.read_more} pt-3`} onClick={() => toggleExpandText(0)}>
                    //     READ LESS
                    //   </p>
                    //   )}
                    // </span>
                    }
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className={groupStyles.card}>
                  <Image className={groupStyles.img} src={groupImg3} height={150} objectFit={"cover"} width={100} layout="responsive"></Image>
                  <h3>Maria Munoz</h3>
                  <p>Co-Founder & Partner</p>
                  <p className={groupStyles.desc}>
                  13 years in digital marketing, PR and Philanthropy, including as co-founder of Slickr, the first fashion social network in the region.<br></br>
                    {/* {isMobile && !isTextExpand[1] ?(
                      <p className={`${groupStyles.read_more} pt-3`} onClick={() => toggleExpandText(1)}>
                        READ MORE

                      </p> */}
                    {/* ): */}
                    <></>
                    {/* <span>
                      Dictum eget ultrices quis nulla sagittis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisi, diam condimentum neque. Dictum eget ultrices quis nulla sagittis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisi, diam condimentum neque. Dictum eget ultrices quis nulla sagittis pretium.
                      
                      <br></br>
                      {isMobile && (
                      <p className={`${groupStyles.read_more} pt-3`} onClick={() => toggleExpandText(1)}>
                        READ LESS
                      </p>
                      )}
                    </span> */}
                    
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className={groupStyles.card}>
                  <Image className={groupStyles.img} src={groupImg4} height={150} objectFit={"cover"} width={100} layout="responsive"></Image>
                  <h3>Nathalie Mroue</h3>
                  <p>Co-Founder & Partner</p>
                  <p className={groupStyles.desc}>
                  12 years in international  marketing and communications, including Stella McCartney and Elie Saab London as Head of New Media & PR. <br></br>
                    {/* {isMobile && !isTextExpand[2] ?(
                      <p className={`${groupStyles.read_more} pt-3`} onClick={() => toggleExpandText(2)}>
                        READ MORE

                      </p>
                    ):
                    <span>
                      Dictum eget ultrices quis nulla sagittis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisi, diam condimentum neque. Dictum eget ultrices quis nulla sagittis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisi, diam condimentum neque. Dictum eget ultrices quis nulla sagittis pretium.
                      
                      <br></br>
                      {isMobile && (
                      <p className={`${groupStyles.read_more} pt-3`} onClick={() => toggleExpandText(2)}>
                        READ LESS
                      </p>
                      )}
                    </span>
                    } */}
                  </p>
                </div>
              </Col>
              <Col md={3}>
                <div className={groupStyles.card}>
                  <Image className={groupStyles.img} src={groupImg1} height={150} objectFit={"cover"} width={100} layout="responsive"></Image>
                  <h3>Yann Pavie</h3>
                  <p>Executive Chairman & Partner </p>
                  <p className={groupStyles.desc}>
                  25 years in the private equity and investment banking industry, including as Chief Operating Officer and Board Member of NBK Capital. Over $15 billion in private equity and investment banking transactions.  <br></br>
                    {/* {isMobile && !isTextExpand[3] ?(
                      <p className={`${groupStyles.read_more} pt-3`} onClick={() => toggleExpandText(3)}>
                        READ MORE

                      </p>
                    ):
                    <span>
                      Dictum eget ultrices quis nulla sagittis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisi, diam condimentum neque. Dictum eget ultrices quis nulla sagittis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisi, diam condimentum neque. Dictum eget ultrices quis nulla sagittis pretium.
                      
                      <br></br>
                      {isMobile && (
                      <p className={`${groupStyles.read_more} pt-3`} onClick={() => toggleExpandText(3)}>
                        READ LESS
                      </p>
                      )}
                    </span>
                    } */}
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          </Parallax>
        </ParallaxProvider>

        <ParallaxProvider>
        <ParallaxCache/>
        <Parallax translateY={[isMobile?0:10, isMobile?0:-30,'easeOutQuint']}>
          <GroupSlider/>

          </Parallax>
        </ParallaxProvider>

          <div className={groupStyles.press}>
          <ParallaxProvider>
        <ParallaxCache/>
        <Parallax translateY={[isMobile?0:20, isMobile?0:-50,'easeOutQuint']}>

            <h2 className="text-center">
                In the press
            </h2>
            <p className="text-center">
            Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed <br className="disktop_only"/> ornare sed tortor consectetur suspendisse commodo, posuere tortor. 
            </p>
            <Row>
                <Col md={4} onClick={() => handlePost('https://coveteur.com/2018/10/16/maison-pyramide-founders-talk-business-new-designers/')}>
                    <div className={groupStyles.press_card}>
                    <div className={groupStyles.img}>
                      <Image src={pressImg} height={70} objectFit={"cover"} width={100} layout="responsive"></Image>
                    <h2>COVETEUR</h2>
                    </div>
                    <h3>
                    Maison Pyramide Is Discovering The Best New Designers So You Don’t Have To 
                    </h3>
                    <span>OCTOBER 2018</span>

                    <p>
                    A successful business needs a strong foundation. Coveteur focuses on Maison Pyramide&apos;s history and the women behind it.
                    </p>
                    <div className={groupStyles.card_tag}>COMPANY FEATURE</div>
                    </div>
                </Col>
                <Col md={4} onClick={() => handlePost('https://en.vogue.me/fashion/the-three-women-behind-maison-pyramide-arab-talent/')}>
                    <div className={groupStyles.press_card}>
                    <div className={groupStyles.img}>
                      <Image src={pressImg2} height={70} objectFit={"cover"} width={100} layout="responsive"></Image>
                      <h2>VOGUE ARABIA</h2>
                    </div>
                    <h3>
                    Meet the Three Women Driving Regional Brands to Make a Global Stamp 
                    </h3>
                    <span>JAN 2019</span>

                    <p>
                    A deep-dive into the experiences and complementing skills of each Maison Pyramide founder and their expectations for the company.
                    </p>
                    <div className={groupStyles.card_tag}>COMPANY FEATURE</div>
                    </div>
                </Col>
                <Col md={4} onClick={() => handlePost('https://wwd.com/fashion-news/designer-luxury/maison-pyramide-champions-middle-eastern-talent-at-harvey-nichols-1203141057/')}>
                    <div className={groupStyles.press_card}>
                    <div className={groupStyles.img}>
                      <Image src={pressImg3} height={70} objectFit={"cover"} width={100} layout="responsive"></Image>
                      <h2>WWD</h2>
                    </div>
                    <h3>
                    Maison Pyramide Champions Middle Eastern Talent at Harvey Nichols&apos; London flagship
                    </h3>
                    {/* <span>OCTOBER 23</span> */}
                    <p>
                    The leading regional sales showroom is bringing some of its up-and-coming brand partners to the London market, with a pop-up at Harvey Nichols&apos; London flagship.
                    </p>
                    <div className={groupStyles.card_tag}>COMPANY FEATURE</div>
                    </div>
                </Col>
            </Row>
            </Parallax>
        </ParallaxProvider>
          </div>
        </Container>
        
      </section>

    </Layout>
  );
}
