import { Outlet } from "react-router";
import Navbar from "../component/Navbar";

const Mainlayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto py-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Mainlayout;
