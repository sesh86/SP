import React,{Component} from 'react';
import axios from 'axios';
import  '../login.css';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {alert: ""};
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit=(e)=>{
         e.preventDefault();
        
        //const loginData = new FormData(e.target);
        var loginData = {};
        var elements = e.target.elements;
        for (let i = 0; i < elements.length; i++){
            loginData[elements[i].name] = elements[i].value;
        }
        axios.post('login', loginData)
        .then(res => { 
            if (res.success == false) {
                this.setState({alert: res.message});
            }
            else {
                this.setState({alert: ''});
                //this.context.history.push('/dashboard');
            }
        });

    }

    
    render() {
        return (
            
            <div className="container">
                <div className="row">
                <div hidden={!this.state.alert} className="alert alert-danger" role="alert">{this.state.alert}</div>
               
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    
                    <div className="card card-signin my-5">
                    <div className="card-body">
                        <div><img src="logo.png" alt="iTrain"/></div>
                 
                        <form className="form-signin" method="post" onSubmit={this.handleSubmit}>
                        <div className="form-label-group">
                            <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={e => this.handleChange(e)} required autofocus />
                            <label for="inputEmail">Email address</label>
                        </div>

                        <div className="form-label-group">
                            <input type="password" name="passwd" id="inputPassword" className="form-control" placeholder="Password" onChange={e => this.handleChange(e)} required />
                            <label for="inputPassword">Password</label>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit" >Sign in</button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}
