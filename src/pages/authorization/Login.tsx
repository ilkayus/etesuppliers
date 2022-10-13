import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import API from "api";
import useAuth from "hooks/useAuth";
import "./style/Login.css";
import * as authHelpers from "./authorization.helper";
import Components from "components";
import { icons } from "images";

export interface Props {}

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setEmailValid(authHelpers.EMAIL_REGEX.test(form.email));
    setPasswordValid(authHelpers.PASSWORD_REGEX.test(form.password));
  }, [form]);

  const handleChange = (e: any) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!emailValid || !passwordValid) return;
    const res = await API.auth.login(form.email, form.password);
    setAuth(res);
    navigate(from, { replace: true });
  };

  return (
    <section className="si--page">
      <div className="si--container si--container-login">
        <Components.AnimatedLogo page="login" />
        <h1>Login</h1>
        <form method="post" onSubmit={handleSubmit}>
          <label htmlFor="username" className="username">
            <span className="username-icon">
              <img src={icons.envelop} alt="username icon" />
            </span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className={
                form.email.length > 0
                  ? emailValid
                    ? "si--username-input-valid"
                    : "si--username-input-invalid"
                  : ""
              }
              required
              // pattern={authHelpers.EMAIL_PATTERN}
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="password" className="username">
            <span className="username-icon">
              <img src={icons.lockOpen} alt="password icon" />
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={
                form.password.length > 0
                  ? passwordValid
                    ? "si--username-input-valid"
                    : "si--username-input-invalid"
                  : ""
              }
              // pattern={authHelpers.PASSWORD_PATTERN}
              required
              value={form.password}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="submit-button">
            <p>Sign In</p>
            <img src={icons.rightArrow} alt="sing in submit icon" />
          </button>
          <span className="create-account">
            <p>Do you need an account?</p>
            <button
              type="button"
              className="create-account-button"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </span>
        </form>
      </div>
    </section>
  );
};

export default Login;
