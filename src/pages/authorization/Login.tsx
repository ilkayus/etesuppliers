import { useReducer } from "react";
import { authReducer, initialState } from "./authReducer";
import { useNavigate, useLocation } from "react-router-dom";
import API from "api";
import useAuth from "hooks/useAuth";
import "./style/Login.css";
import Components from "components";
import { icons } from "images";

const Login = () => {
  //------------------------------
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //------------------------------
  const handleChange = (e: any) => {
    dispatch({
      type: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    dispatch({ type: "validateInputsLogin", payload: undefined });
    if (!state.inputsValidLogin) return;
    const res = await API.auth.login(state.email, state.password);
    setAuth(res);
    localStorage.setItem("user", JSON.stringify(res));
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
              className={
                state.email.length > 0
                  ? state.emailValid
                    ? "si--username-input-valid"
                    : "si--username-input-invalid"
                  : ""
              }
              required
              value={state.email}
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
                state.password.length > 0
                  ? state.passwordValid
                    ? "si--username-input-valid"
                    : "si--username-input-invalid"
                  : ""
              }
              required
              value={state.password}
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
