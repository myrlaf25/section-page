import React from "react";
import { CardBody, Card, Row, Col } from "reactstrap";


import doritosLogo from "../assets/logo/doritosLogo.png";
import burgerkingLogo from "../assets/logo/burgerkingLogo.png";
import lacosteLogo from "../assets/logo/lacosteLogo.png";

const Combination = () => (
    
      <Card>
        <CardBody>
         
            <Col sm="6">
              <h2>Combination Logos</h2>A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image.<br></br>Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand.
            </Col>
            <Col sm='auto'>
              <Row>
                <Col md="auto">
                  <img id='logo1' src={doritosLogo} alt="hbo" />
                </Col>
                <Col md="auto">
                  <img id='logo1' src={burgerkingLogo} alt="ibm" />
                </Col>
                <Col md="auto">
                  <img id='logo1' src={lacosteLogo} alt="nasa" />
                </Col>
              </Row>
            </Col>
         
        </CardBody>
      </Card>
    
  );

  
export default Combination;