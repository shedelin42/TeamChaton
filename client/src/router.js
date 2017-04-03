/**
 * Created by Fernan on 03/04/2017.
 */
import React, {Component} from 'react';

// react router
import {
    BrowserRouter as Router,
    Route,
    hashHistory,
    Link
} from 'react-router-dom';

//import views
import About from './views/about';
import Home from './views/home';
import Contact from './views/contact';
import Header from './partials/header';

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    }
];

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
);

const AppRouter = () => (
    <Router>
        <div>
            <Header/>
            <Route exact path="/" component={Home}/>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)

export default AppRouter;