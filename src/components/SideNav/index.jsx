import React, { useState } from "react";
import logo from "../../asstes/Icons/2jPSRUY1RbYAIJFAy94lLMnHI2x 3.png";
import help from "../../asstes/Icons/ph_question.png";
import useSideNav from "./Hooks/useSideNav";

const SideNav = () => {
  const { data, method } = useSideNav();
  const { NavLinkData, activeLink, showNested } = data;
  const {
    setShowNested,
    setHoveredNav,
    handleNavigation,
    filteredNestedLinks,
  } = method;

  return (
    <section className="d-flex flex-column justify-content-between h-100">
      {/*-------- Sidebar Header ----------*/}
      <div className="mt-2 sidebar_menu_container">
        <div className="text-center" style={{ height: "50px" }}>
          <img src={logo} alt="Logo" />
        </div>

        {/* -----------Sidebar Navigation---------- */}
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

      {/* ------------Nested Container----------- */}
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

      {/* ----------Sidebar Footer-------- */}
      <div className="sidebar_footer">
        <img height="18px" width="18px" src={help} alt="Help" />
        <span className="text-white font-12">Help</span>
      </div>
    </section>
  );
};

export default SideNav;
