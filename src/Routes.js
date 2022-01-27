import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home/index";
import Materias from "./Pages/Materias/index";

const Routers = () => {

    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materias" element={<Materias />} />
       
    </Routes>

    );
}
export default Routers;