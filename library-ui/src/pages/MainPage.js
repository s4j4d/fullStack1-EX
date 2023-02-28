import sass from "../styles/pages/Main.module.scss";

function MainPage() {
  return (
    <div className={sass.wrapper}>
      <div className={sass.search}>
        <input type="text" className={sass.search__input} placeholder="search something..." />
        <button className={sass.search__input__btn}>
          <img src={require("./search.svg").default} alt="" />
        </button>
      </div>
      <div className={sass.listShow}>Show Container</div>
    </div>
  );
}

export default MainPage;
