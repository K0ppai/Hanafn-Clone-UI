import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import ProgressBar from "../../../components/ProgressBar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isScrolled || isHover ? "bg-white" : "bg-transparent"
      } fixed z-[999] h-[7.2rem] w-full transition-all duration-300 ease-out lg:h-[84px] `}
    >
      <div className="relative flex h-full items-center justify-between px-[2rem] lg:px-[40px]">
        <NavLink
          to={"/"}
          className={`${
            isScrolled || isHover ? "bg-scrollLogo" : "bg-logo"
          }  h-[2.2rem] w-[11rem] bg-contain bg-no-repeat lg:h-[28px] lg:w-[140px]`}
        />
        <NavBar
          isScrolled={isScrolled}
          isHover={isHover}
          setIsHover={setIsHover}
        />
        <div className="flex justify-self-end">
          <button
            className={`${
              isScrolled || isHover ? "bg-blackPlus" : "bg-whitePlus"
            } ml-[24px] h-[30px] w-[30px]`}
          />
          <button
            className={`${
              isScrolled || isHover ? "bg-hanaBlackIcon" : "bg-hanaWhiteIcon"
            } bg-hanaIcon ml-[24px] hidden h-[30px] w-[30px] lg:block`}
          />
          <button
            className={`${
              isScrolled || isHover ? "bg-blackEarth" : "bg-whiteEarth"
            } bg-hanaIcon ml-[24px] hidden h-[30px] w-[30px] lg:block`}
          />
          <button
            className={`${
              isScrolled || isHover ? "bg-blackHamburger" : "bg-whiteHamburger"
            } bg-hanaIcon ml-[2rem] h-[30px] w-[30px] lg:ml-[24px]`}
          />
        </div>
      </div>
      <ProgressBar isScrolled={isScrolled} />
    </header>
  );
};

export default Header;
