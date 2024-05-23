import React from "react";
import { useNavigate } from "react-router-dom";
import authTree from "../img/authTree.png";
import authTree2 from "../img/authTree2.png";
import authMask from "../img/authMask.png";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <>
      <div id="__next">
        <div className="layout-wrapper MuiBox-root css-33gw4">
          <div className="app-content MuiBox-root css-1bguz3s">
            <div className="content-center MuiBox-root css-0">
              <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-2b2w37">
                <div className="MuiCardContent-root css-1olb7mw">
                  <div className="MuiBox-root css-1vmv954">
                    <h6 className="MuiTypography-root MuiTypography-h6 css-1cb7fve">
                      POS
                    </h6>
                  </div>
                  <div className="MuiBox-root css-1fobf8d">
                    <h5 className="MuiTypography-root MuiTypography-h5 css-vsfzib">
                      Logging Out...
                    </h5>
                    <p className="MuiTypography-root MuiTypography-body2 css-4yvesp">
                      You are always wlecome back to login
                    </p>
                  </div>
                  <form
                    noValidate=""
                    autoComplete="off"
                    onSubmit={handleLogout}
                  >
                    <button
                      className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButtonBase-root css-irqdl1"
                      tabIndex="0"
                      type="submit"
                    >
                      Logout
                    </button>
                  </form>
                </div>
              </div>
              <img alt="tree" src={authTree} className="css-1lwg88w" />
              <img alt="mask" src={authMask} className="css-84vgca" />
              <img alt="tree-2" src={authTree2} className="css-c0oycv" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
