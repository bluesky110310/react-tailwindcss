import { useReducer, useState, useLayoutEffect } from "react";
import NavIcon from "../../../assets/icon/nav.svg";
import Item1 from "./Item1";
import Item2 from "./Item2";
import Item3 from "./Item3";
import Item4 from "./Item4";

const menus = [
  "Medizinische Beratung",
  "Vermittlung medizinischer Firmen",
  "Verwaltung",
  "Weitere Dienstleistungen im Gesundheitssektor",
];

const HeaderDropdown = (props) => {
  const [open, setOpen] = useReducer((state) => !state, false);
  const [menu, setMenu] = useState(-1);
  const [footerHeight, setFooterHeight] = useState(0)
  const handleClickMenu = (index) => {
    setMenu(index);
  };
  const renderItem = () => {
    switch (menu) {
      case 0:
        return <Item1 />;
      case 1:
        return <Item2 />;
      case 2:
        return <Item3 />;
      case 3:
        return <Item4 />;
      default:
        return <></>;
    }
  };
  

  useLayoutEffect(() => {
    setTimeout(() => {
      const language_setting = document.getElementById("language_setting");
      if (language_setting) {
        setFooterHeight(language_setting.offsetTop - window.scrollY)
      }
    }, 200)
    window.addEventListener("scroll", () => {
      const language_setting = document.getElementById("language_setting");
      if (language_setting) {
        setFooterHeight(language_setting.offsetTop - window.scrollY)
      }
    })
  }, []);

  return (
    <div className="relative">
    {
      props.showLine && !open && <div className="invisible lg:visible">
        <div
          className="fixed border-l-2 border-blue-1 top-0 left-[105px] z-20"
          style={{
            height: footerHeight - 20
          }}
        />
        <div
          className="fixed border-l-2 border-blue-1 left-[145px] z-20"
          style={{
            height: window.visualViewport.height - footerHeight - 40,
            top: footerHeight + 40
          }}
        />
      </div>
    }
      <div className="px-9" onClick={setOpen}>
        <img
          className="cursor-pointer"
          src={NavIcon}
          alt="Navigation icon"
          width={42}
          height={28}
        />
      </div>
      {open && (
        <div className="absolute left-0 top-[110px] lg:top-[60px] w-screen lg:w-[35vw] lg:h-screen bg-transparent lg:bg-white items-center h-[calc(100vh-130px)] overflow-auto">
          <div className="lg:px-[72px] py-4">
            <ul className="space-y-2 font-medium bg-white pb-20 px-[10%] lg:px-0">
              {menus.map((value, index) => {
                return (
                  <li
                    key={index}
                    className={`text-xl font-['Poppins'] py-2 lg:py-3 cursor-pointer`}
                    onClick={() => handleClickMenu(index)}
                  >
                    <div
                      className={`pb-1 ${
                        menu === index
                          ? `font-bold text-green-1 border-b-2 border-green-1`
                          : "text-blue-1 border-b-2 border-white"
                      }`}
                    >
                      {value}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="lg:px-[100px] lg:pt-0 lg:py-[86px] mt-[-80px] lg:mt-0 bg-transparent lg:bg-white">{renderItem()}</div>
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
