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
      }  bg-white bg-no-repeat lg:flex-1`}
    >
      {linkComponent}
      {bodyComponent}
    </li>
  );
};

export default GroupCard;
