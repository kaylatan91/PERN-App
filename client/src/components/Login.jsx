import { useState } from "react";
import { login } from "../../fetching";
import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const response = await login(username, password);
    // console.log("response.headers", response.data);

    // const headers = response.headers;
    // console.log("Response headers", headers);
    setToken(response.token);
    setUsername("");
    setPassword("");
    navigate("/recipes");
  };

  return (
    <>
      <div className="register-container">
        <h1>Sign In!</h1>
        <form onSubmit={handleSubmit}>
          <input
            id="username"
            autoFocus
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </>
  );
}
