import { Outlet } from "react-router";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Mainlayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto py-5">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
