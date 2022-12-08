import {
  ConnectWalletDesktopConfirmBtn,
  ConnectWalletDesktopContainer,
  ConnectWalletDesktopHeader,
  ConnectWalletDesktopTab,
} from "../../styled/desktop/ConnectWalletDesktop";

import Close from "../../assets/images/close.svg";
import Zeta from "../../assets/images/zeta.png";
import Zenith from "../../assets/images/zenith.png";
import Near from "../../assets/images/near.png";

import { slideVariant } from "../../animationVariants/slideAnimation";
import { motion } from "framer-motion";

const Web3PlatformDesktop = ({ changeNetwork, networkSet }) => {
  const handleNetwork = (network) => {
    networkSet(network);
    localStorage.setItem("token-type", network);
  };

  return (
    <ConnectWalletDesktopContainer
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
      <ConnectWalletDesktopHeader>
        <p>Ready to get started?</p>
        <img src={Close} alt="" onClick={() => changeNetwork(false)} />
      </ConnectWalletDesktopHeader>
      <ConnectWalletDesktopTab
        style={{ padding: "15px" }}
        onClick={() => handleNetwork("near")}
      >
        <img src={Near} alt="" />
        <p>Near</p>
      </ConnectWalletDesktopTab>
      <ConnectWalletDesktopTab
        style={{ padding: "15px" }}
        onClick={() => handleNetwork("zenith")}
      >
        <img src={Zenith} alt="" />
        <p style={{ marginLeft: 20 }}>Zenithchain</p>
      </ConnectWalletDesktopTab>
      <ConnectWalletDesktopTab
        style={{ padding: "15px" }}
        onClick={() => handleNetwork("zeta")}
      >
        <img src={Zeta} alt="" />
        <p style={{ marginLeft: 20 }}>Zetachain</p>
      </ConnectWalletDesktopTab>
      <ConnectWalletDesktopConfirmBtn
        style={{ marginTop: "10%" }}
        onClick={() => changeNetwork(false)}
      >
        <p>Continue</p>
      </ConnectWalletDesktopConfirmBtn>
    </ConnectWalletDesktopContainer>
  );
};

export default Web3PlatformDesktop;
