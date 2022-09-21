import dynamic from "next/dynamic";
import Image from 'next/image';
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import { AnimatePresence, motion } from 'framer-motion';

import ClientService from "../../pages/api/services/ClientService";
import clientsStyles from './Clients.module.scss';
import ProjectService from "../api/services/ProjectService";

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
    const router = useRouter();
    const [current, setCurrent] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);
    const [isMobile , setIsMobile] = useState(null);
    const [_selectedClients, setSelectedClients] = useState([])
    const [ _featuredProjects,setFeaturedProjects] = useState([]);
    const [mainText,setMainText] = useState();


    const headerVariants = {
        hidden: { opacity: 0, y: "30%" ,scale:1.05},
        enter: { opacity: 1, y: 0 ,scale:1}
      }
      const textVariants = {
        hidden: { opacity: 0, x: 15 },
        enter: { opacity: 1, x: 0 }
      }

    const useHandleMobile = (value) =>{
        useEffect(() => {
            setIsMobile(value)
        },[])
    }

    useEffect(() => {
        let text = "Our clients range from leading multinationals and heritage brands to the hottest emerging brands, across media, Iifestyle, fashion, and retail."
        let textArr = text?.split(" ");
        textArr?.map((word,i)=>{
          textArr[i] =  <motion.span
          initial="hidden"
          whileInView={"enter"}
        //   viewport={{ once: true }}
          variants={textVariants}
          transition={{ duration: 1,delay:i*.1, ease: "easeInOut",type: 'linear' }}
           >
            {word+' '}
            </motion.span>
        })
        setMainText(textArr)
    },[])

    const handleClick = (id) => {
        console.log({id});
        if(id){
            router.push(`/clients/${id}`)
        }
    }

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

        return(
          [..._selectedClients,..._featuredProjects].map((item,i) => (
            <link rel="preload" key={i} as="image" href={item?.attributes?.image?.custom_data?.url}></link>
          ))
        )
      }

    useEffect(() => {
        ProjectService.getFeaturedProjects().then((res) => {
            setFeaturedProjects(res.data);
        }).catch(err => {
            console.log('err?',err);
        })
        ClientService.getClients().then(res => {
            setSelectedClients(res.data);
        })
    },[])
    return (
        // <Layout>
        <>
            <IsMobileComponent handleMobile={useHandleMobile}/>
            <PreloadImages/>
            <ParallaxProvider>
                <ParallaxCache />
            </ParallaxProvider>
            <header className={clientsStyles.main}>
                <Container>
                    <AnimatePresence>
                        <motion.h1
                            initial="hidden"
                            // animate="enter"
                            whileInView={"enter"}
                            // viewport={{ once: true }}
                            variants={headerVariants}
                            className="text-center"
                            transition={{ duration: 1, ease: "easeInOut",type: 'linear' }}
                        >
                            We have built a renowned and respected
                            
                            name amongst leading brands.
                        </motion.h1>
                    </AnimatePresence>
                  
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
                    <ParallaxProvider>
                        <Row style={{justifyContent:'space-around'}}>
                            <Col md={5} className="text-center">
                                <Parallax translateY={[isMobile?0:-1, isMobile?0:5]} className="pr-5">
                                    {_featuredProjects.map((project, ind) => {
                                        return (

                                            (ind % 2 == 0) && (
                                                
                                                <div key={ind} className={`${clientsStyles.project_img}`} onClick={() => { handleClick(project.attributes?.features) }}>
                                                    <motion.div
                                                     initial={{opacity:0,rotateZ:5,x:50}}
                                                     whileInView={{ opacity: 1 ,rotateZ:0,x:0}}
                                                    //  viewport={{ once: true }}
                                                     transition={{ duration: 1, ease: "easeInOut",type: 'linear' }}
                                                    >
                                                        <Image src={project.attributes.image.custom_data.url} className={clientsStyles.img} layout={"responsive"} width={500} height={660} objectFit={"cover"}></Image>
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
                                <Parallax className={`${clientsStyles.second} pl-5`} translateY={[isMobile?0:2, isMobile?0:-7]}>

                                    {_featuredProjects.map((project, ind) => {
                                        return (

                                            (ind % 2 != 0) && (
                                                <div key={ind} className={`${clientsStyles.project_img}`} onClick={() => { handleClick(project.attributes.features) }}>
                                                    <motion.div
                                                     initial={{opacity:0,rotateZ:3,x:30}}
                                                     whileInView={{ opacity: 1 ,rotateZ:0,x:0}}
                                                    //  viewport={{ once: true }}
                                                     transition={{ duration: 1, ease: "easeInOut",type: 'linear' }}
                                                    >
                                                        <Image src={project.attributes.image.custom_data.url} className={clientsStyles.img} layout={"responsive"} width={500} height={660} objectFit={"cover"}></Image>
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

                </Container>
            </section>
            <section className={clientsStyles.selected_clients} id="selected-clients">
                <Container fluid>
                    <h2>
                        Selected clients
                    </h2>
                    <div>
                        <Row id="slider" className={clientsStyles.selected_clients_container}>
                            {_selectedClients.map((client,ind) => {
                                return (
                                    <Col md={3} xs={10} key={ind}>
                                        <div className={clientsStyles.card}>
                                                <div className={clientsStyles.img}>
                                                <motion.div
                                                    initial={{borderRightWidth:80,borderLeftWidth:80}}
                                                    whileInView={{borderRightWidth:0 ,borderLeftWidth:0}}
                                                    // viewport={{ once: true }}
                                                    transition={{ duration: 1,delay:.2, ease: "easeInOut",type: 'linear' }}
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
                                                    {JSON.parse(client?.attributes?.services).map((tag,i) => {
                                                        return(
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
