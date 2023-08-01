import Header from "./Header";

const Layout = (props) => {
  return (
    <div className="w-full h-full flex flex-col">
      <Header showLine={true} {...props}/>
      <div className="mt-[350px] lg:mt-[100px]">{props.children}</div>
    </div>
  );
};

export default Layout;
