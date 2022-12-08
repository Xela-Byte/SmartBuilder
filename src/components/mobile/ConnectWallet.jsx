import { motion } from "framer-motion";
import { slideVariant } from "../../animationVariants/slideAnimation";
import Close from "../../assets/images/close.svg";
import MetaMask from "../../assets/images/metamask.png";
import Near from "../../assets/images/near.png";
import Wallet from "../../assets/images/wallet.png";
import {
  ConnectWalletContainer,
  ConnectWalletContent,
  ConnectWalletFooter,
  ConnectWalletHeader,
  ConnectWalletTab
} from "../../styled/mobile/ConnectWallet";

const ConnectWallet = ({ closeWallet }) => {
  return (
    <ConnectWalletContainer>
      <ConnectWalletContent
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
        <ConnectWalletHeader>
          <p>Connect a wallet</p>
          <img src={Close} alt="" onClick={() => closeWallet()} />
        </ConnectWalletHeader>
        <ConnectWalletTab>
          <img src={Wallet} alt="" />
          <div>
            <p>WalletConnect</p>
            <p>walletconnect.com</p>
          </div>
        </ConnectWalletTab>
        <ConnectWalletTab>
          <img src={Near} alt="" />
          <div>
            <p>NEAR</p>
            <p>wallet.near.org</p>
          </div>
        </ConnectWalletTab>
        <ConnectWalletTab>
          <img src={MetaMask} alt="" />
          <div>
            <p>MetaMask</p>
            <p>metamask.io</p>
          </div>
        </ConnectWalletTab>
        <ConnectWalletFooter>
          <p>
            First time using the <span>BUIDL</span> platform? <i>Learn More</i>
          </p>
        </ConnectWalletFooter>
      </ConnectWalletContent>
    </ConnectWalletContainer>
  );
};

export default ConnectWallet;
