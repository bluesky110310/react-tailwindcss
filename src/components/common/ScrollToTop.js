import ScrollToTopImage from "../../assets/icon/scroll-to-top.svg";

const ScrollToTop = ({offset}) => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed cursor-pointer text-green text-5xl z-[1] right-[2%] p-0`}
      style={{bottom: offset}}
      onClick={handleClick}
    >
      <img src={ScrollToTopImage} alt="scroll to top" />
    </button>
  );
};

export default ScrollToTop;
