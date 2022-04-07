import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from 'next/router';

import { useState, useEffect, useRef } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { Container, Row, Col } from "react-bootstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ReactPaginate from 'react-paginate';

import Layout from "../../components/layout/Layout";
// import newsImg from "../../public/imgs/news replacement.jpeg";
import newsImg1 from "../../public/imgs/nails.png";
import newsImg2 from "../../public/imgs/mic.png";
import newsImg3 from "../../public/imgs/newsshelves.png";
import newsImg4 from "../../public/imgs/newstwowomen.png";
import newsImg5 from "../../public/imgs/newsmics.png";
import newsImg6 from "../../public/imgs/newsgirls.png";

import ArticleService from "../api/services/ArticlesService";
import newsStyle from "./News.module.scss";

const ParallaxCache = dynamic(
  () => {
    return import("../../components/parallaxCache/parallaxCache");
  },
  { ssr: false }
);

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function Items({ currentItems ,selectedTab }) {

  const handlePost = (link) =>{
    // router.push(link);
    window.open(link, '_blank');
  }

  const formatDate = (value) => {
    let date = new Date(value)
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();
    return `${month} ${year}`;
  }

  return (
    <>
      {currentItems &&
        currentItems.map((item, key) => (
          // (!selectedTab || selectedTab == 'ALL' || item.flag == selectedTab) &&
          // (
          <Col md={6} key={key}>
            <div className={newsStyle.post} onClick={() => handlePost(item?.attributes?.link)}>
              <div className={newsStyle.news_img}>
                <Image layout="responsive" width={100} objectPosition={"center"} objectFit={"cover"} height={70} src={item.attributes?.image?.custom_data?.url}></Image>
                <span className={newsStyle.news_flag}>
                  {item.attributes.tag}
                </span>
                <h2>{item.attributes.title}</h2>
              </div>
              <div className={newsStyle.news_text}>
                <h2>{item.attributes.sub_title}</h2>
                <span>{formatDate(item.attributes.date)}</span>
                <p>
                  {item.attributes.description}
                </p>
              </div>
            </div>
          </Col>

          // )

        ))}
    </>
  );
}


