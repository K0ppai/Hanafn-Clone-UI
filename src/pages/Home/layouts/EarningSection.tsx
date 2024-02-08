import PillButton from "../../../components/PillButton";

const EarningSection = () => {
  return (
    <section>
      <div className="mx-auto mb-[4rem] max-w-[1280px] translate-y-[-6rem]">
        <div className="rounded-[1em] bg-earning p-[3rem] text-base font-[600] backdrop-blur-[10px] lg:flex lg:h-[200px] lg:justify-between lg:p-[40px]">
          <div className="lg:w-[450px]">
            <h2 className="text-[2.2rem] font-[700] leading-[3rem] text-white">
              <span className="text-[16px] font-[700] lg:text-[30px]">
                하나금융그룹
              </span>
              <br />
              <div className="lg:mt-4">
                <span className="mr-2 text-[2.2rem] text-[#78fffb] lg:text-[30px]">
                  2023년
                </span>
                <span className="text-[2.2rem] lg:text-[30px]">
                  경영실적 발표
                </span>
              </div>
            </h2>
            <p className="mt-[2.4rem] bg-notice bg-no-repeat pl-[2.2rem] text-[1.4rem] text-white lg:text-[14px] lg:tracking-tighter">
              본 재무제표는 실적발표일 기준 추정치이므로 추후 변경 될 수
              있습니다.
            </p>
          </div>
          <div className="mt-[6rem] text-[1.4rem] lg:mt-0 lg:flex lg:w-[340px] lg:self-end">
            <div className="flex lg:flex-1 lg:flex-col lg:gap-y-[10px]">
              <PillButton
                label="경영실적"
                className="flex-1 bg-white bg-download lg:flex-none lg:text-[14px]"
              />
              <PillButton
                label="Databook"
                className="ml-[1rem] flex-1 bg-white bg-download lg:ml-0 lg:flex-none lg:text-[14px]"
              />
            </div>
            <div className="mt-[2rem] lg:ml-3 lg:mt-0 lg:flex lg:flex-[1.2] lg:flex-col lg:gap-y-[10px]">
              <PillButton
                label="하나금융그룹 FS"
                className="bg-white bg-download lg:text-[14px]"
              />
              <PillButton
                label="Web Casting"
                className="mt-[2rem] border border-white bg-mic text-white lg:mt-0 lg:text-[14px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarningSection;
