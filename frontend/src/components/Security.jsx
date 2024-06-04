import React from "react";
import "../styles/account-set.css";
import "../styles/security.css";
import securityImage from "../img/security-image.png"

const Security = () => {
  return (
    <>
      <form>
        <div className="MuiCardContent-root css-exi77q">
          <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-5 css-1g0g456">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 css-rpybyc">
              <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-5 css-1g0g456">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-13vqpli">
                  <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                    <label
                      className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-1dwrxu1"
                      data-shrink="false"
                      for="account-settings-current-password"
                    >
                      Current Password
                    </label>
                    <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-adornedEnd css-mm5uz0">
                      <input
                        aria-invalid="false"
                        id="account-settings-current-password"
                        type="password"
                        className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-3g8nu5"
                        value=""
                      />
                      <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-1pycjxc">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium css-sacmst"
                          tabindex="0"
                          type="button"
                          aria-label="toggle password visibility"
                        >
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="EyeOffOutlineIcon"
                          >
                            <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"></path>
                          </svg>
                          <span className="MuiTouchRipple-root css-w0pj6f"></span>
                        </button>
                      </div>
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-igs3ac"
                      >
                        <legend className="css-1ftyaf0">
                          <span>Current Password</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-16tipco">
                  <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                    <label
                      className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-1dwrxu1"
                      data-shrink="false"
                      for="account-settings-new-password"
                    >
                      New Password
                    </label>
                    <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-adornedEnd css-mm5uz0">
                      <input
                        aria-invalid="false"
                        id="account-settings-new-password"
                        type="password"
                        className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-3g8nu5"
                        value=""
                      />
                      <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-1pycjxc">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium css-sacmst"
                          tabindex="0"
                          type="button"
                          aria-label="toggle password visibility"
                        >
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="EyeOffOutlineIcon"
                          >
                            <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"></path>
                          </svg>
                          <span className="MuiTouchRipple-root css-w0pj6f"></span>
                        </button>
                      </div>
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-igs3ac"
                      >
                        <legend className="css-1ftyaf0">
                          <span>New Password</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                  <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                    <label
                      className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-1dwrxu1"
                      data-shrink="false"
                      for="account-settings-confirm-new-password"
                    >
                      Confirm New Password
                    </label>
                    <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-adornedEnd css-mm5uz0">
                      <input
                        aria-invalid="false"
                        id="account-settings-confirm-new-password"
                        type="password"
                        className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-3g8nu5"
                        value=""
                      />
                      <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-1pycjxc">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium css-sacmst"
                          tabindex="0"
                          type="button"
                          aria-label="toggle password visibility"
                        >
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="EyeOffOutlineIcon"
                          >
                            <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"></path>
                          </svg>
                          <span className="MuiTouchRipple-root css-w0pj6f"></span>
                        </button>
                      </div>
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-igs3ac"
                      >
                        <legend className="css-1ftyaf0">
                          <span>Confirm New Password</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 css-1vd9stk">
              <img
                width="183"
                alt="avatar"
                height="256"
                src={securityImage}
              />
            </div>
          </div>
        </div>
        <hr className="MuiDivider-root MuiDivider-fullWidth css-xfjw6h" />
        <div className="MuiCardContent-root css-12evlce">
          <div className="MuiBox-root css-1g5hig2">
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-csksq4"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="KeyOutlineIcon"
            >
              <path d="M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z"></path>
            </svg>
            <h6 className="MuiTypography-root MuiTypography-h6 css-14t9e1w">
              Two-factor authentication
            </h6>
          </div>
          <div className="MuiBox-root css-1k4pk2i">
            <div className="MuiBox-root css-h9w74p">
              <div className="MuiAvatar-root MuiAvatar-rounded MuiAvatar-colorDefault css-188ucau">
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rk9byu"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="LockOpenOutlineIcon"
                >
                  <path d="M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,1 10,15A2,2 0 0,1 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17Z"></path>
                </svg>
              </div>
              <p className="MuiTypography-root MuiTypography-body1 css-d9ryz6">
                Two factor authentication is not enabled yet.
              </p>
              <p className="MuiTypography-root MuiTypography-body2 css-4yvesp">
                Two-factor authentication adds an additional layer of security
                to your account by requiring more than just a password to log
                in. Learn more.
              </p>
            </div>
          </div>
          <div className="MuiBox-root css-1dvbd90">
            <button
              className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-169qed3"
              tabindex="0"
              type="button"
            >
              Save Changes
              <span className="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
            <button
              className="MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root css-4rkskk"
              tabindex="0"
              type="reset"
            >
              Reset<span className="MuiTouchRipple-root css-w0pj6f"></span>
            </button>
          </div>
        </div>
      </form>
   
    </>
  );
};

export default Security;
