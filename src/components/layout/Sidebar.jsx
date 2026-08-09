import { useContext } from "react";
import { FaCog, FaHome, FaSignOutAlt, FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const { logout } = useContext(AuthContext);

  const links = [
    {
      path: "/",
      label: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/tasks",
      label: "Tasks",
      icon: <FaTasks />,
    },
    {
      path: "/settings",
      label: "Settings",
      icon: <FaCog />,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Task Manager</h2>
      </div>
      <nav className="sidebar-nav">
        {links.map((link) => (
          <NavLink to={link.path} key={link.label} className="sidebar-link">
            {link.icon}
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={logout}>
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
