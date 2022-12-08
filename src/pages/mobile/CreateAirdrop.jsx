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
  CreateAidropContainer,
  CreateAirdropInputContainer,
} from "../../styled/mobile/CreateAirdrop";

const CreateAirdrop = () => {
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
        <CreateAidropContainer>
          <CreateAirdropInputContainer>
            <p>Token Contract</p>
            <input
              type="text"
              placeholder="Contract address of your deployed contract"
            />
            <p>Create airdrop fine: 100 NEAR</p>
          </CreateAirdropInputContainer>
          <CreateAirdropInputContainer>
            <p>Name</p>
            <input
              type="text"
              placeholder="New protocol"
            />
          </CreateAirdropInputContainer>
          <CreateAirdropInputContainer>
            <p>Symbol</p>
            <input
              type="text"
              placeholder="NEAR"
            />
          </CreateAirdropInputContainer>
          <CreateAirdropInputContainer>
            <p>Decimal</p>
            <input
              type="text"
              placeholder="18"
            />
            <p>Create airdrop fine: 100 NEAR</p>
          </CreateAirdropInputContainer>
        </CreateAidropContainer>
      </TokenDeployerMobileContainer>
    </>
  );
};

export default CreateAirdrop;
