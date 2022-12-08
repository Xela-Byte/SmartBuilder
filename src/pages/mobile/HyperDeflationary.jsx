import {
  TokenDeployerMobileContainer,
  TokenDeployerMobileHeader,
  TokenDeployerMobileSubHeader,
} from "../../styled/mobile/TokenDeployerMobile";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import MiddleEllipsis from "react-middle-ellipsis";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/images/arrow-right.svg";
import Logo from "../../assets/images/logo.png";
import Near from "../../assets/images/near.png";
import Zenith from "../../assets/images/zenith.png";
import Zeta from "../../assets/images/zeta.png";
import Web3Platform from "../../components/mobile/Web3Platform";
import {
  SupplyContainer,
  SupplyCreateTokenBtn,
  SupplyFooter,
  SupplyForm,
  SupplyInputContainer,
} from "../../styled/mobile/Supply";

const HyperDeflationary = () => {
  const [platform, setPlatform] = useState(false);
  const [tokenAvatar, setTokenAvatar] = useState("near");
  const navigate = useNavigate();

  const handlePlatform = () => {
    setPlatform(true);
  };
  const closePlatform = () => {
    setPlatform(false);
  };

  const handleTokenAvatar = (tokenValue) => {
    setTokenAvatar(tokenValue);
  };

  useEffect(() => {
    let tokenType = localStorage.getItem("token-type");
    setTokenAvatar(tokenType);
  }, []);

  return (
    <>
      <AnimatePresence>
        {platform ? (
          <Web3Platform
            closePlatform={closePlatform}
            tokenChoice={handleTokenAvatar}
          />
        ) : (
          ""
        )}
      </AnimatePresence>

      <TokenDeployerMobileContainer>
        <TokenDeployerMobileHeader>
          <img src={LeftArrow} alt="" onClick={() => navigate(-1)} />
          <div>
            <p>{window.location.host}</p>
          </div>
        </TokenDeployerMobileHeader>
        <TokenDeployerMobileSubHeader>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="token" onClick={() => handlePlatform()}>
            {tokenAvatar === "near" && <img src={Near} alt="" />}
            {tokenAvatar === "zeta" && <img src={Zeta} alt="" />}
            {tokenAvatar === "zenith" && <img src={Zenith} alt="" />}
            <img src={LeftArrow} alt="" />
          </div>
          <div
            className="connect-btn"
            style={{ width: "45%", whiteSpace: "nowrap", padding: "5px" }}
          >
            <MiddleEllipsis>
              <span>1ExAmpLe0FaBiTco1NAdDr3sSV5tsGaMF6hd</span>
            </MiddleEllipsis>
          </div>
        </TokenDeployerMobileSubHeader>
        <SupplyContainer>
          <SupplyForm>
            <SupplyInputContainer>
              <label htmlFor="Name">Name:</label>
              <input type="text" placeholder="Ex: Smart Builder" />
            </SupplyInputContainer>
            <SupplyInputContainer>
              <label htmlFor="Symbol">Symbol:</label>
              <input type="text" placeholder="Ex: BUIDL" />
            </SupplyInputContainer>
            <SupplyInputContainer>
              <label htmlFor="Name">Supply:</label>
              <input type="text" placeholder="Ex: 100000000000" />
            </SupplyInputContainer>
            <SupplyInputContainer>
              <label htmlFor="Symbol">Decimal:</label>
              <input type="text" placeholder="Ex: 18" />
            </SupplyInputContainer>
            <SupplyInputContainer>
              <label htmlFor="Symbol">Marketing:</label>
              <input type="text" placeholder="Ex: 10%" />
            </SupplyInputContainer>
            <SupplyFooter className="hyper-supply">
              <div className="supplyInputContainer">
                <div className="supplyInput">
                  <label htmlFor="Buy back">Buy back:</label>
                  <input type="text" placeholder="Ex: 1%" />
                </div>
                <div className="supplyInput">
                  <label htmlFor="Buy back">Holders Rewards:</label>
                  <input type="text" placeholder="Ex: 3%" />
                </div>
                <div className="supplyInput">
                  <label htmlFor="Buy back">Total Tax:</label>
                  <input type="text" placeholder="Ex: 14%" />
                </div>
              </div>
              <p>Token Creation Cost : 10 NEAR or 3% of total supply</p>
            </SupplyFooter>
            <SupplyCreateTokenBtn>Create Token</SupplyCreateTokenBtn>
          </SupplyForm>
        </SupplyContainer>
      </TokenDeployerMobileContainer>
    </>
  );
};

export default HyperDeflationary;
