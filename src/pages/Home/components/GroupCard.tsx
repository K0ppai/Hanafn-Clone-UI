import { Link } from "react-router-dom";
import StockCard from "./StockCard";

const GroupCard = ({
  linkText,
  firstText,
  secondText,
  className,
  isStock,
}: {
  className: string;
  linkText: string;
  firstText?: string;
  secondText?: string;
  isStock: boolean;
}) => {
  return (
    <li className={`rounded-[1rem] bg-white ${className} bg-no-repeat`}>
      <div className="flex h-[6rem] items-center border-b border-[##eee] px-[3rem]">
        <Link
          to={"/"}
          className="bg-arrow w-full bg-right bg-no-repeat pr-[3.2rem] text-[1.6rem] font-[600]"
        >
          {linkText}
        </Link>
      </div>
      <div className="p-[3rem] pt-[3.4rem]">
        {isStock && <StockCard />}
        <p className="text-[2.2rem] font-[700]">
          <span>{firstText}</span>
          <br />
          <span>{secondText}</span>
        </p>
      </div>
    </li>
  );
};

export default GroupCard;
