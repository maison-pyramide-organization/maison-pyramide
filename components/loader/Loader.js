
import Image from "next/image";
import React, { useEffect } from "react";
import {
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";

import loaderStyle from "./LoaderStyle.module.scss";
import logo from '../../public/imgs/logowhite.png';

const LoaderComponent = ({ isLoading }) => {
  const [hideWhole, setHideWhole] = React.useState(false);
  if (!isLoading) {
    setTimeout(() => {
      setHideWhole(true);
    }, 500);
  }

  return (
    <div>
      <TransitionGroup>
        {!hideWhole && (
          <CSSTransition key={2} timeout={500} classNames={"item"}>
            <div className={loaderStyle.main}>
              <h1 className={loaderStyle.h1}>
                {/* MAISON
                <br />
                PYRAMIDE */}
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
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

export default LoaderComponent;

