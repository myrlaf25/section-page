import React, { useState } from "react";
import { Button } from "reactstrap";

import iLogo from "../assets/logo/iLogo.png";
import wLogo from "../assets/logo/wLogo.png";
import lemonLogo from "../assets/logo/lemonLogo.png";
import abstractLogo from "../assets/logo/abstractLogo.png";
import mascotLogo from "../assets/logo/mascotLogo.png";
import puzzleLogo from "../assets/logo/puzzleLogo.png";
import Lettermark from "./Lettermark";
import Wordmark from "./Wordmark";
import Pictorial from "./Pictorial";
import Abstract from "./Abstract";
import Mascot from "./Mascot";
import Combination from "./Combination";

const AllLogos = () => {
  const logoItems = [
    {
      component: <Lettermark />,
      title: "Lettermark Logos",
      image: <img src={iLogo} alt="I" style={{ width: "80px" }} />,
    },
    {
      component: <Wordmark />,
      title: "Wordmark Logos",
      image: <img src={wLogo} alt="W" style={{ width: "80px" }} />,
    },
    {
      component: <Pictorial />,
      title: "Pictorial Mark Logo",
      image: <img src={lemonLogo} alt="lemon" style={{ width: "80px" }} />,
    },
    {
      component: <Abstract />,
      title: "Abstract Mark Logo",
      image: (
        <img src={abstractLogo} alt="abstract" style={{ width: "80px" }} />
      ),
    },
    {
      component: <Mascot />,
      title: "Mascot Logo",
      image: <img src={mascotLogo} alt="mascot" style={{ width: "80px" }} />,
    },
    {
      component: <Combination />,
      title: "Combination Logo",
      image: <img src={puzzleLogo} alt="puzzle" style={{ width: "80px" }} />,
    },
  ];

  const [component, setComponent] = useState();

  return (
    <div>
      <div className="navBtn">
        <div className="logoInfo" id='infoLogo'>
          {logoItems.map((item, i) => (
            <Button
              className="letterBtn"
              id="letterBtn"
              color="rgb(43, 42, 42)"
              style={{
                textAlign: "center",
                fontSize: "17px",
                alignContent: "center",
              }}
              key={i}
              onClick={() => setComponent(item.component)}
            >
              {item.image}
              {item.title}
            </Button>
          ))}
        </div>
      </div>
      <div className="container" >
        {component}
      </div>
    </div>
  );
};

export default AllLogos;
