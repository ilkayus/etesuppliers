import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import cocktailAPI from "services";
// import UserContext from "contextAPI/UserContext";
import "./style/Login.css";
import * as authHelpers from "./authorization.helper";
import Components from "components";
import { icons } from "images";

export interface Props {}

const Register = () => {
  // const navigate = useNavigate();
  //   const { user, setUser } = useContext(UserContext);
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
    // const res = await cocktailAPI.authorization.signUp(
    //   form.email,
    //   form.username,
    //   form.password,
    //   form.passwordConfirm
    // );
    // setUser(res);
    // navigate("/");
  };

  return (
    <section className="si--page">
      <div className="si--container">
        <Components.AnimatedLogo />
        <h1>Register</h1>
        <form method="post" onSubmit={handleSubmit}>
          <label htmlFor="username" className="username">
            <span className="username-icon">
              <img src={icons.user} alt="username icon" />
            </span>
            <input
              type="text"
              name="username"
              placeholder="Username"
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
          <label htmlFor="passwordConfirm" className="username">
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
              // onClick={() => navigate("/signin")}
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
