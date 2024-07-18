import { NavLink } from "react-router-dom";
import { BellsIcon, HelperIcon, ShoppeeIcon } from "../Icons";
import { ROUTE_HOME } from "../../constants/WebPath";
import NavTopComponent from "../ui/navigationComponent/NavTopComponent";
import GlobeIcon from "../Icons/GlobeIcon";

const NavigationHomeBar = () => {
  return (
    <>
      <div className="wrapper flex flex-col bg-custom-gradient px-[160px]">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <NavTopComponent title="Kênh người bán" />
            <NavTopComponent title="Tải ứng dụng" />
            <NavTopComponent title="Kết nối" />
          </div>
          <div className="flex gap-2 items-center">
            <NavTopComponent
              title="Thông báo"
              icon={<BellsIcon className="size-4" />}
            />
            <NavTopComponent title="Hỗ trợ" icon={<HelperIcon />} />
            <NavTopComponent title="Tiếng việt" icon={<GlobeIcon className="size-4"/>} />
            <NavTopComponent title="Đăng ký" />
            <NavTopComponent title="Đăng nhập" />
          </div>
        </div>
        <div>
          <NavLink to={ROUTE_HOME} className="text-white">
            <span className="text-white">
              <ShoppeeIcon className="size-[84px]" />
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavigationHomeBar;
