import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "../styles/board.css";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
      <div>
        <div className="layout-wrapper css-uinsfl">
          <Sidebar />
          <div  className="layout-content-wrapper MuiBox-root css-34b9xr">
            <Header />
            <main className="layout-page-content css-zyg32b">
              <div className="  layout-content-wrapper MuiBox-root css-34b9xr">
                <Outlet />
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
  );
}

export default Layout;
