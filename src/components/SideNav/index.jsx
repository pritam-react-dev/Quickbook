import React, { useState } from "react";
import logo from "../../asstes/Icons/2jPSRUY1RbYAIJFAy94lLMnHI2x 3.png";
import dashboard from "../../asstes/Icons/Icon Frame.png";
import help from "../../asstes/Icons/ph_question.png";
import account from "../../asstes/Icons/Group.png";
import bank from "../../asstes/Icons/hugeicons_bank.png";
import report from "../../asstes/Icons/icon-park-outline_table-report.png";
import contacts from "../../asstes/Icons/Group 11.png";
import invoice from "../../asstes/Icons/basil_invoice-outline.png";

import { useNavigate } from "react-router-dom";

const NavLinkData = [
  { title: "Dashboard", icon: dashboard, nested: false, link: "/dashboard" },
  { title: "Accounting", icon: account, nested: true, link: null },
  { title: "Banking", icon: bank, nested: false, link: "/banking" },
  { title: "Reports", icon: report, nested: true, link: null },
  { title: "Contacts", icon: contacts, nested: true, link: null },
  { title: "Invoicing", icon: invoice, nested: true, link: null },
  { title: "Queries", icon: help, nested: false, link: "/queries" },
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

const SideNav = () => {
  const [showNested, setShowNested] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [activeLink, setActiveLink] = useState("");
  const navigate = useNavigate();

  const handleNavigation = (link, title) => {
    if (link) {
      setActiveLink(title);
      navigate(link);
    }
  };

  // Filter nested links based on the hoveredNav state
  const filteredNestedLinks = nestedLinks.filter(
    (link) => link.title === hoveredNav
  );

  return (
    <section className="d-flex flex-column justify-content-between h-100">
      {/* Sidebar Header */}
      <div className="mt-2 sidebar_menu_container">
        <div className="text-center" style={{ height: "50px" }}>
          <img src={logo} alt="Logo" />
        </div>

        {/* Sidebar Navigation */}
        <div>
          {NavLinkData.map(({ title, icon, nested, link }) => (
            <div
              key={title}
              className={`text-center sidenav-sections py-2 ${
                activeLink === title ? "active" : ""
              }`}
              onClick={() => handleNavigation(link, title)}
              onMouseEnter={() => {
                if (nested) {
                  setShowNested(true);
                  setHoveredNav(title);
                }
              }}
              onMouseLeave={() => {
                if (nested) {
                  setShowNested(false);
                  setHoveredNav(title);
                }
              }}
            >
              <div>
                <img src={icon} alt={title} />
              </div>
              <span className="text-white font-12">{title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nested Container */}
      {showNested && filteredNestedLinks.length > 0 && (
        <div
          className="nested_container show"
          onMouseEnter={() => setShowNested(true)}
          onMouseLeave={() => setShowNested(false)}
        >
          <div className="mx-3 mt-3 font-12">
            {filteredNestedLinks.map(({ nested_title, link }) => (
              <div
                key={nested_title}
                className={`nested_navlinks ${
                  activeLink === nested_title ? "active" : ""
                }`}
                onClick={() => handleNavigation(link, nested_title)}
              >
                {nested_title}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sidebar Footer */}
      <div className="sidebar_footer">
        <img height="18px" width="18px" src={help} alt="Help" />
        <span className="text-white font-12">Help</span>
      </div>
    </section>
  );
};

export default SideNav;
