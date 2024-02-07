import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";

const NewsLink = ({ className }: { className?: string }) => {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const largeScreen = deviceWidth > 1024;

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
    <div className={`${className} flex justify-between`}>
      <h2 className="text-[1.8rem] font-[600]">하나소식</h2>
      <Link to={"/"} className="flex items-center">
        <span className="text-transparent">More</span>
        {largeScreen ? <FaArrowRightLong /> : <IoIosArrowForward />}
      </Link>
    </div>
  );
};

export default NewsLink;
