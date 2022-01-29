import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/Home/index";
import Materias from "./Pages/Materias/index";
import Contact from './Pages/Contact/index';

const Routers = () => {

    return(
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/contact" element={<Contact />} />
       
    </Routes>

    );
}
export default Routers;