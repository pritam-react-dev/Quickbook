import React, { useState } from "react";
import CustomButton from "../Button";

const ComentAndQuery = () => {
  const [activeTab, setActiveTab] = useState("Comment");

  return (
    <>
      <div className="d-flex flex-column mt-3">
        <div className="d-flex w-100 gap-2 text-center">
          {["Comment", "Query"].map((tab) => (
            <div
              key={tab}
              className={`px-2 py-2 w-100 cursor-pointer font-12 ${
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
          {activeTab === "Comment" && (
            <div className="w-100">
              <strong className="text-muted">Type Comment</strong>
              <div className="w-100">
                <textarea
                  placeholder="Start typing..."
                  style={{
                    border: "none",
                    borderBottom: "1px solid #ddd",
                    width: "100%",
                    padding: "6px",
                    outline: "none",
                    fontSize: "14px",
                    resize: "none",
                  }}
                />
              </div>
            </div>
          )}
          {activeTab === "Query" && (
            <div className="font-14 p-2">Query Content</div>
          )}
        </div>
      </div>

      <div className="my-3">
        <CustomButton
          size="lg"
          bgColor="#F6F6F6"
          border="none"
          textColor="#000"
          fontSize="12px"
          width="w-100"
          margin="0px"
        >
          Add Comment
        </CustomButton>
      </div>
      <CustomButton
        size="lg"
        bgColor="#603AE5"
        border="none"
        textColor="#fff"
        fontSize="12px"
        width="w-100"
        margin="0px"
      >
        View Line Items
      </CustomButton>
    </>
  );
};

export default ComentAndQuery;
