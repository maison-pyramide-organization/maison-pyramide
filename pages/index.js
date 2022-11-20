import Link from 'next/link';
import dynamic from "next/dynamic";

import { useEffect, useState } from 'react';

import { Row , Col, Container} from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax  } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

import Layout from "../components/layout/Layout";
import ClientComponent from '../components/clientComonent/clientComponent';
import ExpertiseComponent from '../components/expertiseComponent/expertiseComponent';

// import bgVideo from '../public/imgs/video.mp4';


import variables from '../styles/variables.module.scss';
import homeStyles from './Home.module.scss';
const HomeSliderCarousel = dynamic(
  () => {
    return import("../components/homeSlider/HomeSlider");
  },
  { ssr: false }
);
const IsMobileComponent = dynamic(
  () => {
      return import("../components/isMobile/IsMobileComponent");
  },
  { ssr: false }
);
const ParallaxCache = dynamic(
  () => {
      return import("../components/parallaxCache/parallaxCache");
  },
  { ssr: false }
);


const textVariants = {
  hidden: { opacity: 0, x: 15 },
  enter: { opacity: 1, x: 0 },
}

function Home() {

  const [currentScroll, setCurrentScroll] = useState(0);
  
  const [isMobile, setIsMobile] = useState(null);
  const [loadingFlag, setLoadingFlag] = useState(false);

 
  
  

  const useHandleMobile = (value) =>{
    useEffect(() => {
        setIsMobile(value)
    },[])
  }

 

  const handleExpertise = (n) => {
    setLoadingFlag(true);
    setExpertise(n);     
  }

  
  const animatedText = (text) => {
    let textArr = text?.split(" ");
    textArr?.map((word,i)=>{
      textArr[i] =  <motion.span
      key={word+i}
      style={{opacity: 0, x: 15}}
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

  return (
    <>
    <IsMobileComponent handleMobile={useHandleMobile}/>
    <section className={homeStyles.main}>
      {isMobile != null && (

      <video autoPlay playsInline muted loop id="myVideo" style={{width:'100%' , height:'100vh',objectFit:'cover'}}>
        {/* <source src={isMobile?"/imgs/videobgmobile.mp4":"/imgs/videobg.mp4"} /> */}
        <source src={isMobile?"https://gazef.s3.us-west-2.amazonaws.com/maison/videobgmobile.mp4":"/imgs/videobg.mp4"} />
      </video>
      )}
      {/* {!isMobile && (
        <div className={`${homeStyles.video_text} mobile`}>
          <Image
            src={videoText}
          />
        </div>
      )} */}
    </section>

    <ParallaxProvider>
    <Parallax translateY={[isMobile?10:15,isMobile?-10: -40]} style={{backgroundColor:'#0e0e0e'}}>
    <ParallaxCache/>  
    <section className={homeStyles.info_txt}>

      <Container fluid>
      {/* <h1 className="text-center" style={{color:variables.primaryColorLight}}>GLOBAL GROWTH FOR <br className="disktop_only"/>
          TREND-SETTING BRANDS</h1> */}

        <Row style={{justifyContent:'space-around'}}>
          <Col md={7}>
          <div className={homeStyles.text}>
          <p>
            {animatedText('Maison Pyramide Group is fuelling the next generation of consumer brands, by connecting them with millennial audiences. Our innovative platform drives international growth through strategic - and profoundly inspirational - solutions.')}
         </p>
          <Link href="/group">
          <button>
            <a>
            MORE ABOUT US
            </a>
            </button>
          </Link>
          </div>
        
          </Col>
          <Col md={5}>
          <div className={homeStyles.menu}>
          <ul>
            <li>
            <Link href="/">
                <a className={`nav-link`}>Strategy Consulting</a>
            </Link>
            </li>
            <li>
            <Link href="/">
                <a className={`nav-link`}>Event / Concept Development</a>
            </Link>
            </li>
            <li>
            <Link href="/">
                <a className={`nav-link`}>Sales & Distribution</a>
            </Link>
            </li>
            <li>
            <Link href="/">
                <a className={`nav-link`}>Talent Booking & Management </a>
            </Link>
            </li>
            <li>
            <Link href="/">
                <a className={`nav-link`}>PR & Marketing</a>
            </Link>
            </li>
            <li>
            <Link href="/">
                <a className={`nav-link`}>Brand Partnerships</a>
            </Link>
            </li>
          </ul>
          <Link href="/services">
          <button>
            <a>
            MORE ABOUT OUR SERVICES
            </a>
            </button>
          </Link>
            </div>
         
          </Col>
        </Row>
       

      </Container>   
    </section>
      </Parallax>
      </ParallaxProvider>


      <section className={homeStyles.featured}>
        {/* {!isMobile ? ( */}
          <>
            <ParallaxProvider>
            <ParallaxCache/>
            {/* easeInOutSine */}
            {/* ease */}
            {/* easeInOut */}
            <Parallax translateY={[isMobile?10:20,isMobile?-10: -30,isMobile?'easeOutQuint':'easeOutQuint']}>
            <HomeSliderCarousel/>

            </Parallax>
            </ParallaxProvider>
          </>
        {/* ) :
        (
          <HomeSliderCarousel/> 
        )
        } */}         
      </section>
    

        <div style={{background:'linear-gradient(#F4F3EF 30%,transparent 30%)'}}>

        <ExpertiseComponent/>
        </div>


        <ParallaxProvider>
        <Parallax translateY={[isMobile?0:-30,isMobile?-10: 30,isMobile?'easeInQuint':'easeInQuint']}>
        {/* <Parallax translateY={[10, -90,'easeOutQuint']}> */}
        <ParallaxCache/> 
        <ClientComponent/>
        </Parallax>
        </ParallaxProvider>
      
    </>
  )
}

export default Home;
