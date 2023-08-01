import Image from "../../../assets/image/img2.png";

const Item4 = () => {
  return (
    <div className="relative">
      <img
        src={Image}
        alt="footer"
        className="w-full object-cover rounded-tl-[70px] rounded-br-[70px] h-[390px] lg:h-[430px]"
      />
      <div className="rounded-tl-[70px] rounded-br-[70px] bg-gradient-to-b from-blue-2 to-green-1 absolute w-full h-full top-0 text-white text-xs flex flex-col px-14 pt-[100px]">
        <p className="py-4 text-base font-['Poppins'] font-bold">
          MEDIZINISCHE BERATUNG
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Beratung über Wirkungen und Nebenwirkungen von Medikamenten
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Gesundheitsreisen
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Kaufmännische Unterstützung im Bürowesen wie Rg-Systemen/neue Systeme
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">Einführungen</p>
        <p className="py-[2px] text-xs font-semibold leading-6">Controlling</p>
        <p className="py-[2px] text-xs font-semibold leading-6">Archivierung</p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Bürokratische Organisation/ interne Systemaufbau
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          betriebswirtschaftliche Unterstützung im Alltagsgeschäft.
        </p>
      </div>
    </div>
  );
};
export default Item4;
