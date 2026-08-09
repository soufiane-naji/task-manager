import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormLogin({ ...formLogin, [name]: value });
  };

  return (
    <div className="login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          login(formLogin);
        }}
        className="form-login"
      >
        <h2>Login</h2>
        <article>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formLogin.email}
            onChange={handleChange}
            placeholder="Entre Your Email"
          />
        </article>
        <article>
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id="password"
            name="password"
            value={formLogin.password}
            onChange={handleChange}
          />
        </article>
        <button type="submit">Login</button>
        <Link to="/register">Créer un nouveau compte</Link>
      </form>
    </div>
  );
};

export default Login;
