import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import {
  NavbarDesktopContainer,
  NavbarDesktopLogo,
  NavbarDesktopTab,
} from "../../styled/desktop/NavbarDesktop";
import { colors } from "../../styled/UniversalStyles";

const NavbarDesktop = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  useEffect(() => {
    setActive(location.pathname);
    if (location.pathname.includes("supply")) {
      setActive("/token-deployer");
    }
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <>
      <NavbarDesktopContainer>
        <NavbarDesktopLogo>
          <img src={Logo} alt="" />
        </NavbarDesktopLogo>
        <NavbarDesktopTab style={{ marginRight: "2%" }}>
          <p
            style={{
              color: active === "/token-deployer" && colors.orange,
            }}
            onClick={() => navigate("/token-deployer")}
          >
            Token Deployer
          </p>
        </NavbarDesktopTab>
        <NavbarDesktopTab>
          <p>dApps Deployer</p>
        </NavbarDesktopTab>
        <NavbarDesktopTab>
          <p>IDO PAD</p>
        </NavbarDesktopTab>
        <NavbarDesktopTab style={{ marginRight: "2%" }}>
          <p>Token Locker</p>
        </NavbarDesktopTab>
      </NavbarDesktopContainer>
    </>
  );
};

export default NavbarDesktop;
