import StockCard from "../pages/Home/components/StockCard";
import PillButton from "./PillButton";

const GroupBody = ({
  isStock = false,
  firstText,
  secondText,
  isReport,
  imgSrc,
  firstBtnLabel,
  secondBtnLabel,
  isMic = false,
}: {
  firstText?: string;
  secondText?: string;
  isStock?: boolean;
  isReport?: boolean;
  imgSrc?: string;
  firstBtnLabel?: string;
  secondBtnLabel?: string;
  isMic?: boolean;
}) => {
  return (
    <div className={`p-[3rem] relative ${isReport ? "pt-0 border-b" : "pt-[3.4rem]"}`}>
      {isStock && <StockCard />}
      <p
        className={` font-[700] ${
          isReport ? "mb-[2.6rem] mt-[53px] text-[1.8rem]" : "text-[2.2rem]"
        }`}
      >
        <span>{firstText}</span>
        <br />
        <span>{secondText}</span>
      </p>
      {isReport && imgSrc && (
        <img
          src={imgSrc}
          alt=""
          className="absolute bottom-[9.4rem] right-0 h-[8rem] w-[12rem]"
        />
      )}
      {isReport && firstBtnLabel && secondBtnLabel && (
        <div className="flex justify-between">
          <PillButton
            className="flex-1 bg-[#f2f2f2] bg-download font-semibold"
            label={firstBtnLabel}
          />
          <PillButton
            className={`ml-[1rem] flex-1 bg-[#f2f2f2] font-semibold ${
              isMic ? "bg-blackMic" : "bg-download"
            }`}
            label={secondBtnLabel}
          />
        </div>
      )}
    </div>
  );
};

export default GroupBody;
