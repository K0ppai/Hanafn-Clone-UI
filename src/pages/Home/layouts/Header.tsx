import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../../../components/NavBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";

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
      } fixed z-10 flex h-[7.2rem] w-full items-center justify-between px-[2rem]`}
    >
      <NavLink
        to={"/"}
        className={`${
          isScrolled ? "bg-scrollLogo" : "bg-logo"
        }  h-[2.2rem] w-[11rem] bg-contain`}
      />
      <div className="flex justify-self-end">
        <AiOutlinePlus
          className={`text-[28px] ${isScrolled ? "" : "text-white"}`}
        />
        <RxHamburgerMenu
          className={`ml-[2rem] text-[28px] ${isScrolled ? "" : "text-white"}`}
        />
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
