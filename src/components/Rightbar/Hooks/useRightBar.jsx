import React, { useState } from "react";
import { FaX } from "react-icons/fa6";

const useRightBar = () => {
  const initialValue = {
    paymentStatus: "",
    bill_no: "",
    bill_date: null,
    paid_amount: "",
    paid_date: null,
    due_date: null,
    paymet_mode: "",
    currency: "",
    bank_transaction_ref: "",
    total_amount: "",
    tax_amount: "",
    total_amount_GBP: "",
    fx_rate: "",
    line_item: "",
    description: "",
  };

  const [filters, setFilters] = useState(initialValue);

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    data: { filters },
    method: { handleFilter },
  };
};

export default useRightBar;
