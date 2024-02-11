import PillButton from "../../../components/PillButton";
import { selectScreen } from "../../../redux/slice/homeSlice";
import { useSelector } from "react-redux";

const RecruitSection = () => {
  const largeScreen = useSelector(selectScreen);

  return (
    <section
      className={`${
        largeScreen ? "bg-lgRecruit" : "bg-recruit"
      } lg:bg-lgPosRecruit flex h-[24rem] items-center justify-between bg-cover bg-no-repeat px-[2rem] lg:h-[300px] lg:px-[40px]`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] flex-col justify-center lg:flex-row lg:items-center lg:justify-between">
        <p className="text-left text-[2rem] font-[700] tracking-tighter text-white lg:text-[34px]">
          변화를 주도하는 <br />
          글로벌 인재를 기다립니다
        </p>
        <div className="mt-[3.2rem] flex lg:flex-col">
          <PillButton
            label="인재상"
            className="min-h-[5.4rem] flex-1 rounded-full bg-white bg-longBlackArrow text-[1.6rem] font-[600] lg:min-h-[54px] lg:min-w-[193px]"
          />
          <PillButton
            label="채용공고"
            className="ml-[2rem] min-h-[5.4rem] flex-1 rounded-full bg-[#292f35] bg-longWhiteArrow text-[1.6rem] font-[600] text-white lg:ml-0 lg:mt-[16px] lg:min-h-[54px] lg:min-w-[193px]"
          />
        </div>
      </div>
    </section>
  );
};

export default RecruitSection;
