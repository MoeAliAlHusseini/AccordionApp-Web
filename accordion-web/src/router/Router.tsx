import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Details from "../containers/Details";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
        </Routes>
    );
};

export default Router;