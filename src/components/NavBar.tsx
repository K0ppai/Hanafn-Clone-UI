import { NavLink } from "react-router-dom";

const NavBar = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
    <div className="hidden text-white lg:block">
      <ul className="inline-flex">
        <li>
          <NavLink to="/" className={`${isScrolled ? 'text-black' : ''} px-[30px] text-[18px] font-bold`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={`${isScrolled ? 'text-black' : ''} px-[30px] text-[18px] font-bold`}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={`${isScrolled ? 'text-black' : ''} px-[30px] text-[18px] font-bold`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={`${isScrolled ? 'text-black' : ''} px-[30px] text-[18px] font-bold`}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className={`${isScrolled ? 'text-black' : ''} px-[30px] text-[18px] font-bold`}>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
