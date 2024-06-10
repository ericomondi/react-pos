import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import authTree from "../img/authTree.png";
import authTree2 from "../img/authTree2.png";
import authMask from "../img/authMask.png";
import checkBox from "../img/square.png";
import Oauth from "../components/Oauth";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formContent = {
      // username: username,
      email: email,
      password: password,
    };
    try {
      const apiUrl = "http://64.227.77.230:8000/auth/login";
      const response = await axios.post(apiUrl, formContent, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Done.", response.data);
      const responseData = response.data;
      console.log("test", responseData);
      localStorage.setItem("token", responseData.access_token);
      localStorage.setItem("isLoggedIn", true.toString()); //  login status to local storage
      setIsLoggedIn(true);
      navigate("/dashboard");
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
                      POS
                    </h6>
                  </div>
                  <div className="MuiBox-root css-1fobf8d">
                    <h5 className="MuiTypography-root MuiTypography-h5 css-vsfzib">
                      Welcome to 👋🏻
                    </h5>
                    <p className="MuiTypography-root MuiTypography-body2 css-4yvesp">
                      Please sign-in to your account and start the adventure
                    </p>
                  </div>
                  <form
                    noValidate=""
                    autoComplete="off"
                    onSubmit={handleSubmit}
                  >
                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-nbxxrn">
                      <label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-1dwrxu1"
                        data-shrink="false"
                        htmlFor="email"
                        id="email-label"
                      ></label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1wt7s0s">
                        <input
                          type="email"
                          aria-invalid="false"
                          autoFocus=""
                          id="email"
                          placeholder="email"
                          className="MuiOutlinedInput-input MuiInputBase-input css-dxkv36"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                        htmlFor="auth-login-password"
                      ></label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-adornedEnd css-mm5uz0">
                        <input
                          type="password"
                          aria-invalid="false"
                          id="auth-login-password"
                          placeholder="Password"
                          //   value=""
                          className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-3g8nu5"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-1pycjxc">
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium css-sacmst"
                            tabIndex="0"
                            type="button"
                            aria-label="toggle password visibility"
                          >
                            O
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
                    <div className="MuiBox-root css-1hb7t2u">
                      <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1ccfs5r">
                        <span className="MuiCheckbox-root MuiCheckbox-colorPrimary MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root css-vwfnud">
                          <input
                            type="checkbox"
                            className="PrivateSwitchBase-input css-1m9pwf3"
                            data-indeterminate="false"
                          />
                          <img src={checkBox} alt="" />
                        </span>
                        <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-11l6ixd">
                          Remember Me
                        </span>
                      </label>
                      <a href="/forgot-password" className="css-dmdf8o">
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButtonBase-root css-irqdl1"
                      tabIndex="0"
                      type="submit"
                    >
                      Login
                    </button>
                    <div className="MuiBox-root css-z0xj7h">
                      <p className="MuiTypography-root MuiTypography-body2 css-yg3dyq">
                        New on our platform?
                      </p>
                      <p className="MuiTypography-root MuiTypography-body2 css-4yvesp">
                        <a href="/register" className="css-dmdf8o">
                          Create an account
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

export default LoginPage;
