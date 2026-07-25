import { FaCog, FaHome, FaSignOutAlt, FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
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
        {links.map((lin) => (
          <NavLink to={lin.path} key={lin.label} className="sidebar-link">
            {lin.icon}
            <span>{lin.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <button className="logout-btn">
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
