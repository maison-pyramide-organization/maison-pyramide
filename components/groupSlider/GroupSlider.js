import Image from "next/image";
import Link from 'next/link';

import React, { useEffect , useState} from 'react';
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



// const [_items] = [
//     // {
//     //     id:0,
//     //     sections:[
//     //         {id:0,"title":"Culture","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec."},
//     //         {id:1,"title":"Values and Giving","desc":"Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor. Morbi aliquam. \n \n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquam, et mattis integer. Rhoncus eget gravida vel amet blandit enim velit donec. Pellentesque quam adipiscing faucibus laoreet faucibus scelerisque."}
//     //     ],
//     //     img:group1
//     // },
//     {
//         id:1,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         img:group11
//     },
//     {
//         id:2,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         img:group2
//     },
//     {
//         id:3,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         img:group3
//     },
//     {
//         id:4,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         img:group4
//     },
//     {
//         id:5,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         img:group5
//     },
//     {
//         id:6,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         img:group6
//     },
//     {
//         id:7,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         img:group7
//     },
//     {
//         id:8,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         img:group8
//     },
//     {
//         id:9,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         img:group9
//     },
//     {
//         id:10,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         img:group10
//     },
//     {
//         id:11,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         // img:group11
//         img:group1
//     },
//     {
//         id:12,
//         sections:[
//             {id:0,"title":"Culture","desc":"Founded by three creative and ambitious women who are mothers above all, Maison Pyramide fosters a nurturing culture where creativity thrives. Our business succeeds because of positive collaboration, inspiring loyalty from our teams and clients alike We passionately support forward-thinking clients, and we understand what purposeful brands mean for today's consumers."},
//             {id:1,"title":"Values and Giving","desc":"We value individuality - and unity. Each person's unique input is important, but collaboration is how we accomplish more, and make things bigger, better, extraordinary We carefully curate promising new ethical, purpose-led, and sustainable brands. We amplify their reach at international showrooms and events.\n \n We also support several philanthropic projects directly, often by donating proceeds from sales at events and pop-ups. One such cause is Elisa Sednaoui Foundation's 'Funtasia', which provides learning opportunities for children in local communities in Italy and Egypt."}
//         ],
//         img:group12
//     },
// ];

export default function HomeCarousel (props) {
    const [activeIdx, setActiveIdx] = React.useState(0);
    const [slideAnimationState, setSlideAnimationState] = React.useState(false);
    const [backSlideAnimationState, setBackSlideAnimationState] = React.useState(false);
    const [isNext , setIsNext] = React.useState(null);

    const [current, setCurrent] = useState(1);
    const [currentScroll, setCurrentScroll] = useState(0);
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

    useEffect(() => {
        let tabs = document.getElementById('group-slider');
        let imgEle = document.getElementById(`img${current}`).getBoundingClientRect();

        tabs.scroll({ left: current == 1? current :(current -1 )* imgEle.width, behavior: 'smooth' });
    },[current])

    return (
        <div className={sliderStyle.culture}>
            <Row className={sliderStyle.imgs_row}>
            {/* <link rel="preload" as="image" href={group1.src}></link>
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
            <link rel="preload" as="image" href={group12.src}></link> */}
              <Col md={5}>
                    <div className={sliderStyle.slide}>
                        {/* {_items[activeIdx].sections.map((section,key) => {
                            return (
                                <div key={key} className={sliderStyle.text}>
                                    <h3 className={`mb-3 ${sliderStyle.title}`}>{section.title}</h3>
                                    <pre>
                                    {section.desc}
                                    </pre>
                                
                                </div>
                            )
                        })} */}
                        <div className={sliderStyle.text}>
                                    <h3 className={`mb-3 ${sliderStyle.title}`}>Culture</h3>
                                    <pre>
                                    {props.cultureText}
                                    </pre>
                                
                            </div>
                        <div className={sliderStyle.text}>
                                    <h3 className={`mb-3 ${sliderStyle.title}`}>Values and Giving</h3>
                                    <pre>
                                    {props.valuesText}
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
                                     {/* <div className={sliderStyle.text}>
                                         <h3>title</h3>
                                         <p>text</p>
                                     </div> */}
                                  </div>
                              )
                          })}
                      </div>
                  </section>
                  </Col>
              {/* <Col md={5} sm={8} xs={8} className={`${sliderStyle.slide_img} disktop_only`}>
               
                <div className={`${sliderStyle.slide_img_cont} ${slideAnimationState?sliderStyle.fade:backSlideAnimationState?sliderStyle.currToNext:''} ${isNext == false?sliderStyle.show:''}`}>
                    <Image unoptimized={true} priority={true} loading="eager" width={80} height={100} src={_items[activeIdx].img} className={sliderStyle.imgg} objectFit="cover" layout="responsive"></Image>
                </div>

              </Col>
              <Col md={5} sm={8} xs={4} className={`${sliderStyle.slide_side_img} disktop_only`}>
                <div className={` ${sliderStyle.slide_side_img_cont}  ${slideAnimationState?sliderStyle.nextToCurr:backSlideAnimationState?sliderStyle.fade:''} ${isNext?sliderStyle.slideLeft:''}`}>
                {_items[activeIdx + 1] &&  _items[activeIdx + 1].img?(
                    <Image unoptimized={true} width={80} height={100} src={_items[activeIdx + 1].img} className={sliderStyle.img} objectFit="cover" alt="girl" layout="responsive"></Image>
                ):
                (
                    <Image unoptimized={true} width={80} height={100} src={_items[0].img} alt="girl" className={sliderStyle.img} objectFit="cover" layout="responsive"></Image>
                )
                }
                </div>
              </Col> */}

              {/* <Col sm={7} className={`mobile`}>
                  <section>
                      <div className={sliderStyle.mobile_images} id="slider">
                          {_items.map((item) => {
                              return (
                                  <div className={sliderStyle.image}>
                                     <img src={item.img.src}/>
                                  </div>
                              )
                          })}
                      </div>
                  </section>
              </Col> */}
            </Row>
            {/* <div className={`${sliderStyle.slider_ctrls} disktop_only`}>
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
            </div> */}
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
            
            {/* <p className={`text-center disktop_only mt-3 ${sliderStyle.counter}`}>{activeIdx < 9?'0':''}{activeIdx + 1} / {_items.length < 9?'0':''}{_items.length}</p> */}
            <p className={`text-center mt-3 ${sliderStyle.counter}`}>{current < 9?'0':''}{current} / {props?.images?.length < 9?'0':''}{props?.images?.length}</p>
            <div className="clearfix"></div>
          </div>
       
    );
};
        
