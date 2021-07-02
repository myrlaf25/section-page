import React from "react";
import { CardBody, Card, Row, Col } from "reactstrap";


import bpLogo from "../assets/logo/bpLogo.png";
import pepsiLogo from "../assets/logo/pepsiLogo.png";
import adidasLogo from "../assets/logo/adidasLogo.png";

const Abstract = () => (
    
      <Card>
        <CardBody>
         
            <Col sm="6">
              <h2>Abstract Mark Logos</h2>An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image--like an apple or a bird--it's an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divide circle and the strip-y Adidas flower.<br></br>Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand.
            </Col>
            <Col sm='auto'>
              <Row>
                <Col md="auto">
                  <img id='logo1' src={bpLogo} alt="hbo" />
                </Col>
                <Col md="auto">
                  <img id='logo1' src={pepsiLogo} alt="ibm" />
                </Col>
                <Col md="auto">
                  <img id='logo1' src={adidasLogo} alt="nasa" />
                </Col>
              </Row>
            </Col>
          
        </CardBody>
      </Card>
    
  );

  
export default Abstract;