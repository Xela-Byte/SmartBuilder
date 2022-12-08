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
  CreateTokenContainer,
  CreateTokenFeeOptionContainer,
  CreateTokenForm,
  CreateTokenInfoContainer,
  CreateTokenInputContainer,
  DeployButton,
} from "../../styled/mobile/CreateTokesalepad";
import "../../css/checkbox.css";

const CreateTokensalepad = () => {
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
        <CreateTokenContainer>
          <CreateTokenInfoContainer>
            <p>
              Contract would send token in exchange for NEAR instantly, and NEAR
              would be sent to your wallet instantly.
            </p>
            <p>
              Once tokensale contract is deployed, dont foget to approve it for
              selling token from your wallet. Do not send token to thr contract
              ensure to have enough balance of the token for sale in your
              wallet. (Contract is selling token directly from your wallet by
              allownace way).
            </p>
          </CreateTokenInfoContainer>
          <CreateTokenForm>
            <CreateTokenInputContainer>
              <p>Token Contract:</p>
              <input
                type="text"
                placeholder="Contract address of your deployed token"
              />
            </CreateTokenInputContainer>
            <CreateTokenInputContainer>
              <p>Rate:</p>
              <div>
                <p>1 NEAR = </p>
                <input type="text" placeholder="1000 token" />
              </div>
            </CreateTokenInputContainer>
            <CreateTokenInputContainer>
              <p>Hard Cap:</p>
              <div>
                <input type="text" placeholder="1,000,000 NEAR" />
                <p>NEAR</p>
              </div>
            </CreateTokenInputContainer>
            <CreateTokenFeeOptionContainer>
              <label className="container">
                <p> 5% of NEAR raised only </p>&nbsp;
                <span style={{ color: "#F5A22F" }}> (Recommended)</span>
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p> 3% of NEAR raised only and 2% of token sold</p>
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
              <label className="container">
                <p>$1000 in NEAR token</p>
                <input type="radio" name="radio" />
                <span className="checkmark"></span>
              </label>
            </CreateTokenFeeOptionContainer>
            <DeployButton>Deploy Token</DeployButton>
          </CreateTokenForm>
        </CreateTokenContainer>
      </TokenDeployerMobileContainer>
    </>
  );
};

export default CreateTokensalepad;
