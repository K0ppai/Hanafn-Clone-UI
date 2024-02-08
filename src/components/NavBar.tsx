import { NavLink } from "react-router-dom";

const NavBar = ({
  isScrolled,
  isHover,
  setIsHover,
}: {
  isScrolled: boolean;
  isHover: boolean;
  setIsHover: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="hidden text-white lg:block">
      <ul className="flex">
        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <NavLink
            to="/"
            className={`${
              isScrolled || isHover ? "text-black" : ""
            } px-[20px] text-[14px] font-bold transition-all duration-300 ease-in-out hover:text-[#009178] xl:px-[30px]`}
          >
            그룹소개
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <NavLink
            to="/"
            className={`${
              isScrolled || isHover ? "text-black" : ""
            } px-[20px] text-[14px] font-bold transition-all duration-300 ease-in-out hover:text-[#009178] xl:px-[30px]`}
          >
            기업지배구조
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <NavLink
            to="/"
            className={`${
              isScrolled || isHover ? "text-black" : ""
            } px-[20px] text-[14px] font-bold transition-all duration-300 ease-in-out hover:text-[#009178] xl:px-[30px]`}
          >
            ESG경영
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <NavLink
            to="/"
            className={`${
              isScrolled || isHover ? "text-black" : ""
            } px-[20px] text-[14px] font-bold transition-all duration-300 ease-in-out hover:text-[#009178] xl:px-[30px]`}
          >
            투자정보
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <NavLink
            to="/"
            className={`${
              isScrolled || isHover ? "text-black" : ""
            } px-[20px] text-[14px] font-bold transition-all duration-300 ease-in-out hover:text-[#009178] xl:px-[30px]`}
          >
            PR센터
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
