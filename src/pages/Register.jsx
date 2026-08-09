import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRegister({ ...formRegister, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const regex = /\w+[!@#$%^&*)(_]\d+/;
    if (!formRegister.name.trim()) {
      toast.error("Name Is Required");
      return;
    }
    if (!formRegister.email.trim()) {
      toast.error("Email Is Required");
      return;
    }
    if (!formRegister.password.trim()) {
      toast.error("Password Is Required");
      return;
    }
    if (
      formRegister.password.trim().length < 8 ||
      !formRegister.password.match(regex)
    ) {
      toast.error("Password Not Valid");
      return;
    }
    localStorage.setItem("user", JSON.stringify(formRegister));
    toast.success("La création du compte a réussi.");
    navigate("/login");
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit} className="form-register">
        <h2>Register</h2>
        <article>
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            id="name"
            name="name"
            value={formRegister.name}
            onChange={handleChange}
            placeholder="Entre Your Name"
          />
        </article>
        <article>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formRegister.email}
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
            value={formRegister.password}
            onChange={handleChange}
          />
        </article>
        <button type="submit">Register</button>
        <Link to="/login">j'ai déjà un compte</Link>
      </form>
    </div>
  );
};

export default Register;
