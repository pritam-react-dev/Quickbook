import React, { useState } from "react";
import CustomButton from "../../components/Button";
import invoice from "../../asstes/Images/image 38.png";
import { Outlet } from "react-router-dom";
import AllDocument from "./AccountChartTabs/AllDocument";

const AccountChart = () => {
  const [activeTab, setActiveTab] = useState("All Document");

  return (
    <>
      <div className="text-end my-3">
        <CustomButton
          size="lg"
          bgColor="#603AE5"
          border="none"
          textColor="#fff"
          fontSize="14px"
        >
          Add to Expenses Report
        </CustomButton>
      </div>

      <div className="d-flex justify-content-between  mt-2">
        {/* ----- Tabs Section ------- */}
        <div className="d-flex flex-column ms-3">
          <div className="d-flex gap-3">
            {["All Document", "Bills", "Receipts"].map((tab) => (
              <div
                key={tab}
                className={`px-2 py-2 cursor-pointer font-14 ${
                  activeTab === tab ? "fw-bold border rounded" : "text-muted"
                }`}
                onClick={() => setActiveTab(tab)}
                style={{ cursor: "pointer" }}
              >
                {tab}
              </div>
            ))}
          </div>

          {/* Content Area */}
          <div className="mt-3">
            {activeTab === "All Document" && <AllDocument />}
            {activeTab === "Bills" && <AllDocument />}
            {activeTab === "Receipts" && <div>Receipts Content</div>}
            <Outlet />
          </div>
        </div>

        {/* ----- Invoice Image ------- */}
        <div
          className="flex-fill d-flex justify-content-center align-items-center"
          style={{ overflow: "hidden", maxHeight: "100%" }}
        >
          <img
            src={invoice}
            alt="Invoice"
            style={{
              width: "610px",
              height: "540px",
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default AccountChart;
