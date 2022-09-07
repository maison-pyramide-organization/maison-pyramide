import Image from "next/image";
import React, { useEffect } from "react";
import {
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";
import { motion,AnimatePresence  } from 'framer-motion'

import loaderStyle from "./LoaderStyle.module.scss";
import logo from '../../public/imgs/logowhite.png';
import m from '../../public/imgs/letters/M.png';
import a from '../../public/imgs/letters/A.png';
import i from '../../public/imgs/letters/I.png';
import s from '../../public/imgs/letters/S.png';
import o from '../../public/imgs/letters/O.png';
import n from '../../public/imgs/letters/N.png';
import p from '../../public/imgs/letters/P.png';
import y from '../../public/imgs/letters/Y.png';
import r from '../../public/imgs/letters/R.png';
import d from '../../public/imgs/letters/D.png';
import e from '../../public/imgs/letters/E.png';


const variantsTop = {
  hidden: { opacity: 0, x: 0, y: "100%" },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: "-100%" }
}
const variantsBot = {
  hidden: { opacity: 0, x: 0, y: "-100%" },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: "100%" }
}


const LoaderComponent = ({ isLoading }) => {
  const [hideWhole, setHideWhole] = React.useState(false);
  const [hideLetters,setHideLetters] = React.useState(false);

  const letters = [m,a,i,s,o,n];
  const pyramide = [p,y,r,a,m,i,d,e] 
  if (!isLoading) {
    setTimeout(() => {
      setHideWhole(true);
    }, 1000);
    setTimeout(() => {
      setHideLetters(true)
    }, 5000);
  }

  const PreloadImages = () => {

    return(
      [...letters,...pyramide].map((letter,i) => (
        <link key={i} rel="preload" as="image" href={letter}></link>
      ))
    )
  }

  return (
    <div>
      <PreloadImages/>
      <TransitionGroup>
       
        {!hideWhole && (
          <CSSTransition key={2} timeout={500} classNames={"item"}>

          <div className={loaderStyle.main}>
            <h1 className={loaderStyle.h1} style={{marginLeft:"20px"}}>
              {letters.map((letter,ind)=>(
                <AnimatePresence key={ind}>
                    { !hideLetters && (
                    <motion.div className={loaderStyle.letter}
                      initial="hidden"
                      animate="enter"
                      exit="exit"
                      variants={ind%2 == 0?variantsTop:variantsBot}
                      style={{
                        marginRight:letter == n?'40px':
                        letter == m?'15px':
                        letter == i?'0px':'10px',

                        marginLeft:letter == m?'15px':
                        letter == i? '0':'10px'
                      }}
                      transition={{ duration: 1, ease: "easeInOut",type: 'linear' }}
                    >
                      <Image unoptimized={true} loading="eager" src={letter}/>
                    </motion.div>
                    )}
                    </AnimatePresence>
              ))}
            </h1>
            <h1 className={loaderStyle.h1}>
            {pyramide.map((letter,ind)=>(
                <AnimatePresence key={ind}>
                    {!hideLetters && (
                    <motion.div className={loaderStyle.letter}
                      initial="hidden"
                      animate="enter"
                      exit="exit"
                      variants={ind%2 == 0?variantsTop:variantsBot}
                      style={{
                        marginRight:letter == n?'40px':
                        letter == m?'15px':
                        letter == i?'0px':'10px',

                        marginLeft:letter == m?'15px':
                        letter == i? '0':'10px'
                      }}
                      transition={{ duration: 1, ease: "easeInOut",type: 'linear' }}
                    >
                      <Image unoptimized={true} loading="eager" src={letter}/>
                    </motion.div>
                    )}
                    </AnimatePresence>
              ))}
            </h1>
          </div>
            {/* <div className={loaderStyle.main}>
              <h1 className={loaderStyle.h1}>
                <Image src={logo} className={loaderStyle.logo} layout="responsive"></Image>
                <TransitionGroup>
                  {!isLoading && (
                    <CSSTransition key={1} timeout={500} classNames={"title"}>
                      <div className={loaderStyle.titleLayer}></div>
                    </CSSTransition>
                  )}
                </TransitionGroup>
              </h1>
              <br />
            </div> */}
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default LoaderComponent;
