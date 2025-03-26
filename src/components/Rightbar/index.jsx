import React, { useState } from "react";
import logo1 from "../../asstes/Images/quickbooks-1 1.png";
import ComentAndQuery from "./ComentAndQuery";
import PaymentDetails from "./PaymentDetails";
import useRightBar from "./Hooks/useRightBar";
const Rightbar = () => {
  const { data, method } = useRightBar();

  return (
    <div className="rightbar_container">
      <div className="border p-3 ">
        {/* --------- Top Section --------- */}
        <div className="d-flex align-items-start gap-2">
          {/*---------- Logo----------- */}
          <img
            src={logo1}
            alt="Quickbook"
            style={{ width: "30px", height: "30px" }}
          />

          {/* ------------Details --------------*/}
          <div className="flex-fill">
            <div className="d-flex justify-content-between">
              <strong className="font-14">Quickbook</strong>
              <span className="text-muted font-10">Publishing...</span>
            </div>

            <div className="d-flex justify-content-between text-muted">
              <span className="font-10">16 June, 2024 </span>
              <span className="text-muted font-10">Jimmy Jason</span>
            </div>

            <div className="text-muted font-10">8:15 PM</div>
          </div>
        </div>

        {/* --------- Bottom Section (Checkboxes) --------- */}
        <div className="d-flex justify-content-between mt-3">
          <label className="d-flex align-items-center gap-2 font-14">
            <input
              type="checkbox"
              className="form-check-input"
              defaultChecked
              style={{ accentColor: "#603AE5" }}
            />
            Auto-sync
          </label>

          <label className="d-flex align-items-center gap-2 font-14">
            <input
              type="checkbox"
              className="form-check-input"
              defaultChecked
              style={{ accentColor: "#603AE5" }}
            />
            Save Config
          </label>
        </div>
      </div>

      {/* ----- Tabs Section ------- */}
      <ComentAndQuery />

      {/* ------PaymentDetails------- */}
      <PaymentDetails data={data} method={method} />
    </div>
  );
};

export default Rightbar;
