import React from "react";
import profile from "../img/profile.png";

const Header = () => {
  return (
    <>
      {" "}
      <header
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1000", // Ensure the header stays on top of other content
          backgroundColor: "#f8f9fa", // Example background color
          // padding: "10px",
        }}
        className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorDefault MuiAppBar-positionStatic layout-navbar css-1omfavb"
      >
        <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular navbar-content-container css-6h6gtn">
          <div className="MuiBox-root css-12d2mry">
            <div className="actions-left MuiBox-root css-10kuq41">
              <div className="MuiFormControl-root MuiTextField-root css-7wnaot">
                <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedStart css-1jqhuxz">
                  <div className="MuiInputAdornment-root MuiInputAdornment-positionStart MuiInputAdornment-outlined MuiInputAdornment-sizeSmall css-1a77nnv">
                    {/* <span className="notranslate">​</span> */}
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="MagnifyIcon"
                    >
                      <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    aria-invalid="false"
                    className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart css-1i2rfnm"
                  />
                  <fieldset
                    aria-hidden="true"
                    className="MuiOutlinedInput-notchedOutline css-igs3ac"
                  >
                    <legend className="css-hdw1oc">
                      <span className="notranslate">​</span>
                    </legend>
                  </fieldset>
                </div>
              </div>
            </div>
            <div className="actions-right MuiBox-root css-70qvj9">
              <a
                className="MuiBox-root css-rewnd3"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free"
              >
                <img
                  height="24"
                  alt="github stars"
                  src="https://img.shields.io/github/stars/themeselection/materio-mui-react-nextjs-admin-template-free?style=social"
                />
              </a>
              <button
                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeMedium css-s8crcf"
                tabindex="0"
                type="button"
                aria-haspopup="true"
              >
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="WeatherNightIcon"
                >
                  <path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"></path>
                </svg>
              </button>
              <button
                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeMedium css-s8crcf"
                tabindex="0"
                type="button"
                aria-haspopup="true"
                aria-controls="customized-menu"
              >
                <svg
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="BellOutlineIcon"
                >
                  <path d="M10 21H14C14 22.1 13.1 23 12 23S10 22.1 10 21M21 19V20H3V19L5 17V11C5 7.9 7 5.2 10 4.3V4C10 2.9 10.9 2 12 2S14 2.9 14 4V4.3C17 5.2 19 7.9 19 11V17L21 19M17 11C17 8.2 14.8 6 12 6S7 8.2 7 11V18H17V11Z"></path>
                </svg>
              </button>
              <span className="MuiBadge-root css-1w651zy">
                <div className="MuiAvatar-root MuiAvatar-circular css-11rb4o0">
                  <img
                    alt="John Doe"
                    src={profile}
                    className="MuiAvatar-img css-1hy9t21"
                  />
                </div>
                <span className="MuiBadge-anchorOriginBottomRightCircular MuiBadge-overlapCircular MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginBottomRight css-1vc7qij">
                  <span className="css-q9emij"></span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
