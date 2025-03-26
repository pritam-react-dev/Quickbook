import React, { useState } from "react";
import TextInput from "../components/TextInput";
import SelectInput from "../components/SelectInput";
import CustomButton from "../components/Button";
import { Form, Row, Col } from "react-bootstrap";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { LuCopy } from "react-icons/lu";
import { CiLogin } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";

const UploadReceipts = ({ data, method }) => {
  const { activeTab, selectedFile } = data;
  const {
    setIsDashboard,
    setActiveTab,
    handleFileChange,
    handleDragOver,
    handleDrop,
    handleRemoveFile,
  } = method;

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="rounded p-4 w-50 bg-white shadow">
        {/* ---------Tabs--------- */}
        <div className="d-flex flex-column ms-3">
          <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
            {["EasyUpload", "Bills", "Receipts", "Bank"].map((tab) => (
              <div
                key={tab}
                className={`px-2 py-2 cursor-pointer font-14 ${
                  activeTab === tab ? "fw-bold border rounded" : "text-muted"
                }`}
                onClick={() => setActiveTab(tab)}
                style={{ cursor: "pointer", color: "#603AE5" }}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        {/* -------------Form Section -----------*/}
        <Form>
          <Row className="mb-3">
            <Col>
              <TextInput
                label="Document Owner"
                placeholder="Accountant 01"
                name="document_owner"
              />
            </Col>
            <Col>
              <SelectInput
                label="Client"
                options={["Client one", "Client two", "Client three"]}
                name="client"
              />
            </Col>
          </Row>

          {/* ----------File Upload---------- */}
          <div
            className="file_upload p-4 text-center mb-3"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            style={{
              border: "2px dashed #603AE5",
              borderRadius: "10px",
              padding: "20px",
              cursor: "pointer",
            }}
          >
            <input
              type="file"
              onChange={handleFileChange}
              style={{ display: "none" }}
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="d-flex justify-content-center align-items-center"
            >
              <div className="file_logo">
                <AiOutlineCloudUpload size={"25px"} color="#603AE5" />
              </div>
              {!selectedFile && (
                <div>
                  <b className="font-14" style={{ color: "#603AE5" }}>
                    Drag & Drop or Choose file to upload
                  </b>
                  <p className="font-12" style={{ color: "#603AE5" }}>
                    JPG, PNG, PDF, CSV
                  </p>
                </div>
              )}

              {/* ------------- selected file name----------- */}
              {selectedFile && (
                <>
                  <p className="text-center font-14 text-success">
                    Selected File: {selectedFile.name}
                  </p>
                  <span className="cursor mb-5" onClick={handleRemoveFile}>
                    <RxCrossCircled color="red" />
                  </span>
                </>
              )}
            </label>
          </div>

          <div className="text-center">
            <CustomButton
              size="lg"
              bgColor="#603AE5"
              border="none"
              textColor="#fff"
              fontSize="14px"
            >
              Add Receipt
            </CustomButton>
          </div>
        </Form>

        {/* -------Email Section--------- */}
        <div className="p-3">
          <p className="font-14" style={{ color: "#8181A5" }}>
            Send Over Email
          </p>
          <p>
            <strong className="font-14">Single:</strong>
            <span className="font-12 me-2" style={{ color: "#603AE5" }}>
              abc.single@gmail.com
            </span>
            <LuCopy />
          </p>
          <p>
            <strong className="font-14">Multiple:</strong>
            <span className="font-12 me-2" style={{ color: "#603AE5" }}>
              abc.multiple@gmail.com
            </span>
            <LuCopy />
          </p>
        </div>

        <div className="text-end mt-2">
          <span className="me-2 text-info"> Click here ...</span>
          <CustomButton
            size="lg"
            bgColor="#603AE5"
            border="none"
            textColor="#fff"
            fontSize="12px"
            onClick={() => setIsDashboard(true)}
          >
            <CiLogin size={"22px"} />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default UploadReceipts;
