import Image from 'next/image'
import Link from 'next/link';
import dynamic from "next/dynamic";

import { useEffect, useState } from 'react';
import { Row , Col, Container} from 'react-bootstrap';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax  } from 'react-scroll-parallax';
import {
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";

import clientStyles from './ClientStyles.module.scss';

import clientImg from '../../public/imgs/clientimg.png'
import clientImg2 from '../../public/imgs/client6.1.jpeg';
import client1 from '../../public/imgs/client1.1.jpeg';
import client2 from '../../public/imgs/client1.2.JPG';
import client3 from '../../public/imgs/client2.1.JPG';
import client4 from '../../public/imgs/client2.2.jpg';
import client5 from '../../public/imgs/client3.1.jpeg';
import client6 from '../../public/imgs/client3.2.jpeg';
import client7 from '../../public/imgs/client4.1.jpg';
import client8 from '../../public/imgs/client4.2.JPG';
import client9 from '../../public/imgs/client5.1.jpeg';
import client10 from '../../public/imgs/client5.2.jpeg';
import client11 from '../../public/imgs/client6.2.png';
import client12 from '../../public/imgs/client7.1.jpeg';
import client13 from '../../public/imgs/client7.2.jpeg';
import ClientService from '../../pages/api/services/ClientService';

const ParallaxCache = dynamic(
  () => {
      return import("../../components/parallaxCache/parallaxCache");
  },
  { ssr: false }
);

function ClientComponent() {
    const [loadingFlag, setLoadingFlag] = useState(false);
    // const [hideImgFlag , setHideImageFlag] = useState(false);

    const [client ,setClient] = useState(0);
    const [clientList, setClientList] = useState([
      {id:0,name:'MDLBEAST',imgRight:client1,imgLeft:client2,client_name:'Ahmed Alammary',owner_title:'MDLBEAST, Creative Director',description:'“Working with MP has been invaluable as an experience.  Always focused on creating winning combinations with flair and strategic thinking within fashion and marketing. Through our work we have formed great bonds and we truly love working with each other and complementing each teams’ excellence.”'},
      {id:3,name:"EMAAR",imgRight:client4,imgLeft:client3,client_name:'Mostafa el Kady',owner_title:'CEO, EMAAR Egypt',description:'“Each project that we have partnered with Maison Pyramide on, their high standards and understanding of our market has left us feeling very satisfied with their work”'},
      // {id:1,name:'UNICEF',imgRight:client3,imgLeft:client4,client_name:'Hussein Aboelross',owner_title:"L'Oréal Egypt, Managing Director",description:'“We have been working with Maison Pyramide for years now, and the team has not only satisfied us with their strategy and digital expertise, but their professionalism and availability has definitely made it a stronger partnership”'},
      {id:2,name:"L'Oréal",imgRight:client7,imgLeft:client8,client_name:'Hussein Aboelross',owner_title:"L'Oréal Egypt, Managing Director",description:'“We have been working with Maison Pyramide for years now, and the team has not only satisfied us with their strategy and digital expertise, but their professionalism and availability has definitely made it a stronger partnership”'},
      // {id:4,name:'SRMG',imgRight:client11,imgLeft:client12,client_name:'Hussein Aboelross',owner_title:"L'Oréal Egypt, Managing Director",description:'“We have been working with Maison Pyramide for years now, and the team has not only satisfied us with their strategy and digital expertise, but their professionalism and availability has definitely made it a stronger partnership”'},
      {id:5,name:'MÔNOT',imgRight:client11,imgLeft:clientImg2,client_name:'Harvey Nicholas',owner_title:'MÔNOT, Creative Director',description:'“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac adipiscing viverra dui egestas ut faucibus dictum sit. Fermentum mauris proin sed molestie. In ipsum, scelerisque est adipiscing viverra urna nunc quam.”'},
      {id:2,name:'HARVEY NICHOLAS',imgRight:client13,imgLeft:client12,client_name:'Laura Larbalestier',owner_title:'Harvey Nichols Group Fashion Director',description:'“Maison Pyramide are leaders in the discovery of new talent and are unique in their ability to be able to support their brands, not just in the showroom but with innovative launch ideas and events."'},
    ])

  useEffect(async () => {
    // getClients();
    await Promise.all(
      [client1.src,client2.src, client3.src, client4.src, client7.src,client8.src, client11.src, client12.src, client13.src,clientImg2.src].map((card) => {
        return new Promise((resolve, reject) => {
          const image = document.createElement("img");
          // image.innerHTML = `<Image src={${client1.src}} alt={'ed'}/>`
          image.onload = () => {
            resolve(true);
          };
          image.src = card;
        });
      })
    );
  }, []);

    const getClients = () => {
      ClientService.getHomeClients().then(res => {
        console.log("data",res.data);
        setClientList(res.data);
      })
    }


    const handleLeftClick = () => {
        // let tabs = document.getElementById('tabs');
        // tabs.scroll({left:-100,behavior:'smooth'});
        // setCurrentScroll(prev => prev -100);
        // handleClient(prev => prev -1 || 4);
        console.log({client});
        if(client > 0){
          handleClient(prev => prev - 1);
        }
        else{
          handleClient(4)
        }
    
    }
    const handleRightClick = () => {
    // let tabs = document.getElementById('tabs');
    // tabs.scroll({left:100,behavior:'smooth'})
    // setCurrentScroll(prev => prev +100);
    if(client < 4){
      handleClient(prev => prev + 1);
    }
    else{
      handleClient(0)
    }
  }


    const handleClient = (ind) => {
      setLoadingFlag(true);
      // setHideImageFlag(true);
      setClient(ind);
      
    }

    useEffect(() => {
      setTimeout(() => {
        setLoadingFlag(false);
      }, 600);
      // setTimeout(() => {
      //   setHideImageFlag(false);
      // }, 1200);
    },[client])

    return (
        <>
         <section className={clientStyles.client}>
            <Container className={clientStyles.client_container}>
                <div className={clientStyles.text}>
                  <h2>Hear from our clients <br/> and trusted partners </h2>
                  <TransitionGroup>
                    {!loadingFlag && (
                      <CSSTransition key={3} timeout={3000} classNames={'item'}>
                        <div>
                          <p>{clientList[client].description}</p>
                          <div className={clientStyles.names}>
                            <span>{clientList[client]?.client_name}</span>
                            <br/>
                            <span>{clientList[client]?.owner_title}</span>
                          </div>

                          <div className={`${clientStyles.mobile_names} mobile`}>
                            <Row>
                              <Col sm={6} xs={6}>
                                <span>{clientList[client]?.client_name}</span>
                                <br className='disktop_only'/>
                                <span>{clientList[client]?.owner_title}</span>
                              </Col>
                              <Col sm={6} xs={6}>
                                <div className={clientStyles.mobile_img}>
                                  {/* <Image src={clientImg2} alt="shoes"/>s */}
                                  <Image unoptimized={true} src={clientList[client].imgRight} alt="shoes" height={150} objectFit={"cover"} width={100} layout='responsive'/>

                                </div>
                              </Col>
                            </Row>
                          </div>
                          </div>
                      </CSSTransition>
                    )}
                  
                  </TransitionGroup>

                 

                  <div className={clientStyles.tabs}>
                    <div id="tabs" className={clientStyles.tabs_container}>
                      {/* <Tabs/> */}
                      <ul>
                        {clientList.map((cli,ind) => (
                            <li key={ind} className={client==ind?clientStyles.active:''} onClick={() => handleClient(ind)}>
                            {cli.name}
                          </li>
                        ))}
                      </ul>
                  </div>
                  <div className={clientStyles.btns}>
                    <Link href="/clients">
                    <button>
                      <a>
                      VIEW ALL CLIENTS
                      </a>
                      </button>
                    </Link>
                    <div className={`${clientStyles.slider_ctrls} mobile`}>
                      <div onClick={handleLeftClick} className={`${clientStyles.slider_ctrl} ${clientStyles.slider_ctrl_left}`}>
                        <span className={clientStyles.chev_left}></span>
                      </div>
                      <div onClick={handleRightClick} className={`${clientStyles.slider_ctrl} ${clientStyles.slider_ctrl_right}`}>
                        <span className={clientStyles.chev_right}></span>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              
                <div className={clientStyles.clientImgs}>

                  <div className={clientStyles.img}>
                  <ParallaxProvider>
                  <Parallax rotate={[150,0,'easeOutQuint']} 
                  translateX={['200px','-80px','easeOutQuint']}>

                    <ParallaxCache/>

                     <TransitionGroup>
                      {!loadingFlag && (
                        <CSSTransition key={3} timeout={3000} classNames={'item'}>
                        <div>
                          <Image unoptimized={true} priority src={clientList[client].imgRight} alt="shoes" height={150} objectFit={"cover"} width={100} layout='responsive'/>
                        </div>
                        </CSSTransition>
                      )}
                    </TransitionGroup>
                    </Parallax>
                  </ParallaxProvider>
                      </div>
                
                      <div className={clientStyles.img}>
                      <ParallaxProvider>
                      <Parallax  rotate={[-150,0,'easeOutQuint']} translateX={['-200px','80px','easeOutQuint']}>

                        <ParallaxCache/>
                        <TransitionGroup>
                          {!loadingFlag && (
                            <CSSTransition key={3} timeout={3000} classNames={'item'}>
                            <div>
                            <Image unoptimized={true} priority src={clientList[client].imgLeft} height={150} objectFit={"cover"} width={100} alt="shoes" layout='responsive'/>
                            </div>
                            </CSSTransition>
                          )}
                        </TransitionGroup>

                        </Parallax>
                      </ParallaxProvider>
                      </div>
                </div>
                
              
          </Container>
      </section>
        </>
    )

}

export default ClientComponent;
