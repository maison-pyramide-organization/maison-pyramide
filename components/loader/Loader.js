import Image from "next/image";
import React, { useEffect } from "react";
import {
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";
import { motion,AnimatePresence  } from 'framer-motion'

import loaderStyle from "./LoaderStyle.module.scss";
import logo from '../../public/imgs/logowhite.png';
import m from '../../public/imgs/letters/M.svg';
import a from '../../public/imgs/letters/A.svg';
import i from '../../public/imgs/letters/I.svg';
import s from '../../public/imgs/letters/S.svg';
import o from '../../public/imgs/letters/O.svg';
import n from '../../public/imgs/letters/N.svg';
import p from '../../public/imgs/letters/P.svg';
import y from '../../public/imgs/letters/Y.svg';
import r from '../../public/imgs/letters/R.svg';
import d from '../../public/imgs/letters/D.svg';
import e from '../../public/imgs/letters/E.svg';


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

  const letters = [m,a,i,s,o,n,p,y,r,a,m,i,d,e];
  if (!isLoading) {
    setTimeout(() => {
      setHideWhole(true);
    }, 1000);
    setTimeout(() => {
      setHideLetters(true)
    }, 500);
  }

  return (
    <div>
      <TransitionGroup>
       
        {!hideWhole && (
          <CSSTransition key={2} timeout={500} classNames={"item"}>

<div className={loaderStyle.main}>
            <h1 className={loaderStyle.h1}>
              {letters.map((letter,i)=>(
                <AnimatePresence>
                    { !hideLetters && (
                    <motion.div className={loaderStyle.letter}
                      initial="hidden"
                      animate="enter"
                      exit="exit"
                      variants={i%2 == 0?variantsTop:variantsBot}
                      style={{marginRight:letter == n?'30px':0}}
                      transition={{ duration: 1, ease: "easeInOut",type: 'linear' }}
                    >
                      <Image width={30} height={30} src={letter}/>
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
