import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import ConversionHistory from "./ConversionHistory";
import Converter from "./Converter";


const Routelinks = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Converter />} />
                <Route path="/exchange/history" element={<ConversionHistory />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routelinks;