import React from "react";
import { Outlet } from "react-router-dom";

//For displaying pages according to routing
const Content = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default Content;
