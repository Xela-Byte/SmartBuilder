import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavbarContainer, NavbarTab } from "../../styled/mobile/Navbar";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setActive(location.pathname);
    if (location.pathname.includes("supply")) {
      setActive("/token-deployer");
    }
    if (location.pathname.includes("create")) {
      setActive("/dapps-deployer");
    }
  }, [location.pathname]);

  return (
    <NavbarContainer>
      <NavbarTab>
        <p
          style={{
            fontWeight: active === "/token-deployer" && 600,
          }}
          onClick={() => navigate("/token-deployer")}
        >
          Token Deployer
        </p>
      </NavbarTab>
      <NavbarTab>
        <p
          style={{
            fontWeight: active === "/dapps-deployer" && 600,
          }}
          onClick={() => navigate("/dapps-deployer")}
        >
          dApps Deployer
        </p>
      </NavbarTab>
      <NavbarTab>
        <p>IDO PAD</p>
      </NavbarTab>
      <NavbarTab>
        <p>Token Locker</p>
      </NavbarTab>
    </NavbarContainer>
  );
};

export default Navbar;
