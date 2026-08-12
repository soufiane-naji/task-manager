import { useContext } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { SiGoogletasks } from "react-icons/si";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { CiLight } from "react-icons/ci";

const Navbar = () => {
  const { darkMode, darkWhiteMode } = useContext(ThemeContext);

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
          <button className="btn theme-btn" onClick={darkWhiteMode}>
            {darkMode ? (
              <CiLight className="theme-icon" />
            ) : (
              <MdOutlineDarkMode className="theme-icon" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
