import NewsLink from "../../../components/NewsLink";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { selectScreen } from "../../../redux/slice/homeSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";

const NewSection = () => {
  const largeScreen = useSelector(selectScreen);
  const [id, setId] = useState("");

  const newsData = [
    {
      id: "1",
      imgSrc:
        "https://www.hanafn.com:8002/upload/common/upeditor/10000084/20240205//20240205061654676.jpg",
      p: "하나은행, 남대문시장에 소상공인을 위한 특화점포 신설한다!",
    },
    {
      id: "2",
      imgSrc:
        "https://www.hanafn.com:8002/upload/common/upeditor/10000084/20240205//20240205061654676.jpg",
      p: "하나은행, 남대문시장에 소상공인을 위한 특화점포 신설한다!",
    },
    {
      id: "3",
      imgSrc:
        "https://www.hanafn.com:8002/upload/common/upeditor/10000084/20240205//20240205061654676.jpg",
      p: "하나은행, 남대문시장에 소상공인을 위한 특화점포 신설한다!",
    },
    {
      id: "4",
      imgSrc:
        "https://www.hanafn.com:8002/upload/common/upeditor/10000084/20240205//20240205061654676.jpg",
      p: "하나은행, 남대문시장에 소상공인을 위한 특화점포 신설한다!",
    },
  ];

  return (
    <section className="px-[2rem] pb-[4.5rem] pt-[4rem]">
      <div className="mx-auto max-w-[1280px]">
        <NewsLink />
        <Swiper
          // pagination={pagination}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
        >
          {newsData.map((data) => {
            return (
              <SwiperSlide className="flex flex-col">
                <Link
                  to={"/"}
                  onMouseEnter={() => setId(data.id)}
                  onMouseLeave={() => setId("false")}
                >
                  <figure className="mt-[1.6rem] overflow-hidden rounded-[1rem]">
                    <img
                      src={data.imgSrc}
                      alt=""
                      className={`w-full object-cover transition-transform duration-300 ease-out ${
                        data.id === id && "scale-[1.1]"
                      }`}
                    />
                  </figure>
                  <div className="flex flex-col lg:mt-[24px] lg:min-h-[128px]">
                    {largeScreen && (
                      <div>
                        <span className="mt-[4px] inline-flex h-[23px] items-center justify-center rounded-[4px] border border-[#009178] px-[8px] text-[12px] font-bold text-[#009178]">
                          하나뉴스
                        </span>
                      </div>
                    )}
                    <p className="mt-[1.6rem] text-[1.6rem] font-[600] lg:font-bold">
                      {data.p}
                    </p>
                    {largeScreen && (
                      <p className="mt-auto text-[14px] text-[#666]">
                        2024.02.07
                      </p>
                    )}
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default NewSection;
