import { TIconType } from "../../../types";

const NavTopComponent = ({
  title,
  icon,
}: {
  title: string;
  icon?: TIconType;
}) => {
  return (
    <>
      <div className="flex items-center gap-1 justify-center cursor-pointer text-white hover:text-text-tertiary">
        {icon && <span>{icon}</span>}
        <span className="text-sm" >{title}</span>
      </div>
    </>
  );
};

export default NavTopComponent;
