import React from "react";
import * as Sc from "./style";

type DropdownProps = {
  /**
   * Items to insert into dropdown
   */
  dropdownItems: string[];
};

/** Dropdown List Component */
const DropDownItems: React.FC<DropdownProps> = ({ dropdownItems }) => (
  <Sc.DropDownNavItem>
    <Sc.DropDown>Dropdown</Sc.DropDown>
    <Sc.DropDownMenu>
      {dropdownItems.map(item => (
        <Sc.Item>{item}</Sc.Item>
      ))}
    </Sc.DropDownMenu>
  </Sc.DropDownNavItem>
);

export default DropDownItems;
