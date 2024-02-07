import NewsLink from "../../../components/NewsLink";

const NewSection = () => {
  const newsData = [
    {
      imgSrc:
        "https://www.hanafn.com:8002/upload/common/upeditor/10000084/20240205//20240205061654676.jpg",
      p: "하나금융그룹, 지역사회 취약계층 지원 위한 『설날맞이 사랑의 떡 나눔 봉사활동』 실시",
    },
  ];
  return (
    <section className="px-[2rem] pb-[4.5rem] pt-[4rem]">
      <NewsLink />
      {newsData.map((data) => {
        return (
          <>
            <figure className="mt-[1.6rem] overflow-hidden rounded-[1rem]">
              <img src={data.imgSrc} alt="" className="w-full object-cover" />
            </figure>
            <p className="mt-[1.6rem] text-[1.6rem] font-[600]">{data.p}</p>
          </>
        );
      })}
    </section>
  );
};

export default NewSection;
