import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/Login';
import Course from './components/Course';
import CourseAdd from './components/CourseAdd';
import CourseEdit from './components/CourseEdit';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

import Subtopic from './components/Subtopic';
import SubtopicAdd from './components/SubtopicAdd';
import SubtopicEdit from './components/SubtopicEdit';
  
import Topic from './components/Topic';
import TopicAdd from './components/TopicAdd';
import TopicEdit from './components/TopicEdit';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
    <div className="App">
         <Route exact path="/" component={App}/>
        <Route path="/login" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
        <Route path="/subtopics/:topicId" component={Subtopic}/>

       

        <Route path="/subtopic-add/:topicId" component={SubtopicAdd}/>
        <Route path="/subtopic-edit/:id" component={SubtopicEdit}/>
        

        <Route path="/courses" component={Course}/>
        <Route path="/course-add"component={CourseAdd}/>
        <Route path="/course-edit/:id" component={CourseEdit}/>
        <Route path="/profile" component={Profile}/>

        <Route path="/topics/:courseId" component={Topic}/>
        <Route path="/topic-add/:courseId"  render={(props) => <TopicAdd {...props} />}/>
        <Route path="/topic-edit/:id" component={TopicEdit}/>

    
      
    </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

