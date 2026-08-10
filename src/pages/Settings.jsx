import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Settings = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="settings-page">
      <div className="setting-header">
        <div>
          <h1>Settings</h1>
          <p>Account Information</p>
        </div>
        <button className="btn-logout" onClick={logout}>
          Logout
        </button>
      </div>
      <div className="settings-information">
        <article>
          <h3>Name</h3>
          <p>{user.name}</p>
        </article>
        <article>
          <h3>Email</h3>
          <p>{user.email}</p>
        </article>
      </div>
    </div>
  );
};

export default Settings;
