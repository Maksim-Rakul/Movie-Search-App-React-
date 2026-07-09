import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../../routes/route";
import Header from "../Header/Header";
import css from "./App.module.css";
import { useState } from "react";
import { PageTypeContext } from "../../context/PageContext";
import type { Type } from "../../services/multiService";

const App = () => {
  const [type, setType] = useState<Type>("movie");

  return (
    <BrowserRouter>
      <div className={css.wrapper}>
        <PageTypeContext.Provider value={{ type, setType }}>
          <Header />
          <main>
            <Routes>
              {publicRoutes.map((route) => {
                return <Route path={route.path} element={<route.element />} />;
              })}
            </Routes>
          </main>
        </PageTypeContext.Provider>
      </div>
    </BrowserRouter>
  );
};

export default App;
