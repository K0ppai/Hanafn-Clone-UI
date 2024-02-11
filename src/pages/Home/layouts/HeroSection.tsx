import { useSelector } from "react-redux";
import { selectScreen } from "../../../redux/slice/homeSlice";
import { largeHeroImg, smallHeroImg } from "../../../data/data";

const HeroSection = () => {
  const largeScreen = useSelector(selectScreen);
  
  return (
    <section className="relative h-[59rem] overflow-hidden pt-[7.2rem] lg:pt-[84px] lg:h-[640px]">
      <figure className="max-w-[1280px] bg-darkGreen px-[2rem] lg:mx-auto lg:px-[40px] lg:mt-12">
        <img
          src="https://www.hanafn.com:8002/upload/common/upeditor/10000103/20230518//20230518085741227.png"
          alt=""
          className="absolute z-[90] w-[32rem] lg:w-[612px] lg:mt-[40pxnpm ]"
        />
      </figure>
      <figure className="absolute left-[50%] top-0 h-full w-full translate-x-[-50%]">
        <img
          src={largeScreen ? largeHeroImg : smallHeroImg}
          alt=""
          className="h-full w-full object-cover"
        />
      </figure>
    </section>
  );
};

export default HeroSection;
