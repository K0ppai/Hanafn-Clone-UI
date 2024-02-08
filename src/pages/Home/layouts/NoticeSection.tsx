import NewsLink from "../../../components/NewsLink";
import { Link } from "react-router-dom";

const NoticeSection = () => {
  const noticeData = [
    {
      label: "주식등의대량보유상황보고서(약식)",
      date: "2024.02.06",
    },
    {
      label: "주식등의대량보유상황보고서(약식)",
      date: "2024.02.06",
    },
    {
      label: "주식등의대량보유상황보고서(약식)",
      date: "2024.02.06",
    },
  ];

  const announceData = [
    {
      p: "2023년 1분기",
      label: "PDF",
    },
    {
      p: "2023년 1분기",
      label: "PDF",
    },
    {
      p: "2023년 1분기",
      label: "PDF",
    },
  ];

  return (
    <section className="px-[2rem] pb-[3rem] pt-[4rem] lg:px-[40px] lg:pb-[120px] lg:pt-[40px]">
      <div className="mx-auto max-w-[1280px] lg:flex">
        <div className=" lg:w-[50%] lg:pr-[60px]">
          <NewsLink className="mb-[2.4rem] lg:mb-[40px] " />
          <ul className="flex flex-col gap-y-[1rem]">
            {noticeData.map((data) => {
              return (
                <li className="flex justify-between">
                  <p className=" lg:text-[16px] lg:font-[600]">{data.label}</p>
                  <p className="text-[#666]">{data.date}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="mt-[3rem] border-t border-[#eee] pt-[3rem] lg:mt-0 lg:flex lg:w-[50%] lg:flex-col lg:border-t-0 lg:pl-[20px] lg:pt-0">
          <NewsLink className="mb-[2.4rem] lg:mb-[40px]" />
          <ul className="flex flex-col gap-y-[1rem] lg:flex-grow lg:flex-row">
            {announceData.map((data) => (
              <li className="relative flex h-[4.8rem] items-center justify-between rounded-[0.6rem] border border-[#ddd] px-[2rem] lg:h-auto lg:flex-1 lg:flex-col lg:items-start lg:border-0 lg:border-l-[1.5px] lg:pl-[20px] lg:pr-0">
                <p className="text-[1.6rem] font-[600] lg:text-[16px]">
                  {data.p}
                  <br />
                  하나금융지주회사 현황
                </p>
                <Link
                  to={"/"}
                  className="absolute left-0 top-0 h-full w-full bg-download bg-PosAnnounce bg-no-repeat text-transparent lg:relative lg:h-fit lg:w-fit lg:bg-right lg:pr-[26px] lg:text-current"
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;
