import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { selectScreen } from "../redux/slice/homeSlice";
import { useSelector } from "react-redux";

const NewsLink = ({ className }: { className?: string }) => {
  const largeScreen = useSelector(selectScreen);

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
