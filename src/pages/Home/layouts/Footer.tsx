import FooterSocial from "../components/FooterSocial";

const Footer = () => {
  return (
    <footer className="bg-black text-[#888] lg:px-[40px]">
      <div className="mx-auto max-w-[1280px] lg:flex lg:flex-col">
        <div className="px-[2rem] pb-[3.6rem] pt-[3.4rem] lg:order-2 lg:px-0 lg:pb-[50px] lg:pt-[40px]">
          <img
            src="https://www.hanafn.com/assets/img/ko/logo-w.svg"
            alt=""
            className="mb-[2rem] opacity-70"
          />
          <p>
            <span>서울특별시 중구 을지로 66</span>
            <span className="lg:ml-[20px]">02.2002.1110</span>
          </p>
          <p className="mt-[.6rem]">
            Copyright ⓒ 2022 HANA FINANCIAL GROUP. All rights Reserved.
          </p>
        </div>
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
