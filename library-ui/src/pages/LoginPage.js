import { Link } from "react-router-dom";
import sass from "../styles/pages/login.module.scss";

function LoginPage() {
  return (
    <div className={sass.login_wrapper}>
      <h1 className={sass.login_title}>Welcome to Library</h1>
      <div className={sass.login}>
        <div className={sass.login__user}>
          <label htmlFor="username" className="login_label--user">
            Username:
          </label>
          <input type="text" name="username" className={sass.login__user__input} />
        </div>

        <div className={sass.login__pass}>
          <label htmlFor="password" className="login-label--pass">
            Password:
          </label>
          <input type="password" name="password" className={sass.login__pass__input} />
        </div>

        <Link to="/main" className={sass.login__btn}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
