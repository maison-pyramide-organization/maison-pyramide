import dynamic from "next/dynamic";
import Image from 'next/image';
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { AnimatePresence, motion } from 'framer-motion';

import ClientService from "../../pages/api/services/ClientService";
import clientsStyles from './Clients.module.scss';
import ProjectService from "../api/services/ProjectService";
import { useRef } from "react";

const ParallaxCache = dynamic(
    () => {
        return import("../../components/parallaxCache/parallaxCache");
    },
    { ssr: false }
);
const IsMobileComponent = dynamic(
    () => {
        return import("../../components/isMobile/IsMobileComponent");
    },
    { ssr: false }
);





export default function Clients() {

    const [current, setCurrent] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);
    const [isMobile, setIsMobile] = useState(null);
    const [_selectedClients, setSelectedClients] = useState([])
    const [_featuredProjects, setFeaturedProjects] = useState([]);
    const [mainText, setMainText] = useState();
    const [selectedTab, setSelectedTab] = useState("ALL");
    const [loader, setLoader] = useState(false);
    function Items({ currentItems }) {
        const router = useRouter();
        const handleClick = (id) => {
            if (id) {
                router.push(`/clients/${id}`)
            }
        }

        return (
            <>
                <ParallaxProvider>
                    <Row style={{ justifyContent: 'space-around' }}>
                        <Col md={5} className="text-center">
                            <Parallax translateY={[isMobile ? 0 : -1, isMobile ? 0 : 2]} className="pr-5">
                                {currentItems?.map((project, ind) => {
                                    return (

                                        (ind % 2 == 0) && (

                                            <div key={ind} className={`${clientsStyles.project_img}`} onClick={() => { handleClick(project.attributes?.features) }}>
                                                <motion.div
                                                    initial={{ opacity: 0, rotateZ: -5, x: "-50px" }}
                                                    whileInView={{ opacity: 1, rotateZ: 0, x: 0 }}
                                                    //  viewport={{ once: true }}
                                                    transition={{ duration: 1, ease: "easeInOut", type: 'linear' }}
                                                >
                                                    <Image src={project.attributes.image.custom_data.url} unoptimized={true} loading="eager" className={clientsStyles.img} layout={"responsive"} width={500} height={660} objectFit={"cover"}></Image>
                                                </motion.div>
                                                <br />
                                                <span>
                                                    {project.attributes.client_name}
                                                </span>
                                                <h3>
                                                    {project.attributes.title}
                                                </h3>
                                                <p>
                                                    {project.attributes.description}
                                                </p>
                                            </div>
                                        )
                                    )
                                })}
                            </Parallax>
                        </Col>

                        <Col md={5} className="text-center">
                            <Parallax className={`${clientsStyles.second} pl-5`} translateY={[isMobile ? 0 : 2, isMobile ? 0 : -7]}>

                                {currentItems?.map((project, ind) => {
                                    return (

                                        (ind % 2 != 0) && (
                                            <div key={ind} className={`${clientsStyles.project_img}`} onClick={() => { handleClick(project.attributes.features) }}>
                                                <motion.div
                                                    initial={{ opacity: 0, rotateZ: 3, x: 30 }}
                                                    whileInView={{ opacity: 1, rotateZ: 0, x: 0 }}
                                                    //  viewport={{ once: true }}
                                                    transition={{ duration: 1, ease: "easeInOut", type: 'linear' }}
                                                >
                                                    <Image src={project.attributes.image.custom_data.url} unoptimized={true} loading="eager" className={clientsStyles.img} layout={"responsive"} width={500} height={660} objectFit={"cover"}></Image>
                                                </motion.div>
                                                <br />
                                                <span>
                                                    {project.attributes.client_name}
                                                </span>
                                                <h3>
                                                    {project.attributes.title}
                                                </h3>
                                                <p>
                                                    {project.attributes.description}
                                                </p>
                                            </div>
                                        )
                                    )
                                })}
                            </Parallax>
                        </Col>
                    </Row>
                </ParallaxProvider>
            </>
        );
    }
    function PaginatedItems({ itemsPerPage }) {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [forceBegin, setForceBegin] = useState(false);
        const pageinationRef = useRef(null);
        const projectRef = useRef(null);
        const [itemOffset, setItemOffset] = useState(0);
        const [items, setItems] = useState([]);
        const [projects, setProjects] = useState(items);

        useEffect(() => {
            ProjectService.getFeaturedProjects().then(res => {
                setItems(res.data);
                setCurrentItems(res.data)
            }).catch(err => {
                console.log('err', err);
            })
        }, [])

        useEffect(() => {
            setProjects(items);
            if (items.length > 0) {
                handlePageClick({ selected: 0 });
            }
        }, [items]);

        useEffect(() => {
            // Fetch items from another resources.
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(projects?.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(projects?.length / itemsPerPage));
        }, [itemOffset, itemsPerPage, projects]);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            setItemOffset(newOffset);
            setForceBegin(true);
            pageinationRef.current.state.selected = 0;
            if (forceBegin) {
                window.scrollTo({
                    top: Math.round(projectRef.current.getBoundingClientRect().top + document.documentElement.scrollTop - 100),
                    behavior: 'smooth',
                })

            }
        };


        return (
            <section ref={projectRef}>
                <Row className={clientsStyles.posts}>
                    <Items currentItems={currentItems} />
                    <ReactPaginate
                        ref={pageinationRef}
                        breakLabel="..."
                        nextLabel="NEXT"
                        activeClassName="activePaginate"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        className={'d-flex'}
                        pageCount={pageCount}
                        previousLabel="PREV"
                        renderOnZeroPageCount={null}
                    />
                </Row>
            </section>
        );
    }
    const headerVariants = {
        hidden: { opacity: 0, y: "10%", scale: 1.05 },
        // hidden: { opacity: 0, y: "30%" ,scale:1.05},
        enter: { opacity: 1, y: 0, scale: 1 }
    }
    const textVariants = {
        hidden: { opacity: 0, x: 15 },
        enter: { opacity: 1, x: 0 }
    }

    const useHandleMobile = (value) => {
        useEffect(() => {
            setIsMobile(value)
        }, [])
    }

    useEffect(() => {
        let text = "Our clients range from leading multinationals and heritage brands to the hottest emerging brands, across media, Iifestyle, fashion, and retail."
        let textArr = text?.split(" ");
        textArr?.map((word, i) => {
            textArr[i] = <motion.span
                initial="hidden"
                whileInView={"enter"}
                //   viewport={{ once: true }}
                variants={textVariants}
                transition={{ duration: 1, delay: i * .02, ease: "easeInOut", type: 'linear' }}
            >
                {word + ' '}
            </motion.span>
        })
        setMainText(textArr)
    }, [])



    const handleScrollLeft = () => {


        if (current >= 1) {
            let tabs = document.getElementById('slider');
            tabs.scroll({ left: currentScroll - 300, behavior: 'smooth' });
            setCurrentScroll(prev => prev - 300);
            setCurrent(prev => prev - 1);
        }
    }
    const handleScrollRight = () => {

        if (current <= 11) {
            let tabs = document.getElementById('slider');
            tabs.scroll({ left: currentScroll + 300, behavior: 'smooth' });
            setCurrentScroll(prev => prev + 300);
            setCurrent(prev => prev + 1);
        }
    }


    const PreloadImages = () => {

        return (
            [..._selectedClients, ..._featuredProjects].map((item, i) => (
                <link rel="preload" key={i} as="image" href={item?.attributes?.image?.custom_data?.url}></link>
            ))
        )
    }

    useEffect(() => {
        ProjectService.getFeaturedProjects().then((res) => {
            setFeaturedProjects(res.data);
        }).catch(err => {
            console.log('err?', err);
        })
        ClientService.getClients().then(res => {
            setSelectedClients(res.data);
        })
    }, [])
    return (
        // <Layout>
        <>
            <IsMobileComponent handleMobile={useHandleMobile} />
            <PreloadImages />
            <ParallaxProvider>
                <ParallaxCache />
            </ParallaxProvider>
            <header className={clientsStyles.main}>
                <Container>
                    <div style={{ overflow: 'hidden' }}>
                        <AnimatePresence>
                            <motion.h1
                                initial="hidden"
                                // animate="enter"
                                whileInView={"enter"}
                                // viewport={{ once: true }}
                                variants={headerVariants}
                                className="text-center"
                                transition={{ duration: 1.2, ease: "easeInOut", type: 'linear' }}
                            >
                                We have built a renowned and respected

                                name amongst leading brands
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    <p className="text-center">
                        <AnimatePresence>
                            {mainText}
                        </AnimatePresence>
                    </p>
                </Container>
            </header>
            <section className={clientsStyles.feat_projects}>
                <Container>
                    <h2 className="text-center">
                        Featured projects
                    </h2>
                    <TransitionGroup>
                        <CSSTransition key={2} classNames={'item'} timeout={2000}>
                            <Container fluid className={clientsStyles.posts_contain}>
                                <PaginatedItems itemsPerPage={6} selectedTab={selectedTab} />
                            </Container>
                        </CSSTransition>
                    </TransitionGroup>

                </Container>
            </section>
            <section className={clientsStyles.selected_clients} id="selected-clients">
                <Container fluid>
                    <h2>
                        Selected clients
                    </h2>
                    <div>
                        <Row id="slider" className={clientsStyles.selected_clients_container}>
                            {_selectedClients.map((client, ind) => {
                                return (
                                    <Col md={3} xs={10} key={ind}>
                                        <div className={clientsStyles.card}>
                                            <div className={clientsStyles.img}>
                                                <motion.div
                                                    initial={{ borderRightWidth: 80, borderLeftWidth: 80 }}
                                                    whileInView={{ borderRightWidth: 0, borderLeftWidth: 0 }}
                                                    // viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: .2, ease: "easeInOut", type: 'linear' }}
                                                    className={clientsStyles.imgLayer}
                                                >
                                                </motion.div>
                                                <Image layout='responsive' unoptimized={true} loading="eager" src={client?.attributes?.image?.custom_data?.url} width={100} objectFit={"cover"} height={70}></Image>
                                            </div>
                                            <div className={clientsStyles.text}>
                                                <h3>
                                                    {client?.attributes?.title}
                                                </h3>
                                                <p>
                                                    {client?.attributes?.description}
                                                </p>
                                                {client?.attributes?.services && (
                                                    <ul>
                                                        {JSON.parse(client?.attributes?.services).map((tag, i) => {
                                                            return (
                                                                <li key={i}>{tag}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                )}
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}

                        </Row>
                        <div className={`${clientsStyles.btns} mobile`}>
                            <span>{current + 1}/{_selectedClients.length}</span>
                            <div className={`${clientsStyles.slider_ctrls} mobile`}>
                                <div onClick={handleScrollLeft} className={`${clientsStyles.slider_ctrl} ${clientsStyles.slider_ctrl_left}`}>
                                    <span className={clientsStyles.chev_left}></span>
                                </div>
                                <div onClick={handleScrollRight} className={`${clientsStyles.slider_ctrl} ${clientsStyles.slider_ctrl_right}`}>
                                    <span className={clientsStyles.chev_right}></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
            {/* </Layout> */}
        </>
    )
}
