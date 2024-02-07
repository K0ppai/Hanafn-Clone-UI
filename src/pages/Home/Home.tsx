import EarningSection from "./layouts/EarningSection";
import Footer from "./layouts/Footer";
import GroupSection from "./layouts/GroupSection";
import Header from "./layouts/Header";
import HeroSection from "./layouts/HeroSection";
import NewSection from "./layouts/NewsSection";
import NoticeSection from "./layouts/NoticeSection";
import ReportSection from "./layouts/ReportSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="bg-main px-[2rem]">
        <EarningSection />
        <GroupSection />
        <ReportSection />
      </div>
      <NewSection />
      <NoticeSection />
      <Footer />
    </>
  );
};

export default Home;
