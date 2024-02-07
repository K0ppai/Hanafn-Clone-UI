import { Link } from "react-router-dom";

const GroupLink = ({
  linkText,
  isReport = false,
}: {
  linkText: string;
  isReport?: boolean;
}) => {
  return (
    <div
      className={`flex h-[6rem] items-center ${
        isReport ? "" : "border-b border-[##eee]"
      } px-[3rem]`}
    >
      <Link
        to={"/"}
        className="w-full bg-arrow bg-right bg-no-repeat pr-[3.2rem] text-[1.6rem] font-[600]"
      >
        {linkText}
      </Link>
    </div>
  );
};

export default GroupLink;
