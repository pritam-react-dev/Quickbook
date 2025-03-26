import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Sidebar from "../components/SideNav";
import Rightbar from "../components/Rightbar";
import UploadReceipts from "./UploadReceipts";
import useLayout from "./Hooks/useLayout";
const Layout = () => {
  const { data, method } = useLayout();
  const { isDashboard } = data;

  return (
    <>
      {/* -----------On hard refresh, the default UI is the UploadReceipts page -------------*/}
      {!isDashboard ? (
        <div className="box_shadow ">
          <UploadReceipts data={data} method={method} />
        </div>
      ) : (
        <div className="main_layout">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="d-flex nested_layout">
            <div className="header ">
              <Header />
            </div>
            <div className={"context flex-fill"}>
              <div className="inner_Container">
                <Outlet />
              </div>
            </div>
          </div>
          <div className="rightbar">
            <Rightbar />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
