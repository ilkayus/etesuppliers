import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import API from "api";
import useAuth from "hooks/useAuth";
import "./style/Login.css";
import * as authHelpers from "./authorization.helper";
import Components from "components";
import { icons } from "images";

export interface Props {}

const Register = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [usernameValid, setUsernameValid] = useState(false);
  const [passwordConfirmValid, setPasswordConfirmValid] = useState(false);

  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    setEmailValid(authHelpers.EMAIL_REGEX.test(form.email));
    setPasswordValid(authHelpers.PASSWORD_REGEX.test(form.password));
    setUsernameValid(authHelpers.USERNAME_REGEX.test(form.username));
    setPasswordConfirmValid(form.password === form.passwordConfirm);
  }, [form]);

  const handleChange = (e: any) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      !emailValid ||
      !passwordValid ||
      !usernameValid ||
      !passwordConfirmValid
    )
      return;
    const res = await API.auth.register(
      form.email,
      form.username,
      form.password,
      form.passwordConfirm
    );
    setAuth(res);
    navigate(from, { replace: true });
  };

  return (
    <section className="si--page">
      <div className="si--container si--container-register">
        <Components.AnimatedLogo page="register" />
        <h1>Register</h1>
        <form method="post" onSubmit={handleSubmit}>
          <label htmlFor="username" className="username username-register">
            <span className="username-icon">
              <img src={icons.user} alt="username icon" />
            </span>
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              className={
                form.username.length > 0
                  ? usernameValid
                    ? "si--username-input-valid"
                    : "si--username-input-invalid"
                  : ""
              }
              required
              // pattern={authHelpers.USERNAME_PATTERN}
              value={form.username}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className="username">
            <span className="username-icon">
              <img src={icons.envelop} alt="email icon" />
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
          <label
            htmlFor="passwordConfirm"
            className="username username-register"
          >
            <span className="username-icon">
              <img src={icons.envelop} alt="password icon" />
            </span>
            <input
              type="password"
              name="passwordConfirm"
              placeholder="Confirm Password"
              className={
                form.passwordConfirm.length > 0
                  ? passwordConfirmValid
                    ? "si--username-input-valid"
                    : "si--username-input-invalid"
                  : ""
              }
              // pattern={authHelpers.PASSWORD_PATTERN}
              required
              value={form.passwordConfirm}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className="submit-button">
            <p>Register</p>
            <img src={icons.rightArrow} alt="sing in submit icon" />
          </button>
          <span className="create-account">
            <p>Do you have an account?</p>
            <button
              type="button"
              className="create-account-button"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </span>
        </form>
      </div>
    </section>
  );
};

export default Register;
