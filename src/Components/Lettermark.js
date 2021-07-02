import React from "react";
import { CardBody, Card, Row, Col } from "reactstrap";


import hboLogo from "../assets/logo/hboLogo.png";
import ibmLogo from "../assets/logo/ibmLogo.png";
import nasaLogo from "../assets/logo/nasaLogo.png";


const Lettermark = () => (

  <Card>
    <CardBody>
      
        <Col sm="6">
          <h2 id='title'>Lettermark Logos</h2>A Monogram or lettermark is a
          typography-based logo that's comprised of a few letters, usually a
          company's intials. The lettermark is all about simplicity.
          <br></br>By utilizing just a few letters lettermark logos are effective at
          streaming any company brand if they have a long name.
        </Col>
        <Col sm='auto'>
          <Row>
            <Col md="auto">
              <img id='logo1' src={hboLogo} alt="hbo" style={{width: '90', heigth: '90', margin: '0', padding: '3px'}} />
            </Col>
            <Col md="auto">
              <img id='logo1' src={ibmLogo} alt="ibm" style={{ width: '90', heigth: '90', margin: '0', padding: '3px'}}  />
            </Col>
            <Col md="auto">
              <img id='logo1' src={nasaLogo} alt="nasa" style={{  width: '90', heigth: '90', margin: '0', padding: '3px'}} />
            </Col>
          </Row>
        </Col>
      
    </CardBody>
  </Card>
);
export default Lettermark;