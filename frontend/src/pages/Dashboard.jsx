import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/board.css";
import trophy from "../img/trophy.png";
import triangle from "../img/triangle-light.png";
import profile from "../img/profile.png";

const Dashboard = () => {
  return (
    <>
      <div id="__next">
        <div className="layout-wrapper css-uinsfl">
            {/* ============== SIDEBAR STRAT================== */}
          <div className="MuiDrawer-root MuiDrawer-docked layout-vertical-nav css-agsicw">
            <div
              className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-14dfcda"
              style={{ pointerEvents: "none" }}
            >
              <div className="nav-header MuiBox-root css-1ae0pmy">
                <a
                  href="/materio-mui-react-nextjs-admin-template-free/"
                  className="css-5k1n1y"
                >
                  Logo
                  <h6 className="MuiTypography-root MuiTypography-h6 css-trc3hh">
                    Materio
                  </h6>
                </a>
              </div>
              <div className="MuiBox-root css-ku0lyd"></div>
              <div className="MuiBox-root css-esnmos">
                <div>
                  <div className="MuiBox-root css-zf9gw9">
                    <ul className="MuiList-root MuiList-padding nav-items css-102l5x0">
                      <li className="MuiListItem-root MuiListItem-gutters nav-link css-12ph425">
                        <a
                          className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root active css-76jj4r"
                          tabindex="0"
                          href="/materio-mui-react-nextjs-admin-template-free/"
                        >
                          <div className="MuiListItemIcon-root css-f4apo4">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="HomeOutlineIcon"
                            >
                              <path d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"></path>
                            </svg>
                          </div>
                          <div className="MuiBox-root css-v86rxk">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1vq8avp">
                              Dashboard
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters nav-link css-12ph425">
                        <a
                          className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-76jj4r"
                          tabindex="0"
                          href="/materio-mui-react-nextjs-admin-template-free/account-settings/"
                        >
                          <div className="MuiListItemIcon-root css-f4apo4">
                            <svg
                              class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="AccountCogOutlineIcon"
                            >
                              <path d="M10 4A4 4 0 0 0 6 8A4 4 0 0 0 10 12A4 4 0 0 0 14 8A4 4 0 0 0 10 4M10 6A2 2 0 0 1 12 8A2 2 0 0 1 10 10A2 2 0 0 1 8 8A2 2 0 0 1 10 6M17 12C16.84 12 16.76 12.08 16.76 12.24L16.5 13.5C16.28 13.68 15.96 13.84 15.72 14L14.44 13.5C14.36 13.5 14.2 13.5 14.12 13.6L13.16 15.36C13.08 15.44 13.08 15.6 13.24 15.68L14.28 16.5V17.5L13.24 18.32C13.16 18.4 13.08 18.56 13.16 18.64L14.12 20.4C14.2 20.5 14.36 20.5 14.44 20.5L15.72 20C15.96 20.16 16.28 20.32 16.5 20.5L16.76 21.76C16.76 21.92 16.84 22 17 22H19C19.08 22 19.24 21.92 19.24 21.76L19.4 20.5C19.72 20.32 20.04 20.16 20.28 20L21.5 20.5C21.64 20.5 21.8 20.5 21.8 20.4L22.84 18.64C22.92 18.56 22.84 18.4 22.76 18.32L21.72 17.5V16.5L22.76 15.68C22.84 15.6 22.92 15.44 22.84 15.36L21.8 13.6C21.8 13.5 21.64 13.5 21.5 13.5L20.28 14C20.04 13.84 19.72 13.68 19.4 13.5L19.24 12.24C19.24 12.08 19.08 12 19 12H17M10 13C7.33 13 2 14.33 2 17V20H11.67C11.39 19.41 11.19 18.77 11.09 18.1H3.9V17C3.9 16.36 7.03 14.9 10 14.9C10.43 14.9 10.87 14.94 11.3 15C11.5 14.36 11.77 13.76 12.12 13.21C11.34 13.08 10.6 13 10 13M18.04 15.5C18.84 15.5 19.5 16.16 19.5 17.04C19.5 17.84 18.84 18.5 18.04 18.5C17.16 18.5 16.5 17.84 16.5 17.04C16.5 16.16 17.16 15.5 18.04 15.5Z"></path>
                            </svg>
                          </div>
                          <div className="MuiBox-root css-v86rxk">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1vq8avp">
                              Account Settings
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="MuiListSubheader-root MuiListSubheader-gutters MuiListSubheader-sticky nav-section-title css-1jj11xz">
                        <div
                          className="MuiDivider-root MuiDivider-fullWidth MuiDivider-withChildren MuiDivider-textAlignLeft css-rykvey"
                          role="separator"
                        >
                          <span className="MuiDivider-wrapper css-1mjhz9d">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1e88jm1">
                              Pages
                            </p>
                          </span>
                        </div>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters nav-link css-12ph425">
                        <a
                          className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-76jj4r"
                          tabindex="0"
                          target="_blank"
                          href="/materio-mui-react-nextjs-admin-template-free/pages/login/"
                        >
                          <div className="MuiListItemIcon-root css-f4apo4">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="LoginIcon"
                            >
                              <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"></path>
                            </svg>
                          </div>
                          <div className="MuiBox-root css-v86rxk">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1vq8avp">
                              Login
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters nav-link css-12ph425">
                        <a
                          className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-76jj4r"
                          tabindex="0"
                          target="_blank"
                          href="/materio-mui-react-nextjs-admin-template-free/pages/register/"
                        >
                          <div className="MuiListItemIcon-root css-f4apo4">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="AccountPlusOutlineIcon"
                            >
                              <path d="M15,4A4,4 0 0,0 11,8A4,4 0 0,0 15,12A4,4 0 0,0 19,8A4,4 0 0,0 15,4M15,5.9C16.16,5.9 17.1,6.84 17.1,8C17.1,9.16 16.16,10.1 15,10.1A2.1,2.1 0 0,1 12.9,8A2.1,2.1 0 0,1 15,5.9M4,7V10H1V12H4V15H6V12H9V10H6V7H4M15,13C12.33,13 7,14.33 7,17V20H23V17C23,14.33 17.67,13 15,13M15,14.9C17.97,14.9 21.1,16.36 21.1,17V18.1H8.9V17C8.9,16.36 12,14.9 15,14.9Z"></path>
                            </svg>
                          </div>
                          <div className="MuiBox-root css-v86rxk">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1vq8avp">
                              Register
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters nav-link css-12ph425">
                        <a
                          className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-76jj4r"
                          tabindex="0"
                          target="_blank"
                          href="/materio-mui-react-nextjs-admin-template-free/pages/error/"
                        >
                          <div className="MuiListItemIcon-root css-f4apo4">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="AlertCircleOutlineIcon"
                            >
                              <path d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"></path>
                            </svg>
                          </div>
                          <div className="MuiBox-root css-v86rxk">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1vq8avp">
                              Error
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="MuiListSubheader-root MuiListSubheader-gutters MuiListSubheader-sticky nav-section-title css-1jj11xz">
                        <div
                          className="MuiDivider-root MuiDivider-fullWidth MuiDivider-withChildren MuiDivider-textAlignLeft css-rykvey"
                          role="separator"
                        >
                          <span className="MuiDivider-wrapper css-1mjhz9d">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1e88jm1">
                              User Interface
                            </p>
                          </span>
                        </div>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters nav-link css-12ph425">
                        <a
                          className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-76jj4r"
                          tabindex="0"
                          href="/materio-mui-react-nextjs-admin-template-free/typography/"
                        >
                          <div className="MuiListItemIcon-root css-f4apo4">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="FormatLetterCaseIcon"
                            >
                              <path d="M20.06,18C20,17.83 19.91,17.54 19.86,17.11C19.19,17.81 18.38,18.16 17.45,18.16C16.62,18.16 15.93,17.92 15.4,17.45C14.87,17 14.6,16.39 14.6,15.66C14.6,14.78 14.93,14.1 15.6,13.61C16.27,13.12 17.21,12.88 18.43,12.88H19.83V12.24C19.83,11.75 19.68,11.36 19.38,11.07C19.08,10.78 18.63,10.64 18.05,10.64C17.53,10.64 17.1,10.76 16.75,11C16.4,11.25 16.23,11.54 16.23,11.89H14.77C14.77,11.46 14.92,11.05 15.22,10.65C15.5,10.25 15.93,9.94 16.44,9.71C16.95,9.5 17.5,9.36 18.13,9.36C19.11,9.36 19.87,9.6 20.42,10.09C20.97,10.58 21.26,11.25 21.28,12.11V16C21.28,16.8 21.38,17.42 21.58,17.88V18H20.06M17.66,16.88C18.11,16.88 18.54,16.77 18.95,16.56C19.35,16.35 19.65,16.07 19.83,15.73V14.16H18.7C16.93,14.16 16.04,14.63 16.04,15.57C16.04,16 16.19,16.3 16.5,16.53C16.8,16.76 17.18,16.88 17.66,16.88M5.46,13.71H9.53L7.5,8.29L5.46,13.71M6.64,6H8.36L13.07,18H11.14L10.17,15.43H4.82L3.86,18H1.93L6.64,6Z"></path>
                            </svg>
                          </div>
                          <div className="MuiBox-root css-v86rxk">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1vq8avp">
                              Typography
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters nav-link css-12ph425">
                        <a
                          className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-76jj4r"
                          tabindex="0"
                          href="/materio-mui-react-nextjs-admin-template-free/icons/"
                        >
                          <div className="MuiListItemIcon-root css-f4apo4">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="GoogleCirclesExtendedIcon"
                            >
                              <path d="M18,19C16.89,19 16,18.1 16,17C16,15.89 16.89,15 18,15A2,2 0 0,1 20,17A2,2 0 0,1 18,19M18,13A4,4 0 0,0 14,17A4,4 0 0,0 18,21A4,4 0 0,0 22,17A4,4 0 0,0 18,13M12,11.1A1.9,1.9 0 0,0 10.1,13A1.9,1.9 0 0,0 12,14.9A1.9,1.9 0 0,0 13.9,13A1.9,1.9 0 0,0 12,11.1M6,19C4.89,19 4,18.1 4,17C4,15.89 4.89,15 6,15A2,2 0 0,1 8,17A2,2 0 0,1 6,19M6,13A4,4 0 0,0 2,17A4,4 0 0,0 6,21A4,4 0 0,0 10,17A4,4 0 0,0 6,13M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8C10.89,8 10,7.1 10,6C10,4.89 10.89,4 12,4M12,10A4,4 0 0,0 16,6A4,4 0 0,0 12,2A4,4 0 0,0 8,6A4,4 0 0,0 12,10Z"></path>
                            </svg>
                          </div>
                          <div className="MuiBox-root css-v86rxk">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1vq8avp">
                              Icons
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters nav-link css-12ph425">
                        <a
                          className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-76jj4r"
                          tabindex="0"
                          href="/materio-mui-react-nextjs-admin-template-free/cards/"
                        >
                          <div className="MuiListItemIcon-root css-f4apo4">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="CreditCardOutlineIcon"
                            >
                              <path d="M20,8H4V6H20M20,18H4V12H20M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path>
                            </svg>
                          </div>
                          <div className="MuiBox-root css-v86rxk">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1vq8avp">
                              Cards
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters nav-link css-12ph425">
                        <a
                          className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-76jj4r"
                          tabindex="0"
                          href="/materio-mui-react-nextjs-admin-template-free/tables/"
                        >
                          <div className="MuiListItemIcon-root css-f4apo4">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="TableIcon"
                            >
                              <path d="M5,4H19A2,2 0 0,1 21,6V18A2,2 0 0,1 19,20H5A2,2 0 0,1 3,18V6A2,2 0 0,1 5,4M5,8V12H11V8H5M13,8V12H19V8H13M5,14V18H11V14H5M13,14V18H19V14H13Z"></path>
                            </svg>
                          </div>
                          <div className="MuiBox-root css-v86rxk">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1vq8avp">
                              Tables
                            </p>
                          </div>
                        </a>
                      </li>
                      <li className="MuiListItem-root MuiListItem-gutters nav-link css-12ph425">
                        <a
                          className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-76jj4r"
                          tabindex="0"
                          href="/materio-mui-react-nextjs-admin-template-free/form-layouts/"
                        >
                          <div className="MuiListItemIcon-root css-f4apo4">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="CubeOutlineIcon"
                            >
                              <path d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V9.21L13,12.58V19.29L19,15.91Z"></path>
                            </svg>
                          </div>
                          <div className="MuiBox-root css-v86rxk">
                            <p className="MuiTypography-root MuiTypography-body1 MuiTypography-noWrap css-1vq8avp">
                              Form Layouts
                            </p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="MuiBox-root css-a9n7s9">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://themeselection.com/products/materio-mui-react-nextjs-admin-template/"
                >
                  <img
                    width="230"
                    alt="upgrade to premium"
                    src="/materio-mui-react-nextjs-admin-template-free/images/misc/upgrade-banner-light.png"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* ========= SIDEBAR END ============== */}
          <div className="layout-content-wrapper MuiBox-root css-34b9xr">
            <header className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorDefault MuiAppBar-positionStatic layout-navbar css-1omfavb">
              <div className="MuiToolbar-root MuiToolbar-gutters MuiToolbar-regular navbar-content-container css-6h6gtn">
                <div className="MuiBox-root css-12d2mry">
                  <div className="actions-left MuiBox-root css-10kuq41">
                    <div className="MuiFormControl-root MuiTextField-root css-7wnaot">
                      <div className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-formControl MuiInputBase-sizeSmall MuiInputBase-adornedStart css-1jqhuxz">
                        <div className="MuiInputAdornment-root MuiInputAdornment-positionStart MuiInputAdornment-outlined MuiInputAdornment-sizeSmall css-1a77nnv">
                          <span className="notranslate">​</span>
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
            <main className="layout-page-content css-zyg32b">
              <div className="css-zo3z3e">
                <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6 css-h2qpui">
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-19egsyp">
                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-19gxiau">
                      <div className="MuiCardContent-root css-12evlce">
                        <h6 className="MuiTypography-root MuiTypography-h6 css-14t9e1w">
                          Congratulations John! 🥳
                        </h6>
                        <p className="MuiTypography-root MuiTypography-body2 css-gbbljn">
                          Best seller of the month
                        </p>
                        <h5 className="MuiTypography-root MuiTypography-h5 css-t9prvq">
                          $42.8k
                        </h5>
                        <button
                          className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButtonBase-root css-6mtojy"
                          tabindex="0"
                          type="button"
                        >
                          View Sales
                        </button>
                        <img
                          alt="triangle background"
                          src={triangle}
                          className="css-1vzedo3"
                        />
                        <img
                          alt="trophy"
                          src={trophy}
                          className="css-1vkc77z"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-8 css-efwuvd">
                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1k3q5ab">
                      <div className="MuiCardHeader-root css-891gu0">
                        <div className="MuiCardHeader-content css-11qjisw">
                          <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-bvhvzn">
                            Statistics Card
                          </span>
                          <p className="MuiTypography-root MuiTypography-body2 css-4yvesp">
                            <span className="MuiBox-root css-1t7bsaz">
                              Total 48.5% growth
                            </span>
                            😎 this month
                          </p>
                        </div>
                        <div className="MuiCardHeader-action css-pka4ak">
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall card-more-options css-3ycic7"
                            tabindex="0"
                            type="button"
                            aria-label="settings"
                          >
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="DotsVerticalIcon"
                            >
                              <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="MuiCardContent-root css-1x99bdk">
                        <div className="MuiGrid-root MuiGrid-container css-18xujn2">
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3 css-f9p5hp">
                            <div className="MuiBox-root css-70qvj9">
                              <div className="MuiAvatar-root MuiAvatar-rounded MuiAvatar-colorDefault css-19b22uo">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rk9byu"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="TrendingUpIcon"
                                >
                                  <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"></path>
                                </svg>
                              </div>
                              <div className="MuiBox-root css-j7qwjs">
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Sales
                                </span>
                                <h6 className="MuiTypography-root MuiTypography-h6 css-14t9e1w">
                                  245k
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3 css-f9p5hp">
                            <div className="MuiBox-root css-70qvj9">
                              <div className="MuiAvatar-root MuiAvatar-rounded MuiAvatar-colorDefault css-6jvswj">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rk9byu"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="AccountOutlineIcon"
                                >
                                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"></path>
                                </svg>
                              </div>
                              <div className="MuiBox-root css-j7qwjs">
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Customers
                                </span>
                                <h6 className="MuiTypography-root MuiTypography-h6 css-14t9e1w">
                                  12.5k
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3 css-f9p5hp">
                            <div className="MuiBox-root css-70qvj9">
                              <div className="MuiAvatar-root MuiAvatar-rounded MuiAvatar-colorDefault css-1t2yp54">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rk9byu"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="CellphoneLinkIcon"
                                >
                                  <path d="M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z"></path>
                                </svg>
                              </div>
                              <div className="MuiBox-root css-j7qwjs">
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Products
                                </span>
                                <h6 className="MuiTypography-root MuiTypography-h6 css-14t9e1w">
                                  1.54k
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-3 css-f9p5hp">
                            <div className="MuiBox-root css-70qvj9">
                              <div className="MuiAvatar-root MuiAvatar-rounded MuiAvatar-colorDefault css-xzgb8m">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rk9byu"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="CurrencyUsdIcon"
                                >
                                  <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"></path>
                                </svg>
                              </div>
                              <div className="MuiBox-root css-j7qwjs">
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Revenue
                                </span>
                                <h6 className="MuiTypography-root MuiTypography-h6 css-14t9e1w">
                                  $88k
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 css-170ukis">
                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1k3q5ab">
                      <div className="MuiCardHeader-root css-891gu0">
                        <div className="MuiCardHeader-content css-11qjisw">
                          <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1209hp9">
                            Weekly Overview
                          </span>
                        </div>
                        <div className="MuiCardHeader-action css-pka4ak">
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall card-more-options css-3ycic7"
                            tabindex="0"
                            type="button"
                            aria-label="settings"
                          >
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="DotsVerticalIcon"
                            >
                              <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="MuiCardContent-root css-1bt8uxn">
                        <div className="MuiBox-root css-17ijxrj">
                          <h5 className="MuiTypography-root MuiTypography-h5 css-l1f2yp">
                            45%
                          </h5>
                          <p className="MuiTypography-root MuiTypography-body2 css-4yvesp">
                            Your sales performance is 45% 😎 better compared to
                            last month
                          </p>
                        </div>
                        <button
                          className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth MuiButtonBase-root css-in6sf"
                          tabindex="0"
                          type="button"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 css-170ukis">
                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1k3q5ab">
                      <div className="MuiCardHeader-root css-891gu0">
                        <div className="MuiCardHeader-content css-11qjisw">
                          <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1i87h0o">
                            Total Earning
                          </span>
                        </div>
                        <div className="MuiCardHeader-action css-pka4ak">
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall card-more-options css-3ycic7"
                            tabindex="0"
                            type="button"
                            aria-label="settings"
                          >
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="DotsVerticalIcon"
                            >
                              <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="MuiCardContent-root css-eeajc9">
                        <div className="MuiBox-root css-18608l8">
                          <h4 className="MuiTypography-root MuiTypography-h4 css-4shjzb">
                            $24,895
                          </h4>
                          <div className="MuiBox-root css-5r5t7z">
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1mopk95"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="MenuUpIcon"
                            >
                              <path d="M7,15L12,10L17,15H7Z"></path>
                            </svg>
                            <p className="MuiTypography-root MuiTypography-body2 css-op3lsh">
                              10%
                            </p>
                          </div>
                        </div>
                        <p className="MuiTypography-root MuiTypography-caption css-1rxdmk2">
                          Compared to $84,325 last year
                        </p>
                        <div className="MuiBox-root css-typ1b0">
                          <div className="MuiAvatar-root MuiAvatar-rounded MuiAvatar-colorDefault css-1wtyrfp">
                            <img
                              src="/materio-mui-react-nextjs-admin-template-free/images/cards/logo-zipcar.png"
                              alt="Zipcar"
                              height="20"
                            />
                          </div>
                          <div className="MuiBox-root css-s5qcc8">
                            <div className="MuiBox-root css-1rvrufc">
                              <p className="MuiTypography-root MuiTypography-body2 css-1die9i7">
                                Zipcar
                              </p>
                              <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                Vuejs, React &amp; HTML
                              </span>
                            </div>
                            <div className="MuiBox-root css-ow9wzb">
                              <p className="MuiTypography-root MuiTypography-body2 css-1a5x3n4">
                                $24,895.65
                              </p>
                              <span
                                className="MuiLinearProgress-root MuiLinearProgress-colorPrimary MuiLinearProgress-determinate css-1ruvqhr"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span
                                  className="MuiLinearProgress-bar MuiLinearProgress-barColorPrimary MuiLinearProgress-bar1Determinate css-skb75e"
                                  style={{ transform: "translateX(-25%)" }}
                                ></span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="MuiBox-root css-typ1b0">
                          <div className="MuiAvatar-root MuiAvatar-rounded MuiAvatar-colorDefault css-1wtyrfp">
                            <img
                              src="/materio-mui-react-nextjs-admin-template-free/images/cards/logo-bitbank.png"
                              alt="Bitbank"
                              height="27"
                            />
                          </div>
                          <div className="MuiBox-root css-s5qcc8">
                            <div className="MuiBox-root css-1rvrufc">
                              <p className="MuiTypography-root MuiTypography-body2 css-1die9i7">
                                Bitbank
                              </p>
                              <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                Sketch, Figma &amp; XD
                              </span>
                            </div>
                            <div className="MuiBox-root css-ow9wzb">
                              <p className="MuiTypography-root MuiTypography-body2 css-1a5x3n4">
                                $8,650.20
                              </p>
                              <span
                                className="MuiLinearProgress-root MuiLinearProgress-colorInfo MuiLinearProgress-determinate css-18p8qwp"
                                role="progressbar"
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span
                                  className="MuiLinearProgress-bar MuiLinearProgress-barColorInfo MuiLinearProgress-bar1Determinate css-7gmtci"
                                  style={{ transform: "translateX(-25%)" }}
                                ></span>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="MuiBox-root css-70qvj9">
                          <div className="MuiAvatar-root MuiAvatar-rounded MuiAvatar-colorDefault css-1wtyrfp">
                            <img
                              src="/materio-mui-react-nextjs-admin-template-free/images/cards/logo-aviato.png"
                              alt="Aviato"
                              height="20"
                            />
                          </div>
                          <div className="MuiBox-root css-s5qcc8">
                            <div className="MuiBox-root css-1rvrufc">
                              <p className="MuiTypography-root MuiTypography-body2 css-1die9i7">
                                Aviato
                              </p>
                              <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                HTML &amp; Angular
                              </span>
                            </div>
                            <div className="MuiBox-root css-ow9wzb">
                              <p className="MuiTypography-root MuiTypography-body2 css-1a5x3n4">
                                $1,245.80
                              </p>
                              <span
                                className="MuiLinearProgress-root MuiLinearProgress-colorSecondary MuiLinearProgress-determinate css-17ov7fz"
                                role="progressbar"
                                aria-valuenow="20"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                <span
                                  className="MuiLinearProgress-bar MuiLinearProgress-barColorSecondary MuiLinearProgress-bar1Determinate css-1ie5753"
                                  style={{ transform: "translateX(-80%)" }}
                                ></span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 css-170ukis">
                    <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6 css-h2qpui">
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r">
                        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1k3q5ab">
                          <div className="MuiCardContent-root css-12evlce">
                            <div className="MuiBox-root css-kazhwn">
                              <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-ufzrdr">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="PollIcon"
                                >
                                  <path d="M3,22V8H7V22H3M10,22V2H14V22H10M17,22V14H21V22H17Z"></path>
                                </svg>
                              </div>
                              <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall card-more-options css-3ycic7"
                                tabindex="0"
                                type="button"
                                aria-label="settings"
                              >
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="DotsVerticalIcon"
                                >
                                  <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                                </svg>
                              </button>
                            </div>
                            <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                              Total Profit
                            </p>
                            <div className="MuiBox-root css-7565lz">
                              <h6 className="MuiTypography-root MuiTypography-h6 css-1ypg9u5">
                                $25.6k
                              </h6>
                              <sup className="MuiTypography-root MuiTypography-caption css-se7ihh">
                                +42%
                              </sup>
                            </div>
                            <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                              Weekly Profit
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r">
                        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1k3q5ab">
                          <div className="MuiCardContent-root css-12evlce">
                            <div className="MuiBox-root css-kazhwn">
                              <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-11sbmvn">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="CurrencyUsdIcon"
                                >
                                  <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"></path>
                                </svg>
                              </div>
                              <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall card-more-options css-3ycic7"
                                tabindex="0"
                                type="button"
                                aria-label="settings"
                              >
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="DotsVerticalIcon"
                                >
                                  <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                                </svg>
                              </button>
                            </div>
                            <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                              Refunds
                            </p>
                            <div className="MuiBox-root css-7565lz">
                              <h6 className="MuiTypography-root MuiTypography-h6 css-1ypg9u5">
                                $78
                              </h6>
                              <sup className="MuiTypography-root MuiTypography-caption css-fcc0ko">
                                -15%
                              </sup>
                            </div>
                            <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                              Past Month
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r">
                        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1k3q5ab">
                          <div className="MuiCardContent-root css-12evlce">
                            <div className="MuiBox-root css-kazhwn">
                              <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-h1t4we">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="BriefcaseVariantOutlineIcon"
                                >
                                  <path d="M20 7H16V5L14 3H10L8 5V7H4C2.9 7 2 7.9 2 9V14C2 14.75 2.4 15.38 3 15.73V19C3 20.11 3.89 21 5 21H19C20.11 21 21 20.11 21 19V15.72C21.59 15.37 22 14.73 22 14V9C22 7.9 21.1 7 20 7M10 5H14V7H10V5M4 9H20V14H15V11H9V14H4V9M13 15H11V13H13V15M19 19H5V16H9V17H15V16H19V19Z"></path>
                                </svg>
                              </div>
                              <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall card-more-options css-3ycic7"
                                tabindex="0"
                                type="button"
                                aria-label="settings"
                              >
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="DotsVerticalIcon"
                                >
                                  <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                                </svg>
                              </button>
                            </div>
                            <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                              New Project
                            </p>
                            <div className="MuiBox-root css-7565lz">
                              <h6 className="MuiTypography-root MuiTypography-h6 css-1ypg9u5">
                                862
                              </h6>
                              <sup className="MuiTypography-root MuiTypography-caption css-fcc0ko">
                                -18%
                              </sup>
                            </div>
                            <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                              Yearly Project
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 css-1s50f5r">
                        <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1k3q5ab">
                          <div className="MuiCardContent-root css-12evlce">
                            <div className="MuiBox-root css-kazhwn">
                              <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-19f4epz">
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="HelpCircleOutlineIcon"
                                >
                                  <path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"></path>
                                </svg>
                              </div>
                              <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall card-more-options css-3ycic7"
                                tabindex="0"
                                type="button"
                                aria-label="settings"
                              >
                                <svg
                                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                                  focusable="false"
                                  aria-hidden="true"
                                  viewBox="0 0 24 24"
                                  data-testid="DotsVerticalIcon"
                                >
                                  <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                                </svg>
                              </button>
                            </div>
                            <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                              Sales Queries
                            </p>
                            <div className="MuiBox-root css-7565lz">
                              <h6 className="MuiTypography-root MuiTypography-h6 css-1ypg9u5">
                                15
                              </h6>
                              <sup className="MuiTypography-root MuiTypography-caption css-fcc0ko">
                                -18%
                              </sup>
                            </div>
                            <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                              Last Week
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-4 css-170ukis">
                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1k3q5ab">
                      <div className="MuiCardHeader-root css-891gu0">
                        <div className="MuiCardHeader-content css-11qjisw">
                          <span className="MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-zatnkh">
                            Sales by Countries
                          </span>
                        </div>
                        <div className="MuiCardHeader-action css-pka4ak">
                          <button
                            className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeSmall card-more-options css-3ycic7"
                            tabindex="0"
                            type="button"
                            aria-label="settings"
                          >
                            <svg
                              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
                              focusable="false"
                              aria-hidden="true"
                              viewBox="0 0 24 24"
                              data-testid="DotsVerticalIcon"
                            >
                              <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="MuiCardContent-root css-1v7a4r5">
                        <div className="MuiBox-root css-1ja2hlt">
                          <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-9797sx">
                            US
                          </div>
                          <div className="MuiBox-root css-s5qcc8">
                            <div className="MuiBox-root css-1rvrufc">
                              <div className="MuiBox-root css-k008qs">
                                <p className="MuiTypography-root MuiTypography-body1 css-1sr91w5">
                                  $8,656k
                                </p>
                                <div className="MuiBox-root css-70qvj9">
                                  <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-3jt3oc"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="ChevronUpIcon"
                                  >
                                    <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
                                  </svg>
                                  <span className="MuiTypography-root MuiTypography-caption css-mm4yn7">
                                    25.8%
                                  </span>
                                </div>
                              </div>
                              <span className="MuiTypography-root MuiTypography-caption css-m0t65p">
                                USA
                              </span>
                            </div>
                            <div className="MuiBox-root css-10k7jbd">
                              <p className="MuiTypography-root MuiTypography-body1 css-sv419h">
                                894k
                              </p>
                              <span className="MuiTypography-root MuiTypography-caption css-m0t65p">
                                Sales
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="MuiBox-root css-1ja2hlt">
                          <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-1dojw36">
                            UK
                          </div>
                          <div className="MuiBox-root css-s5qcc8">
                            <div className="MuiBox-root css-1rvrufc">
                              <div className="MuiBox-root css-k008qs">
                                <p className="MuiTypography-root MuiTypography-body1 css-1sr91w5">
                                  $2,415k
                                </p>
                                <div className="MuiBox-root css-70qvj9">
                                  <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-wd52k3"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="ChevronDownIcon"
                                  >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                                  </svg>
                                  <span className="MuiTypography-root MuiTypography-caption css-18qgexk">
                                    6.2%
                                  </span>
                                </div>
                              </div>
                              <span className="MuiTypography-root MuiTypography-caption css-m0t65p">
                                UK
                              </span>
                            </div>
                            <div className="MuiBox-root css-10k7jbd">
                              <p className="MuiTypography-root MuiTypography-body1 css-sv419h">
                                645k
                              </p>
                              <span className="MuiTypography-root MuiTypography-caption css-m0t65p">
                                Sales
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="MuiBox-root css-1ja2hlt">
                          <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-bv8q59">
                            IN
                          </div>
                          <div className="MuiBox-root css-s5qcc8">
                            <div className="MuiBox-root css-1rvrufc">
                              <div className="MuiBox-root css-k008qs">
                                <p className="MuiTypography-root MuiTypography-body1 css-1sr91w5">
                                  $865k
                                </p>
                                <div className="MuiBox-root css-70qvj9">
                                  <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-3jt3oc"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="ChevronUpIcon"
                                  >
                                    <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
                                  </svg>
                                  <span className="MuiTypography-root MuiTypography-caption css-mm4yn7">
                                    12.4%
                                  </span>
                                </div>
                              </div>
                              <span className="MuiTypography-root MuiTypography-caption css-m0t65p">
                                India
                              </span>
                            </div>
                            <div className="MuiBox-root css-10k7jbd">
                              <p className="MuiTypography-root MuiTypography-body1 css-sv419h">
                                148k
                              </p>
                              <span className="MuiTypography-root MuiTypography-caption css-m0t65p">
                                Sales
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="MuiBox-root css-1ja2hlt">
                          <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-gmt489">
                            JA
                          </div>
                          <div className="MuiBox-root css-s5qcc8">
                            <div className="MuiBox-root css-1rvrufc">
                              <div className="MuiBox-root css-k008qs">
                                <p className="MuiTypography-root MuiTypography-body1 css-1sr91w5">
                                  $745k
                                </p>
                                <div className="MuiBox-root css-70qvj9">
                                  <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-wd52k3"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="ChevronDownIcon"
                                  >
                                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
                                  </svg>
                                  <span className="MuiTypography-root MuiTypography-caption css-18qgexk">
                                    11.9%
                                  </span>
                                </div>
                              </div>
                              <span className="MuiTypography-root MuiTypography-caption css-m0t65p">
                                Japan
                              </span>
                            </div>
                            <div className="MuiBox-root css-10k7jbd">
                              <p className="MuiTypography-root MuiTypography-body1 css-sv419h">
                                86k
                              </p>
                              <span className="MuiTypography-root MuiTypography-caption css-m0t65p">
                                Sales
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="MuiBox-root css-70qvj9">
                          <div className="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-1dojw36">
                            KO
                          </div>
                          <div className="MuiBox-root css-s5qcc8">
                            <div className="MuiBox-root css-1rvrufc">
                              <div className="MuiBox-root css-k008qs">
                                <p className="MuiTypography-root MuiTypography-body1 css-1sr91w5">
                                  $45k
                                </p>
                                <div className="MuiBox-root css-70qvj9">
                                  <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-3jt3oc"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="ChevronUpIcon"
                                  >
                                    <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z"></path>
                                  </svg>
                                  <span className="MuiTypography-root MuiTypography-caption css-mm4yn7">
                                    16.2%
                                  </span>
                                </div>
                              </div>
                              <span className="MuiTypography-root MuiTypography-caption css-m0t65p">
                                Korea
                              </span>
                            </div>
                            <div className="MuiBox-root css-10k7jbd">
                              <p className="MuiTypography-root MuiTypography-body1 css-sv419h">
                                42k
                              </p>
                              <span className="MuiTypography-root MuiTypography-caption css-m0t65p">
                                Sales
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-12 MuiGrid-grid-lg-8 css-11d57x6">
                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1a0fmzr">
                      <div className="MuiBox-root css-8atqhb">
                        <div className="MuiCardHeader-root css-14vw9l0">
                          <div className="MuiCardHeader-content css-11qjisw">
                            <span className="MuiTypography-root MuiTypography-h6 MuiCardHeader-title css-1a0vr06">
                              Deposit
                            </span>
                          </div>
                          <div className="MuiCardHeader-action css-pka4ak">
                            <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                              View All
                            </span>
                          </div>
                        </div>
                        <div className="MuiCardContent-root css-zjgggv">
                          <div className="MuiBox-root css-psdy0a">
                            <div className="MuiBox-root css-c3lqyp">
                              <img
                                src="/materio-mui-react-nextjs-admin-template-free/images/logos/gumroad.png"
                                alt="Gumroad Account"
                                width="28"
                                height="29"
                              />
                            </div>
                            <div className="MuiBox-root css-1ezh3vz">
                              <div className="MuiBox-root css-1rvrufc">
                                <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                                  Gumroad Account
                                </p>
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Sell UI Kit
                                </span>
                              </div>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 css-ksn7bw">
                                +$4,650
                              </h6>
                            </div>
                          </div>
                          <div className="MuiBox-root css-psdy0a">
                            <div className="MuiBox-root css-c3lqyp">
                              <img
                                src="/materio-mui-react-nextjs-admin-template-free/images/logos/mastercard-label.png"
                                alt="Mastercard"
                                width="38"
                                height="38"
                              />
                            </div>
                            <div className="MuiBox-root css-1ezh3vz">
                              <div className="MuiBox-root css-1rvrufc">
                                <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                                  Mastercard
                                </p>
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Wallet deposit
                                </span>
                              </div>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 css-ksn7bw">
                                +$92,705
                              </h6>
                            </div>
                          </div>
                          <div className="MuiBox-root css-psdy0a">
                            <div className="MuiBox-root css-c3lqyp">
                              <img
                                src="/materio-mui-react-nextjs-admin-template-free/images/logos/stripe.png"
                                alt="Stripe Account"
                                width="20"
                                height="28"
                              />
                            </div>
                            <div className="MuiBox-root css-1ezh3vz">
                              <div className="MuiBox-root css-1rvrufc">
                                <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                                  Stripe Account
                                </p>
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  iOS Application
                                </span>
                              </div>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 css-ksn7bw">
                                +$957
                              </h6>
                            </div>
                          </div>
                          <div className="MuiBox-root css-psdy0a">
                            <div className="MuiBox-root css-c3lqyp">
                              <img
                                src="/materio-mui-react-nextjs-admin-template-free/images/logos/american-bank.png"
                                alt="American Bank"
                                width="34"
                                height="32"
                              />
                            </div>
                            <div className="MuiBox-root css-1ezh3vz">
                              <div className="MuiBox-root css-1rvrufc">
                                <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                                  American Bank
                                </p>
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Bank Transfer
                                </span>
                              </div>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 css-ksn7bw">
                                +$6,837
                              </h6>
                            </div>
                          </div>
                          <div className="MuiBox-root css-18hl8n5">
                            <div className="MuiBox-root css-c3lqyp">
                              <img
                                src="/materio-mui-react-nextjs-admin-template-free/images/logos/citi-bank.png"
                                alt="Bank Account"
                                width="33"
                                height="22"
                              />
                            </div>
                            <div className="MuiBox-root css-1ezh3vz">
                              <div className="MuiBox-root css-1rvrufc">
                                <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                                  Bank Account
                                </p>
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Wallet deposit
                                </span>
                              </div>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 css-ksn7bw">
                                +$446
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="MuiDivider-root MuiDivider-fullWidth MuiDivider-flexItem css-1mcub4m" />
                      <div className="MuiBox-root css-8atqhb">
                        <div className="MuiCardHeader-root css-14vw9l0">
                          <div className="MuiCardHeader-content css-11qjisw">
                            <span className="MuiTypography-root MuiTypography-h6 MuiCardHeader-title css-1a0vr06">
                              Withdraw
                            </span>
                          </div>
                          <div className="MuiCardHeader-action css-pka4ak">
                            <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                              View All
                            </span>
                          </div>
                        </div>
                        <div className="MuiCardContent-root css-zjgggv">
                          <div className="MuiBox-root css-psdy0a">
                            <div className="MuiBox-root css-1wgqzgn">
                              <img
                                src="/materio-mui-react-nextjs-admin-template-free/images/logos/google.png"
                                alt="Google Adsense"
                                width="29"
                                height="30"
                              />
                            </div>
                            <div className="MuiBox-root css-1ezh3vz">
                              <div className="MuiBox-root css-1rvrufc">
                                <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                                  Google Adsense
                                </p>
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Paypal deposit
                                </span>
                              </div>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 css-50le7h">
                                -$145
                              </h6>
                            </div>
                          </div>
                          <div className="MuiBox-root css-psdy0a">
                            <div className="MuiBox-root css-1wgqzgn">
                              <img
                                src="/materio-mui-react-nextjs-admin-template-free/images/logos/github.png"
                                alt="Github Enterprise"
                                width="34"
                                height="34"
                              />
                            </div>
                            <div className="MuiBox-root css-1ezh3vz">
                              <div className="MuiBox-root css-1rvrufc">
                                <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                                  Github Enterprise
                                </p>
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Security &amp; compliance
                                </span>
                              </div>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 css-50le7h">
                                -$1870
                              </h6>
                            </div>
                          </div>
                          <div className="MuiBox-root css-psdy0a">
                            <div className="MuiBox-root css-1wgqzgn">
                              <img
                                src="/materio-mui-react-nextjs-admin-template-free/images/logos/slack.png"
                                alt="Upgrade Slack Plan"
                                width="30"
                                height="30"
                              />
                            </div>
                            <div className="MuiBox-root css-1ezh3vz">
                              <div className="MuiBox-root css-1rvrufc">
                                <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                                  Upgrade Slack Plan
                                </p>
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Debit card deposit
                                </span>
                              </div>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 css-50le7h">
                                -$450
                              </h6>
                            </div>
                          </div>
                          <div className="MuiBox-root css-psdy0a">
                            <div className="MuiBox-root css-1wgqzgn">
                              <img
                                src="/materio-mui-react-nextjs-admin-template-free/images/logos/digital-ocean.png"
                                alt="Digital Ocean"
                                width="30"
                                height="30"
                              />
                            </div>
                            <div className="MuiBox-root css-1ezh3vz">
                              <div className="MuiBox-root css-1rvrufc">
                                <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                                  Digital Ocean
                                </p>
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Cloud Hosting
                                </span>
                              </div>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 css-50le7h">
                                -$540
                              </h6>
                            </div>
                          </div>
                          <div className="MuiBox-root css-18hl8n5">
                            <div className="MuiBox-root css-1wgqzgn">
                              <img
                                src="/materio-mui-react-nextjs-admin-template-free/images/logos/aws.png"
                                alt="AWS Account"
                                width="36"
                                height="21"
                              />
                            </div>
                            <div className="MuiBox-root css-1ezh3vz">
                              <div className="MuiBox-root css-1rvrufc">
                                <p className="MuiTypography-root MuiTypography-body1 css-13sdyls">
                                  AWS Account
                                </p>
                                <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                  Choosing a Cloud Platform
                                </span>
                              </div>
                              <h6 className="MuiTypography-root MuiTypography-subtitle2 css-50le7h">
                                -$21
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                    <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1k3q5ab">
                      <div className="MuiTableContainer-root css-939q39">
                        <table
                          className="MuiTable-root css-10y3fr9"
                          aria-label="table in dashboard"
                        >
                          <thead className="MuiTableHead-root css-ucz4w7">
                            <tr className="MuiTableRow-root MuiTableRow-head css-1a1fzdj">
                              <th
                                className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-18drrcl"
                                scope="col"
                              >
                                Name
                              </th>
                              <th
                                className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-18drrcl"
                                scope="col"
                              >
                                Email
                              </th>
                              <th
                                className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-18drrcl"
                                scope="col"
                              >
                                Date
                              </th>
                              <th
                                className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-18drrcl"
                                scope="col"
                              >
                                Salary
                              </th>
                              <th
                                className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-18drrcl"
                                scope="col"
                              >
                                Age
                              </th>
                              <th
                                className="MuiTableCell-root MuiTableCell-head MuiTableCell-sizeMedium css-18drrcl"
                                scope="col"
                              >
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="MuiTableBody-root css-ceeiht">
                            <tr className="MuiTableRow-root MuiTableRow-hover css-lfnorv">
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-2x20pz">
                                <div className="MuiBox-root css-j7qwjs">
                                  <p className="MuiTypography-root MuiTypography-body1 css-1muldh">
                                    Sally Quinn
                                  </p>
                                  <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                    Human Resources Assistant
                                  </span>
                                </div>
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                eebsworth2m@sbwire.com
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                09/27/2018
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                $19586.23
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                27
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorPrimary MuiChip-filledPrimary css-lvr0df">
                                  <span className="MuiChip-label MuiChip-labelMedium css-14vsv3w">
                                    current
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="MuiTableRow-root MuiTableRow-hover css-lfnorv">
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-2x20pz">
                                <div className="MuiBox-root css-j7qwjs">
                                  <p className="MuiTypography-root MuiTypography-body1 css-1muldh">
                                    Margaret Bowers
                                  </p>
                                  <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                    Nuclear Power Engineer
                                  </span>
                                </div>
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                kocrevy0@thetimes.co.uk
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                09/23/2016
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                $23896.35
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                61
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorSuccess MuiChip-filledSuccess css-rzoen8">
                                  <span className="MuiChip-label MuiChip-labelMedium css-14vsv3w">
                                    professional
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="MuiTableRow-root MuiTableRow-hover css-lfnorv">
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-2x20pz">
                                <div className="MuiBox-root css-j7qwjs">
                                  <p className="MuiTypography-root MuiTypography-body1 css-1muldh">
                                    Minnie Roy
                                  </p>
                                  <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                    Environmental Specialist
                                  </span>
                                </div>
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                ediehn6@163.com
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                10/15/2017
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                $18991.67
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                59
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorError MuiChip-filledError css-ccsiwf">
                                  <span className="MuiChip-label MuiChip-labelMedium css-14vsv3w">
                                    rejected
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="MuiTableRow-root MuiTableRow-hover css-lfnorv">
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-2x20pz">
                                <div className="MuiBox-root css-j7qwjs">
                                  <p className="MuiTypography-root MuiTypography-body1 css-1muldh">
                                    Ralph Leonard
                                  </p>
                                  <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                    Sales Representative
                                  </span>
                                </div>
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                dfalloona@ifeng.com
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                06/12/2018
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                $19252.12
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                30
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorWarning MuiChip-filledWarning css-k6n1sd">
                                  <span className="MuiChip-label MuiChip-labelMedium css-14vsv3w">
                                    resigned
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="MuiTableRow-root MuiTableRow-hover css-lfnorv">
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-2x20pz">
                                <div className="MuiBox-root css-j7qwjs">
                                  <p className="MuiTypography-root MuiTypography-body1 css-1muldh">
                                    Annie Martin
                                  </p>
                                  <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                    Operator
                                  </span>
                                </div>
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                sganderton2@tuttocitta.it
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                03/24/2018
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                $13076.28
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                66
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorInfo MuiChip-filledInfo css-2z10nj">
                                  <span className="MuiChip-label MuiChip-labelMedium css-14vsv3w">
                                    applied
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="MuiTableRow-root MuiTableRow-hover css-lfnorv">
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-2x20pz">
                                <div className="MuiBox-root css-j7qwjs">
                                  <p className="MuiTypography-root MuiTypography-body1 css-1muldh">
                                    Adeline Day
                                  </p>
                                  <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                    Senior Cost Accountant
                                  </span>
                                </div>
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                hnisius4@gnu.org
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                08/25/2017
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                $10909.52
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                33
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorSuccess MuiChip-filledSuccess css-rzoen8">
                                  <span className="MuiChip-label MuiChip-labelMedium css-14vsv3w">
                                    professional
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="MuiTableRow-root MuiTableRow-hover css-lfnorv">
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-2x20pz">
                                <div className="MuiBox-root css-j7qwjs">
                                  <p className="MuiTypography-root MuiTypography-body1 css-1muldh">
                                    Lora Jackson
                                  </p>
                                  <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                    Geologist
                                  </span>
                                </div>
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                ghoneywood5@narod.ru
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                06/01/2017
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                $17803.80
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                61
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorPrimary MuiChip-filledPrimary css-lvr0df">
                                  <span className="MuiChip-label MuiChip-labelMedium css-14vsv3w">
                                    current
                                  </span>
                                </div>
                              </td>
                            </tr>
                            <tr className="MuiTableRow-root MuiTableRow-hover css-lfnorv">
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-2x20pz">
                                <div className="MuiBox-root css-j7qwjs">
                                  <p className="MuiTypography-root MuiTypography-body1 css-1muldh">
                                    Rodney Sharp
                                  </p>
                                  <span className="MuiTypography-root MuiTypography-caption css-hy29ye">
                                    Cost Accountant
                                  </span>
                                </div>
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                dcrossman3@google.co.jp
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                12/03/2017
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                $12336.17
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                22
                              </td>
                              <td className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-11u1jp0">
                                <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorSuccess MuiChip-filledSuccess css-rzoen8">
                                  <span className="MuiChip-label MuiChip-labelMedium css-14vsv3w">
                                    professional
                                  </span>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="upgrade-to-pro-button mui-fixed MuiBox-root css-1j2q1g7">
                <a
                  className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-gjvgh5"
                  tabindex="0"
                  target="_blank"
                  href="https://themeselection.com/products/materio-mui-react-nextjs-admin-template/"
                >
                  Upgrade To Pro
                </a>
                <div
                  className="MuiBox-root css-up7irv"
                  style={{
                    opacity: 0,
                    visibility: "hidden",
                    position: "absolute",
                    left: 0,
                    top: 0,
                  }}
                >
                  <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation9 css-1sdlr0r">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://themeselection.com/products/materio-mui-react-nextjs-admin-template/"
                    >
                      <img
                        width="100%"
                        alt="materio-pro-banner"
                        src="/materio-mui-react-nextjs-admin-template-free/images/misc/materio-pro-banner.png"
                      />
                    </a>
                    <div className="MuiCardContent-root css-12evlce">
                      <h6 className="MuiTypography-root MuiTypography-h6 css-19jjok8">
                        Materio - React Admin Template
                      </h6>
                      <p className="MuiTypography-root MuiTypography-body2 css-eemp71">
                        Materio Admin is the most developer friendly &amp;
                        highly customizable Admin Dashboard Template based on
                        MUI and NextJS.
                      </p>
                      <p className="MuiTypography-root MuiTypography-body2 css-eemp71">
                        Click on below buttons to explore PRO version.
                      </p>
                      <a
                        className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButtonBase-root css-1ix9su3"
                        tabindex="0"
                        target="_blank"
                        href="https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/landing/"
                      >
                        Demo
                      </a>
                      <a
                        className="MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButtonBase-root css-1lnlq3l"
                        tabindex="0"
                        target="_blank"
                        href="https://themeselection.com/products/materio-mui-react-nextjs-admin-template/"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className="layout-footer MuiBox-root css-1s71n78">
              <div className="footer-content-container MuiBox-root css-1107r86">
                <div className="MuiBox-root css-1c8ux76">
                  <p className="MuiTypography-root MuiTypography-body1 css-1eapbpu">
                    © 2022, Made with
                    <span className="MuiBox-root css-i6sm3l">❤️</span> by
                    <a
                      className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1mer54f"
                      target="_blank"
                      href="https://themeselection.com/"
                    >
                      ThemeSelection
                    </a>
                  </p>
                  <div className="MuiBox-root css-pcgvof">
                    <a
                      className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1mer54f"
                      target="_blank"
                      href="https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free/blob/main/LICENSE"
                    >
                      MIT License
                    </a>
                    <a
                      className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1mer54f"
                      target="_blank"
                      href="https://themeselection.com/"
                    >
                      More Themes
                    </a>
                    <a
                      className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1mer54f"
                      target="_blank"
                      href="https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free/blob/main/README.md"
                    >
                      Documentation
                    </a>
                    <a
                      className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-1mer54f"
                      target="_blank"
                      href="https://github.com/themeselection/materio-mui-react-nextjs-admin-template-free/issues"
                    >
                      Support
                    </a>
                  </div>
                </div>
              </div>
            </footer>
            <div className="MuiBox-root css-jv5v1s">
              <div
                className="MuiBox-root css-0"
                id="react-datepicker-portal"
              ></div>
            </div>
          </div>
        </div>
        <div
          className="mui-fixed css-sdi5m0"
          role="presentation"
          style={{
            transform: "scale(0)",
            visibility: "hidden",
          }}
        >
          <button
            className="MuiButtonBase-root MuiFab-root MuiFab-circular MuiFab-sizeSmall MuiFab-primary css-pue6qa"
            tabindex="0"
            type="button"
            aria-label="scroll back to top"
          >
            <svg
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="ArrowUpIcon"
            >
              <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
