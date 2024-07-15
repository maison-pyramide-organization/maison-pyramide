import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import sliderStyle from "./HomeSliderStyle.module.scss";
import ProjectService from "../../pages/api/services/ProjectService";

export default function HomeCarousel() {
  const router = useRouter();

  const [activeIdx, setActiveIdx] = React.useState(0);
  const [slideAnimationState, setSlideAnimationState] = React.useState(false);
  const [backSlideAnimationState, setBackSlideAnimationState] =
    React.useState(false);
  const [typeSlide, setTypeSlide] = React.useState(null);
  const [showMiddleAnimation, setShowMiddleAnimation] = React.useState(false);
  const [textAnimation, setTextAnimation] = React.useState(false);
  const [_items, setItems] = React.useState([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = () => {
    ProjectService.getFeaturedProjects()
      .then((res) => {
        setItems(res.data);
        // res.data.map(item => {
        // console.log('sss',item.attributes.image.custom_data.url);
        // })
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClick = (id) => {
    if (id) {
      router.push(`clients/${id}`);
    }
  };
  const prevClick = (e) => {
    e.stopPropagation();
    setShowMiddleAnimation(true);
    setBackSlideAnimationState(true);
    setTextAnimation(true);
    setTypeSlide("prev");
    setTextAnimation(true);

    // setTimeout(() => {
    //     setTextAnimation(false);

    // },400)
    setTimeout(() => {
      setShowMiddleAnimation(false);
      setBackSlideAnimationState(false);
      setTextAnimation(false);

      if (_items[activeIdx - 1]) {
        setActiveIdx((prev) => prev - 1);
      } else {
        if (_items.length > 0) {
          setActiveIdx(_items.length - 1);
        } else {
          setActiveIdx(0);
        }
      }
    }, 1000);
  };

  const nextClick = (e) => {
    e.stopPropagation();
    setSlideAnimationState(true);
    setShowMiddleAnimation(true);
    setTextAnimation(true);
    setTypeSlide("next");

    setTimeout(() => {
      if (_items[activeIdx + 1]) {
        setActiveIdx((prev) => prev + 1);
      } else {
        setActiveIdx(0);
      }

      setShowMiddleAnimation(false);
      setSlideAnimationState(false);
      setTextAnimation(false);
    }, 1000);
  };

  const titleLastWords = (title) => {
    const words = title.trim().split(" ");
    const lastWords = words.slice(-2).join(" ");
    return lastWords;
  };
  const titleWithoutLastWords = (title) => {
    const words = title.trim().split(" ");
    words.splice(-2);
    const newTitle = words.join(" ");
    return newTitle;
  };

  return (
    _items &&
    _items.length && (
      <Container fluid className={sliderStyle.featured}>
        <TransitionGroup>
          {!slideAnimationState && !backSlideAnimationState && (
            <CSSTransition key={2} timeout={1000} classNames={"item"}>
              <span className={sliderStyle.page_count}>
                {activeIdx < 10 ? "0" : ""}
                {activeIdx + 1}
              </span>
            </CSSTransition>
          )}
        </TransitionGroup>
        <h2 className="text-center">Featured Projects</h2>
        <div style={{ clear: "both" }}></div>

        <Container fluid className="disktop_only">
          <Row className={sliderStyle.slider_row}>
            <Col md={4}>
              <TransitionGroup className="h-100">
                {!textAnimation && (
                  <CSSTransition key={2} timeout={2000} classNames={"textitem"}>
                    <div className={sliderStyle.text}>
                      <p className={`${sliderStyle.clientname} mb-0`}>
                        {_items[activeIdx]?.attributes?.client_name}
                      </p>
                      <h2 className={`${sliderStyle.title}`}>
                        {/* {_items[activeIdx]?.attributes?.title} */}
                        {titleWithoutLastWords(
                          _items[activeIdx]?.attributes?.title
                        )}{" "}
                        <span className="no-wrap">
                          {titleLastWords(_items[activeIdx]?.attributes?.title)}
                        </span>
                      </h2>
                      {_items[activeIdx]?.attributes?.tags && (
                        <ul>
                          {JSON.parse(_items[activeIdx]?.attributes?.tags).map(
                            (item, key) => {
                              return <li key={key}>{item}</li>;
                            }
                          )}
                        </ul>
                      )}
                      <p className="disktop_only">
                        {_items[activeIdx]?.attributes?.home_description}
                      </p>
                      <div style={{ width: "100%" }}>
                        {_items[activeIdx].attributes?.features && (
                          <Link
                            href={`/clients/${_items[activeIdx].attributes?.features}`}
                          >
                            <button>
                              <a>VIEW PROJECT</a>
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </Col>
            <Col md={5}>
              {_items.map((item, i) => {
                return (
                  <>
                    <link
                      key={i}
                      rel="preload"
                      as="image"
                      href={item?.attributes.image?.custom_data?.url}
                    ></link>
                  </>
                );
              })}
              <div
                className={`${sliderStyle.current_img} ${
                  showMiddleAnimation && typeSlide == "next"
                    ? sliderStyle.currentToBack
                    : showMiddleAnimation && typeSlide == "prev"
                    ? sliderStyle.currentToNext
                    : ""
                }`}
              >
                <Image
                  layout="responsive"
                  unoptimized={true}
                  loading="eager"
                  objectFit="cover"
                  src={_items[activeIdx]?.attributes?.image?.custom_data?.url}
                  width={100}
                  height={125}
                  alt="girl"
                ></Image>
              </div>
            </Col>

            <Col md={5}>
              <div className={sliderStyle.rightPart}>
                <div className={sliderStyle.next_slider_img}>
                  {/* <TransitionGroup>
                                {!slideAnimationState && (
                                    <CSSTransition key={1} timeout={1000} classNames={"diagonal-item"}> */}
                  <div
                    className={`${sliderStyle.next_img} ${
                      showMiddleAnimation && typeSlide == "next"
                        ? sliderStyle.nextToCurrent
                        : showMiddleAnimation && typeSlide == "prev"
                        ? sliderStyle.nextToDisappear
                        : ""
                    }`}
                  >
                    {_items[activeIdx + 1] &&
                    _items[activeIdx + 1].attributes?.image?.custom_data
                      ?.url ? (
                      // <Image src={_items[activeIdx + 1].img} alt="girl"></Image>
                      <Image
                        layout="responsive"
                        unoptimized={true}
                        loading="eager"
                        objectFit="cover"
                        src={
                          _items[activeIdx + 1]?.attributes?.image?.custom_data
                            ?.url
                        }
                        width={100}
                        height={125}
                        alt="girl"
                      ></Image>
                    ) : (
                      <Image
                        layout="responsive"
                        unoptimized={true}
                        loading="eager"
                        objectFit="cover"
                        src={_items[0]?.attributes?.image?.custom_data?.url}
                        width={100}
                        height={125}
                        alt="girl"
                      ></Image>
                    )}
                  </div>
                  {/* </CSSTransition>
                                )}
                            </TransitionGroup> */}
                </div>
                <div className={sliderStyle.slider_ctrls}>
                  <div
                    onClick={prevClick}
                    className={`${sliderStyle.slider_ctrl} ${sliderStyle.slider_ctrl_left}`}
                  >
                    <span className={sliderStyle.chev_left}></span>
                  </div>
                  <div
                    onClick={nextClick}
                    className={`${sliderStyle.slider_ctrl} ${sliderStyle.slider_ctrl_right}`}
                  >
                    <span className={sliderStyle.chev_right}></span>
                  </div>
                </div>

                <div className={sliderStyle.mobile_counter}>
                  {_items.map((item, key) => {
                    // console.log('el testt',key,activeIdx);
                    return (
                      <span
                        key={key}
                        className={`${sliderStyle.counter_dot} ${
                          key != activeIdx ? sliderStyle.active : ""
                        }`}
                      ></span>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="mobile">
          <Row
            className={sliderStyle.slider_row}
            onClick={() => {
              handleClick(_items[activeIdx]?.attributes?.features);
            }}
          >
            <Col md={5}>
              <TransitionGroup>
                {!showMiddleAnimation && (
                  <CSSTransition key={2} timeout={1000} classNames={"item"}>
                    <div className={`${sliderStyle.current_img}`}>
                      {/* <Image src={_items[activeIdx]?.img} alt="girl"></Image> */}
                      <Image
                        src={
                          _items[activeIdx]?.attributes?.image?.custom_data?.url
                        }
                        unoptimized={true}
                        width={100}
                        height={125}
                        alt="girl"
                        objectFit="cover"
                        layout="responsive"
                      ></Image>
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </Col>

            <Col md={4}>
              <TransitionGroup className="h-100">
                {!textAnimation && (
                  <CSSTransition key={2} timeout={2000} classNames={"item"}>
                    <div className={sliderStyle.text}>
                      <h2>{_items[activeIdx]?.attributes?.client_name}</h2>
                      {_items[activeIdx]?.attributes?.tags && (
                        <ul>
                          {JSON.parse(_items[activeIdx]?.attributes?.tags).map(
                            (item, key) => {
                              return <li key={key}>{item}</li>;
                            }
                          )}
                        </ul>
                      )}

                      <div style={{ width: "100%" }}>
                        {_items[activeIdx].attributes?.features && (
                          <Link
                            href={`/clients/${_items[activeIdx].attributes?.features}`}
                          >
                            <button>
                              <a>VIEW PROJECT</a>
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </CSSTransition>
                )}
              </TransitionGroup>
            </Col>

            <Col md={5}>
              <div className={sliderStyle.rightPart}>
                <div className={sliderStyle.slider_ctrls}>
                  <div
                    onClick={(e) => prevClick(e)}
                    className={`${sliderStyle.slider_ctrl} ${sliderStyle.slider_ctrl_left}`}
                  >
                    <span className={sliderStyle.chev_left}></span>
                  </div>
                  <div
                    onClick={(e) => nextClick(e)}
                    className={`${sliderStyle.slider_ctrl} ${sliderStyle.slider_ctrl_right}`}
                  >
                    <span className={sliderStyle.chev_right}></span>
                  </div>
                </div>

                <div className={sliderStyle.mobile_counter}>
                  {_items.map((item, key) => {
                    // console.log('tesssssst',key,activeIdx);
                    return (
                      <span
                        key={key}
                        className={`${sliderStyle.counter_dot} ${
                          key == activeIdx ? sliderStyle.active : ""
                        }`}
                      ></span>
                    );
                  })}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  );
}
