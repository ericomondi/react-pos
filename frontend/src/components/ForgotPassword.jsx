import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/login.css";
import authTree from "../img/authTree.png";
import authTree2 from "../img/authTree2.png";
import authMask from "../img/authMask.png";
import checkBox from "../img/square.png";
import Oauth from "../components/Oauth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formContent = {
      email: email,
    };
    try {
      const apiUrl = "http://127.0.0.1:8000/auth/forgot-password";
      const response = await axios.post(apiUrl, formContent, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Done.", response.data);
      const responseData = response.data;
      console.log("test", responseData);
      toast.success("Password reset email sent successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
      toast.error(
        "An error occurred while sending the reset email. Please try again.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };
  return (
    <>
      <ToastContainer />
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
                      Password Reset👋🏻
                    </h5>
                    <p className="MuiTypography-root MuiTypography-body2 css-4yvesp">
                      Please enter email to reset password
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
                        // htmlFor="email"
                        id="email-label"
                      ></label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1wt7s0s">
                        <input
                          // type="email"
                          aria-invalid="false"
                          autoFocus=""
                          id="email"
                          placeholder="Email"
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
                    
                    <div className="MuiBox-root css-1hb7t2u">
                      <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-1ccfs5r">
                      </label>
                      <a href="/login" className="css-dmdf8o">
                        Back to login
                      </a>
                    </div>

                    <button
                      className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButtonBase-root css-irqdl1"
                      tabIndex="0"
                      type="submit"
                    >
                      Send Reset Email
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
}

export default ForgotPasswordPage;
