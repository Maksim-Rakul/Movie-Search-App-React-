import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../routes/route";
import Header from "../Header/Header";
import css from "./App.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className={css.wrapper}>
        <Header />
        <Routes>
          {publicRoutes.map((route) => {
            return <Route path={route.path} element={<route.element />} />;
          })}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
