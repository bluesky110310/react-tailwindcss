import MainLayout from "../../containers/layout/MainLayout";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import GreenRadiusButton from "./GreenRadiusButton";
import Image1 from "../../assets/image/img1.png";
import Image5 from "../../assets/image/about/img5.png";

const Index = () => {
  return (
    <MainLayout>
      <div className="w-full relative">
        <img
          src={Image1}
          alt="default"
          className="w-full h-[950px] object-cover"
        />
        <div className="bg-gradient-to-b from-white-op from-0% via-blue-1-op via-20% to-white to-100% absolute w-full h-full top-0"></div>
      </div>
      <div className="w-full pt-[53px] lg:pt-[181px]">
        <div className="w-full text-blue-1 text-center text-3xl font-bold">
          Über uns
        </div>
        <div className="w-full lg:w-3/6 lg:ml-[25%] text-blue-5 text-center text-lg pt-[53px] lg:pt-[65px] px-10">
          Helopha Beratungs GmbH ist eine internationale Dienstleistungs- und
          Beratungsgesellschaft. Wir engagieren uns mit viel Markterfahrung und
          Leidenschaft in Consumer Healthcare und in der Pharmaindustrie. Mit
          unserem fachübergreifenden Know-how unterstützen wir unsere Klienten:
          Endkunden, Apotheken, Ärzte und Arzneihersteller erfolgreich in den
          Bereichen Medikamenten, Behandlungen, Marktsituation und
          Qualitätssicherung im pharmazeutischen Consulting.
        </div>
      </div>
      <div className="w-full lg:flex lg:justify-between pt-[82px] lg:pt-36 py-36">
        <div></div>
        <Item1 />
        <Item2 />
        <Item3 />
        <div></div>
      </div>
      <div className="w-full lg:flex">
        <div className="lg:w-6/12 bg-blue-4 px-20 py-28 text-white text-justify leading-8">
          Für Ihre Mitarbeitenden und Führungskräfte: unabhängige und
          professionelle Unterstützung in allen Betriebsberiechen. Mit dem Ziel
          Arbeitsleistung wiederherzustellen und zu fördern, Probleme
          identifizieren und lösen, alle aktuelle relevante Fragestellungen
          aufgreifen und ausdiskutieren, hohe Beratungsqualität durch große
          Beratungsformate anbieten und Anbindung zu externen Fachstellen,
          Führungskultur und Betriebsklima verbessern. Angesichts der
          Digitalisierung der Arbeitswelt zeigt sich, dass die
          Unternehmensberatung und das Outsourcing in dem Gesundheitswesenseinen
          positiven Einfluss haben. Der Gesundheitssektor wächst weltweit in
          absoluten als auch in relativen Zahlen, mit einem starken Anstieg der
          Beschäftigung. Eine breite Palette von Beratungsdienstleistungen, die
          für das Gesundheitswesen gefunden werden können, erlauben es dem
          Unternehmen einen hohen Grad an Entwicklung, Spezialisierung und Reife
          zu erreicht und sich auf ihre Schlüsselkompetenzen konzentrieren und
          die von ihnen benötigten Beratungsdienste effizient auslagern.
        </div>
        <div className="lg:w-6/12">
          <img src={Image5} alt="default" className="w-full h-full object-fit" />
        </div>
      </div>
      <div className="w-full lg:flex lg:justify-between lg:px-[200px] py-5 lg:py-36">
        <GreenRadiusButton title="Patienten & Ärzte (med. Beratung)" />
        <GreenRadiusButton title="Patienten & Ärzte (med. Beratung)" />
        <GreenRadiusButton title="Patienten & Ärzte (med. Beratung)" />
      </div>
    </MainLayout>
  );
};

export default Index;
