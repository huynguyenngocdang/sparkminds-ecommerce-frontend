import React from "react";
import { ShoppeeIcon } from "../Icons";
import { NavLink } from "react-router-dom";
import { ROUTE_HOME } from "../../constants/WebPath";

const NavigationSecondaryBar = ({ title }: { title?: string }) => {
  return (
    <div className="flex items-center justify-between border-b shadow-md px-[168px]">
      <div className="flex items-center gap-2">
        <NavLink to={ROUTE_HOME} className="text-primary font-semibold text-sm">
          <span className="text-primary">
            <ShoppeeIcon className="size-[84px]" />
          </span>
        </NavLink>
        <span>{title}</span>
      </div>

      <span className="text-primary font-semibold text-sm">
        Bạn cần giúp đỡ ?
      </span>
    </div>
  );
};

export default NavigationSecondaryBar;
