import {
  DappsDeployerMobileContainer,
  DappsDeployerMobileDeployBtn,
  DappsDeployerMobileDeployBtnContainer,
  DappsDeployerMobileHeader,
  DappsDeployerMobileIntroContainer,
  DappsDeployerMobileSubHeader,
  DappsDeployerMobileTokenType,
  DappsDeployerMobileTokenTypeContainer,
} from "../../styled/mobile/DappsDeployer";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import MiddleEllipsis from "react-middle-ellipsis";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/images/arrow-right.svg";
import Logo from "../../assets/images/logo.png";
import Near from "../../assets/images/near.png";
import Zenith from "../../assets/images/zenith.png";
import Zeta from "../../assets/images/zeta.png";
import ConnectWallet from "../../components/mobile/ConnectWallet";
import Web3Platform from "../../components/mobile/Web3Platform";

const DappsDeployer = () => {
  const [connectWallet, setConnectWallet] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [tokenAvatar, setTokenAvatar] = useState("near");
  const navigate = useNavigate();

  const closeConnectWallet = () => {
    setConnectWallet(false);
  };

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
      <AnimatePresence>
        {connectWallet ? (
          <ConnectWallet closeWallet={closeConnectWallet} />
        ) : (
          ""
        )}
      </AnimatePresence>

      <DappsDeployerMobileContainer>
        <DappsDeployerMobileHeader>
          <img src={LeftArrow} alt="" />
          <div>
            <p>{window.location.host}</p>
          </div>
        </DappsDeployerMobileHeader>
        <DappsDeployerMobileSubHeader>
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
        </DappsDeployerMobileSubHeader>
        <DappsDeployerMobileIntroContainer>
          <p>Build a NEAR Protocol Chain token without code</p>
          <p>
            Get connected to the world of building on NEAR with a automated
            token builder and deployer today.
          </p>
          <p>
            Kindly make sure your wallet is connected to NEAR (mainnet or
            testnet).
          </p>
          <p>We recommend using either Metamask or Trust Wallet.</p>
        </DappsDeployerMobileIntroContainer>
        <DappsDeployerMobileDeployBtnContainer>
          <DappsDeployerMobileDeployBtn>
            Deploy on Testnet
          </DappsDeployerMobileDeployBtn>
          <DappsDeployerMobileDeployBtn>
            Deploy on Mainnet
          </DappsDeployerMobileDeployBtn>
        </DappsDeployerMobileDeployBtnContainer>
        <DappsDeployerMobileTokenTypeContainer>
          <DappsDeployerMobileTokenType
            onClick={() => navigate("/create-tokensalepad")}
          >
            <p>Create Tokensalepad</p>
          </DappsDeployerMobileTokenType>
          <DappsDeployerMobileTokenType
            onClick={() => navigate("/create-tokensalepad-refferal")}
          >
            <p>Create a Tokensalepad with refferal reward</p>
          </DappsDeployerMobileTokenType>
          <DappsDeployerMobileTokenType
            onClick={() => navigate("/create-airdrop")}
          >
            <p>Create an automated airdrop list</p>
          </DappsDeployerMobileTokenType>
          <DappsDeployerMobileTokenType
            onClick={() => navigate("/create-fairlaunchpad")}
          >
            <p>Create a fair launchpad</p>
          </DappsDeployerMobileTokenType>
        </DappsDeployerMobileTokenTypeContainer>
      </DappsDeployerMobileContainer>
    </>
  );
};

export default DappsDeployer;
