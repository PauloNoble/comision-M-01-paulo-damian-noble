import styles from "../styles/AuthForm.module.css";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../utils/consts";

function RegisterForm() {
  const ref = useRef(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const { avatar, email, username, password } = e.target.elements;

    const formData = new FormData(e.target);

    const avatarURL = formData.get("avatarURL");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    const user = {
      avatarURL,
      email,
      username,
      password,
    };

    const req = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (req.status !== 201) return alert("Error al registrar usuario");
    ref.current.reset();

    navigate("/login");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginBox}>
        <form onSubmit={handleSubmit} ref={ref}>
          <h2>Register</h2>

          <div className={styles.inputBox}>
            <input
              type="url"
              placeholder="www.my-avatar.com"
              name="avatarURL"
              required
            />
            <label>Avatar</label>
          </div>

          <div className={styles.inputBox}>
            <input
              type="email"
              placeholder="email@email.com"
              name="email"
              required
            />
            <label>Email</label>
          </div>

          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="Jhon Doe"
              name="username"
              required
            />
            <label>Username</label>
          </div>

          <div className={styles.inputBox}>
            <input
              type="password"
              placeholder="********"
              name="password"
              required
            />
            <label>Password</label>
          </div>

          <button>Register</button>

          <div className={styles.registerLink}></div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
