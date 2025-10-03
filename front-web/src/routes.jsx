import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/home.jsx"

const Routes = () => {
    return(
        <BrowserRouter>

        <Route component = {Home} />
        </BrowserRouter>
    )
}

export default Rotas();