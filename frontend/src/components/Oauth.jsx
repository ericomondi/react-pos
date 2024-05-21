import React from "react";
import googleIcon from "../img/google.png"
import facebookIcon from "../img/facebook.png"
import githubIcon from "../img/github.png"
import xIcon from "../img/twitter.png"
function Oauth() {
  return (
    <>
      <div
        className="MuiDivider-root MuiDivider-fullWidth MuiDivider-withChildren css-18tthos"
        role="separator"
      >
        <span className="MuiDivider-wrapper css-1mjhz9d">or</span>
      </div>
      <div className="MuiBox-root css-gmuwbf">
        <a
          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-i9hf7q"
          tabindex="0"
          href="/materio-mui-react-nextjs-admin-template-free/"
        >
          <img src={facebookIcon} alt="" />
        </a>
        <a
          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-i9hf7q"
          tabindex="0"
          href="/materio-mui-react-nextjs-admin-template-free/"
        >
          <img src={xIcon} alt="" />
        </a>
        <a
          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-i9hf7q"
          tabindex="0"
          href="/materio-mui-react-nextjs-admin-template-free/"
        >
          <img src={githubIcon} alt="" />
        </a>
        <a
          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-i9hf7q"
          tabindex="0"
          href="/materio-mui-react-nextjs-admin-template-free/"
        >
        <img src={googleIcon} alt="" />
        </a>
      </div>
    </>
  );
}

export default Oauth;
