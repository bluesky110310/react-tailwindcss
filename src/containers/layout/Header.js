import { Link } from "react-router-dom";
import LogoIcon from "../../assets/icon/logo.svg";
import DropwDown from "../../components/common/dropdown/HeaderDropdown";

const Header = (props) => {
  const { showLine, scrollTop } = props;
  const path = window.location.pathname;

  return (
    <div id="header" className="w-full block lg:flex bg-white fixed z-10 py-6">
      <div
        id="logo"
        className="w-full lg:w-[44vw] flex items-center pt-5 lg:pt-0 shrink-0"
      >
        <DropwDown showLine={showLine} {...props} />
        <div className="lg:ml-14 flex items-center cursor-pointer">
          <Link to="/" className="flex items-center">
            <img src={LogoIcon} alt="Logo icon" width={42} />
            <p className="text-blue-1 ml-[5px] font-bold text-xl">Helopha</p>
          </Link>
        </div>
      </div>
      <div className={`w-full block px-4 py-6 lg:px-0 lg:flex lg:grow lg:justify-between lg:items-center ${scrollTop ? 'hidden' : ''}`}>
        <div></div>
        <div className="w-full px-10 break-all">
          <ul className="w-full text-center lg:flex lg:justify-between">
            <li className="text-3xl lg:text-base pb-[11px] lg:pb-0 font-semibold text-blue-1 cursor-pointer">
              <Link to="/about">Über Uns</Link>
            </li>
            <li className="text-3xl lg:text-base pb-[11px] lg:pb-0 font-semibold text-blue-1 cursor-pointer">
              <Link to="#">Dienstleistungen</Link>
            </li>
            <li className="text-3xl lg:text-base pb-[11px] lg:pb-0 font-semibold text-blue-1 cursor-pointer">
              <Link to="#">Deutsch</Link>
            </li>
            <li className="text-3xl lg:text-base pb-[11px] lg:pb-0 font-semibold text-blue-1 cursor-pointer">
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>

        {path === "/" ? (
          <div className="border-t-2 border-blue-1 visible lg:invisible"></div>
        ) : (
          <></>
        )}

        <div></div>
      </div>
    </div>
  );
};

export default Header;
