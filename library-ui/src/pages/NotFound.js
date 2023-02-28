import { Link } from "react-router-dom";
import sass from "../styles/pages/NotFound.module.scss";
import notFound from "./NotFound.png";

function NotFound() {
  return (
    <div className={sass.wrapper}>
      <div className={sass.notFound}>
        <h1 className={sass.notFound__title}>Not Found!</h1>
        <img src={notFound} alt="404 page" className={sass.notFound__img} />
      </div>
      <Link to="/login" className={sass.notFound__btn}>
        back to home
      </Link>
    </div>
  );
}

export default NotFound;
