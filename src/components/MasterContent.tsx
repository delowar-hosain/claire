import { Outlet } from "react-router-dom";
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
