import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

import { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import navStyle from "./NavStyle.module.scss";
import variables from "../../styles/variables.module.scss";

import logo from "../../public/imgs/logowhite.png";

const HandleScroll = dynamic(
  () => {
    return import("../handleScroll/HandleScroll");
  },
  { ssr: false }
);
const IsMobileComponent = dynamic(
  () => {
    return import("../isMobile/IsMobileComponent");
  },
  { ssr: false }
);

export default function NavComponent() {
  const [activeLink, setActiveLink] = useState(null);
  const [navState, setNavState] = useState("transparent");
  const [navToggleState, setNavToggleState] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  var isMouseOn;

  const handleNavToggle = (state) => {
    setNavToggleState(state);
  };
  const handleLinkClick = (n) => {
    setActiveLink(n);
    setNavToggleState(false);
  };
  const handleHover = (e) => {
    if (e.type == "mouseleave") {
      isMouseOn = false;
      if (navState == "white") {
        setTimeout(() => {
          setNavState("invisible");
        }, 2000);
      }
    } else {
      // console.log('eh');
      // setIsMouseOn(true);
      isMouseOn = true;
      // setNavState('white');
    }
    // e.type == 'mouseover'? setIsMouseOn(true): setIsMouseOn(false);
  };

  const handleNavStyle = (amount, direction) => {
    if (direction == "down" && amount > 100) {
      setNavState("hidden");
    } else if (direction == "up") {
      if (amount < 150) {
        setNavState("transparent");
        setTimeout(() => {
          setNavState("transparent");
        }, 2000);
      } else {
        setNavState("white");
        setTimeout(() => {
          // console.log(' ya doctoooor',isMouseOn);
          if (!isMouseOn) {
            setNavState("invisible");
          } else {
            setNavState("white");
          }
        }, 2000);
      }
    }
  };

  const useHandleMobile = (value) => {
    useEffect(() => {
      setIsMobile(value);
    }, []);
  };

  return (
    <>
      {/* <HandleScroll handleNavStyle={handleNavStyle}/> */}
      <IsMobileComponent handleMobile={useHandleMobile} />
      <Navbar
        onMouseMove={handleHover}
        onMouseLeave={handleHover}
        onToggle={handleNavToggle}
        expanded={navToggleState}
        className={`${navStyle.my_nav} ${
          navToggleState ? "nav-open" : ""
        } fixed-top ${
          navState == "transparent" && !navToggleState
            ? ""
            : !navToggleState && navState == "invisible"
            ? navStyle.invisible
            : navState == "white" && !navToggleState
            ? navStyle.white_nav
            : !navToggleState
            ? navStyle.hidden_nav
            : ""
        }`}
        expand="lg"
        color={variables.primaryColorLight}
      >
        <Container fluid>
          {/* <Navbar.Brand className={navStyle.mobile_brand} href="/" onClick={()=>handleLinkClick(null)}>MAISON<br/>PYRAMIDE</Navbar.Brand> */}
          <Navbar.Brand
            className={navStyle.mobile_brand}
            href="/"
            onClick={() => handleLinkClick(null)}
          >
            <Image
              unoptimized={true}
              src={logo}
              width={100}
              height={30}
            ></Image>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {(navToggleState || !isMobile) && (
            <Navbar.Collapse id="basic-navbar-nav" className={`px-2`}>
              <Nav className={["me-auto", navStyle.test]}>
                <Link href="/services">
                  <a
                    onClick={() => handleLinkClick(0)}
                    className={`nav-link ${navStyle.link} ${
                      activeLink == 0 && navStyle.active
                    }`}
                  >
                    SERVICES
                  </a>
                </Link>
                <Link href="/expertise" className={navStyle.test}>
                  <a
                    onClick={() => handleLinkClick(1)}
                    className={`nav-link ${navStyle.link} ${
                      activeLink == 1 && navStyle.active
                    }`}
                  >
                    EXPERTISE
                  </a>
                </Link>
                <Link href="/clients">
                  <a
                    onClick={() => handleLinkClick(2)}
                    className={`nav-link ${navStyle.link} ${
                      activeLink == 2 && navStyle.active
                    }`}
                  >
                    CLIENTS
                  </a>
                </Link>
              </Nav>

              <Nav className={["me-auto text-center", navStyle.brand]}>
                {/* <Navbar.Brand href="/" onClick={()=>handleLinkClick(null)}>MAISON<br/>PYRAMIDE</Navbar.Brand> */}
                <Navbar.Brand href="/" onClick={() => handleLinkClick(null)}>
                  <Image
                    unoptimized={true}
                    src={logo}
                    width={120}
                    height={40}
                  ></Image>
                </Navbar.Brand>
              </Nav>

              <Nav className={["ml-auto", navStyle.test3]}>
                <Link href="/group">
                  <a
                    onClick={() => handleLinkClick(3)}
                    className={`nav-link ${navStyle.link} ${
                      activeLink == 3 && navStyle.active
                    }`}
                  >
                    GROUP
                  </a>
                </Link>
                <Link href="/news">
                  <a
                    onClick={() => handleLinkClick(4)}
                    className={`nav-link ${navStyle.link} ${
                      activeLink == 4 && navStyle.active
                    }`}
                  >
                    NEWS
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    onClick={() => handleLinkClick(5)}
                    className={`nav-link ${navStyle.link} ${
                      activeLink == 5 && navStyle.active
                    }`}
                  >
                    CONTACT US
                  </a>
                </Link>
              </Nav>

              <Nav className="mobile mobile-nav">
                <Link href="/join">
                  <a
                    onClick={() => handleLinkClick(6)}
                    className={`nav-link ${navStyle.link} ${
                      activeLink == 6 && navStyle.active
                    }`}
                  >
                    WANT TO CHECK OUT OUR
                    <br /> OPEN JOB POSITIONS?
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    onClick={() => handleLinkClick(5)}
                    className={`nav-link ${navStyle.link} ${
                      activeLink == 6 && navStyle.active
                    }`}
                  >
                    contact@maisonpyramide.com
                  </a>
                </Link>
                <Link
                  href="https://eshowroom.maisonpyramide.com"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <a
                    onClick={() => handleLinkClick(null)}
                    className={`nav-link ${navStyle.link} ${navStyle.arrow} ${
                      activeLink == 7 && navStyle.active
                    }`}
                  >
                    E SHOWROOM
                  </a>
                </Link>
                <Link
                  href="https://www.instagram.com/maisonpyramide/"
                  rel="noreferrer"
                  target={"_blank"}
                >
                  <a
                    onClick={() => handleLinkClick(8)}
                    className={`nav-link ${navStyle.link} ${navStyle.arrow} ${
                      activeLink == 8 && navStyle.active
                    }`}
                  >
                    INSTAGRAM
                  </a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          )}
        </Container>
      </Navbar>
    </>
  );
}
