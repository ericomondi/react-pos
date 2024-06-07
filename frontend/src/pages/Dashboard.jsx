import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import trophy from "../img/trophy.png";
import triangle from "../img/triangle-light.png";
import { Link } from "react-router-dom";
import GetActiveUser from "../components/GetActiveUser";

const Dashboard = () => {
  const [username, setUsername] = useState(null);
  return (
    <>
      <div>
        <div className="css-zo3z3e">
          <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-6 css-h2qpui">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-4 css-19egsyp">
              <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-19gxiau">
                <div className="MuiCardContent-root css-12evlce">
                  <h6 className="MuiTypography-root MuiTypography-h6 css-14t9e1w">
                    <div>
                      <GetActiveUser setUsername={setUsername} />
                      {username ? (
                        <div>Welcome, {username} ! 🥳</div>
                      ) : (
                        <div>Loading...</div>
                      )}
                    </div>{" "}
                  </h6>
                  <p className="MuiTypography-root MuiTypography-body2 css-gbbljn">
                    Best seller of the month
                  </p>
                  <h5 className="MuiTypography-root MuiTypography-h5 css-t9prvq">
                    $42.8k
                  </h5>
                  <Link to="/pos">
                    {" "}
                    <button
                      className="MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeSmall MuiButton-containedSizeSmall MuiButtonBase-root css-6mtojy"
                      tabindex="0"
                      type="button"
                    >
                      View Sales
                    </button>
                  </Link>
                  <img
                    alt="triangle background"
                    src={triangle}
                    className="css-1vzedo3"
                  />
                  <img alt="trophy" src={trophy} className="css-1vkc77z" />
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
                      Your sales performance is 45% 😎 better compared to last
                      month
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
                  Materio Admin is the most developer friendly &amp; highly
                  customizable Admin Dashboard Template based on MUI and NextJS.
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
      </div>
    </>
  );
};

export default Dashboard;
