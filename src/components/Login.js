import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    
    render() {
        return (
            <div className="container">
                Login Form
            </div>
        )
    }
}

export default Login;