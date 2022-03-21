import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Head from "next/head";

import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from 'framer-motion'

import '../styles/globals.css';
import ProjectService from "../pages/api/services/ProjectService";
import NavComponent from '../components/nav/navComponent';
import LoaderComponent from '../components/loader/Loader';
import FooterComponent from '../components/footer/footerComponent';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});
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

// const FooterComponent = dynamic(() => import('../components/footer/footerComponent'), {
//   ssr: false
// });

function MyApp({ Component, pageProps }) {
  const [isLoading,setIsLoading] = React.useState(true);
  const [isMobile, setIsMobile] = React.useState(null);
  const router = useRouter();

  const useHandleMobile = (value) => {
    React.useEffect(() => {
        setIsMobile(value)
    }, [])
}
  React.useEffect(()=>{

    ProjectService.getFeaturedProjects().then(res => {
      }).catch(err => {
          console.log(err);
      }).finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
    
  },[])
  

  return (
    <>
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      {/* <link rel="apple-touch-icon" href="/imgs/icon.svg" /> */}
    </Head>
      { router.pathname != '/404'?
        (
          <>
          <NavComponent/>
          <IsMobileComponent handleMobile={useHandleMobile}/>
           <div className="total-mb">
            <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
            <Component {...pageProps}/>
            </AnimatePresence>

            </div>
          <div className="parallax" style={{overflow:'hidden'}}>
          <ParallaxProvider>
              <ParallaxCache/>
                <Parallax className={`parallax`} translateY={[isMobile?0:-30, isMobile?0:50]}>
              <FooterComponent/>
              </Parallax>
            </ParallaxProvider>
          </div>
          
          </>
        ):
        (
          <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
          >
           <AnimatedCursor
              innerSize={8}
              outerSize={8}
              color='198, 111, 44'
              outerAlpha={0.2}
              innerScale={0.7}
              outerScale={5}
              />
          <Component {...pageProps}/>
        </AnimatePresence>
        )
      }
     
        
      
      
      <LoaderComponent isLoading={isLoading}/>


  </>

  )
}

export default MyApp
