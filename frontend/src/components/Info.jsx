import React from "react";

const Info = () => {
  return (
    <>
      <form>
        <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-7 css-22i6lu">
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-28gf93">
            <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
              <label
                className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-shrink MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary MuiFormLabel-filled css-1pf4lez"
                data-shrink="true"
                for="mui-51"
                id="mui-51-label"
              >
                Bio
              </label>
              <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-multiline css-4928lu">
                <textarea
                  aria-invalid="false"
                  placeholder="Bio"
                  className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputMultiline css-v7lagy"
                  id="mui-51"
                  style={{ height: "230px", overflow: "hidden" }}
                >
                  The name’s John Deo. I am a tireless seeker of knowledge,
                  occasional purveyor of wisdom and also, coincidentally, a
                  graphic designer. Algolia helps businesses across industries
                  quickly create relevant 😎, scalable 😀, and lightning 😍 fast
                  search and discovery experiences.
                </textarea>
                <textarea
                  aria-hidden="true"
                  className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputMultiline css-v7lagy"
                  readonly=""
                  tabindex="-1"
                  style={{
                    visibility: "hidden",
                    position: "absolute",
                    overflow: "hidden",
                    height: "0px",
                    top: "0px",
                    left: "0px",
                    transform: "translateZ(0px)",
                    padding: "0px",
                    width: "260px",
                  }}
                ></textarea>
                <fieldset
                  aria-hidden="true"
                  className="MuiOutlinedInput-notchedOutline css-igs3ac"
                >
                  <legend className="css-1in441m">
                    <span>Bio</span>
                  </legend>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 css-rpybyc">
            <div className="MuiBox-root css-tq873f">
              <div className="react-datepicker-wrapper">
                <div className="react-datepicker__input-container">
                  <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
                    <label
                      className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-1dwrxu1"
                      data-shrink="false"
                      for="account-settings-date"
                      id="account-settings-date-label"
                    >
                      Birth Date
                    </label>
                    <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1wt7s0s">
                      <input
                        aria-invalid="false"
                        id="account-settings-date"
                        placeholder="MM-DD-YYYY"
                        type="text"
                        className="MuiOutlinedInput-input MuiInputBase-input css-dxkv36"
                        value=""
                      />
                      <fieldset
                        aria-hidden="true"
                        className="MuiOutlinedInput-notchedOutline css-igs3ac"
                      >
                        <legend className="css-1ftyaf0">
                          <span>Birth Date</span>
                        </legend>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 css-rpybyc">
            <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6">
              <label
                className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-1dwrxu1"
                data-shrink="false"
                for="mui-52"
                id="mui-52-label"
              >
                Phone
              </label>
              <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1wt7s0s">
                <input
                  aria-invalid="false"
                  placeholder="(123) 456-7890"
                  type="number"
                  className="MuiOutlinedInput-input MuiInputBase-input css-dxkv36"
                  value=""
                  id="mui-52"
                />
                <fieldset
                  aria-hidden="true"
                  className="MuiOutlinedInput-notchedOutline css-igs3ac"
                >
                  <legend className="css-1ftyaf0">
                    <span>Phone</span>
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
                for="mui-53"
                id="mui-53-label"
              >
                Website
              </label>
              <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1wt7s0s">
                <input
                  aria-invalid="false"
                  placeholder="https://example.com/"
                  type="text"
                  className="MuiOutlinedInput-input MuiInputBase-input css-dxkv36"
                  value="https://themeselection.com/"
                  id="mui-53"
                />
                <fieldset
                  aria-hidden="true"
                  className="MuiOutlinedInput-notchedOutline css-igs3ac"
                >
                  <legend className="css-1in441m">
                    <span>Website</span>
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
                Country
              </label>
              <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-iwgbsh">
                <div
                  tabindex="0"
                  role="button"
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  className="MuiSelect-select MuiSelect-outlined MuiOutlinedInput-input MuiInputBase-input css-tb61gt"
                >
                  USA
                </div>
                <input
                  aria-hidden="true"
                  tabindex="-1"
                  className="MuiSelect-nativeInput css-1k3x8v3"
                  value="USA"
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
                    <span>Country</span>
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
                id="form-layouts-separator-multiple-select-label"
              >
                Languages
              </label>
              <div
                variant="outlined"
                className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl css-1tszs2d"
              >
                <div
                  tabindex="0"
                  role="button"
                  aria-expanded="false"
                  aria-haspopup="listbox"
                  aria-labelledby="account-settings-multiple-select-label account-settings-multiple-select"
                  id="account-settings-multiple-select"
                  className="MuiSelect-select MuiSelect-outlined MuiSelect-multiple MuiOutlinedInput-input MuiInputBase-input css-tb61gt"
                >
                  English
                </div>
                <input
                  aria-hidden="true"
                  tabindex="-1"
                  className="MuiSelect-nativeInput css-1k3x8v3"
                  id="select-multiple-language"
                  value="English"
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
                    <span>Languages</span>
                  </legend>
                </fieldset>
              </div>
            </div>
          </div>
          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 css-rpybyc">
            <div className="MuiFormControl-root css-13sljp9">
              <label className="MuiFormLabel-root MuiFormLabel-colorPrimary css-tvt4fc">
                Gender
              </label>
              <div
                className="MuiFormGroup-root MuiFormGroup-row css-p58oka"
                role="radiogroup"
                aria-label="gender"
              >
                <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-yew81u">
                  <span className="MuiRadio-root MuiRadio-colorPrimary MuiButtonBase-root MuiRadio-root MuiRadio-colorPrimary PrivateSwitchBase-root Mui-checked css-ze1y3j">
                    <input
                      className="PrivateSwitchBase-input css-1m9pwf3"
                      name="account-settings-info-radio"
                      type="radio"
                      value="male"
                      checked=""
                    />
                    <span className="css-hyxlzm">
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q8lw68"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="RadioButtonUncheckedIcon"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                      </svg>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1u5ei5s"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="RadioButtonCheckedIcon"
                      >
                        <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
                      </svg>
                    </span>
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </span>
                  <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-11l6ixd">
                    Male
                  </span>
                </label>
                <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-yew81u">
                  <span className="MuiRadio-root MuiRadio-colorPrimary MuiButtonBase-root MuiRadio-root MuiRadio-colorPrimary PrivateSwitchBase-root css-ze1y3j">
                    <input
                      className="PrivateSwitchBase-input css-1m9pwf3"
                      name="account-settings-info-radio"
                      type="radio"
                      value="female"
                    />
                    <span className="css-hyxlzm">
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q8lw68"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="RadioButtonUncheckedIcon"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                      </svg>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1c4tzn"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="RadioButtonCheckedIcon"
                      >
                        <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
                      </svg>
                    </span>
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </span>
                  <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-11l6ixd">
                    Female
                  </span>
                </label>
                <label className="MuiFormControlLabel-root MuiFormControlLabel-labelPlacementEnd css-yew81u">
                  <span className="MuiRadio-root MuiRadio-colorPrimary MuiButtonBase-root MuiRadio-root MuiRadio-colorPrimary PrivateSwitchBase-root css-ze1y3j">
                    <input
                      className="PrivateSwitchBase-input css-1m9pwf3"
                      name="account-settings-info-radio"
                      type="radio"
                      value="other"
                    />
                    <span className="css-hyxlzm">
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-q8lw68"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="RadioButtonUncheckedIcon"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                      </svg>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1c4tzn"
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="RadioButtonCheckedIcon"
                      >
                        <path d="M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"></path>
                      </svg>
                    </span>
                    <span className="MuiTouchRipple-root css-w0pj6f"></span>
                  </span>
                  <span className="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-11l6ixd">
                    Other
                  </span>
                </label>
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

export default Info;
