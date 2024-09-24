import { Outlet } from "react-router-dom";
import { NavBar } from "../ui/navBar/Navbar";

export default function LayoutMain() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
