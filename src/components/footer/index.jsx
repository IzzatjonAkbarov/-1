import React from "react";
import logofooter from "../../shared/assets/icons/logofooter.svg";
import reminder from "../../shared/assets/icons/reminder.svg";
import calendar from "../../shared/assets/icons/calendar.svg";
import music from "../../shared/assets/icons/music.svg";
import book from "../../shared/assets/icons/book.svg";
import amazon from "../../shared/assets/images/amazon.png";
import avon from "../../shared/assets/images/avon.png";
import doll from "../../shared/assets/images/doll.png";
import mastercard from "../../shared/assets/images/mastercard.png";
import visa from "../../shared/assets/images/visa.png";
import netflix from "../../shared/assets/images/netflix.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-white ">
      <div className="container1">
        <div className="grid grid-cols-2 gap-7 py-10 max-[768px]:grid-cols-1">
          <div className="border border-[#374A4A] p-7 max-[420px]:p-3 max-[420px]:rounded-[10px] rounded-[25px] flex items-center gap-4">
            <img src={reminder} alt="" />
            <p className="font-normal text-[18px] max-[420px]:text-[14px]">
              Все лучшие новинки нон фикшн книг и образовательные саммари всегда
              под рукой.
            </p>
          </div>
          <div className="border border-[#374A4A] p-7 max-[420px]:p-3 max-[420px]:rounded-[10px] rounded-[25px] flex items-center gap-4">
            <img src={calendar} alt="" />
            <p className="font-normal text-[18px] max-[420px]:text-[14px]">
              Аудиокнига по дороге на работу и обратно, подарит вам почти месяц
              чтения за год
            </p>
          </div>
          <div className="border border-[#374A4A] p-7 max-[420px]:p-3 max-[420px]:rounded-[10px] rounded-[25px] flex items-center gap-4">
            <img src={music} alt="" />
            <p className="font-normal text-[18px] max-[420px]:text-[14px]">
              Аудиокниги позволяют «читать» несколько часов в день без отрыва от
              текущих дел.
            </p>
          </div>
          <div className="border border-[#374A4A] p-7 max-[420px]:p-3 max-[420px]:rounded-[10px] rounded-[25px] flex items-center gap-4">
            <img src={book} alt="" />
            <p className="font-normal text-[18px] max-[420px]:text-[14px]">
              Лучшие книги и аудиоспектакли в живом исполнении
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between py-16 flex-wrap gap-10">
          <img className="mx-auto" src={netflix} alt="" />
          <img className="mx-auto" src={amazon} alt="" />
          <img className="mx-auto" src={avon} alt="" />
          <img className="mx-auto" src={logofooter} alt="" />
          <img className="mx-auto" src={doll} alt="" />
        </div>
        <div className="border-t border-[#413c3c] py-10 grid grid-cols-4 max-[768px]:grid-cols-2 max-[768px]:gap-10 max-[375px]:grid-cols-1">
          <img className="" src={logofooter} alt="" />
          <div className="flex flex-col gap-2 ">
            <h1 className="font-bold text-[#d9d9d9] text-[18px] pb-1 ">
              Жанры
            </h1>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Нонфикшн
            </Link>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Псиология
            </Link>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Бизнес
            </Link>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Финансы
            </Link>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Все жанры
            </Link>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="font-bold text-[#d9d9d9] text-[18px] pb-1 ">
              Категории
            </h1>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Популярное
            </Link>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Новинки
            </Link>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Выбор редакции
            </Link>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="font-bold text-[#d9d9d9] text-[18px] pb-1 ">
              Разделы
            </h1>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Как купить
            </Link>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Часто задаваемые вопросы
            </Link>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Сотрудничество
            </Link>
            <Link className="text-[#adadad] text-[12px] underline hover:no-underline">
              Контакты
            </Link>
          </div>
        </div>
        <div className=" border-t py-10 border-[#413c3c] text-[12px] text-[#adadad] font-thin flex items-center justify-between max-[420px]:flex-col max-[420px]:items-start max-[420px]:gap-2">
          <div className="flex items-center gap-10 max-[768px]:flex-col max-[768px]:gap-1 max-[768px]:items-start">
            <p className="text-[12px] text-[#adadad] font-thin">
              © 2022, «Аудитерия». Все права защищены.
            </p>
            <p>Политика конфиденциальности | Лицензионное соглашение</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={visa} alt="" />
            <img src={mastercard} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
