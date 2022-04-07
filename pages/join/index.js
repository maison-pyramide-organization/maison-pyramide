import Image from "next/image";

import { useEffect, useState } from "react";

import { Container, Row, Col, Accordion } from "react-bootstrap";
import { useAccordionButton } from "react-bootstrap/AccordionButton";

import Layout from "../../components/layout/Layout";
import joinImg from "../../public/imgs/joinimg.png";
import JobService from "../api/services/JobService";
import joinStyles from "./Join.module.scss";

export default function Join() {
  const [unfilledPositions , setUnfilledPositions] = useState([]);
  const [filledPositions , setFilledPositions] = useState([]);

  useEffect(() => {
    JobService.getUnfilledPositions().then((res) => {
      setUnfilledPositions(res.data);
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
    JobService.getFilledPositions().then((res) => {
      setFilledPositions(res.data);
      console.log(res.data);
    }).catch(err => {
      console.log(err);
    })
  },[]);

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>{
    });

    return (
      <div className={joinStyles.toggle} onClick={decoratedOnClick}>
        <header>
          {children}
          <span></span>
        </header>
      </div>
    );
  }
  return (
    <Layout>
      <header className={joinStyles.header}>
        <Container fluid>
          <h1 className="text-center">JOIN THE TEAM</h1>
          <p>
          We are constantly looking for innovative and driven talents to join our family.
          </p>
        </Container>
      </header>
      <section className={joinStyles.main}>
        <Container fluid>
          <div className={joinStyles.bg_img}></div>
          <div className={joinStyles.data}>
            <Row>
              <Col md={3}>
                <div className={joinStyles.warn}>
                  <p>
                  With all application please ensure to attach your resume and
                  portfolio
                  </p>
                 
                </div>
              </Col>
              <Col md={9}>
                <h4>OPEN POSITIONS</h4>

                <Accordion className={joinStyles.accordion}>
                  {unfilledPositions.map((item ,key) => {
                    return (
                      <Accordion.Item eventKey={key} key={key}>
                      <Accordion.Header>{item?.attributes?.title}</Accordion.Header>
                      <Accordion.Body>
                        <div className={joinStyles.acc_body}>
                            <CustomToggle eventKey={key}>
                              <h3>
                               {item?.attributes?.title}
                              </h3>
                            </CustomToggle>
                          <p>
                           {item?.attributes?.description}
                          </p>
                          <label>REQUIREMENTS</label>
                          <ul>
                            {JSON.parse(item?.attributes?.requirements).map((req,key)=>{
                              return (
                              <li key={key}>
                               {req}
                              </li>
                              )

                            })}
                          </ul>
                          <a href={`mailto: hr@maisonpyramide.com?subject=${item?.attributes?.title}`}>
                          <button>APPLY FOR THIS ROLE</button>
                          </a>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    )
                  })}
                
                  {/* <Accordion.Item eventKey="1">
                    <Accordion.Header>Job Position Title</Accordion.Header>
                    <Accordion.Body>
                      <div className={joinStyles.acc_body}>
                          <CustomToggle eventKey="1">
                            <h3>
                              Job Position Title
                            </h3>
                          </CustomToggle>
                        <p>
                          Lorem ipsum dolor sit amet, consect adipiscing elit.
                          Nunc, sed ornare sed tortor consectetur suspendisse
                          commodo, posuere tortor. Morbi aliquam.
                          <br />
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc, sed ornare sed tortor consectetur
                          suspendisse commodo, posuere tortor. Morbi aliquam, et
                          mattis integer. Rhoncus eget gravida vel amet blandit
                          enim velit donec. Pellentesque quam adipiscing
                          faucibus laoreet faucibus scelerisque.{" "}
                        </p>
                        <label>REQUIREMENTS</label>
                        <ul>
                          <li>
                            Ac fames orci vitae nunc, lobortis montes,
                            pellentesque arcu enim.
                          </li>
                          <li>
                            Ornare accumsan sit egestas luctus tortor quam
                            scelerisque at.
                          </li>
                          <li>
                            Tellus eu, sit non tempus in libero volutpat et
                            pellentesque.
                          </li>
                          <li>
                            Ac fames orci vitae nunc, lobortis montes,
                            pellentesque arcu enim.
                          </li>
                          <li>
                            Ornare accumsan sit egestas luctus tortor quam
                            scelerisque at.
                          </li>
                          <li>
                            Tellus eu, sit non tempus in libero volutpat et
                            pellentesque.
                          </li>
                        </ul>
                        <a href="mailto: hr@maisonpyramide.com?subject=Test position">
                        <button>APPLY FOR THIS ROLE</button>
                        </a>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Job Position Title</Accordion.Header>
                    <Accordion.Body>
                      <div className={joinStyles.acc_body}>
                          <CustomToggle eventKey="2">
                            <h3>
                              Job Position Title
                            </h3>
                          </CustomToggle>
                        <p>
                          Lorem ipsum dolor sit amet, consect adipiscing elit.
                          Nunc, sed ornare sed tortor consectetur suspendisse
                          commodo, posuere tortor. Morbi aliquam.
                          <br />
                          <br />
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc, sed ornare sed tortor consectetur
                          suspendisse commodo, posuere tortor. Morbi aliquam, et
                          mattis integer. Rhoncus eget gravida vel amet blandit
                          enim velit donec. Pellentesque quam adipiscing
                          faucibus laoreet faucibus scelerisque.{" "}
                        </p>
                        <label>REQUIREMENTS</label>
                        <ul>
                          <li>
                            Ac fames orci vitae nunc, lobortis montes,
                            pellentesque arcu enim.
                          </li>
                          <li>
                            Ornare accumsan sit egestas luctus tortor quam
                            scelerisque at.
                          </li>
                          <li>
                            Tellus eu, sit non tempus in libero volutpat et
                            pellentesque.
                          </li>
                          <li>
                            Ac fames orci vitae nunc, lobortis montes,
                            pellentesque arcu enim.
                          </li>
                          <li>
                            Ornare accumsan sit egestas luctus tortor quam
                            scelerisque at.
                          </li>
                          <li>
                            Tellus eu, sit non tempus in libero volutpat et
                            pellentesque.
                          </li>
                        </ul>
                        <a href="mailto: hr@maisonpyramide.com?subject=Test position">
                        <button>APPLY FOR THIS ROLE</button>
                        </a>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item> */}
                </Accordion>
                {filledPositions[0] && (
                  <section className={joinStyles.filled}>
                      <h4>RECENTLY FILLED POSITIONS</h4>

                      {filledPositions.map((item,key) => {
                        return(
                        <div key={key} className={joinStyles.position}>
                            <span>FILLED</span>
                            <h2>{item?.attributes.title}</h2>
                        </div>
                        )
                      })}


                  </section>
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
