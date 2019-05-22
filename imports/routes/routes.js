import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import HomePage from '../components/HomePage'
import NavBar from '../components/NavBar'
import Login from '../components/Login'
import Signup from '../components/Signup'
import OptionsForm from '../components/OptionsForm'
import PlateList from '../components/PlateList'
import AddPlate from '../components/AddPlate';
import EditPlate from '../components/EditPlate';

export const history = createBrowserHistory()

export const routes = (
    <Router history={history}>
        <div>
            <NavBar />
            <Switch >
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/plate" component={AddPlate} />
                <Route exact path="/option" component={OptionsForm} />
                <Route exact path="/plateList" component={PlateList} />
                <Route exact path="/plates/edit/:id" component={EditPlate} />
            </Switch>
        </div>
    </Router>
)