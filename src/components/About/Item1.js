import Image from "../../assets/image/about/img2.png";

const Item1 = () => {
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
        Wir überprüfen die bestehende klinische Bewertung und erstellen Analysen
        mit Hilfe von Daten aus den Marktbeobachtungen, übernehmen die Planung
        und auf Wunsch sogar die Umsetzung notwendiger Aktivitäten zur
        Verbreitung der Medizinprodukte. Wir haben effiziente Prozesse
        entwickelt, die mit der aktuellen Marktlage abgestimmt sind. Es werden
        alle vorhandenen Daten und Sicherheitsmaßnahmen berücksichtigt.
      </div>
    </div>
  );
};

export default Item1;
