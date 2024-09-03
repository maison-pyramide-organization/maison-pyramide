import Image from "next/image";
import React from "react";
import sliderStyle from "./SliderStyle.module.scss";

const sleep = (ms = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx, _items, isTranitioning) => {
  var slideWidth = 33;
  if (typeof window !== "undefined") {
    window.innerWidth > 700 ? (slideWidth = 33) : (slideWidth = 83);
  }

  const item = {
    styles: {
      opacity: 0.5, //first
      transform: `translateX(${position * slideWidth}vw) scale(.9)`,
    },
    image: _items[idx]?.custom_data?.url,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      // middle image
      item.styles = {
        ...item.styles,
        opacity: 1,
        transform: `translateX(${position * slideWidth}vw) scale(1)`,
      };
      break;
    case length:
      break;
    default:
      break;
  }
  return item;
};

const CarouselSlideItem = ({ pos, idx, activeIdx, items, isTranitioning }) => {
  const item = createItem(pos, idx, items, isTranitioning);
  // style={{opacity:isTranitioning?0:1}}
  return (
    <li className={sliderStyle.carousel__slide_item} style={item.styles}>
      <div className={sliderStyle.carousel__slide_item_img_link}>
        <Image
          src={item.image}
          unoptimized={true}
          className={sliderStyle.image}
          width={100}
          height={150}
          objectFit={"cover"}
          layout="responsive"
        ></Image>
      </div>
    </li>
  );
};

export default function Carousel({ images }) {
  const _items = images;
  const length = _items.length;
  const keys = Array.from(Array(_items.length).keys());

  const [items, setItems] = React.useState(keys);
  const [isTicking, setIsTicking] = React.useState(false);
  const [activeIdx, setActiveIdx] = React.useState(0);
  const bigLength = items.length;

  const prevClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i + jump) % bigLength]);
      });
    }
  };

  const nextClick = (jump = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => {
        return prev.map((_, i) => prev[(i - jump + bigLength) % bigLength]);
      });
    }
  };

  // const handleDotClick = (idx) => {
  //     if (idx < activeIdx) prevClick(activeIdx - idx);
  //     if (idx > activeIdx) nextClick(idx - activeIdx);
  // };

  React.useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  React.useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length) // prettier-ignore
  }, [items]);

  return (
    <div className={sliderStyle.carousel__wrap}>
      <div className={sliderStyle.carousel__inner}>
        <div className={sliderStyle.carousel__container}>
          <ul className={sliderStyle.carousel__slide_list}>
            {items.map((pos, i) => (
              <CarouselSlideItem
                key={i}
                idx={i}
                pos={pos}
                activeIdx={activeIdx}
                items={_items}
                isTranitioning={isTicking}
              />
            ))}
          </ul>
        </div>
        <footer className={sliderStyle.slider_footer}>
          <div className={sliderStyle.counter}>
            {activeIdx < 9 ? "0" : ""}
            {activeIdx + 1}/ {length < 9 ? "0" : ""}
            {length}
          </div>

          <div className={sliderStyle.slider_ctrls}>
            <div
              className={`${sliderStyle.slider_ctrl} ${sliderStyle.slider_ctrl_left}`}
              onClick={() => prevClick()}
            >
              <span className={sliderStyle.chev_left}></span>
            </div>
            <div
              className={`${sliderStyle.slider_ctrl} ${sliderStyle.slider_ctrl_right}`}
              onClick={() => nextClick()}
            >
              <span className={sliderStyle.chev_right}></span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
