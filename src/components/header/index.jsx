import React from "react";
import logo from "../../shared/assets/icons/logo.svg";
import { Link } from "react-router-dom";
import search from "../../shared/assets/icons/search.svg";
import menu from "../../shared/assets/icons/menu.svg";
const Header = () => {
  return (
    <div className="bg-black/92 opacity-80 py-5">
      <div className="container1 flex items-center justify-between max-[500px]:gap-4">
        <img className="max-[500px]:w-[200px]" src={logo} alt="" />

        <div className="flex items-center gap-10 max-[941px]:hidden">
          <Link className="underline text-white font-medium hover:no-underline transition-all">
            Как купить
          </Link>
          <Link className="underline text-white font-medium hover:no-underline transition-all">
            F.A.Q
          </Link>
          <Link className="underline text-white font-medium hover:no-underline transition-all">
            Контакты
          </Link>
        </div>
        <div className="flex items-center gap-5 ">
          <img className=" " src={search} alt="" />
          <button className="border-2 max-[576px]:hidden rounded-3xl px-5 py-1 text-white border-white hover:border-black  hover:bg-[#fff] transition-all hover:text-black">
            Регистрация
          </button>
          <button className="border-2 max-[693px]:hidden rounded-3xl px-5 py-1 text-[white] border-black bg-[#ec8f32] hover:text-black transition-all">
            Войти
          </button>

          <button className="hidden max-[941px]:block">
            <img className=" max-[500px]:w-[30px]" src={menu} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
