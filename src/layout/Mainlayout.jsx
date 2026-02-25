import { Outlet } from "react-router";
import Navbar from "../component/Navbar";

const Mainlayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;
