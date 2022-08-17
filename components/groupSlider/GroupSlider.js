import Image from "next/image";
import Link from 'next/link';

import React, { useEffect , useState} from 'react';
import { Row , Col, Container} from 'react-bootstrap';
import {
    TransitionGroup,
    CSSTransition,
  } from "react-transition-group";
import { motion } from 'framer-motion';


import sliderStyle from './GroupSliderStyle.module.scss';

export default function HomeCarousel (props) {
    const [activeIdx, setActiveIdx] = React.useState(0);
    const [slideAnimationState, setSlideAnimationState] = React.useState(false);
    const [backSlideAnimationState, setBackSlideAnimationState] = React.useState(false);
    const [isNext , setIsNext] = React.useState(null);

    const [current, setCurrent] = useState(1);
    const [currentScroll, setCurrentScroll] = useState(0);

    const headerVariants = {
      hidden: { opacity: 0, y: "10%" ,scale:1.05},
      enter: { opacity: 1, y: 0 ,scale:1}
    }
    const textVariants = {
      hidden: { opacity: 0, x: 15 },
      enter: { opacity: 1, x: 0 }
    }
    const nextClick = () => {
        if (current < props.images?.length ) {
            setCurrent(prev => prev + 1);
        }
    }
    const prevClick = () => {
        if (current > 1) {
            setCurrent(prev => prev - 1);
        }
    }

    const animatedText = (text) => {
      let textArr = text?.split(" ");
      textArr?.map((word,i)=>{
        textArr[i] =  <motion.span
        initial="hidden"
        whileInView="enter"
        exit="exit"
        variants={textVariants}
        transition={{ duration: 1,delay: i*.01, ease: "easeInOut",type: 'linear' }}
         >
          {word+' '}
          </motion.span>
      })
      return textArr;
    }

    useEffect(() => {
        let tabs = document.getElementById('group-slider');
        let imgEle = document.getElementById(`img${current}`).getBoundingClientRect();

        tabs.scroll({ left: current == 1? current :(current -1 )* imgEle.width, behavior: 'smooth' });
    },[current])

    return (
        <div className={sliderStyle.culture}>
            <Row className={sliderStyle.imgs_row}>
              <Col md={5}>
                    <div className={sliderStyle.slide}>
                        <div className={sliderStyle.text}>
                                    <motion.h3 className={`mb-3 ${sliderStyle.title}`}
                                      initial="hidden"
                                      animate="enter"
                                      exit="exit"
                                      variants={headerVariants}
                                      transition={{ duration: 1.2, ease: "easeInOut",type: 'linear' }}
                                    
                                    >Culture</motion.h3>
                                    <pre>
                                    {animatedText(props.cultureText)}
                                    </pre>
                                
                            </div>
                        <div className={sliderStyle.text}>
                        <motion.h3 className={`mb-3 ${sliderStyle.title}`}
                                      initial="hidden"
                                      animate="enter"
                                      exit="exit"
                                      variants={headerVariants}
                                      transition={{ duration: 1.2, ease: "easeInOut",type: 'linear' }}
                                    
                                    >Values and Giving</motion.h3>
                                    <pre>
                                    {animatedText(props.valuesText)}
                                    </pre>
                                
                            </div>
                    </div>               
              </Col>
              <Col md={7}>
              <section >
                      <div className={sliderStyle.mobile_images} id="group-slider">
                          {props.images?.map((item,ind) => {
                              return (
                                  <div className={sliderStyle.image} key={ind} id={`img${ind + 1}`}>
                                     <img src={item.custom_data?.url}/>
                                  </div>
                              )
                          })}
                      </div>
                  </section>
                  </Col>
            </Row>
            <div className={`${sliderStyle.slider_ctrls}`}>
              <div
                className={`${sliderStyle.slider_ctrl} ${sliderStyle.slider_ctrl_right}`}
                onClick={nextClick}
              >
                <span className={sliderStyle.chev_right}></span>
              </div>
              <div
                className={`${sliderStyle.slider_ctrl} ${sliderStyle.slider_ctrl_left}`}
                onClick={prevClick}
              >
                <span className={sliderStyle.chev_left}></span>
              </div>
            </div>
            
            <p className={`text-center mt-3 ${sliderStyle.counter}`}>{current < 9?'0':''}{current} / {props?.images?.length < 9?'0':''}{props?.images?.length}</p>
            <div className="clearfix"></div>
          </div>
       
    );
};
        
