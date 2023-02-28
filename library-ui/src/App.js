import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import NotFound from "./pages/NotFound";

import sass from "./app.module.scss";

function App() {
  return (
    <>
      <Header />
      <div className={sass.container}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
