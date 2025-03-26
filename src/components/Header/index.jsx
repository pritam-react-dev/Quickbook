import React from "react";
import search from "../../asstes/Icons/ico.png";
import bell from "../../asstes/Icons/Vector (1).png";
import setting from "../../asstes/Icons/Group (1).png";
import person from "../../asstes/Icons/fluent_person-32-regular.png";
import CustomDropdown from "../Dropdown";
import CustomButton from "../Button";
const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center p-3">
      <div>
        <strong>Review</strong>

        <CustomDropdown
          title="Google"
          border="2px solid blue"
          textColor="darkblue"
          fontSize="16px"
        />

        <CustomButton
          size="sm"
          bgColor="rgba(40, 167, 69, 0.1)"
          border="none"
          textColor="#2CA01D "
          fontSize="12px"
        >
          {"Quickbook’s Data"}
        </CustomButton>
      </div>
      <div>
        <CustomButton
          size="lg"
          bgColor="#5f3ae527"
          border="none"
          textColor="darkblue"
          fontSize="14px"
        >
          <img src={search} />
        </CustomButton>

        <CustomButton
          size="lg"
          bgColor="#5f3ae527"
          border="none"
          textColor="darkblue"
          fontSize="14px"
        >
          Export to Excel
        </CustomButton>

        <CustomButton
          size="lg"
          bgColor="#5f3ae527"
          border="none"
          textColor="darkblue"
          fontSize="14px"
        >
          Add Document
        </CustomButton>

        <CustomDropdown
          size="lg"
          title="Connect"
          bgColor="#5f3ae527"
          border="none"
          textColor="darkblue"
          fontSize="14px"
        />

        <CustomButton
          size="lg"
          bgColor="#5f3ae527"
          border="none"
          textColor="darkblue"
          fontSize="14px"
        >
          <img src={bell} />
        </CustomButton>

        <CustomButton
          size="lg"
          bgColor="#5f3ae527"
          border="none"
          textColor="darkblue"
          fontSize="14px"
        >
          <img src={setting} />
        </CustomButton>
        <CustomButton
          size="lg"
          bgColor="#5f3ae527"
          border="none"
          textColor="darkblue"
          fontSize="14px"
        >
          <img src={person} />
        </CustomButton>
      </div>
    </div>
  );
};

export default Header;
