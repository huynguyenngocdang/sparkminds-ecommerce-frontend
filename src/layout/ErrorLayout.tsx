import { ReactNode } from "react";
import NavigationSecondaryBar from "../components/navigationBar/NavigationSecondaryBar";

const ErrorLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationSecondaryBar />
      <div className="flex container">{children}</div>
    </>
  );
};

export default ErrorLayout;
