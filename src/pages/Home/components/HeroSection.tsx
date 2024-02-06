const HeroSection = () => {
  return (
    <section className="relative h-[59rem] overflow-hidden pt-[7.2rem]">
      <figure className="bg-darkGreen px-[2rem]">
        <img
          src="https://www.hanafn.com:8002/upload/common/upeditor/10000103/20230518//20230518085741227.png"
          alt=""
          className="absolute z-[90]"
        />
      </figure>
      <picture className="absolute top-0 z-0">
        <img
          src="https://www.hanafn.com:8002/upload/common/upeditor/10000103/20230518//20230518085614277.jpg"
          alt=""
        />
      </picture>
    </section>
  );
};

export default HeroSection;
