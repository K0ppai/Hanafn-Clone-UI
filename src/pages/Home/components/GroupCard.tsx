const GroupCard = ({
  className,
  linkComponent,
  bodyComponent,
  isReport = false,
}: {
  className?: string;
  linkComponent: JSX.Element;
  bodyComponent: JSX.Element;
  isReport?: boolean;
}) => {
  return (
    <li
      className={`${className} ${
        isReport ? "" : "rounded-[1rem]"
      } bg-no-repeat lg:flex-1 lg:h-[280px] lg:flex lg:flex-col`}
    >
      {linkComponent}
      {bodyComponent}
    </li>
  );
};

export default GroupCard;
