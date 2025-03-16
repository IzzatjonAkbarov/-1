import React from "react";
import Header from "../../../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer";
import Showcase from "../../../pages/home/showcase";

const MainLayout = () => {
  return (
    <div>
      <header className="bg-[url('/src/shared/assets/images/showcaseimg.png')] bg-cover bg-center max-[840px]:h-[500px] ">
        <Header />
        <Showcase />
      </header>

      <main className="bg-[#0B0C11] py-10">
        <Outlet />
      </main>
      <footer className="bg-[#0B0C11]">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
