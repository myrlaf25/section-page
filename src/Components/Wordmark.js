import React from "react";
import { CardBody, Card, Row, Col } from "reactstrap";


import visaLogo from "../assets/logo/visaLogo.png";
import cocaLogo from "../assets/logo/cocaLogo.png";
import googleLogo from "../assets/logo/googleLogo.png";

const Wordmark = () => (
    
      <Card>
        <CardBody>
          <Row>
            <Col xs="4">
              <h2>Wordmark Logos</h2>Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business' name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name. Google's logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition.
            </Col>
            <Col md='auto'>
              <Row>
                <Col sm="auto">
                  <img id='logo1' src={visaLogo} alt="hbo" />
                </Col>
                <Col sm="auto">
                  <img id='logo1' src={cocaLogo} alt="ibm" />
                </Col>
                <Col sm="auto">
                  <img id='logo1' src={googleLogo} alt="nasa" />
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    
  );

  
export default Wordmark;