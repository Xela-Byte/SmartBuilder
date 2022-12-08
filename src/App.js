import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavbarDesktop from "./components/desktop/NavbarDesktop";
import Navbar from "./components/mobile/Navbar";
import useGetWindowWidth from "./hooks/useWindowSize";
import TokenDeployerDesktop from "./pages/desktop/TokenDeployerDesktop";
import Burnable from "./pages/mobile/Burnable";
import CreateAirdrop from "./pages/mobile/CreateAirdrop";
import CreateFairlaunchpad from "./pages/mobile/CreateFairlaunchpad";
import CreateTokensalepad from "./pages/mobile/CreateTokensalepad";
import CreateTokensalepadRefferal from "./pages/mobile/CreateTokensalepadRefferal";
import DappsDeployer from "./pages/mobile/DappsDeployer";
import Deflationary from "./pages/mobile/Deflationary";
import FixedSupply from "./pages/mobile/FixedSupply";
import HyperDeflationary from "./pages/mobile/HyperDeflationary";
import MintableSupply from "./pages/mobile/MintableSupply";
import TokenDeployer from "./pages/mobile/TokenDeployer";

const App = () => {
  const windowWidth = useGetWindowWidth().innerWidth;
  return (
    <Router>
      {windowWidth > 990 && <NavbarDesktop />}
      <Routes>
        <Route
          path="token-deployer"
          element={
            windowWidth < 990 ? <TokenDeployer /> : <TokenDeployerDesktop />
          }
        />
        <Route path="burnable-supply" element={<Burnable />} />
        <Route path="fixed-supply" element={<FixedSupply />} />
        <Route path="mintable-supply" element={<MintableSupply />} />
        <Route
          path="hyperdeflationary-supply"
          element={<HyperDeflationary />}
        />
        <Route path="deflationary-supply" element={<Deflationary />} />
        <Route path="dapps-deployer" element={<DappsDeployer />} />
        <Route path="create-tokensalepad" element={<CreateTokensalepad />} />
        <Route path="create-airdrop" element={<CreateAirdrop />} />
        <Route path="create-fairlaunchpad" element={<CreateFairlaunchpad />} />
        <Route
          path="create-tokensalepad-refferal"
          element={<CreateTokensalepadRefferal />}
        />
      </Routes>
      {windowWidth < 990 && <Navbar />}
    </Router>
  );
};

export default App;
