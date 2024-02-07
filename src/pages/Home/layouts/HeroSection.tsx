const HeroSection = () => {
  return (
    <section className="relative h-[59rem] overflow-hidden pt-[7.2rem]">
      <figure className="bg-darkGreen px-[2rem]">
        <img
          src="https://www.hanafn.com:8002/upload/common/upeditor/10000103/20230518//20230518085741227.png"
          alt=""
          className="absolute z-[90] w-[32rem]"
        />
      </figure>
      <figure className="absolute top-0 z-0 w-full h-full">
        <img
          src="https://www.hanafn.com:8002/upload/common/upeditor/10000103/20230518//20230518085614277.jpg"
          alt=""
          className="h-full object-cover w-full"
        />
      </figure>
    </section>
  );
};

export default HeroSection;
