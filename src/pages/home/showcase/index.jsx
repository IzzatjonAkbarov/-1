import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Showcase = () => {
  return (
    <div className="py-50 max-[840px]:py-[100px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        className="w-full">
        <SwiperSlide>
          <div className="container1 flex items-center justify-between max-[840px]:flex-col max-[840px]:gap-3  max-[840px]:items-start">
            <div>
              <h1 className="text-[50px] font-bold text-white max-[840px]:text-[27px] max-[370px]:text-[22px]">
                Книги, которые <br className=" max-[430px]:hidden" /> вам
                хочется слушать
              </h1>
              <p className="text-[24px] text-white font-medium max-[840px]:text-[18px] max-[370px]:text-[14px] max-[400px]:py-3">
                Лучшая подборка аудиокниг по психологии{" "}
                <br className=" max-[430px]:hidden" /> саморазвитию за все годы
                издательства...
              </p>
            </div>

            <div>
              <button className="  text-[24px] max-[370px]:text-[18px] rounded-3xl px-5 py-2 text-white bg-[#ec8f32] hover:text-black transition-all">
                Выбрать книгу
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container1 flex items-center justify-between max-[840px]:flex-col max-[840px]:gap-3  max-[840px]:items-start">
            <div>
              <h1 className="text-[50px] font-bold text-white max-[840px]:text-[27px] max-[370px]:text-[22px]">
                Книги, которые <br className=" max-[430px]:hidden" /> вам
                хочется слушать
              </h1>
              <p className="text-[24px] text-white font-medium max-[840px]:text-[18px] max-[370px]:text-[14px] max-[400px]:py-3">
                Лучшая подборка аудиокниг по психологии{" "}
                <br className=" max-[430px]:hidden" /> саморазвитию за все годы
                издательства...
              </p>
            </div>

            <div>
              <button className="  text-[24px] max-[370px]:text-[18px] rounded-3xl px-5 py-2 text-white bg-[#ec8f32] hover:text-black transition-all">
                Выбрать книгу
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container1 flex items-center justify-between max-[840px]:flex-col max-[840px]:gap-3  max-[840px]:items-start">
            <div>
              <h1 className="text-[50px] font-bold text-white max-[840px]:text-[27px] max-[370px]:text-[22px]">
                Книги, которые <br className=" max-[430px]:hidden" /> вам
                хочется слушать
              </h1>
              <p className="text-[24px] text-white font-medium max-[840px]:text-[18px] max-[370px]:text-[14px] max-[400px]:py-3">
                Лучшая подборка аудиокниг по психологии{" "}
                <br className=" max-[430px]:hidden" /> саморазвитию за все годы
                издательства...
              </p>
            </div>

            <div>
              <button className="  text-[24px] max-[370px]:text-[18px] rounded-3xl px-5 py-2 text-white bg-[#ec8f32] hover:text-black transition-all">
                Выбрать книгу
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container1 flex items-center justify-between max-[840px]:flex-col max-[840px]:gap-3  max-[840px]:items-start">
            <div>
              <h1 className="text-[50px] font-bold text-white max-[840px]:text-[27px] max-[370px]:text-[22px]">
                Книги, которые <br className=" max-[430px]:hidden" /> вам
                хочется слушать
              </h1>
              <p className="text-[24px] text-white font-medium max-[840px]:text-[18px] max-[370px]:text-[14px] max-[400px]:py-3">
                Лучшая подборка аудиокниг по психологии{" "}
                <br className=" max-[430px]:hidden" /> саморазвитию за все годы
                издательства...
              </p>
            </div>

            <div>
              <button className="  text-[24px] max-[370px]:text-[18px] rounded-3xl px-5 py-2 text-white bg-[#ec8f32] hover:text-black transition-all">
                Выбрать книгу
              </button>
            </div>
          </div>
        </SwiperSlide>
        <div className="custom-pagination pl-[20%] mt-4 space-x-2 max-[840px]:mx-auto"></div>
      </Swiper>
    </div>
  );
};

export default Showcase;
