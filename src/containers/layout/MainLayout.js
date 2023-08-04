import { useEffect, useState } from "react";
import Header from "./Header";
import ScrollToTop from "../../components/common/ScrollToTop";
import Footer from "./Footer";

const MainLayout = (props) => {
  const [offset, setOffset] = useState(40);
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }

      const footer = document.getElementById("footer");
      if (footer) {
        const footerHeight = footer.offsetHeight;
        if (
          document.body.offsetHeight - window.innerHeight - window.scrollY <
          footerHeight
        ) {
          setOffset(
            40 +
              footerHeight -
              (document.body.offsetHeight - window.innerHeight - window.scrollY)
          );
        } else {
          setOffset(40);
        }
      }
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col">
      <Header {...props} scrollTop={scrollTop} />
      <div className="mt-[350px] lg:mt-[100px]">{props.children}</div>
      {scrollTop && <ScrollToTop offset={offset} />}
      <Footer />
    </div>
  );
};

export default MainLayout;
