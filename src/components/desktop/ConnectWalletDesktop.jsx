import {
  ConnectWalletDesktopConfirmBtn,
  ConnectWalletDesktopContainer,
  ConnectWalletDesktopHeader,
  ConnectWalletDesktopTab,
} from "../../styled/desktop/ConnectWalletDesktop";

import Close from "../../assets/images/close.svg";
import Wallet from "../../assets/images/wallet.png";
import Near from "../../assets/images/near.png";
import MetaMask from "../../assets/images/metamask.png";

import { slideVariant } from "../../animationVariants/slideAnimation";
import { motion } from "framer-motion";

const ConnectWalletDesktop = ({ connectWallet }) => {
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
        <img src={Close} alt="" onClick={() => connectWallet(false)} />
      </ConnectWalletDesktopHeader>
      <ConnectWalletDesktopTab>
        <img src={Wallet} alt="" />
        <p>WalletConnect</p>
        <p>walletconnect.com</p>
      </ConnectWalletDesktopTab>
      <ConnectWalletDesktopTab>
        <img src={Near} alt="" />
        <p>Near</p>
        <p>wallet.near.org</p>
      </ConnectWalletDesktopTab>
      <ConnectWalletDesktopTab>
        <img src={MetaMask} alt="" />
        <p>MetaMask</p>
        <p>metamask.io</p>
      </ConnectWalletDesktopTab>
      <ConnectWalletDesktopConfirmBtn onClick={() => connectWallet(false)}>
        <p>Confirm</p>
      </ConnectWalletDesktopConfirmBtn>
      <p>
        First time using the <span>BUIDL</span> platform? <i>Learn More</i>
      </p>
    </ConnectWalletDesktopContainer>
  );
};

export default ConnectWalletDesktop;
