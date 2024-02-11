import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import { useSelector } from "react-redux";
import { selectScreen } from "../../../redux/slice/homeSlice";
import { options, socials } from "../../../data/data";

const FooterSocial = () => {
  const largeScreen = useSelector(selectScreen);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative px-[2rem] pb-[4.4rem] lg:order-1 lg:flex lg:h-[72px] lg:items-center lg:justify-between lg:p-0">
      <div className="relative">
        <button
          className={`${
            isOpen ? "bg-[#444]" : ""
          } flex h-[5rem] w-full items-center justify-between rounded-b-[1rem] pl-[1.2rem] text-left font-extrabold text-[#aaa] transition-all duration-300 ease-in-out lg:hidden`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="">이용약관</span>
          <IoMdArrowDropup
            className={`${
              isOpen ? "rotate-[-180deg]" : ""
            } relative right-[1.2rem] text-[20px]`}
          />
        </button>
        <motion.ul
          animate={{
            display: isOpen || largeScreen ? "flex" : "none",
            bottom: isOpen ? "100%" : 0,
            transition: { duration: 0.3 },
          }}
          className={`absolute w-full flex-col gap-y-[1.6rem] rounded-t-[1rem] px-[1.2rem] py-[1.6rem] font-extrabold lg:relative lg:flex-row lg:gap-x-[34px] lg:p-0 ${
            isOpen ? "border-b border-b-[#aaa] bg-[#444] text-[#aaa]" : ""
          }`}
        >
          {options.map((option) => {
            return (
              <li className="w-full max-w-full lg:w-fit" key={option.id}>
                {option.option}
              </li>
            );
          })}
        </motion.ul>
      </div>
      <div className="mt-[0.8rem] border-t border-[#888] pt-[2.3rem] lg:mt-0 lg:border-0 lg:pt-0">
        <ul className="flex gap-x-[2.8rem]">
          {socials.map((social) => {
            return (
              <li key={social.id}>
                <img src={social.iconUrl} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
      <Link
        to={"/"}
        className="absolute bottom-[4.5rem] right-[2rem] lg:bottom-[-132px] lg:right-[0px]"
      >
        <img
          src="https://www.hanafn.com/assets/img/ko/img-accessibility.svg"
          alt=""
          className="w-[4.2rem] lg:w-[65px]"
        />
      </Link>
    </div>
  );
};

export default FooterSocial;
