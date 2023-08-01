import { useReducer, useState, useLayoutEffect } from "react";
import NavIcon from "../../../assets/icon/nav.svg";
import Carousel from "./Carousel";

const menus = [
  "Medizinische Beratung",
  "Vermittlung medizinischer Firmen",
  "Verwaltung",
  "Weitere Dienstleistungen im Gesundheitssektor",
];

const HeaderDropdown = (props) => {
  const path = window.location.pathname;
  const opacity = path === "/about" ? 0.8 : 1;

  const [open, setOpen] = useReducer((state) => !state, false);
  const [menu, setMenu] = useState(-1);
  const [footerHeight, setFooterHeight] = useState(0);
  const handleClickMenu = (index) => {
    setMenu(index);
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      const language_setting = document.getElementById("language_setting");
      if (language_setting) {
        setFooterHeight(language_setting.offsetTop - window.scrollY);
      }
    }, 200);
    window.addEventListener("scroll", () => {
      const language_setting = document.getElementById("language_setting");
      if (language_setting) {
        setFooterHeight(language_setting.offsetTop - window.scrollY);
      }
    });
  }, []);

  return (
    <div className="relative">
      {props.showLine && !open && (
        <div className="invisible lg:visible">
          <div
            className="fixed border-l-2 border-blue-1 top-0 left-[105px] z-20"
            style={{
              height: footerHeight - 20,
            }}
          />
          <div
            className="fixed border-l-2 border-blue-1 left-[145px] z-20"
            style={{
              height: window.visualViewport.height - footerHeight - 40,
              top: footerHeight + 40,
            }}
          />
        </div>
      )}
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
        <div
          className="absolute left-0 top-[110px] lg:top-[60px] w-screen lg:w-[44vw] lg:h-screen bg-transparent lg:bg-white items-center animate-fadeIn lg:animate-fadeInLeft z-[1001]"
          style={{ opacity: opacity }}
        >
          <div className="lg:px-[72px] py-4">
            <ul className="space-y-2 font-medium bg-white pb-20 px-[10%] lg:px-0">
              {menus.map((value, index) => {
                return (
                  <li
                    key={index}
                    className={`w-fit text-xl font-['Poppins'] py-2 lg:py-3 cursor-pointer`}
                    onClick={() => handleClickMenu(index)}
                  >
                    <span
                      className={`pb-1 ${
                        menu === index
                          ? `font-bold text-green-1 border-b-2 border-green-1`
                          : "text-blue-1 border-b-2 border-white"
                      }`}
                    >
                      {value}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          {menu >= 0 && (
            <div className="lg:px-[100px] lg:pt-0 lg:py-[86px] mt-[-80px] lg:mt-0 bg-transparent lg:bg-white animate-fadeIn lg:animate-fadeIn">
              <Carousel menu={menu} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderDropdown;
