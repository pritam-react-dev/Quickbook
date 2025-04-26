import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import help from "../../../asstes/Icons/ph_question.png";
import dashboard from "../../../asstes/Icons/Icon Frame.png";
import account from "../../../asstes/Icons/Group.png";
import bank from "../../../asstes/Icons/hugeicons_bank.png";
import report from "../../../asstes/Icons/icon-park-outline_table-report.png";
import contacts from "../../../asstes/Icons/Group 11.png";
import invoice from "../../../asstes/Icons/basil_invoice-outline.png";

const useSideNav = () => {

const NavLinkData = [
  { title: "Dashboard", icon: dashboard, nested: false, link: "/dashboard",activeMainLink:"/dashboard" },
  { title: "Accounting", icon: account, nested: true, link: null  ,activeMainLink: "/accounting"},
  { title: "Banking", icon: bank, nested: false, link: "/banking"  ,activeMainLink: "/banking"},
  { title: "Reports", icon: report, nested: true, link: null  ,activeMainLink: "/reports"},
  { title: "Contacts", icon: contacts, nested: true, link: null  ,activeMainLink: "/contacts"},
  { title: "Invoicing", icon: invoice, nested: true, link: null  ,activeMainLink: "/invoicing"},
  { title: "Queries", icon: help, nested: false, link: "/queries"  ,activeMainLink: "/queries"},
];

const nestedLinks = [
  // ----Accounting----
  {
    title: "Accounting",
    nested_title: "Chart of Accounts",
    link: "/accounting/chart-of-accounts",
  },
  { title: "Accounting", nested_title: "Bill", link: "/accounting/bills" },
  {
    title: "Accounting",
    nested_title: "Receipts",
    link: "/accounting/receipts",
  },
  {
    title: "Accounting",
    nested_title: "Reconcile",
    link: "/accounting/reconcile",
  },
  // ----Banling ----
  // { title: "Banking", nested_title: "ExpenseReport", link: "/banking/expense-report" },
  // ------Reports-------
  {
    title: "Reports",
    nested_title: "ExpenseReport",
    link: "/reports/expense-report",
  },

  // ------Contacts------
  {
    title: "Contacts",
    nested_title: "All Contacts",
    link: "/contacts/all-contacts",
  },
  { title: "Contacts", nested_title: "Customers", link: "/contacts/customers" },
  { title: "Contacts", nested_title: "Suppliers", link: "/contacts/suppliers" },

  // -----Invoicing------
  {
    title: "Invoicing",
    nested_title: "All Bills",
    link: "/invoicing/all-bills",
  },
  {
    title: "Invoicing",
    nested_title: "Product and Sercices",
    link: "/invoicing/product-&-services",
  },

  // // -----Queries-----
  // { title: "Queries", nested_title: "ExpenseReport", link: "/banking/expense-report" },
];

const [showNested, setShowNested] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [activeLink, setActiveLink] = useState("Chart of Accounts");
  const navigate = useNavigate();

  const handleNavigation = (link, title) => {
    if (link) {
      setActiveLink(title);
      navigate(link);
    }
  };

  // ---------Filter nested links based on the hoveredNav state----------
  const filteredNestedLinks = nestedLinks.filter(
    (link) => link.title === hoveredNav
  );


  return (
    {
        data:{
            NavLinkData,
            activeLink,
            showNested
        },
        method:{
            setShowNested,
            setHoveredNav,
            handleNavigation,
            filteredNestedLinks,
        }
    }
  )
}

export default useSideNav