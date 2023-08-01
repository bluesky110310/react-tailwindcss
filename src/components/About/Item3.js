import Image from "../../assets/image/about/img4.png";

const Item3 = () => {
  return (
    <div className="w-full lg:w-[364px] pb-10 px-2 lg:px-0">
      <div className="relative">
        <img
          src={Image}
          alt="footer"
          className="object-cover rounded-tl-[70px] rounded-br-[70px]"
        />
        <div className="rounded-tl-[70px] rounded-br-[70px] bg-gradient-to-b from-blue-2 to-blue-3 absolute w-full h-full top-0 text-white text-xs flex flex-col px-14 pt-[207px] "></div>
      </div>
      <div className="text-blue-5 text-justify pt-10 px-10 lg:px-0">
        Mehr als 100 Spezialisten sind weltweit für unsere Projekte im Auftrag
        von Klienten tätig, denken mit und sorgen für die zielorientierte
        Umsetzung aller Aufgaben. Helopha Beartungs GmbH ist weltweit mit
        Standorten in Deutschland, Europa und in den Nahost international
        vertreten.
      </div>
    </div>
  );
};

export default Item3;
