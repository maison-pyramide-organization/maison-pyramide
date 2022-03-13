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
    // const [_clients, setClients] = useState([
    //     {
    //         id: 0,
    //         client: 'MDLBEAST',
    //         project: 'Retail launch of Bani Beast',
    //         desc: 'From strategy, concept development and production to operations and activations, we worked closely with our long-term client on the launch of BANI BEAST, a versatile and sustainable brand with cultural authenticity, merging streetwear and festival wear.',
    //         img: clientImg
    //     },
    //     {
    //         id: 1,
    //         client: 'EMAAR',
    //         project: 'Elie Saab x Emaar',
    //         desc: "Held at the iconic Abdeen Palace in the heart of Cairo,the first event to ever take place in the spectacular venue, Emaar held Cairo's hallmark fashion event of the season, celebrating their collaboration with the International fashion house Elie Saab - introducing the Signature Villa at Cairo Gate. Given Maison Pyramide's expertise with high-end fashion brands, the PR prowess of the company was the obvious choice for such an upscale event.",
    //         img: clientImg2
    //     },
    //     {
    //         id: 2,
    //         client: 'L’ATELIER NAWBAR',
    //         project: 'Product Development & Distribution',
    //         desc: "We have developed the brand’s wholesale extension collections within a well-rounded market expansion strategy, repositioning L’atelier Nawbar as a leading brand regionally and internationally",
    //         img: clientImg3
    //     },
    //     {
    //         id: 3,
    //         client: 'ARCHIPEL',
    //         project: 'Image & communication relaunch',
    //         desc: "Developing and implementing a 360 strategy for Archipel with an uplifted website, branding, and offering; positioning it as the go-to fashion market place in the region.",
    //         img: clientImg4
    //     },
    //     {
    //         id: 4,
    //         client: "L’OREAL",
    //         project: 'Developing innovative solutions to expand in the Egyptian luxury Market',
    //         desc: "Maison Pyramide's work with L'Oréal group is an embodiment of the company's digital expertise. The fusion of content creation, Marketing and PR activities has allowed the group to have a strong digital presence that sets them apart from their competitors.",
    //         img: clientImg5
    //     },
    //     {
    //         id: 5,
    //         client: 'HARVEY NICHOLS',
    //         project: 'Championing Emerging brands at Harvey Nichols’ London flagship',
    //         desc: "In a collaborative popup concept, Maison Pyramide and Harvey Nichols gave emerging designers the opportunity to showcase their brands in one of the most iconic department stores in the world. From branding to PR, activations and international appearances, the temporary space offered an immersive brand experience and a coveted brand mix.",
    //         img: clientImg6
    //     },
    // ])
    const [_selectedClients, setSelectedClients] = useState([
        // {
        //     id: 0,
        //     client: 'SRMG',
        //     tags: ['STRATEGIC CONSULTING','BRAND PARTNERSHIPS','PR & MARKETING','EVENT / CONCEPT DEVELOPMENT'],
        //     desc: 'Global media house boasting a portfolio of over 30 titles that reach a monthly audience of 165 million loyal readers, browsers, and viewers',
        //     img: cardImg
        // },
        // {
        //     id: 1,
        //     client: 'MDLBEAST',
        //     tags: ['PR & MARKETING', 'STRATEGIC CONSULTING','TALENT BOOKING & MANAGEMENT','EVENT / CONCEPT DEVELOPMENT'],
        //     desc: "Entertainment company showcasing local, regional and international talent through immersive experiences and content. ",
        //     img: cardImg2
        // },
        // {
        //     id: 2,
        //     client: 'EMAAR MISR',
        //     tags: ['PR & MARKETING', 'TALENT BOOKING & MANAGEMENT'],
        //     desc: "Since 1997, Emaar has redefined living standards by developing properties that clients only dream of",
        //     img: cardImg3
        // },
        // {
        //     id: 3,
        //     client: 'MONOT',
        //     tags: ['SALES & DISTRIBUTION', 'EVENT / CONCEPT DEVELOPMENT'],
        //     desc: "Inspired by the world of art and defined by intricate tailoring and craftsmanship, Mônot exudes maximal minimalism and the art of effortless elegance while being affordable.",
        //     img: cardImg4
        // },
        // {
        //     id: 4,
        //     client: "L’OREAL",
        //     tags: ['PR & MARKETING', 'EVENT / CONCEPT DEVELOPMENT'],
        //     desc: "The world leader in the beauty industry managing diversified brands including Armani, YSL, and Lancome.",
        //     img: cardImg5
        // },
        // {
        //     id: 5,
        //     client: 'UNICEF',
        //     tags: ['STRATEGY CONSULTING', 'PR & MARKETING', 'EVENT / CONCEPT DEVELOPMENT'],
        //     desc: "UNICEF’s work in Egypt aims to give each child a fair chance through key aspects of their lives including; education, nutrition, and health. In an effort to raise awareness, Maison Pyramide has a close partnership with UNICEF Egypt.",
        //     img: cardImg6
        // },
        // {
        //     id: 6,
        //     client: 'CAIRO INTERNATIONAL FILM FESTIVAL',
        //     desc: "Since being established in 1976, the Cairo International Film Festival is an internationally accredited film festival held annually in the Cairo Opera House",
        //     img: cardImg7
        // },
        // {
        //     id: 7,
        //     client: 'BOSS',
        //     tags: ['TALENT BOOKING & MANAGEMENT', 'EVENT / CONCEPT DEVELOPMENT'],
        //     desc: "The world-renowned fashion brand providing perfectly cut business-wear and comfortable casual wear that leaves you feeling confident no matter the occasion.",
        //     img: cardImg8
        // },
        // {
        //     id: 8,
        //     client: 'COCA COLA',
        //     tags: ['STRATEGY CONSULTING', 'EVENT / CONCEPT DEVELOPMENT'],
        //     desc: "The multinational brand behind the beverage known to quench your thirst.",
        //     img: cardImg8
        // },
        // {
        //     id: 9,
        //     client: 'FASHION TRUST ARABIA',
        //     tags: ['EVENT / CONCEPT DEVELOPMENT', 'SALES & DISTRIBUTION'],
        //     desc: "FTA is a non-profit organization and is a collective of high profile fashion designers, executives, and personalities whose focus is to help design talents from the Arab world build their brands on solid ground with international exposure and the recognition they deserve.",
        //     img: cardImg8
        // },
        // {
        //     id: 10,
        //     client: 'EBRD',
        //     desc: "EBRD has invested in 145 companies to date in Egypt operating in multiple sectors including Energy, Financial Institutions, Transportation, and Agribusiness",
        //     img: cardImg8
        // },
        // {
        //     id: 11,
        //     client: 'OKHTEIN',
        //     tags: ['SALES & DISTRIBUTION', 'PR & MARKETING' , 'STRATEGY CONSULTING'],
        //     desc: "Okhtein is a luxury bags and accessories brand that sheds light on Egyptian craftsmanship through their innovative and cutting-edge designs.",
        //     img: cardImg8
        // },
        // {
        //     id: 12,
        //     client: 'ROBERT WUN',
        //     tags: ['SALES & DISTRIBUTION'],
        //     desc: "London-based designer is recognised for his avant-garde take on modern womenswear catching the eyes of key celebrities including Beyonce, Cardi B, and Lady Gaga",
        //     img: cardImg8
        // },
        // {
        //     id: 13,
        //     client: 'L’ATELIER NAWBAR',
        //     tags: ['SALES & DISTRIBUTION', 'PR & MARKETING' , 'CONSULTING'],
        //     desc: "Stemming from a long-standing family of jewelers, L’Atelier Nawbar offers outstanding fine jewelry, as well as an engaging experience with traditional craftsmanship.",
        //     img: cardImg8
        // },
        // {
        //     id: 14,
        //     client: 'AZZI & OSTA',
        //     tags: ['SALES & DISTRIBUTION', 'PR & MARKETING'],
        //     desc: "Azzi & Osta encompasses Haute Couture, Bridal and Ready-to-wear and has garnered repute as a notable luxury brand.",
        //     img: cardImg8
        // },
        // {
        //     id: 15,
        //     client: 'ARCHIPEL',
        //     tags: ['PR & MARKETING', 'STRATEGY CONSULTING'],
        //     desc: "An e-commerce and digital platform bringing the most unique and contemporary brands from around the world to the Middle East.",
        //     img: cardImg8
        // },
        // {
        //     id: 16,
        //     client: 'NAFSIKA SKOURTI',
        //     tags: ['SALES & DISTRIBUTION', 'PR & MARKETING', 'STRATEGY CONSULTING'],
        //     desc: "Nafsika Skourti works to export the nuances and stories of their home. Through print, embroidery and ongoing textile development they create sharp separates, couture details, and modern tailoring.",
        //     img: cardImg8
        // },
        // {
        //     id: 17,
        //     client: 'US EMBASSY',
        //     tags: ['STRATEGY CONSULTING ', 'EVENT / CONCEPT DEVELOPMENT'],
        //     desc: "To shed light on Egyptian designers in the home décor and furniture industry, the US Embassy of Egypt developed a concept to showcase 13 designers during New York Design Week.",
        //     img: cardImg8
        // },
        // {
        //     id: 18,
        //     client: 'IINDACO',
        //     tags: ['SALES &', 'DISTRIBUTION', 'PR & MARKETING'],
        //     desc: "A contemporary and sustainable footwear company founded by two friends that aim to redefine the footwear industry",
        //     img: cardImg8
        // },
        // {
        //     id: 19,
        //     client: 'THAHAB',
        //     desc: "Online e-commerce platform bringing customers the most demanded pieces of the world’s most luxurious brands including, Bottega Veneta, Balenciaga, Dolce & Gabbana, Manolo Blahnik, Valentino, Stella McCartney, Baccarat, and Christofle",
        //     img: cardImg8
        // },
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
                        WE EXISTS AS AN ENGINE TO FUEL
                        A GENERATION OF RISING TALENT
                    </h1>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consect adipiscing elit. Hendrerit sed cursus mattis id sed viverra. Nibh nulla consequat lorem turpis. Sit morbi sed tempus, amet, mattis. Sagittis velit lectus in eget nec sagittis adipiscing porta. Aliquet commodo, velit feugiat egestas.
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