function PaginatedItems({ itemsPerPage ,selectedTab}) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [forceBegin, setForceBegin] = useState(false);
  const pageinationRef = useRef(null);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const [items , setItems] = useState([]);
  const [articles , setArticles] = useState(items);

  useEffect(()=> {
    ArticleService.getArticles().then(res => {
      setItems(res.data);
      setCurrentItems(res.data)
    }).catch(err => {
      console.log('err',err);
    })
  },[])
  
  useEffect(() => {
    if(selectedTab != 'ALL'){
      setArticles(items.filter(item => item.attributes.tag.trim() == selectedTab));
    }
    else{
      setArticles(items);
    }
    
    if(items.length > 0){
      handlePageClick({selected:0});
    }
  },[selectedTab,items]);
  
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(articles?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(articles?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage,articles]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
    setForceBegin(true);
    // console.log(pageinationRef.current.state);
    pageinationRef.current.state.selected = 0;
    if(forceBegin){
      window.scrollTo(800,550);
    }
  };

  // useEffect(()=>{
  //   window.scrollTo(800,800);
  // },[currentItems])

  return (
    <>
      <Items currentItems={currentItems}  selectedTab={selectedTab}/>
      <ReactPaginate
        ref={pageinationRef}
        breakLabel="..."
        nextLabel="NEXT"
        activeClassName="activePaginate"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        ClassName={`${"paginateStyle"}`}
        pageCount={pageCount}
        previousLabel="PREV"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default function News() {
  const [selectedTab, setSelectedTab] = useState("ALL");
  const [menuState, setMenuState] = useState(false);

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.

  const [loader, setLoader] = useState(false);
  const [items , setItems] = useState([]);

  useEffect(()=> {
      ArticleService.getSideArticles().then(res => {//change to side artice filter
        setItems(res.data)
      }).catch(err => {
        console.log('err',err);
      })
    },[]);

  const formatDate = (value) => {
    let date = new Date(value)
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();
    return `${month} ${year}`;
  }
  const handleMenu = () => {
    setMenuState(!menuState);
  };

  const handleFilter = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }
  const handleSelectTab = (name) => {
    setSelectedTab(name);
    handleFilter();
  };
  return (
    <Layout>
      <header className={newsStyle.header}>
        <Container>
          <div className={newsStyle.text}>
            <h1>
              KEEP UP WITH <br className="mobile" />
              OUR LATEST <br className="mobile" /> NEWS
            </h1>
            <div>
              <p>
              Learn about our latest events, product and brand
launches, pop-ups, and artistic collaborations.
<br/> <br/>
And learn more about our mission to discover and
elevate worthy brands in lifestyle, fashion, and
luxury.
              </p>
            </div>
          </div>
        </Container>
      </header>
      <section className={`${newsStyle.main} disktop_only`}>
        <Container fluid>
          <div className={newsStyle.img}>
            {/* <div className={newsStyle.layer}>
              <span className={newsStyle.featured_flag}>FEATURED</span>
              <h2>Title goes here</h2>
              <p>
                Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed
                ornare sed tortor consectetur suspendisse commodo, posuere
                tortor.
              </p>
            </div> */}
          </div>
        </Container>
      </section>
      <section className={newsStyle.news}>
        <Container fluid>
          <Row>
            <Col md={9}>
              <div className={newsStyle.tabs}>
                <ul>
                  <li>VIEWING :</li>
                  <li  onClick={() => handleSelectTab("ALL")} className={selectedTab == 'ALL'?newsStyle.selected:''}>ALL</li>
                  <li  onClick={() => handleSelectTab("COMPANY FEATURE")} className={selectedTab == 'COMPANY FEATURE'?newsStyle.selected:''}>COMPANY FEATURE</li>
                  {/* <li  onClick={() => handleSelectTab("BLOG POST")}>BLOG POST</li> */}
                  <li  onClick={() => handleSelectTab("PRESS RELEASE")} className={selectedTab == 'PRESS RELEASE'?newsStyle.selected:''}>PRESS RELEASE</li>
                  <li  onClick={() => handleSelectTab("COMPANY UPDATE")} className={selectedTab == 'COMPANY UPDATE'?newsStyle.selected:''}>COMPANY UPDATE</li>
                  <li className={`${newsStyle.all_btn} mobile`} onClick={handleMenu}>
                    {selectedTab}
                    <TransitionGroup>
                      {menuState && (
                        <CSSTransition
                          key={2}
                          timeout={1000}
                          classNames={"item"}
                        >
                          <div className={`${newsStyle.menu}`}>
                            <p
                              className={
                                selectedTab == "ALL" ? newsStyle.active : ""
                              }
                              onClick={() => handleSelectTab("ALL")}
                            >
                              ALL
                            </p>
                            <p
                              className={
                                selectedTab == "COMPANY FEATURE"
                                  ? newsStyle.active
                                  : ""
                              }
                              onClick={() => handleSelectTab("COMPANY FEATURE")}
                            >
                              COMPANY FEATURE
                            </p>
                            <p
                              className={
                                selectedTab == "PRESS RELEASE"
                                  ? newsStyle.active
                                  : ""
                              }
                              onClick={() => handleSelectTab("PRESS RELEASE")}
                            >
                              PRESS RELEASE
                            </p>
                            <p
                              className={
                                selectedTab == "COMPANY UPDATES"
                                  ? newsStyle.active
                                  : ""
                              }
                              onClick={() => handleSelectTab("COMPANY UPDATES")}
                            >
                              COMPANY UPDATES
                            </p>
                            {/* <p
                              className={
                                selectedTab == "PRESS RELEASE2"
                                  ? newsStyle.active
                                  : ""
                              }
                              onClick={() => handleSelectTab("PRESS RELEASE2")}
                            >
                              PRESS RELEASE
                            </p> */}
                            {/* <p
                              className={
                                selectedTab == "COMPANY UPDATE"
                                  ? newsStyle.active
                                  : ""
                              }
                              onClick={() => handleSelectTab("COMPANY UPDATE")}
                            >
                              COMPANY UPDATE
                            </p> */}
                          </div>
                        </CSSTransition>
                      )}
                    </TransitionGroup>
                  </li>
                </ul>

                <div>
                  <TransitionGroup>
                    {loader && (
                      <CSSTransition key={2} classNames={'item'} timeout={2000}>
                        <div className={newsStyle.loading_line_wrapper}>
                          <div className={newsStyle.loading_line}>
                            <div
                              className={`${newsStyle.loading_line_inner} ${newsStyle.loading_line_inner1}`}
                            ></div>
                            <div
                              className={`${newsStyle.loading_line_inner} ${newsStyle.loading_line_inner2}`}
                            ></div>
                          </div>
                        </div>
                      </CSSTransition>
                    )}
                  </TransitionGroup>
                </div>
                <TransitionGroup>
                  {!loader && (
                    <CSSTransition key={2} classNames={'item'} timeout={2000}>
                      <Container fluid className={newsStyle.posts_contain}>
                        <Row className={newsStyle.posts}>
                          <PaginatedItems itemsPerPage={6} selectedTab={selectedTab}/>
                        </Row>
                      </Container>
                    </CSSTransition>
                  )}
                </TransitionGroup>
              </div>
            </Col>
            <Col md={3} className={newsStyle.side_posts_container}>
              {items.map((item,ind)=>{
                return(

                <div key={ind} className={newsStyle.side_post}>
                  <span className={newsStyle.news_flag}>{item.attributes.tag}</span>
                  <h2>{item.attributes.title}</h2>
                  <span>{formatDate(item.attributes.date)}</span>
                  <p>
                  {item.attributes.description}
                  </p>
                </div>
                )
              })}

            </Col>
          </Row>
        </Container>
      </section>
      <ParallaxProvider>
        <ParallaxCache />
      </ParallaxProvider>
      {/* <ParallaxProvider>
        <ParallaxCache/>

        <Parallax className={`parallax-class`} y={[-30, 30]} tagOuter="figure">

        <FooterComponent/>
        </Parallax>
        </ParallaxProvider> */}
    </Layout>
  );
}
