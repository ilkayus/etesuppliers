import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import cocktailAPI from "services";
// import UserContext from "contextAPI/UserContext";
import "./style/Login.css";
import * as authHelpers from "./authorization.helper";
import Components from "components";
import { icons } from "images";

export interface Props {}

const Login = () => {
  // const navigate = useNavigate();
  //   const { user, setUser } = useContext(UserContext);
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
              // onClick={() => navigate("/signup")}
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
