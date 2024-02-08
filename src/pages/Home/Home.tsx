import { useDispatch } from "react-redux";
import EarningSection from "./layouts/EarningSection";
import Footer from "./layouts/Footer";
import GroupSection from "./layouts/GroupSection";
import Header from "./layouts/Header";
import HeroSection from "./layouts/HeroSection";
import NewSection from "./layouts/NewsSection";
import NoticeSection from "./layouts/NoticeSection";
import RecruitSection from "./layouts/RecruitSection";
import ReportSection from "./layouts/ReportSection";
import { useState, useEffect } from "react";
import { setScreen } from "../../redux/slice/homeSlice";

const Home = () => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  dispatch(setScreen(deviceWidth > 1024));

  useEffect(() => {
    const handleResize = () => {
      setDeviceWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <div className="bg-main px-[2rem] lg:px-[40px] lg:pb-[60px]">
        <div className="mx-auto lg:max-w-[1280px]">
          <EarningSection />
          <GroupSection />
          <ReportSection />
        </div>
      </div>
      <NewSection />
      <NoticeSection />
      <RecruitSection />
      <Footer />
    </>
  );
};

export default Home;
