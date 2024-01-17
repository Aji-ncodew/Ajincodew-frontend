import { Outlet } from "react-router-dom";
import NavBar from "./shared/navbar/NavBar";
import Footer from "./shared/footer/Footer";

function Layout() {
  return (
    <>
      <div
        style={{
          backgroundColor: "var(--main-bg-color)",
          color: "var(--main-text-color)",
        }}
      >
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
