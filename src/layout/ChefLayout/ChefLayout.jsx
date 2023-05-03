import React from "react";
import Header from "../../pages/Shared/Header/Header";
import Footer from "../../pages/Shared/Footer/Footer";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import ChefBanner from "../../components/ChefBanner/ChefBanner";

const ChefLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ChefLayout;
