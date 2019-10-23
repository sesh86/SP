import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Course from './components/Course';
import Dashboard from './components/Dashboard';
import Topic from './components/Topic';
import TopicAdd from './components/TopicAdd';
import Topicedit from './components/Topicedit';

import {BrowserRouter,Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
    <div className="App">
        <Route path="/login" component={Login}/>
        {/* <Route path="/topics/:id/:name" component={Topic}/>
        <Route path="/courses" component={Course}/> */}
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/topics" component={Topic}/>
        <Route path="/topic-add" component={TopicAdd}/>
        <Route path="/topic-edit" component={Topicedit}/>
    
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

