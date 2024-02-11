import NewsLink from "../../../components/NewsLink";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectScreen } from "../../../redux/slice/homeSlice";
import { announceDatas, noticeDatas } from "../../../data/data";

const NoticeSection = () => {
  const largeScreen = useSelector(selectScreen);

  return (
    <section className="px-[2rem] pb-[3rem] pt-[4rem] lg:px-[40px] lg:pb-[120px] lg:pt-[40px]">
      <div className="mx-auto max-w-[1280px] lg:flex">
        <div className=" lg:w-[50%] lg:pr-[60px]">
          <NewsLink className="mb-[2.4rem] lg:mb-[40px] " />
          <ul className="flex flex-col gap-y-[1rem]">
            {noticeDatas.map((data) => {
              return (
                <li className="flex justify-between" key={data.id}>
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
            {announceDatas.map((data) => (
              <li
                className="relative flex h-[4.8rem] items-center justify-between rounded-[0.6rem] border border-[#ddd] px-[2rem] lg:h-auto lg:flex-1 lg:flex-col lg:items-start lg:border-0 lg:border-l-[1px] lg:pl-[20px] lg:rounded-none lg:pr-0"
                key={data.id}
              >
                <p className="text-[1.6rem] font-[600] lg:text-[16px] lg:text-left lg:tracking-tighter">
                  {data.p}
                  {largeScreen && <br />}
                  하나금융지주회사
                </p>
                <Link
                  to={"/"}
                  className="absolute left-0 top-0 h-full w-full bg-download bg-PosAnnounce bg-no-repeat text-transparent lg:relative lg:h-fit lg:w-fit lg:bg-right lg:pr-[26px] lg:font-bold lg:text-current lg:hover:text-[#009178]"
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
