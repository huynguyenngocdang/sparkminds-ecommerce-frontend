import { ReactNode } from "react";
import NavigationHomeBar from "../components/navigationBar/NavigationHomeBar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavigationHomeBar />
      <div className="flex container">{children}</div>
    </>
  );
};

export default MainLayout;
