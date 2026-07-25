import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default Layout;
