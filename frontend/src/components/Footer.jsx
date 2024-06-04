import React from "react";

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;