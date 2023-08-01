import Image from "../../assets/image/about/img3.png";

const Item2 = () => {
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
        Wir unterstützen die Hersteller, Bevollmächtigten, Importeure und
        Händler bei der effizienten Durchführung von kontrollierte QM-Prozesse.
        Mit unserem Know-how stellen wir die Gesamtprojekte mit Hilfe von
        auswählbaren Einzelleistungen bereit. Dabei behalten wir für unsere
        Klienten bei jedem Schritt die wirtschaftlichen Aspekte sowie die
        regulatorischen Anforderungen an die Produktauslegung und die
        Organisation in Bezug auf Endverbraucher und Lieferanten im Blick.
      </div>
    </div>
  );
};

export default Item2;
