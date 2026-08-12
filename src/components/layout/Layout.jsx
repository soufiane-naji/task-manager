import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Layout = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
