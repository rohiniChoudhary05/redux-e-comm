import React from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router";

const App = () => {
  let {pathname} = useLocation();
  return (
    <div className=" h-screen">
     {pathname === "/" ? null :  <Navbar />}
      <div>
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
