import dynamic from "next/dynamic";
import Image from "next/image";
import Link from 'next/link';

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { BallTriangle } from  'react-loader-spinner'

import Layout from "../../components/layout/Layout";
import contactImg from "../../public/imgs/contact.png";
import contactStyles from "./Contact.module.scss";

import ContactService from "../../pages/api/services/ContactService";


const ParallaxCache = dynamic(
    () => {
        return import("../../components/parallaxCache/parallaxCache");
    },
    { ssr: false }
  );

export default function Contact() {
    const [inputs, setInputs] = useState({subject:'interested in working together'});
    const [errors , setErrors] = useState({});

    // const [isLoading ,setIsLoading] = useState(false);
    const [msgSent , setMsgSent] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        
        if(name == 'name'){
            switch (name == 'name') {
                case !value:
                    setErrors(values => ({...values,name:'Please enter a name.'}))
                    break;
                case !(value.trim()).match(/^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/):
                    setErrors(values => ({...values,name:'Please enter a correct value.'}))
                    break
                default:
                    setErrors(values => ({...values,[name]:null}))
                break;
            }
        }
        if(name == 'message'){
            switch (name == 'message') {
                case !value:
                    setErrors(values => ({...values,message:'Please enter a message.'}))
                break;
            
                default:
                    setErrors(values => ({...values,message:null}))
                break;
            }
        }

        if(name == 'email'){
            switch (name == 'email') {
                case !value:
                    setErrors(values => ({...values,email:'Please enter an email address.'}))
                break;


                case !value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/):
                    setErrors(values => ({...values,email:'Please enter a correct value.'}))
                break;
                default:
                    setErrors(values => ({...values,email:null}))
                break;
            }
        }

        setInputs(values => ({...values, [name]: value}));
    }    

    const handleSubmit = (event) =>{
        event.preventDefault();
        // setIsLoading(true);
        ContactService.addContact(inputs).then(res =>{
            setMsgSent(true);
            setInputs({subject:'interested in working together'});
        }).catch((err) => {
            // err.json()
            console.log('eh el error',err);
        })
    }
  return (
    <Layout>
        <header className={contactStyles.header}>
            <Container fluid>
                <h1 className="text-center">
                    LET&apos;S GET CHATTING
                </h1>
                    <div className={contactStyles.contact_info}>

                <Row>
                    <Col md={3}>
                        <p>
                        <span>CONTACT@MAISONPYRAMIDE.COM</span>
                        <br/>
                        <span className={contactStyles.link}>
                            <a href="https://eshowroom.maisonpyramide.com">

                            E SHOWROOM
                            </a>
                        </span>
                        <br/>
                        <span className={contactStyles.link}>
                            <a href="https://www.instagram.com/maisonpyramide/">

                            INSTAGRAM
                            </a>
                        </span>
                        </p>
                    </Col>
                    <Col md={9}>
                    <ul>
                        <li>
                        <p>CAIRO</p>
                        <span>+20 106 0091742</span>
                        <span>contact@maisonpyramide.com</span>
                        </li>
                        <li>
                        <p>DUBAI</p>
                        <span>+20 106 0091742</span>
                        <span>contact@maisonpyramide.com</span>
                        </li>
                        {/* <li>
                        <p>LONDON</p>
                        <span>+20 106 0091742</span>
                        <span>contact@maisonpyramide.com</span>
                        </li> */}
                    </ul>
                    </Col>
                </Row>
                </div>
            </Container>
        </header>
        <section className={contactStyles.msg}>
            <Container fluid>
                <Row className={contactStyles.form_row}>
                    <Col md={4} >
                        <div className={contactStyles.msg_img}>
                        <Image layout="responsive" src={contactImg}></Image>
                        </div>
                    </Col>
                    <Col md={8}>

                        <form className={contactStyles.msg_form} onSubmit={handleSubmit}>
                            <div className="w-100">
                                {
                                    msgSent && (
                                        <h2 className="text-center">Your message has been sent to us successfully, Thank you!</h2>
                                    )
                                }
                            <Container fluid className={contactStyles.form_container}>
                            <h2>Send us a message</h2>
                            <Row>
                                <Col md={6}>
                                <div>
                                    <label className="disktop_only">Subject</label>
                                    <select name="subject" onChange={handleChange}>
                                        <option defaultValue value={"interested in working together"}>
                                        Interested in working together
                                        </option>
                                        <option value={"general inquiry"}>
                                            General Inquiry
                                        </option>
                                        <option value={"press"}>
                                            Press
                                        </option>
                                    </select>
                                </div>
                                <div>
                                    <label className="disktop_only">Full Name</label>
                                    <input required placeholder="Full Name" name="name" className={errors.name?'inpt-error':''} value={inputs.name || ""} onChange={handleChange}></input>
                                    <p className={contactStyles.inpt_err}>{errors.name}</p>
                                </div>
                                <div className={contactStyles.email_field}>
                                    <input required placeholder="Email Address" name="email" className={errors.email?'inpt-error':''}  value={inputs.email || ""} onChange={handleChange}></input>
                                    <p className={contactStyles.inpt_err}>{errors.email}</p>
                                </div>
                                </Col>
                                <Col md={6}>
                                    <div>
                                    <label className="disktop_only" style={{color:'transparent'}}>Subject</label>
                                        <input placeholder="Company Name" name="company" value={inputs.company || ""} onChange={handleChange}></input>
                                    </div>
                                    <div className={contactStyles.msg_field}>
                                    <label className="disktop_only" style={{color:'transparent'}}>Subject</label>
                                        <input required placeholder="Message" name="message" className={errors.message?'inpt-error':''}  value={inputs.message || ""} onChange={handleChange}></input>
                                        <p className={contactStyles.inpt_err}>{errors.message}</p>
                                    </div>
                                       
                                        <button className={contactStyles.send_btn}>
                                        SEND
                                        </button>
                                        
                                        
                                </Col>
                            </Row>
                        </Container>
                        </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className={contactStyles.join}>
            <h3 className="mb-4">
            Interested in joing <br className="mobile"/> the team?
            </h3>
            <p>
            Take a look at our current open positions
            </p>
            <button>
                <Link href="/join" >
                <a>VIEW OPEN POSITIONS</a>
            </Link>
            
            </button>
        </section>
        <ParallaxProvider>
        <ParallaxCache/>
        </ParallaxProvider>
    </Layout>
  );
}
