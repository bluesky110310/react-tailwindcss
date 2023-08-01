import { useReducer, useState } from "react";
import MainLayout from "../../containers/layout/MainLayout";
import LocationIcon from "../../assets/icon/location.svg";
import ContactIcon from "../../assets/icon/contact.svg";
import VectorIcon from "../../assets/icon/vector.svg";
import MapImage from "../../assets/image/map.png";
import CheckIcon from "../../assets/icon/check.svg";

const Index = () => {
  const [menu, setMenu] = useState(-1);
  const [open, setOpen] = useReducer((state) => {
    setMenu(-1);
    return !state;
  }, false);

  return (
    <MainLayout menu={menu} setMenu={setMenu} open={open} setOpen={setOpen}>
      <div className="w-full pt-14 lg:pt-[181px]">
        <div className="w-full px-[15%] lg:px-0 text-blue-6 text-center text-3xl font-bold">
          Sie haben Fragen oder möchten Termine vereinbaren?
        </div>
        <div className="w-full px-[15%] lg:px-0 text-blue-6 lg:font-bold lg:text-center text-lg pt-[35px]">
          <p>Dann schreiben Sie über das Kontaktformular oder rufen Sie an.</p>
          <p>Wir melden uns so schnell wie möglich bei Ihnen.</p>
        </div>
      </div>
      <div className="w-full lg:flex lg:justify-center mt-4 lg:mt-20 mb-64">
        <div className="lg:mr-8">
          <div className="px-[15%] lg:px-4 lg:px-0">
            <div className="flex">
              <img src={LocationIcon} alt="Location" className="pr-10" />
              <div className="text-grey-2">Badstr. 20, D-13357 Berlin</div>
            </div>
            <div className="flex mt-4">
              <img src={ContactIcon} alt="Contact" className="pr-10" />
              <div className="text-grey-2">Lorem impsum</div>
            </div>
          </div>
          <div className="px-4 lg:px-0 mt-8 lg:mt-[100px]">
            <img
              src={MapImage}
              alt="Map"
              className="object-cover w-full lg:w-[470px] h-[300px]"
            />
          </div>
        </div>
        <div className="lg:flex lg:flex-col px-4 lg:px-0">
          <input
            className="w-full lg:w-[430px] h-[50px] px-[15px] mb-2 mt-4 lg:mt-0"
            placeholder="Name und Vorname"
          />
          <input
            className="w-full lg:w-[430px] h-[50px] px-[15px] my-2"
            placeholder="E-Mail"
          />
          <input
            className="w-full lg:w-[430px] h-[50px] px-[15px] my-2"
            placeholder="Telefon"
          />
          <div className="relative flex items-center">
            <input
              className="w-full lg:w-[430px] h-[50px] px-[15px] my-2"
              placeholder="Ich möchte beraten werden"
            />
            <img
              src={VectorIcon}
              alt="Vector icon"
              width={48}
              className="absolute right-0 lg:right-[8px] cursor-pointer"
            />
          </div>
          <textarea
            className="w-full lg:w-[430px] h-[100px] p-4 mt-2"
            placeholder="Ihre Nachricht"
          />
          <div className="flex items-start mt-[22px]">
            <img src={CheckIcon} alt="check" />
            <div className="w-[387px] ml-[27px] break-all text-sm text-blue-1">
              Ich habe die Informationen zur Datenverarbeitung zur Kenntnis
              genommen. Meine angegebenen Daten werden zum Zweck der Erstellung
              und Bearbeitung meiner Anfrage gespeichert.
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <button className="w-full h-[67px] rounded-full bg-blue-1 text-white mt-[40px] font-bold text-xl">
              Anfrage absenden
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
