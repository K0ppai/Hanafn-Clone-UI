import PillButton from "../../../components/PillButton";

const RecruitSection = () => {
  return (
    <section className="bg-recruit flex h-[24rem] flex-col justify-center bg-cover bg-no-repeat px-[2rem]">
      <p className="text-[2rem] font-[700] text-white tracking-tighter">
        변화를 주도하는 <br />
        글로벌 인재를 기다립니다
      </p>
      <div className="mt-[3.2rem] flex">
        <PillButton
          label="인재상"
          className="bg-longBlackArrow min-h-[5.4rem] flex-1 rounded-full bg-white text-[1.6rem] font-[600]"
        />
        <PillButton
          label="채용공고"
          className="bg-longWhiteArrow ml-[2rem] min-h-[5.4rem] flex-1 rounded-full bg-[#292f35] text-[1.6rem] font-[600] text-white"
        />
      </div>
    </section>
  );
};

export default RecruitSection;
