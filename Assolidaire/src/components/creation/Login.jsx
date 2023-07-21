import { useEffect, useState } from "react";
import * as Services from "../../service/Admins.service";
/* eslint-disable*/
export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isAdmin, setIsAdmin] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    Services.getAdmins().then((data) => setIsAdmin(data[0]));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAdmin?.mail === email && isAdmin?.password === pass) {
      setIsLoggedIn(true);
    } else {
      setError("invalid email or password");
    }
  };
  return (
    <div className="auth-form-container">
      <h2 className="login">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <p>{error}</p>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
