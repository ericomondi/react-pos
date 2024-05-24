import React, { useState } from "react";
import toggleContainer from "../styles/bar";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <button
        className="toggle-btn MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeMedium css-14wop6h "
        onClick={toggleContainer}
      >
        <svg
          class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="MenuIcon"
        >
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"></path>
        </svg>
      </button>
      <div className="MuiDrawer-root MuiDrawer-docked layout-vertical-nav css-agsicw my-container">
        
        <div
          className="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiDrawer-paper MuiDrawer-paperAnchorLeft MuiDrawer-paperAnchorDockedLeft css-14dfcda"
          // style={{ pointerEvents: "none" }}
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
                    <Link
                      className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-76jj4r"
                      tabindex="0"
                      to="/pos"
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
                          Make Sale
                        </p>
                      </div>
                    </Link>
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
                    <Link
                      className="MuiListItemButton-root MuiListItemButton-gutters MuiButtonBase-root css-76jj4r"
                      tabindex="0"
                    
                      to="/logout"
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
                          Logout
                        </p>
                      </div>
                    </Link>
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
    </>
  );
};

export default Sidebar;
