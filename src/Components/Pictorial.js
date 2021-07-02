import React from "react";
import { CardBody, Card, Row, Col } from "reactstrap";


import appleLogo from "../assets/logo/appleLogo.png";
import twitterLogo from "../assets/logo/twitterLogo.png";
import targetLogo from "../assets/logo/targetLogo.png";

const Pictorial = () => (
    
      <Card>
        <CardBody>
          
            <Col sm="6">
              <h2>Pictorial Mark Logos</h2>A pictorial mark (sometimes called brand mark or logo symbol) is an icon-or graphic-based logo. It's probably the image that comes to mind when you think 'logo': the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies' logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable.<br></br>A true brand mark in only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use.
            </Col>
            <Col sm="auto">
              <Row>
                <Col md="auto">
                  <img id='logo1' src={appleLogo} alt="hbo" />
                </Col>
                <Col md="auto">
                  <img id='logo1' src={twitterLogo} alt="ibm" />
                </Col>
                <Col md="auto">
                  <img id='logo1' src={targetLogo} alt="nasa" />
                </Col>
              </Row>
            </Col>
          
        </CardBody>
      </Card>
    
  );

  
export default Pictorial;