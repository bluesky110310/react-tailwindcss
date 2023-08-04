import Image from "../../../assets/image/img2.png";

const Item1 = () => {
  return (
    <div className="relative">
      <img
        src={Image}
        alt="footer"
        className="w-full object-cover rounded-tl-[70px] rounded-br-[70px] w-full h-[435px] lg:h-[430px]"
      />
      <div className="rounded-tl-[70px] rounded-br-[70px] bg-gradient-to-b from-blue-2 to-green-1 absolute w-full h-full top-0 text-white text-xs flex flex-col px-14 pt-[100px]">
        <p className="py-4 text-base font-['Poppins'] font-bold">
          MEDIZINISCHE BERATUNG
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Bürokratie wie Antragstellung
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Vermittlung von Terminierung
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Klärung zur OP bzw. Medikamenten
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">Behandlungen</p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          kompetente Facharztempfehlung für zweite Meinung
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Info über Fortbildungen und Seminare für die Ärzte in Bezug auf
          Medikamente und Behandlungsmethoden
        </p>
      </div>
    </div>
  );
};
export default Item1;
