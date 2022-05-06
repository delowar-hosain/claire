import { Outlet } from "react-router-dom";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
const MasterContent: React.FC = () => {
  return (
    <>
    {/* <Header/> */}
      <div className="master-content">
        <Outlet />
      </div>
    </>
  );
};

export default MasterContent;
