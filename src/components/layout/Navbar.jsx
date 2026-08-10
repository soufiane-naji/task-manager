import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { SiGoogletasks } from "react-icons/si";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <SiGoogletasks className="logo-icon" />
          <h3 className="logo-text">Task Manager</h3>
        </div>

        <div className="navbar-actions">
          <span className="user-name">{user.name}</span>
          <button className="theme-btn">
            <MdOutlineDarkMode className="theme-icon" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
