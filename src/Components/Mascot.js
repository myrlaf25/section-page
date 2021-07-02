import React from "react";
import { CardBody, Card, Row, Col } from "reactstrap";


import koolaidLogo from "../assets/logo/koolaidLogo.png";
import kfcLogo from "../assets/logo/kfcLogo.png";
import wallyLogo from "../assets/logo/wallyLogo.png";

const Mascot = () => (
    
      <Card>
        <CardBody>
          <Row>
            <Col xs="4">
              <h2>Mascot Logos</h2>Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson.<br></br>A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC's Colonel and PUB's cute Water Wally.
            </Col>
            <Col md="auto">
              <Row>
                <Col sm="auto">
                  <img id='logo1' src={koolaidLogo} alt="hbo" />
                </Col>
                <Col sm="auto">
                  <img id='logo1' src={kfcLogo} alt="ibm" />
                </Col>
                <Col sm="auto">
                  <img id='logo1' src={wallyLogo} alt="nasa" />
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    
  );

  
export default Mascot;