import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import RadioButton from "../RadioButton";
import TextInput from "../TextInput";
import SelectInput from "../SelectInput";
import DateInput from "../DateInput";
import CustomButton from "../Button";

const PaymentDetails = ({ data, method }) => {
  const { filters } = data;
  const { handleFilter } = method;

  return (
    <div>
      <div className="d-flex justify-content-between mt-3">
        <span className="arrot_box">
          <MdKeyboardArrowLeft />
        </span>
        <strong className="font-12">Payment Details</strong>
        <span className="arrot_box">
          <MdKeyboardArrowRight />
        </span>
      </div>
      <hr />
      <div className="mt-3">
        <div className="d-flex justify-content-between">
          <span className="font-12 fw-600">Payment Details</span>
          <span className="arrot_box">
            <IoIosArrowUp />
          </span>
        </div>

        {/* ---------Radio Buttons ---------*/}
        <div className="d-flex gap-3 my-3">
          <RadioButton
            label="Paid"
            value="Paid"
            name="paymentStatus"
            checked={filters.paymentStatus === "Paid"}
            onChange={handleFilter}
          />
          <RadioButton
            label="Unpaid"
            value="Unpaid"
            name="paymentStatus"
            checked={filters.paymentStatus === "Unpaid"}
            onChange={handleFilter}
          />
        </div>

        {/* -------------Text Inputs ------------*/}
        <TextInput
          label="Bill Number"
          name="bill_no"
          value={filters.bill_no}
          onChange={handleFilter}
        />
        <DateInput
          label="Bill Date"
          name="bill_date"
          value={filters.bill_date}
          onChange={handleFilter}
        />
        <TextInput
          label="Paid Amount"
          name="paid_amount"
          value={filters.paid_amount}
          onChange={handleFilter}
        />
        <DateInput
          label="Paid Date"
          name="paid_date"
          value={filters.paid_date}
          onChange={handleFilter}
        />
        <DateInput
          label="Due Date"
          name="due_date"
          value={filters.due_date}
          onChange={handleFilter}
        />

        {/* ----------Select Inputs----------- */}
        <SelectInput
          label="Payment Mode"
          options={["Cash", "Card", "Check"]}
          name="paymet_mode"
          value={filters.paymet_mode}
          onChange={handleFilter}
        />
        <SelectInput
          label="Currency"
          options={["$ USD", "€ EUR", "£ GBP", "¥ CNY"]}
          name="currency"
          value={filters.currency}
          onChange={handleFilter}
        />

        {/* --------Text Inputs--------- */}
        <TextInput
          label="Bank Transaction Ref"
          name="bank_transaction_ref"
          value={filters.bank_transaction_ref}
          onChange={handleFilter}
        />
        <TextInput
          label="Total Amount"
          name="total_amount"
          value={filters.total_amount}
          onChange={handleFilter}
        />
        <TextInput
          label="Tax Amount"
          name="tax_amount"
          value={filters.tax_amount}
          onChange={handleFilter}
        />
        <TextInput
          label="Total Amount (GBP)"
          name="total_amount_GBP"
          value={filters.total_amount_GBP}
          onChange={handleFilter}
        />
        <TextInput
          label="FX Rate"
          name="fx_rate"
          value={filters.fx_rate}
          onChange={handleFilter}
        />

        {/* -----Description Section------ */}
        <div className="d-flex justify-content-between">
          <span className="font-12 fw-600">Description</span>
          <span className="arrot_box">
            <IoIosArrowUp />
          </span>
        </div>
        <div className="font-12">
          <span>Line Item</span>
        </div>

        {/* ---------Radio Buttons ---------*/}
        <div className="d-flex gap-3 my-3">
          <RadioButton
            label="Single"
            value="Single"
            name="line_item"
            checked={filters.line_item === "Single"}
            onChange={handleFilter}
          />
          <RadioButton
            label="Multiple"
            value="Multiple"
            name="line_item"
            checked={filters.line_item === "Multiple"}
            onChange={handleFilter}
          />
        </div>

        <TextInput
          label="Description"
          name="description"
          value={filters.description}
          onChange={handleFilter}
        />
      </div>

      
      <div className="d-flex justify-content-between mt-3">
        <span className="arrot_box">
          <MdKeyboardArrowLeft />
        </span>
        <strong className="font-12">. .</strong>
        <span className="arrot_box">
          <MdKeyboardArrowRight />
        </span>
      </div>
      <hr />
      <div className="my-3">
        <CustomButton
          size="lg"
          bgColor="#5f3ae527"
          border="none"
          textColor="#000"
          fontSize="12px"
          width="w-100"
          margin="0px"
        >
          Save
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
        Publish
      </CustomButton>
    </div>
  );
};

export default PaymentDetails;
