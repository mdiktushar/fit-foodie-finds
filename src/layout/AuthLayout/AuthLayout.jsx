import React from "react";
import Header from "../../pages/Shared/Header/Header";
import Footer from "../../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AuthLayout;
