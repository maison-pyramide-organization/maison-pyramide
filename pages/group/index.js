import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ParallaxProvider ,Parallax} from "react-scroll-parallax";
import { motion } from 'framer-motion';

import Layout from "../../components/layout/Layout";

import groupStyles from "./Group.module.scss";
import GroupServices from "../api/services/GroupService";
import ArticleService from "../api/services/ArticlesService";
const GroupSlider = dynamic(
  () => {
    return import("../../components/groupSlider/GroupSlider");
  },
  { ssr: false }
);
const IsMobileComponent = dynamic(
  () => {
      return import("../../components/isMobile/IsMobileComponent");
  },
  { ssr: false }
);
const ParallaxCache = dynamic(
  () => {
      return import("../../components/parallaxCache/parallaxCache");
  },
  { ssr: false }
);

export default function Group() {
  const [isMobile, setIsMobile] = useState(null);
  const [data ,setData] = useState({});
  const [articles , setArticles] = useState([]);
  const router = useRouter();

  const useHandleMobile = (value) =>{
    useEffect(() => {
        setIsMobile(value)
    },[])
  }
  const [isTextExpand, setIsTextExpand] = useState([
    false,
    false,
    false,
    false
  ]);

  
  const headerVariants = {
    // hidden: { opacity: 0, y: "10%" ,scale:1.05},
    hidden: { opacity: 0, y: "10%" ,scale:1.05},
    enter: { opacity: 1, y: 0 ,scale:1}
  }
  const textVariants = {
    hidden: { opacity: 0, x: 15 },
    enter: { opacity: 1, x: 0 }
  }


  const toggleExpandText = (i) => {
    let isTextExpandArr = [...isTextExpand];
    isTextExpandArr[i] = !isTextExpandArr[i];

    setIsTextExpand(isTextExpandArr)
  }
  const handlePost = (link) => {
    // router.push(link);
    window.open(link, '_blank');

  }
  useEffect(() => {
    GroupServices.getGroup().then(res=> {
      console.log(res.data[0].attributes);
      setData(res.data[0].attributes);
      
    })
  },[])
  useEffect(() => {
    if(data?.press){

      // console.log(data.press);
      data.press.forEach(item =>{
        ArticleService.getArticle(item).then(res => {
          setArticles(prev => [...prev,res.data])
        })
      })
    }
  },[data]);


  const animatedText = (text) => {
    let textArr = text?.split(" ");
    textArr?.map((word,i)=>{
      textArr[i] =  <motion.span
      initial="hidden"
      whileInView="enter"
      exit="exit"
      variants={textVariants}
      transition={{ duration: 1,delay: i*.02, ease: "easeInOut",type: 'linear' }}
       >
        {word+' '}
        </motion.span>
    })
    return textArr;
  }

  const formatDate = (value) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

    let date = new Date(value)
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();
    return `${month} ${year}`;
  }
  return (
    <>
      
      <IsMobileComponent handleMobile={useHandleMobile}/>
      {data && (

        <ParallaxProvider>
        <header className={groupStyles.header} style={{backgroundImage:`url(${isMobile?data?.mobile_main_image?.custom_data?.url:data?.main_image?.custom_data?.url})`}}>
          <motion.h1
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={headerVariants}
            transition={{ duration: 1.2, ease: "easeInOut",type: 'linear' }}
          >{data?.title}</motion.h1>
        </header>
        <section className={groupStyles.info}>
        {/* <ParallaxProvider> */}
          <Parallax translateY={[isMobile?10:20, isMobile?-10:-30]}>
          <ParallaxCache/>
          <Container>
            <p className={groupStyles.text}>
            {animatedText(data?.description)}
            </p>
            <ul>
              <li className="text-center">
                <p>DUBAI</p>
                <span>Unit B201, Building 7, 
  Dubai design district.</span>
                <span>dubai@maisonpyramide.com</span>
              </li>
              <li className="text-center">
                <p>CAIRO</p>
                <span>14 Kamal Al Tawil, Zamalek</span>
                <span>cairo@maisonpyramide.com</span>
              </li>
              <li className="text-center">
                <p>BEIRUT</p>
                <span>Ras Beirut, Kantari district, Michel Chiha street.</span>
                <span>beirut@maisonpyramide.com</span>
              </li>
              {/* <li className="text-center">
                <p>LONDON</p>
                <span>+20 106 0091742</span>
                <span>contact@maisonpyramide.com</span>
              </li> */}
            </ul>          
          </Container>

          <Container>
          <h2 className="text-center">Maison Pyramide Group</h2>
          <Row className={groupStyles.maisonGroup}>
            <Col md={4}>
            <div className={groupStyles.card}>
            <h3> {animatedText("Maison Pyramide")}</h3>
                <span>{animatedText("Maison Pyramide is the strategic branch of the company supporting the pace of innovation and growth of young and established entities looking to expand and grow.")}</span>
                </div>
            </Col>
            <Col md={4}>
            <div className={groupStyles.card}>
            <h3><a href="https://eshowroom.maisonpyramide.com/" target={"_blank"} rel="noreferrer">{animatedText("The Showroom")}</a></h3>
                <span>{animatedText("The Showroom is Maison Pyramide Group’s wholesale and retail strategy, sales, and distribution platform. We support multinational brands launching new retail opportunities or expanding their distribution.")}</span>
                <p className="pt-3">
                <a href="mailto:showroom@maisonpyramide.com"
                    target="_blank" rel="noreferrer" className={groupStyles.mail}>
                      {animatedText("showroom@maisonpyramide.com")}</a>
            </p>
                </div>
            </Col>
            <Col md={4}>
            <div className={groupStyles.card}>
            <h3><a href="https://www.instagram.com/egoandeast/" target={"_blank"} rel="noreferrer">{animatedText("Ego & East")}</a></h3>
            <span>{animatedText("A talent management agency representing celebrities, social media influencers, actors, and musicians. Ego & East partners global brands with the right digital talents.")}</span>
            <p className="pt-3">
                <a href="mailto:hello@egoandeast.co"
                    target="_blank" rel="noreferrer" className={groupStyles.mail}>
                      {animatedText("hello@egoandeast.co")}</a>
            </p>
                </div>
            </Col>
          </Row>
          </Container>

          </Parallax>
          {/* </ParallaxProvider> */}

          <Container fluid>
          {/* <ParallaxProvider> */}
          {/* <ParallaxCache/> */}
          <Parallax translateY={[isMobile?10:20, isMobile?-10:-10,'easeOutQuint']}>
            <ParallaxCache/>
            <div className={groupStyles.office}>
              <Row>
              <Col md={12} className={`${groupStyles.office_network_img} mobile`}>
                {data?.office_mobile_image?.custom_data && (
                  <Image src={data?.office_mobile_image?.custom_data?.url} width={70} height={100} objectFit="cover" unoptimized={true} layout="responsive"></Image>
                )}
                </Col>
                <Col md={4}>
                  <div className={groupStyles.office_network}>
                    <motion.h2
                      initial="hidden"
                      animate="enter"
                      exit="exit"
                      variants={headerVariants}
                      transition={{ duration: 1.2, ease: "easeInOut",type: 'linear' }}
                    >
                      Office <br className="disktop_only" /> Network
                    </motion.h2>
                    <p>
                  {animatedText(data?.office_text1)}
                    </p>
                  </div>
                </Col>
                <Col md={4} className={`disktop_only`}>
                  {data?.office_image &&(
                    <Image src={data?.office_image?.custom_data?.url} unoptimized={true} width={70} height={100} layout="responsive"></Image>
                  )}
                </Col>
                <Col md={4}>
                  <div className={`${groupStyles.office_network} ${groupStyles.office_network_text}`}>
                    <p>
                    {animatedText(data?.office_text2)}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            </Parallax>
          {/* </ParallaxProvider> */}

          {/* <ParallaxProvider>
          <ParallaxCache/> */}
          <Parallax translateY={[isMobile?-1:10, isMobile?-7:-20]}>
          <ParallaxCache/>
            <div className={groupStyles.leader}>
              <motion.h2 className="text-center pb-3"
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={headerVariants}
                transition={{ duration: 1.2, ease: "easeInOut",type: 'linear' }}
              >Leadership Team</motion.h2>
              <p className="text-center">
              {animatedText(data?.leader_text)}
              </p>

              <Row>
                <Col md={4}>
                  <div className={groupStyles.card}>
                    {data.leader1_image?.custom_data?.url && (
                      <Image className={groupStyles.img} src={data?.leader1_image?.custom_data?.url} height={150} unoptimized={true} objectFit={"cover"} width={100} layout="responsive"></Image>
                    )}
                    <h3>Giovanina Attieh</h3>
                    {/* <p>Co-Founder & Partner</p> */}
                    <p className={groupStyles.desc}>
                    {data?.leader1text}                      
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={groupStyles.card}>
                  {data.leader2_image?.custom_data?.url && (
                      <Image className={groupStyles.img} src={data?.leader2_image?.custom_data?.url} height={150} objectFit={"cover"} unoptimized={true} width={100} layout="responsive"></Image>
                    )}
                    <h3>Maria Munoz</h3>
                    {/* <p>Co-Founder & Partner</p> */}
                    <p className={groupStyles.desc}>
                      {data?.leader2_text}                      
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={groupStyles.card}>
                  {data.leader3_image?.custom_data?.url && (
                      <Image className={groupStyles.img} src={data?.leader3_image?.custom_data?.url} height={150} objectFit={"cover"} unoptimized={true} width={100} layout="responsive"></Image>
                    )}
                    <h3>Nathalie Mroue</h3>
                    {/* <p>Co-Founder & Partner</p> */}
                    <p className={groupStyles.desc}>
                    {data?.leader3_text}                      
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={groupStyles.card}>
                  {data.leader4_image?.custom_data?.url && (
                      <Image className={groupStyles.img} src={data?.leader4_image?.custom_data?.url} height={150} objectFit={"cover"} unoptimized={true} width={100} layout="responsive"></Image>
                    )}
                    <h3>Yann Pavie</h3>
                    {/* <p>Executive Chairman & Partner </p> */}
                    <p className={groupStyles.desc}>
                    {data?.leader4_text}                      
                    
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={groupStyles.card}>
                  {data.leader5_image?.custom_data?.url && (
                      <Image className={groupStyles.imgPro} src={data?.leader5_image?.custom_data?.url} height={150} objectFit={"cover"} unoptimized={true} width={100} layout="responsive"/>
                    )}
                    <h3>Reem Kanj</h3>
                    {/* <p>Executive Chairman & Partner </p> */}
                    <p className={groupStyles.desc}>
                    {data?.leader5_text}                      
                    
                    </p>
                  </div>
                </Col>
                <Col md={4}>
                  <div className={groupStyles.card}>
                  {data.leader6_image?.custom_data?.url && (
                      <Image className={groupStyles.imgPro} src={data?.leader6_image?.custom_data?.url} height={150} objectFit={"cover"} unoptimized={true} width={100} layout="responsive" />
                    )}
                    <h3>Natalya Kanj</h3>
                    {/* <p>Executive Chairman & Partner </p> */}
                    <p className={groupStyles.desc}>
                    {data?.leader6_text}                      
                    
                    </p>
                  </div>
                </Col>
              </Row>

            </div>
            </Parallax>
          {/* </ParallaxProvider> */}

          <ParallaxProvider>
          <ParallaxCache/>
          <Parallax translateY={[isMobile?-20:10, isMobile?-15:-30]}>
            {data?.slider && 
            (
              <GroupSlider cultureText={data?.culture_text} valuesText={data?.values_text} images={data?.slider}/>
            )}

            </Parallax>
          </ParallaxProvider>

            <ParallaxProvider>
          <ParallaxCache/>
          <Parallax translateY={[isMobile?-5:0, isMobile?-10:-50]}>
          <ParallaxCache/>

            <div className={groupStyles.press}>

              <motion.h2 
                className="text-center"
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={headerVariants}
                transition={{ duration: 1.2, ease: "easeInOut",type: 'linear' }}
              >
                  In the press
              </motion.h2>
              <p className="text-center">
                {animatedText("Discover why everyone's talking about our innovative projects, our team of experts, and our mission to elevate inspiring brands.")}</p>
              <Row>
                {articles[0] && articles?.map((item,key)=>{
                  return(
                  <Col md={4} key={key} onClick={() => handlePost(item?.attributes?.link)}>
                      <div className={groupStyles.press_card}>
                      <div className={groupStyles.img}>
                        {
                          item.attributes.image?.custom_data?.url && (
                            <>
                            <motion.div
                              initial={{borderRightWidth:80,borderLeftWidth:80}}
                              whileInView={{borderRightWidth:0 ,borderLeftWidth:0}}
                              viewport={{ once: true }}
                              transition={{ duration: 1,delay:.2, ease: "easeInOut",type: 'linear' }}
                              className={groupStyles.imgLayer}
                              >
                            </motion.div>
                            <Image src={item.attributes?.image?.custom_data?.url} layout="responsive" unoptimized={true} loading="eager" height={70} objectFit={"cover"} width={100}></Image> 
                            </>
                          )
                        }
                      <h2>{item.attributes?.title}</h2>
                      </div>
                      <h3>
                     {item.attributes?.sub_title}
                      </h3>
                      <span>{formatDate(item.attributes?.date)}</span>

                      <p>
                        {item.attributes?.description}
                      </p>
                      <div className={groupStyles.card_tag}>{item.attributes?.tag}</div>
                      </div>
                  </Col>
                  )
                })}
              </Row>
            </div>
              </Parallax>
          </ParallaxProvider>
          </Container>
          
        </section>
        </ParallaxProvider>
      )}

    </>
  );
}
