import styles from "../styles/AuthForm.module.css";

import { useId, useRef } from "react";
import { API_URL } from "../utils/consts";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const ref = useRef(null);

  const emailRef = useId();
  const passwordRef = useId();

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const user = {
      email,
      password,
    };

    const req = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (req.status !== 200) {
      ref.current.reset();
      return alert("Error al iniciar sesión");
    }

    const res = await req.json();

    login(res);

    ref.current.reset();

    navigate("/");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.loginBox}>
        <form onSubmit={handleSubmit} ref={ref}>
          <h2>Login</h2>

          <div className={styles.inputBox}>
            <span className={styles.icon}>
              <i className="fa-solid fa-envelope" />
            </span>
            <input type="email" name="email" id={emailRef} required />
            <label htmlFor={emailRef}>Email</label>
          </div>

          <div className={styles.inputBox}>
            <span className={styles.icon}>
              <i className="fa-solid fa-lock"></i>
            </span>
            <input type="password" name="password" id={passwordRef} required />
            <label htmlFor={passwordRef}>Password</label>
          </div>

          <button>Login</button>

          <div className={styles.registerLink}>
            <p>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
