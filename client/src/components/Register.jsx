import { useState } from "react";
import { register } from "../../fetching";
import { useNavigate } from "react-router-dom";

export default function Register({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const registerUser = await register(username, password);
    setToken(registerUser.token);
    console.log(registerUser, "registered user");
    setUsername("");
    setPassword("");
    navigate("/recipes");
  };

  return (
    <>
      <div className="register-container">
        <h1>Register!</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
