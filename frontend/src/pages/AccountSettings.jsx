import react from "react";
import "../styles/account-set.css"
import Security from "../components/Security";

const AccountSettings = () => {
  return (
    <>
      <div>
        {" "}
        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1k3q5ab">
          <div className="MuiTabs-root css-z37wqw">
            <div
              className="MuiTabs-scroller MuiTabs-fixed css-18jpbi7"
              style={{overflow: "hidden", marginBottom: "0"}}
            >
              <div
                aria-label="account-settings tabs"
                className="MuiTabs-flexContainer css-7sga7m"
                role="tablist"
              >
                <button
                  className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-8hd5e8"
                  tabindex="0"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <div className="MuiBox-root css-70qvj9">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="AccountOutlineIcon"
                    >
                      <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"></path>
                    </svg>
                    <span className="css-1ci0qiy">Account</span>
                  </div>
                  <span className="MuiTabs-indicator css-1nss4zi"></span>
                </button>
                <button
                  className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-8hd5e8"
                  tabindex="-1"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <div className="MuiBox-root css-70qvj9">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="LockOpenOutlineIcon"
                    >
                      <path d="M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10A2,2 0 0,1 6,8H15V6A3,3 0 0,0 12,3A3,3 0 0,0 9,6H7A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,17A2,2 0 0,1 10,15A2,2 0 0,1 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17Z"></path>
                    </svg>
                    <span className="css-1ci0qiy">Security</span>
                  </div>
                </button>
                <button
                  className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary css-8hd5e8"
                  tabindex="-1"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <div className="MuiBox-root css-70qvj9">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="InformationOutlineIcon"
                    >
                      <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                    </svg>
                    <span className="css-1ci0qiy">Info</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="MuiTabPanel-root css-mp8pt5" role="tabpanel">
            <div className="MuiCardContent-root css-12evlce">
              <form>
                <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-7 css-22i6lu">
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-l30agd">
                    <div className="MuiBox-root css-70qvj9">
                      <img
                        src="/materio-mui-react-nextjs-admin-template-free/images/avatars/1.png"
                        alt="Profile Pic"
                        className="css-z1mqjj"
                      />
                      <div className="MuiBox-root css-0">
                        <label
                          className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1ozbalo"
                          tabindex="0"
                          role="button"
                          for="account-settings-upload-image"
                        >
                          Upload New Photo
                          <input
                            type="file"
                            hidden=""
                            accept="image/png, image/jpeg"
                            id="account-settings-upload-image"
                          />
                        </label>
                        <button
                          className="MuiButton-root MuiButton-outlined MuiButton-outlinedError MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root css-iv5twh"
                          tabindex="0"
                          type="button"
                        >
                          Reset
                        </button>
                        <p className="MuiTypography-root MuiTypography-body2 css-znivk6">
                          Allowed PNG or JPEG. Max size of 800K.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 css-rpybyc">
                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                      <label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled css-1pf4lez"
                        data-shrink="true"
                      >
                        Username
                      </label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1wt7s0s">
                        <input
                          type="text"
                          aria-invalid="false"
                          placeholder="johnDoe"
                          value="johnDoe"
                          className="MuiOutlinedInput-input MuiInputBase-input css-dxkv36"
                        />
                        <fieldset
                          aria-hidden="true"
                          className="MuiOutlinedInput-notchedOutline css-igs3ac"
                        >
                          <legend className="css-1in441m">
                            <span>Username</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 css-rpybyc">
                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                      <label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled css-1pf4lez"
                        data-shrink="true"
                      >
                        Name
                      </label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1wt7s0s">
                        <input
                          type="text"
                          aria-invalid="false"
                          placeholder="John Doe"
                          value="John Doe"
                          className="MuiOutlinedInput-input MuiInputBase-input css-dxkv36"
                        />
                        <fieldset
                          aria-hidden="true"
                          className="MuiOutlinedInput-notchedOutline css-igs3ac"
                        >
                          <legend className="css-1in441m">
                            <span>Name</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 css-rpybyc">
                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                      <label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled css-1pf4lez"
                        data-shrink="true"
                      >
                        Email
                      </label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1wt7s0s">
                        <input
                          type="email"
                          aria-invalid="false"
                          placeholder="johnDoe@example.com"
                          value="johnDoe@example.com"
                          className="MuiOutlinedInput-input MuiInputBase-input css-dxkv36"
                        />
                        <fieldset
                          aria-hidden="true"
                          className="MuiOutlinedInput-notchedOutline css-igs3ac"
                        >
                          <legend className="css-1in441m">
                            <span>Email</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 css-rpybyc">
                    <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                      <label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled css-1pf4lez"
                        data-shrink="true"
                      >
                        Role
                      </label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-iwgbsh">
                        <div
                          tabindex="0"
                          role="button"
                          aria-expanded="false"
                          aria-haspopup="listbox"
                          className="MuiSelect-select MuiSelect-outlined MuiOutlinedInput-input MuiInputBase-input css-tb61gt"
                        >
                          Admin
                        </div>
                        <input
                          value="admin"
                          aria-hidden="true"
                          tabindex="-1"
                          className="MuiSelect-nativeInput css-1k3x8v3"
                        />
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1431gqs"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="ArrowDropDownIcon"
                        >
                          <path d="M7 10l5 5 5-5z"></path>
                        </svg>
                        <fieldset
                          aria-hidden="true"
                          className="MuiOutlinedInput-notchedOutline css-igs3ac"
                        >
                          <legend className="css-1in441m">
                            <span>Role</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 css-rpybyc">
                    <div className="MuiFormControl-root MuiFormControl-fullWidth css-tzsjye">
                      <label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled css-1pf4lez"
                        data-shrink="true"
                      >
                        Status
                      </label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-iwgbsh">
                        <div
                          tabindex="0"
                          role="button"
                          aria-expanded="false"
                          aria-haspopup="listbox"
                          className="MuiSelect-select MuiSelect-outlined MuiOutlinedInput-input MuiInputBase-input css-tb61gt"
                        >
                          Active
                        </div>
                        <input
                          value="active"
                          aria-hidden="true"
                          tabindex="-1"
                          className="MuiSelect-nativeInput css-1k3x8v3"
                        />
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconOutlined css-1431gqs"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="ArrowDropDownIcon"
                        >
                          <path d="M7 10l5 5 5-5z"></path>
                        </svg>
                        <fieldset
                          aria-hidden="true"
                          className="MuiOutlinedInput-notchedOutline css-igs3ac"
                        >
                          <legend className="css-1in441m">
                            <span>Status</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 css-rpybyc">
                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                      <label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled css-1pf4lez"
                        data-shrink="true"
                      >
                        Company
                      </label>
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1wt7s0s">
                        <input
                          type="text"
                          aria-invalid="false"
                          placeholder="ABC Pvt. Ltd."
                          value="ABC Pvt. Ltd."
                          className="MuiOutlinedInput-input MuiInputBase-input css-dxkv36"
                        />
                        <fieldset
                          aria-hidden="true"
                          className="MuiOutlinedInput-notchedOutline css-igs3ac"
                        >
                          <legend className="css-1in441m">
                            <span>Company</span>
                          </legend>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-bphyub">
                    <div
                      className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiAlert-root MuiAlert-standardWarning MuiAlert-standard css-3sprr1"
                      role="alert"
                    >
                      <div className="MuiAlert-icon css-1l54tgj">
                        <svg
                          className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
                          focusable="false"
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          data-testid="ReportProblemOutlinedIcon"
                        >
                          <path d="M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"></path>
                        </svg>
                      </div>
                      <div className="MuiAlert-message css-1w0ym84">
                        <div className="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom MuiAlertTitle-root css-hnj9er">
                          Your email is not confirmed. Please check your inbox.
                        </div>
                        <a
                          className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1mer54f"
                          href="/"
                        >
                          Resend Confirmation
                        </a>
                      </div>
                      <div className="MuiAlert-action css-1mzcepu">
                        <button
                          className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall css-1gn9ntw"
                          tabindex="0"
                          type="button"
                          aria-label="close"
                        >
                          <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4"
                            focusable="false"
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            data-testid="CloseIcon"
                          >
                            <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                    <button
                      className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-169qed3"
                      tabindex="0"
                      type="button"
                    >
                      Save Changes
                    </button>
                    <button
                      className="MuiButton-root MuiButton-outlined MuiButton-outlinedSecondary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root css-4rkskk"
                      tabindex="0"
                      type="reset"
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className="MuiTabPanel-root css-mp8pt5"
            hidden=""
            role="tabpanel"
          ></div>
          <div
            className="MuiTabPanel-root css-mp8pt5"
            hidden=""
            role="tabpanel"
          ></div>
        </div>
      </div>
    </>
  );
};

export default AccountSettings;
