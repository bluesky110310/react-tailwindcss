import Layout from "../../containers/layout/Layout";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";
import { useEffect } from "react";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-wrap lg:flex-nowrap">
        <Sidebar />
        <Carousel />
      </div>
    </Layout>
  );
};

export default Index;
