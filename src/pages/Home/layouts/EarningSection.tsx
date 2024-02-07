import PillButton from "../../../components/PillButton";

const EarningSection = () => {
  return (
    <div className="bg-earning translate-y-[-6rem] rounded-[1em] p-[3rem] text-base font-[600] backdrop-blur-[10px] mb-[4rem]">
      <h2 className="text-[2.2rem] font-[700] leading-[3rem] text-white">
        <span className="text-[16px]">Hana Financial Group </span>
        <br />
        <span className="mr-2 text-[2.2rem] text-[#78fffb]">2023</span>
        <span className="text-[2.2rem]">
          management performance announcement
        </span>
      </h2>
      <p className="bg-notice mt-[2.4rem] bg-no-repeat pl-[2.2rem] text-[1.4rem] text-white">
        These financial statements are estimates as of the performance
        announcement date and may be subject to change in the future.
      </p>
      <div className="mt-[6rem] text-[1.4rem]">
        <div className="flex">
          <PillButton
            label="Business performance"
            className="bg-download bg-white"
          />
          <PillButton
            label="Databook"
            className="bg-download ml-[1rem] bg-white"
          />
        </div>
        <div className="mt-[2rem]">
          <PillButton
            label="Hana Financial Group FS"
            className="bg-download bg-white"
          />
          <PillButton
            label="Web Casting"
            className="bg-mic mt-[2rem] border border-white text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default EarningSection;
