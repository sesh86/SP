import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Course from './components/Course';
import CourseAdd from './components/CourseAdd';
import Dashboard from './components/Dashboard';
import Topic from './components/Topic';
import TopicAdd from './components/TopicAdd';
import TopicEdit from './components/TopicEdit';

import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
    <div className="App">
        <Route path="/login" component={Login}/>
        {/* <Route path="/topics/:id/:name" component={Topic}/>
        <Route path="/courses" component={Course}/> */}
        <Route path="/dashboard" component={Dashboard}/>

        <Route path="/course" component={Course}/>
        <Route path="/CourseAdd"component={CourseAdd}/>

        <Route path="/topics" component={Topic}/>
        <Route path="/topic-add" component={TopicAdd}/>
        <Route path="/topic-edit" component={TopicEdit}/>

    
      
    </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

