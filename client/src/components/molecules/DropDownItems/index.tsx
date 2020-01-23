import React from "react";
import * as Sc from "./style";

type DropdownProps = {
  /** Dropdown Label for dropdown items to be triggered */
  dropdownMenuLabel: string;
  /**
   * Items to insert into dropdown
   */
  dropdownItems: { navName: string; to: string }[];
};

/** Dropdown List Component */
const DropDownItems: React.FC<DropdownProps> = ({
  dropdownMenuLabel,
  dropdownItems
}) => (
  <Sc.Dropdown>
    <Sc.DropDown>{dropdownMenuLabel}</Sc.DropDown>
    <Sc.DropDownMenu>
      {dropdownItems.map(item => (
        <Sc.Item to={item.to}>{item.navName}</Sc.Item>
      ))}
    </Sc.DropDownMenu>
  </Sc.Dropdown>
);

export default DropDownItems;
