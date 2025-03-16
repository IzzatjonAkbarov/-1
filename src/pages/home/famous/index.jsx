import React, { useEffect, useState, useRef } from "react";
import CustomCard from "../../../components/customcard";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Ant Design ikonkalari

const Famous = () => {
  const [data, setData] = useState([]);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    axios.get(import.meta.env.VITE_BASE_URL).then(({ data }) => setData(data));
  }, []);
  console.log(data);

  return (
    <>
      <div className="relative container1 ">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-[18px] font-medium text-white">Новинки</p>
          <button className="rounded-3xl px-5 py-1 text-white border-black bg-[#ec8f32] hover:text-black transition-all">
            Войти
          </button>
        </div>

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="absolute left-[-40px] max-[800px]:left-[0] top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition">
          <LeftOutlined className="text-black text-lg" />
        </button>

        <button
          ref={nextRef}
          className="absolute right-[-40px] top-1/2 z-10 max-[800px]:right-[0] -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-200 transition">
          <RightOutlined className="text-black text-lg" />
        </button>

        {/* Swiper Component */}
        <Swiper
          className="h-[auto] my-10"
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            280: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}>
          {data.map((item) => (
            <SwiperSlide key={item.id} className="mx-auto w-fit">
              <CustomCard value={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <br />
      <br />
      <div className="relative container1 ">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-[18px] font-medium text-white">Популярное</p>
          <button className="rounded-3xl px-5 py-1 text-white border-black bg-[#ec8f32] hover:text-black transition-all">
            Войти
          </button>
        </div>

        {/* Custom Navigation Buttons */}

        {/* Swiper Component */}
        <Swiper
          className="h-[auto] my-10"
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            280: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}>
          {data.reverse().map((item) => (
            <SwiperSlide key={item.id} className="mx-auto w-fit">
              <CustomCard value={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <br />
      <br />
      <div className="relative container1 ">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[18px] font-medium text-white">редакции</p>
          <button className="rounded-3xl px-5 py-1 text-white border-black bg-[#ec8f32] hover:text-black transition-all">
            Войти
          </button>
        </div>

        <Swiper
          className="h-[auto] my-10"
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={5}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          breakpoints={{
            280: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}>
          {data.reverse().map((item) => (
            <SwiperSlide key={item.id} className="mx-auto w-fit">
              <CustomCard value={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <div className="container1 grid grid-cols-5 max-[1100px]:grid-cols-4 max-[900px]:grid-cols-3 max-[650px]:grid-cols-2 gap-10 max-[450px]:grid-cols-1">
          {data.slice(1).map((value) => (
            <CustomCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Famous;
