import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
     }

    
    render() {
        return (
            <div className="container">
                <h1>Dashboard</h1>
                <NavLink to="users">Users</NavLink>
                <NavLink to="courses">Courses</NavLink>
            </div>
        )
    }
}

export default Dashboard;