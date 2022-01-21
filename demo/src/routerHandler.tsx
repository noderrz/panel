import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/auth/login";
import Home from "./pages/Home";

function RouterHandler() {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/auth/login" exact component={Login} />
        </Router>
    );
}

export default RouterHandler;
