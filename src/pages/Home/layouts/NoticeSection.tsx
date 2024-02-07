import React from "react";
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
      p: "2023년 3분기하나금융지주회사 현황",
      label: "PDF",
    },
    {
      p: "2023년 3분기하나금융지주회사 현황",
      label: "PDF",
    },
    {
      p: "2023년 3분기하나금융지주회사 현황",
      label: "PDF",
    },
  ];

  return (
    <section className="px-[2rem] pb-[3rem] pt-[4rem]">
      <div>
        <NewsLink className="mb-[2.4rem]" />
        <ul className="flex flex-col gap-y-[1rem]">
          {noticeData.map((data) => {
            return (
              <li className="flex justify-between">
                <p>{data.label}</p>
                <p className="text-[#666]">{data.date}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-[3rem] border-t border-[#eee] pt-[3rem]">
        <NewsLink className="mb-[2.4rem]" />
        <ul className="flex flex-col gap-y-[1rem]">
          {announceData.map((data) => (
            <li className="relative flex h-[4.8rem] items-center justify-between rounded-[0.6rem] border border-[#ddd] px-[2rem]">
              <p className="text-[1.6rem] font-[600]">{data.p}</p>
              <Link
                to={"/"}
                className="bg-PosAnnounce absolute left-0 top-0 h-full w-full bg-download bg-no-repeat text-transparent"
              >
                {data.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default NoticeSection;
