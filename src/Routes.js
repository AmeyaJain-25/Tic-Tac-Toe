import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "./App";
import ComputerPlay from "./ComputerPlay";
import DualPlay from "./DualPlay"

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/two-player-game" component={DualPlay} />
                <Route path="/one-player-game" component={ComputerPlay} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;