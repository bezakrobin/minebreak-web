import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from '../../pages/Home/Home';
import { Blog } from "../../pages/Blog/Blog";
import { Guides } from "../../pages/Guides/Guides";
import { Store } from "../../pages/Store/Store";

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/blog" element={ <Blog/> }/>
                <Route path="/guides" element={ <Guides/> }/>
                <Route path="/store" element={ <Store/> }/>
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}