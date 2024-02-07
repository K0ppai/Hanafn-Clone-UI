import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  const options = [
    "개인정보처리방침",
    "개인정보처리방침",
    "개인정보처리방침",
    "개인정보처리방침",
  ];
  const socials = [
    "https://www.hanafn.com/assets/img/ko/ico-youtube.svg",
    "https://www.hanafn.com/assets/img/ko/ico-instagram.svg",
    "https://www.hanafn.com/assets/img/ko/ico-tictok.svg",
    "https://www.hanafn.com/assets/img/ko/ico-facebook.svg",
  ];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer className="bg-black text-[#888]">
      <div className="px-[2rem] pb-[3.6rem] pt-[3.4rem]">
        <img
          src="https://www.hanafn.com/assets/img/ko/logo-w.svg"
          alt=""
          className="mb-[2rem] opacity-70"
        />
        <p>
          <span>서울특별시 중구 을지로 66</span>
          <span>02.2002.1110</span>
        </p>
        <p>Copyright ⓒ 2022 HANA FINANCIAL GROUP. All rights Reserved.</p>
      </div>
      <div className="relative px-[2rem] pb-[4.4rem]">
        <div className="relative">
          <button
            className={`${
              isOpen ? "bg-[#444]" : ""
            } flex h-[5rem] w-full items-center justify-between rounded-b-[1rem] pl-[1.2rem] text-left font-extrabold text-[#aaa] transition-all duration-300 ease-in-out`}
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
              display: isOpen ? "flex" : "none",
              bottom: isOpen ? "100%" : 0,
              transition: { duration: 0.3 },
            }}
            className={`absolute w-full flex-col gap-y-[1.6rem] rounded-t-[1rem] px-[1.2rem] py-[1.6rem] font-extrabold ${
              isOpen ? "border-b border-b-[#aaa] bg-[#444] text-[#aaa]" : ""
            }`}
          >
            {options.map((option) => {
              return <li className="w-full max-w-full">{option}</li>;
            })}
          </motion.ul>
        </div>
        <div className="mt-[0.8rem] border-t border-[#888] pt-[2.3rem]">
          <ul className="flex gap-x-[2.8rem]">
            {socials.map((social) => {
              return (
                <li>
                  <img src={social} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
        <Link to={"/"} className="absolute bottom-[4.5rem] right-[2rem]">
          <img
            src="https://www.hanafn.com/assets/img/ko/img-accessibility.svg"
            alt=""
            className="w-[4.2rem]"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
