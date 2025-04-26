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
          <div className="d-flex gap-4">
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
        {/* <div
          className="flex-fill d-flex justify-content-center align-items-center"
          style={{ overflow: "hidden", maxHeight: "100%" }}
        >
          <img
            src={invoice}
            alt="Invoice"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />
        </div> */}

        <div className="invoice-wrapper flex-fill">
          <div>
            <div className="invoice-card">
              <div className="invoice-header">
                <h1>INVOICE</h1>
                <div className="logo">
                  <div className="logo-icon">◇</div>
                  <div className="text-start">
                    <b className="font-12">Marble</b>
                    <div className="font-12">BEAUTY & SPA</div>
                  </div>
                </div>
              </div>
              
              <div className="bill-details">
                <div>
                  <b className="">Bill to</b>
                  <p className="font-10">
                    Business Company 123
                    <br />
                    Grand Avenue 39,000
                    <br />
                    Country 000 000 000
                    <br />
                    000 CIF: 0000000A0BC
                  </p>
                </div>
                <div>
                  <b>Invoice</b>
                  <br />
                  <span className="font-10">#12345</span>
                  <br />
                  <div className="mt-3">
                    <b className="fw-6">Date</b>
                    <p className="font-10 mb-0">00/00/00</p>
                  </div>
                </div>
              </div>
              <div class="invoice-hr">
                <span class="dot"></span>
                <hr />
                <span class="dot"></span>
              </div>
              <table className="invoice-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(3)].map((_, i) => (
                    <tr key={i}>
                      <td>Service description</td>
                      <td>00,00€</td>
                      <td>1</td>
                      <td>00,00€</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div class="invoice-hr">
                <span class="dot"></span>
                <hr />
                <span class="dot"></span>
              </div>
              <div className="footer">
                <div>
                  <b className="font-12">Payment method</b>
                  <p className="font">
                    BB Bank London Star Bank UK+00
                    <br />
                    123 5678 9101
                  </p>
                  <b className="font-12">Terms & conditions</b>
                  <p style={{ fontSize: "8px" }}>
                    The origins of the terms and conditions go back to their
                    inception. Company is not responsible for any damage.
                  </p>
                </div>
                <div className="totals">
                  <div className="total-amount">
                    <b className="font-12">Subtotal</b>
                    <span>00,00€</span>
                  </div>
                  <div className="total-amount">
                    <b className="font-12">Tax</b>
                    <span>00,00€</span>
                  </div>
                  <div className="total-amount">
                    <b className="font-12">Total</b>
                    <b className="font-12">00,00€</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-bar">
              <span>info@marblespa.com</span>
              <span>www.marblespa.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountChart;
