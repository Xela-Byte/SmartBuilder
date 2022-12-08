import {
  TokenDeployerMobileContainer,
  TokenDeployerMobileDeployBtn,
  TokenDeployerMobileDeployBtnContainer,
  TokenDeployerMobileHeader,
  TokenDeployerMobileIntroContainer,
  TokenDeployerMobileSubHeader,
  TokenDeployerMobileTokenType,
  TokenDeployerMobileTokenTypeContainer
} from "../../styled/mobile/TokenDeployerMobile";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LeftArrow from "../../assets/images/arrow-right.svg";
import Logo from "../../assets/images/logo.png";
import Near from "../../assets/images/near.png";
import Zenith from "../../assets/images/zenith.png";
import Zeta from "../../assets/images/zeta.png";
import ConnectWallet from "../../components/mobile/ConnectWallet";
import Web3Platform from "../../components/mobile/Web3Platform";

const TokenDeployer = () => {
  const [connectWallet, setConnectWallet] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [tokenAvatar, setTokenAvatar] = useState("near");
  const navigate = useNavigate();

  const handleConnectWallet = () => {
    setConnectWallet(true);
  };
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

      <TokenDeployerMobileContainer>
        <TokenDeployerMobileHeader>
          <img src={LeftArrow} alt="" />
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
          <div className="connect-btn" onClick={() => handleConnectWallet()}>
            <p>Connect</p>
            <img src={LeftArrow} alt="" />
          </div>
        </TokenDeployerMobileSubHeader>
        <TokenDeployerMobileIntroContainer>
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
        </TokenDeployerMobileIntroContainer>
        <TokenDeployerMobileDeployBtnContainer>
          <TokenDeployerMobileDeployBtn>
            Deploy on Testnet
          </TokenDeployerMobileDeployBtn>
          <TokenDeployerMobileDeployBtn>
            Deploy on Mainnet
          </TokenDeployerMobileDeployBtn>
        </TokenDeployerMobileDeployBtnContainer>
        <TokenDeployerMobileTokenTypeContainer>
          <TokenDeployerMobileTokenType
            onClick={() => navigate("/fixed-supply")}
          >
            <p> A Fixed supply NEAR token</p>
            <p></p>
          </TokenDeployerMobileTokenType>
          <TokenDeployerMobileTokenType
            onClick={() => navigate("/mintable-supply")}
          >
            <p> A Mintable NEAR token</p>
            <p></p>
          </TokenDeployerMobileTokenType>
          <TokenDeployerMobileTokenType
            onClick={() => navigate("/burnable-supply")}
          >
            <p> A Burnable NEAR token</p>
            <p></p>
          </TokenDeployerMobileTokenType>
          <TokenDeployerMobileTokenType
            onClick={() => navigate("/deflationary-supply")}
          >
            <p> A Deflationary NEAR token</p>
            <p>(Auto burn with each transaction)</p>
          </TokenDeployerMobileTokenType>
          <TokenDeployerMobileTokenType
            onClick={() => navigate("/hyperdeflationary-supply")}
          >
            <p>A Hyper-Deflationary NEAR token </p>
            <p>
              (Automatic burn, Holders rewards, and auto buy back with each
              transaction)
            </p>
          </TokenDeployerMobileTokenType>
        </TokenDeployerMobileTokenTypeContainer>
      </TokenDeployerMobileContainer>
    </>
  );
};

export default TokenDeployer;
