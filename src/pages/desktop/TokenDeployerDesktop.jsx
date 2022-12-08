import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowDown from "../../assets/images/arrow-right.svg";
import Near from "../../assets/images/near.png";
import Zenith from "../../assets/images/zenith.png";
import Zeta from "../../assets/images/zeta.png";
import ArrowLeft from "../../assets/images/arrow-left.png";
import {
  TokenDeployerDesktopConnectBtn,
  TokenDeployerDesktopContainer,
  TokenDeployerDesktopDeployBtn,
  TokenDeployerDesktopHeader,
  TokenDeployerDesktopSubHeader,
  TokenDeployerDesktopTokenType,
  TokenDeployerDesktopTokenTypeContainer,
} from "../../styled/desktop/TokenDeployerDesktop";
import ConnectWalletDesktop from "../../components/desktop/ConnectWalletDesktop";
import { AnimatePresence } from "framer-motion";
import Web3PlatformDesktop from "../../components/desktop/Web3PlatformDesktop";

const TokenDeployerDesktop = () => {
  const [network, setNetwork] = useState("");
  const [connectWallet, setConnectWallet] = useState(false);
  const [changeNetwork, setChangeNetwork] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let tokenType = localStorage.getItem("token-type");
    setNetwork(tokenType);
  }, []);

  const handleConnectWallet = (status) => {
    setConnectWallet(status);
  };

  const handleChangeNetwork = (status) => {
    setChangeNetwork(status);
  };

  const handleSetNetwork = (network) => {
    setNetwork(network);
  };

  return (
    <TokenDeployerDesktopContainer>
      <TokenDeployerDesktopHeader>
        <p>Change Network: </p>
        {network === "near" && <img src={Near} alt="" />}
        {network === "zeta" && <img src={Zeta} alt="" />}
        {network === "zenith" && <img src={Zenith} alt="" />}
        <img
          src={ArrowDown}
          alt=""
          className="arrow-down"
          onClick={() => handleChangeNetwork(true)}
        />
        <TokenDeployerDesktopConnectBtn
          onClick={() => handleConnectWallet(true)}
        >
          Connect Wallet
        </TokenDeployerDesktopConnectBtn>
      </TokenDeployerDesktopHeader>
      <TokenDeployerDesktopSubHeader>
        <p>Build a NEAR protocol chain token without code</p>
        <p>
          Get connected to the world of building on NEAR with an automated token
          builder and deployer today
        </p>
        <p>
          Kindly make sure your wallet is connected to NEAR mainnet or testnet.
        </p>
        <p>We recommend using either Metamask or Trust Wallet.</p>
      </TokenDeployerDesktopSubHeader>
      <TokenDeployerDesktopTokenTypeContainer>
        <AnimatePresence>
          {changeNetwork && (
            <Web3PlatformDesktop
              changeNetwork={handleChangeNetwork}
              networkSet={handleSetNetwork}
            />
          )}
          {connectWallet && (
            <ConnectWalletDesktop connectWallet={handleConnectWallet} />
          )}
        </AnimatePresence>

        <TokenDeployerDesktopTokenType
          onClick={() => navigate("/fixed-supply")}
        >
          <p> A Fixed supply NEAR token</p>
          <p></p>
        </TokenDeployerDesktopTokenType>
        <TokenDeployerDesktopTokenType
          onClick={() => navigate("/mintable-supply")}
        >
          <p> A Mintable NEAR token</p>
          <p></p>
        </TokenDeployerDesktopTokenType>
        <TokenDeployerDesktopTokenType
          onClick={() => navigate("/burnable-supply")}
        >
          <p> A Burnable NEAR token</p>
          <p></p>
        </TokenDeployerDesktopTokenType>
        <TokenDeployerDesktopTokenType
          onClick={() => navigate("/deflationary-supply")}
        >
          <p> A Deflationary NEAR token</p>
          <p>(Auto burn with each transaction)</p>
        </TokenDeployerDesktopTokenType>
        <TokenDeployerDesktopTokenType
          onClick={() => navigate("/hyperdeflationary-supply")}
        >
          <p>A Hyper-Deflationary NEAR token </p>
          <p>
            (Automatic burn, Holders rewards, and auto buy back with each
            transaction)
          </p>
        </TokenDeployerDesktopTokenType>
        <TokenDeployerDesktopDeployBtn colored>
          Deploy on Testnet
        </TokenDeployerDesktopDeployBtn>
        <TokenDeployerDesktopDeployBtn>
          Deploy on Mainnet
          <img src={ArrowLeft} alt="" />
        </TokenDeployerDesktopDeployBtn>
      </TokenDeployerDesktopTokenTypeContainer>
    </TokenDeployerDesktopContainer>
  );
};

export default TokenDeployerDesktop;
