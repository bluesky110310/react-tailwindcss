import LogoIcon from "../../assets/icon/logo-white.svg";

const Header = () => {
  return (
    <div id="footer" className="w-full h-[486px] lg:h-[366px] relative text-white">
      <div className="w-full h-full bg-green-1 rounded-tr-[135px]"></div>
      <div className="w-full pr-10 h-full absolute top-0">
        <div className="w-full mr-10 h-full bg-blue-1 rounded-tr-[135px] flex items-center lg:justify-end">
          <div className="lg:flex">
            <div className="pl-10 lg:pl-0 mb-5 lg:mb-0 flex lg:mr-[152px] items-center h-min">
              <img src={LogoIcon} alt="logo" className="w-[35px] lg:w-[50px]" />
              <div className="pl-2 font-bold text-3xl">Helopha</div>
            </div>
            <div className="pl-10 lg:pl-0 mb-5 lg:mb-0 lg:mr-[112px] text-base">
              <div className="font-bold">Adresse</div>
              <div className="w-[80px] pt-4 lg:pt-8">
                Badstraße 20 13357 Berlin Germany
              </div>
            </div>
            <div className="pl-10 lg:pl-0 mb-5 lg:mb-0 lg:mr-[55px] text-base">
              <div className="font-bold">Rechtliches</div>
              <div className="w-[170px] pt-4 lg:pt-8">
                Datenschutzbestimmungen Impressum{" "}
              </div>
            </div>
            <div className="pl-10 lg:pl-0 mb-5 lg:mb-0 lg:mr-[172px] text-base">
              <div className="font-bold">Dienstleistungen</div>
              <div className="w-[170px] pt-4 lg:pt-8">
                Datenschutzbestimmungen Impressum{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
