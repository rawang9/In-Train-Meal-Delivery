import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who We Are</h1>
        <p>
        Railrestro.com – Get Your favorite restaurant food NOW IN TRAIN!!

Today, nearly 6 billion people travel in Indian Railway and we Indians love this journey more than any other mode of transport. We all support every effort taken by anyone to make our journey with Indian Railways a better one. Railrestro is one such effort to get you fresh & good quality food in train during your journey. We at Railrestro work to get this question out of your mind and make your train journey a delicious one.

The objective of Railrestro is to ensure the easy and convenient availability of great food choices with variety & assortment and prepared in hygienic kitchen conditions. We have done an extensive R & D to develop a comprehensive menu items along with our empanelled vendors that suits best for the train travelers along with promotional offers to make your food experience an exceptional one complemented with a convenient and user friendly ordering system.
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
            We have numerous cuisines to pick from like North Indian, South Indian, Chinese, Mughlai, Hyderabad, Continental, Italian, Non-vegetarian, Vegetarian, and, of course, soft drinks. These are just few we listed down, go through our menu to be stunned!.
            </p>
          </Col>
          <Col md={6}>
            <p>
            Besides all this, we ensure you that the local food suppliers, we have partnered with, cook hygienic food so that you do not have to rely on unhealthy snacks. Railrestro tracks the train in real time and makes sure that fresh food is made available to the passengers travelling in the train through its network restaurants across India. Payments can be made directly online while placing the order or you can pay on delivery of the food too..
            </p>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default About;
