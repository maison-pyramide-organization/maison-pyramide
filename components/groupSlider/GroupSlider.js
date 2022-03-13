import Image from "next/image";
import Link from 'next/link';

import React, { useEffect } from 'react';
import { Row , Col, Container} from 'react-bootstrap';
import {
    TransitionGroup,
    CSSTransition,
  } from "react-transition-group";

import sliderStyle from './GroupSliderStyle.module.scss';
import group1 from "../../public/imgs/group12.jpg";
// import group2 from "../../public/imgs/group2.png";
import group2 from '../../public/imgs/group2.jpeg';
import group3 from '../../public/imgs/group3.jpg';
import group4 from '../../public/imgs/group4.jpg';
import group5 from '../../public/imgs/group5.jpg';
import group6 from '../../public/imgs/group6.jpg';
import group7 from '../../public/imgs/group7.png';
import group8 from '../../public/imgs/group8.JPG';
import group9 from '../../public/imgs/group9.JPG';
import group10 from '../../public/imgs/group10.JPG';
import group11 from '../../public/imgs/group11.png';
import group12 from '../../public/imgs/group1.JPG';
// import group13 from '../../public/imgs/group13.jpg';
// import group14 from '../../public/imgs/group14.jpg';
// import group15 from '../../public/imgs/group15.jpg';



const _items = [
    {
        id:0,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group1
    },
    {
        id:1,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group2
    },
    {
        id:2,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group3
    },
    {
        id:3,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group4
    },
    {
        id:4,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group5
    },
    {
        id:5,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group6
    },
    {
        id:6,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group7
    },
    {
        id:7,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group8
    },
    {
        id:8,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group9
    },
    {
        id:9,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group10
    },
    {
        id:10,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group11
    },
    {
        id:11,
        sections:[
            {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
            {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam.\n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
        ],
        img:group12
    },
];

export default function HomeCarousel () {
    const [activeIdx, setActiveIdx] = React.useState(0);
    const [slideAnimationState, setSlideAnimationState] = React.useState(false);
    const [backSlideAnimationState, setBackSlideAnimationState] = React.useState(false);
    const [isNext , setIsNext] = React.useState(null);

    const prevClick = () => {
        setBackSlideAnimationState(true);
        
        setTimeout(() => {
            if(_items[activeIdx - 1]){
                setActiveIdx(prev => prev - 1);
            }
            else{
                setActiveIdx(_items.length -1);
            }
            setIsNext(false);
            setBackSlideAnimationState(false);
        }, 1000);
        setTimeout(() => {
            setIsNext(null);
        }, 2000);
        
    };

    const nextClick = () => {
        
        setSlideAnimationState(true);
        setTimeout(() => {
            if(_items[activeIdx + 1]){
                setActiveIdx(prev => prev + 1);
            }
            else{
                setActiveIdx(0)
            }
            setIsNext(true)
            setSlideAnimationState(false);
        }, 1000);

        setTimeout(() => {
            setIsNext(null)
        }, 1300);
    };

    useEffect(() => {

    },[activeIdx])

    return (
        <div className={sliderStyle.culture}>
            <Row className={sliderStyle.imgs_row}>
            <link rel="preload" as="image" href={group1.src}></link>
            <link rel="preload" as="image" href={group2.src}></link>
            <link rel="preload" as="image" href={group3.src}></link>
            <link rel="preload" as="image" href={group4.src}></link>
            <link rel="preload" as="image" href={group5.src}></link>
            <link rel="preload" as="image" href={group6.src}></link>
            <link rel="preload" as="image" href={group7.src}></link>
            <link rel="preload" as="image" href={group8.src}></link>
            <link rel="preload" as="image" href={group9.src}></link>
            <link rel="preload" as="image" href={group10.src}></link>
            <link rel="preload" as="image" href={group11.src}></link>
            <link rel="preload" as="image" href={group12.src}></link>
              <Col md={5}>
                    <div className={sliderStyle.slide}>
                        {_items[activeIdx].sections.map((section,key) => {
                            return (
                                <div key={key} className={sliderStyle.text}>
                                    <h3 className={`mb-3 ${sliderStyle.title}`}>{section.title}</h3>
                                    <pre>
                                    {section.desc}
                                    </pre>
                                
                                </div>
                            )
                        })}
                    </div>               
              </Col>
              <Col md={5} sm={8} xs={8} className={sliderStyle.slide_img}>
                {/* <TransitionGroup>
                {!slideAnimationState && (
                    <CSSTransition key={3} timeout={2500} classNames={"item"}> */}
                        <div className={`${sliderStyle.slide_img_cont} ${slideAnimationState?sliderStyle.fade:backSlideAnimationState?sliderStyle.currToNext:''} ${isNext == false?sliderStyle.show:''}`}>
                            <Image unoptimized={true} priority={true} loading="eager" width={80} height={100} src={_items[activeIdx].img} className={sliderStyle.imgg} objectFit="cover" layout="responsive"></Image>
                        </div>
                    {/* </CSSTransition>
                )}
                </TransitionGroup> */}

              </Col>
              <Col md={5} sm={8} xs={4} className={sliderStyle.slide_side_img}>
              {/* <TransitionGroup>
                {!slideAnimationState && (
                    <CSSTransition key={3} timeout={3500} classNames={"item"}> */}
                        <div className={` ${sliderStyle.slide_side_img_cont}  ${slideAnimationState?sliderStyle.nextToCurr:backSlideAnimationState?sliderStyle.fade:''} ${isNext?sliderStyle.slideLeft:''}`}>
                        {_items[activeIdx + 1] &&  _items[activeIdx + 1].img?(
                            <Image unoptimized={true} width={80} height={100} src={_items[activeIdx + 1].img} className={sliderStyle.img} objectFit="cover" alt="girl" layout="responsive"></Image>
                        ):
                        (
                            <Image unoptimized={true} width={80} height={100} src={_items[0].img} alt="girl" className={sliderStyle.img} objectFit="cover" layout="responsive"></Image>
                        )
                        }
                        </div>
                    {/* </CSSTransition>
                )}
                </TransitionGroup> */}
              </Col>
            </Row>
            <div className={sliderStyle.slider_ctrls}>
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
            <p className={`text-center mt-3 ${sliderStyle.counter}`}>{activeIdx < 9?'0':''}{activeIdx + 1} / {_items.length < 9?'0':''}{_items.length}</p>
            <div className="clearfix"></div>
          </div>
       
    );
};
        
