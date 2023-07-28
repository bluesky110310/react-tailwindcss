import LogoIcon from "../../assets/icon/logo.svg";
import ReadmoreButton from "./ReadmoreButton";

const Sidebar = () => {
  return (
    <div id="intro" className="lg:w-[35%] bg-white lg:pl-[169px] pt-12 lg:pt-[84px] shrink-0 grow-0 w-full">
      <div className="pb-5 lg:pb-20 mx-[5%] lg:mx-0">
        <div className="flex items-center justify-center lg:justify-normal">
          <img src={LogoIcon} alt="Logo" className="w-[50px] lg:w-auto"/>
          <p className="text-blue-1 font-bold text-4xl pl-6">Helopha</p>
        </div>
        <p className="text-blue-1 font-semibold text-3xl py-6 break-all">
          <span className="block leading-[30px]">Internationale</span>
          <span className="block leading-[30px]">Dienstleistungs-und</span>
          <span className="block leading-[30px]">Beratungsgesellschaft</span>
        </p>
        <p id="intro-text" className="text-blue-1 my-4 border-l-[3px] border-blue-1 pl-[21px] pr-[40px] italic break-all w-full">
          Mit unserem fachübergreifenden Know-How unterstützen wir unsere
          Klienten: Endkunden, Apotheken , Ärtzte und Arzneihersteller
          erfolgreich in den Bereichen Medikamenten, Behandlungen,
          Marktsituation und Qualitätssicherung im pharmazeutischen Consulting.
        </p>
        <div className="flex pt-6 justify-center lg:justify-normal">
          <ReadmoreButton />
        </div>
      </div>
      <div className="border-t-2 border-blue-1 w-[20%] my-4 visible lg:invisible"></div>
      <div id="language_setting" className="px-[10%] lg:px-0 mb-4 lg:mb-0 lg:absolute lg:left-[70px] text-base font-['Poppins'] font-bold text-gray-400">
        <span className="text-blue-1">DE /</span> ENG / FR
      </div>
    </div>
  );
};

export default Sidebar;
