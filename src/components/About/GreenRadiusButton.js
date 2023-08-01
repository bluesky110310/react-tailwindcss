const GreenRadiusButton = ({ title }) => {
  return (
    <div className="w-full lg:w-[455px] lg:mx-10">
      <div className="w-full h-[96px] text-xl font-bold text-white rounded-t-[70px] bg-green-1 flex justify-center items-center">
        {title}
      </div>
      <div className="w=full h-[350px]"></div>
    </div>
  );
};

export default GreenRadiusButton;
