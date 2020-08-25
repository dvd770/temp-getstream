import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import LogInPage from '../LogInPage/LogInPage'
import ChatPage from "../LogInPage/chatPage";





export default function Routing() {
    return (<>
        <Router>
            <Switch>
                <Route exact path="/">
                    <ChatPage  />
                </Route>
                <Route path="/">
                    <ChatPage />
                </Route>
            </Switch>
        </Router>
    </>
    );
}

