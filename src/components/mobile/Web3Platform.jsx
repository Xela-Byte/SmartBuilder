import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { slideVariant } from "../../animationVariants/slideAnimation";
import Close from "../../assets/images/close.svg";
import Correct from "../../assets/images/correct.png";
import Near from "../../assets/images/near.png";
import Zenith from "../../assets/images/zenith.png";
import Zeta from "../../assets/images/zeta.png";
import {
  Web3PlatformContainer,
  Web3PlatformContent,
  Web3PlatformHeader,
  Web3PlatformTab,
} from "../../styled/mobile/Web3Platform";

const Web3Platform = ({ closePlatform, tokenChoice }) => {
  const [activeToken, setActiveToken] = useState("");

  const handleActiveToken = (token) => {
    setActiveToken(token);
    tokenChoice(token);
    localStorage.setItem("token-type", token);
  };

  useEffect(() => {
    let tokenType = localStorage.getItem("token-type");
    setActiveToken(tokenType);
  }, []);
  return (
    <Web3PlatformContainer>
      <Web3PlatformContent
        as={motion.div}
        initial="initial"
        animate="animate"
        variants={slideVariant}
        exit={{
          opacity: 0,
          y: "100vh",
          transition: {
            type: "tween",
            duration: 0.3,
          },
        }}
      >
        <Web3PlatformHeader>
          <img src={Close} alt="" onClick={() => closePlatform()} />
        </Web3PlatformHeader>
        <Web3PlatformTab onClick={() => handleActiveToken("near")}>
          <img src={Near} alt="" />
          <div>
            <p>NEAR</p>
          </div>
          {activeToken === "near" && <img src={Correct} alt="" />}
        </Web3PlatformTab>
        <Web3PlatformTab onClick={() => handleActiveToken("zenith")}>
          <img src={Zenith} alt="" />
          <div>
            <p>Zenith Chain</p>
          </div>
          {activeToken === "zenith" && <img src={Correct} alt="" />}
        </Web3PlatformTab>
        <Web3PlatformTab onClick={() => handleActiveToken("zeta")}>
          <img src={Zeta} alt="" />
          <div>
            <p>Zeta Chain</p>
          </div>
          {activeToken === "zeta" && <img src={Correct} alt="" />}
        </Web3PlatformTab>
      </Web3PlatformContent>
    </Web3PlatformContainer>
  );
};

export default Web3Platform;
