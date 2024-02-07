import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../../components/NavBar";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
        isScrolled ? "bg-white" : "bg-darkGreen"
      } fixed z-[999] flex h-[7.2rem] w-full items-center justify-between px-[2rem] transition-all duration-300 ease-out lg:px-[40px]`}
    >
      <NavLink
        to={"/"}
        className={`${
          isScrolled ? "bg-scrollLogo" : "bg-logo"
        }  h-[2.2rem] w-[11rem] bg-contain bg-no-repeat lg:h-[28px] lg:w-[140px]`}
      />
      <NavBar isScrolled={isScrolled} />
      <div className="flex justify-self-end">
        <button
          className={`${
            isScrolled ? "bg-blackPlus" : "bg-whitePlus"
          } ml-[24px] h-[30px] w-[30px]`}
        />
        <button
          className={`${
            isScrolled ? "bg-hanaBlackIcon" : "bg-hanaWhiteIcon"
          } bg-hanaIcon ml-[24px] hidden h-[30px] w-[30px] lg:block`}
        />
        <button
          className={`${
            isScrolled ? "bg-blackEarth" : "bg-whiteEarth"
          } bg-hanaIcon ml-[24px] hidden h-[30px] w-[30px] lg:block`}
        />
        <button
          className={`${
            isScrolled ? "bg-blackHamburger" : "bg-whiteHamburger"
          } bg-hanaIcon ml-[2rem] h-[30px] w-[30px] lg:ml-[24px]`}
        />
      </div>
    </header>
  );
};

export default Header;
