import dynamic from "next/dynamic";
import Image from 'next/image';
import { useRouter } from 'next/router'

import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


import Layout from "../../components/layout/Layout";
import clientImg from '../../public/imgs/Bani Beast.png';
import clientImg2 from '../../public/imgs/mmp.png';
import clientImg3 from '../../public/imgs/tgirls.png';
import clientImg4 from '../../public/imgs/necklace.png';
import clientImg5 from '../../public/imgs/chair.png';
import clientImg6 from '../../public/imgs/greenshoe.png';

import cardImg from '../../public/imgs/blackdressgirl.png';
import cardImg1 from '../../public/imgs/reddressgirl.png';
import cardImg2 from '../../public/imgs/blackjacket.png';
import cardImg3 from '../../public/imgs/beige.png';
import cardImg4 from '../../public/imgs/arwa.png';
import cardImg5 from '../../public/imgs/blackbag.png';
import cardImg6 from '../../public/imgs/sorya.png';
import cardImg7 from '../../public/imgs/greyshirt.png';
import cardImg8 from '../../public/imgs/yellowshirt.png';
import cardImg9 from '../../public/imgs/monot.png';
import cardImg10 from '../../public/imgs/greenbag.png';
import cardImg11 from '../../public/imgs/twobacks.png';


import variables from '../../styles/variables.module.scss';
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
    const [_selectedClients, setSelectedClients] = useState([
    ])
    const [ _featuredProjects,setFeaturedProjects] = useState([]);


    const useHandleMobile = (value) =>{
        useEffect(() => {
            setIsMobile(value)
        },[])
      }

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


    useEffect(() => {
        ProjectService.getFeaturedProjects().then((res) => {
            console.log({res});
            setFeaturedProjects(res.data);
        }).catch(err => {
            console.log('err?',err);
        })
        ClientService.getClients().then(res => {
            setSelectedClients(res.data);
            console.log('weca',res.data);
        })
    },[])
    return (
        <Layout>
            <IsMobileComponent handleMobile={useHandleMobile}/>
            <ParallaxProvider>
                <ParallaxCache />
            </ParallaxProvider>
            <header className={clientsStyles.main}>
                <Container>

                    <h1 className="text-center">
                    We have built a renowned and respected
                    
                    name amongst leading brands.
                    </h1>
                    <p className="text-center">
                    Our clients range from leading multinationals
and heritage brands to the hottest emerging
brands, across media, Iifestyle, fashion, and
retail                    </p>
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
                                                    <Image src={project.attributes.image.custom_data.url} className={clientsStyles.img} layout={"responsive"} width={500} height={660} objectFit={"cover"}></Image>
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


                                    {/* <div className={`${clientsStyles.project_img}`}>
                                <Image src={clientImg3} layout="responsive"></Image>
                                <br/>
                                <span>
                                FEATURED PROJECTS
                                </span>
                                <h3>
                                Robert Wun
                                </h3>
                                <p>
                                Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor.
                                </p>
                            </div>

                            <div className={`${clientsStyles.project_img}`}>
                                <Image src={clientImg5} layout="responsive"></Image>
                                <br/>
                                <span>
                                FEATURED PROJECTS
                                </span>
                                <h3>
                                Robert Wun
                                </h3>
                                <p>
                                Lorem ipsum dolor sit amet, consect adipiscing elit. Nunc, sed ornare sed tortor consectetur suspendisse commodo, posuere tortor.
                                </p>
                            </div> */}
                                </Parallax>
                            </Col>

                            <Col md={5} className="text-center">
                                <Parallax className={`${clientsStyles.second} pl-5`} translateY={[isMobile?0:2, isMobile?0:-7]}>

                                    {_featuredProjects.map((project, ind) => {
                                        return (

                                            (ind % 2 != 0) && (
                                                <div key={ind} className={`${clientsStyles.project_img}`} onClick={() => { handleClick(project.attributes.features) }}>
                                                    <Image src={project.attributes.image.custom_data.url} className={clientsStyles.img} layout={"responsive"} width={500} height={660} objectFit={"cover"}></Image>
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
                                                <Image layout='responsive' src={client?.attributes?.image?.custom_data?.url} width={100} objectFit={"cover"} height={70}></Image>
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

        </Layout>
    )
}
