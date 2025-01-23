import React, { useEffect, useState } from "react";
import "../styles/login.css";
import authTree from "../img/authTree.png";
import authTree2 from "../img/authTree2.png";
import authMask from "../img/authMask.png";
import Oauth from "../components/Oauth";
import { useNavigate } from "react-router-dom";
import axios from "axios"

function RegisterPage() {
  const navigate = useNavigate();
  const [username, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formContent = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const apiUrl = "http://127.0.0.1:8000/auth/register";
      const response = await axios.post(apiUrl, formContent, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Done.", response.data);
      const responseData = response.data;
      console.log("test", responseData);

      navigate("/login");
    } catch (error) {
      console.error(error);
    }
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
                    Logo
                    <h6 className="MuiTypography-root MuiTypography-h6 css-1cb7fve">
                      Materio
                    </h6>
                  </div>
                  <div className="MuiBox-root css-1fobf8d">
                    <h5 className="MuiTypography-root MuiTypography-h5 css-vsfzib">
                      Adventure starts here 🚀
                    </h5>
                    <p className="MuiTypography-root MuiTypography-body2 css-4yvesp">
                      Make your app management easy and fun!
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-nbxxrn">
                      <label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-1dwrxu1"
                        data-shrink="false"
                        for="username"
                        id="username-label"
                      >
                        {/* Username */}
                      </label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1wt7s0s">
                        <input
                          type="text"
                          id="username"
                          className="MuiOutlinedInput-input MuiInputBase-input css-3g8nu5"
                          value={username}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Username"
                        />
                        <fieldset
                          aria-hidden="true"
                          className="MuiOutlinedInput-notchedOutline css-igs3ac"
                        >
                          <legend className="css-1ftyaf0">
                            <span>Username</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-nbxxrn">
                      <label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-1dwrxu1"
                        data-shrink="false"
                      >
                        {/* Email */}
                      </label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1wt7s0s">
                        <input
                          type="email"
                          className="MuiOutlinedInput-input MuiInputBase-input css-3g8nu5"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Email"
                        />
                        <fieldset
                          aria-hidden="true"
                          className="MuiOutlinedInput-notchedOutline css-igs3ac"
                        >
                          <legend className="css-1ftyaf0">
                            <span>Email</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                    <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                      <label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-1dwrxu1"
                        data-shrink="false"
                        for="auth-register-password"
                      >
                        {/* Password */}
                      </label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-adornedEnd css-mm5uz0">
                        <input
                          type="password"
                          className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-3g8nu5"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Password"
                        />
                        <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-1pycjxc">
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium css-sacmst"
                            tabindex="0"
                            type="button"
                            aria-label="toggle password visibility"
                          >
                            F{" "}
                          </button>
                        </div>
                        <fieldset
                          aria-hidden="true"
                          className="MuiOutlinedInput-notchedOutline css-igs3ac"
                        >
                          <legend className="css-1ftyaf0">
                            <span>Password</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                    <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1vzalnn">
                      <span className="MuiCheckbox-root MuiCheckbox-colorPrimary MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root css-vwfnud">
                        <input
                          type="checkbox"
                          className="PrivateSwitchBase-input css-1m9pwf3"
                          data-indeterminate="false"
                        />
                        Box
                      </span>
                      <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-11l6ixd">
                        <span>I agree to </span>
                        <a
                          href="/materio-mui-react-nextjs-admin-template-free/"
                          className="css-dmdf8o"
                        >
                          privacy policy &amp; terms
                        </a>
                      </span>
                    </label>
                    <button
                      className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButtonBase-root css-irqdl1"
                      tabindex="0"
                      type="submit"
                    >
                      Sign up
                    </button>
                    <div className="MuiBox-root css-z0xj7h">
                      <p className="MuiTypography-root MuiTypography-body2 css-yg3dyq">
                        Already have an account?
                      </p>
                      <p className="MuiTypography-root MuiTypography-body2 css-4yvesp">
                        <a href="/login" className="css-dmdf8o">
                          Sign in instead
                        </a>
                      </p>
                    </div>
                    <Oauth />
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
}

export default RegisterPage;
