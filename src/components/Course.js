import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class Course extends React.Component {

    constructor(props) {
        super(props);
     }

    
    render() {
        return (
            <div className="container">
                <h1>Courses</h1>
                <table className="table table-striped">
                    <thead>
                    <ul class="nav nav-pills nav-fill">
                     <li class="nav-item">
                      <a class="nav-link active" href="CourseAdd">Add</a>
                     </li>
                    </ul>
                        <tr> 
                            <th scope="col">s.no</th>
                            <th scope="col">Title</th>
                            <th scope="col" className="col-md5" >Description</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>node js</td>
                            <td>Node.js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.</td>
                            <td><button type="button"class="btn btn-success">edit</button><button type="button"class="btn btn-danger">delete</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>mongo db</td>
                            <td>MongoDB is an open source database management system (DBMS) that uses a document-oriented database model which supports various forms of data. ... Instead of using tables and rows as in relational databases, the MongoDB architecture is made up of collections and documents.</td>
                            <td><button type="button"class="btn btn-success">edit</button><button type="button"class="btn btn-danger">delete</button></td>

                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>express js</td>
                            <td>Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.</td>
                            <td><button type="button"class="btn btn-success">edit</button><button type="button"class="btn btn-danger">delete</button></td>

                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>react js</td>
                            <td>React is a template-based language combined with several functions that support output to HTML, i.e. the result of React's operation is HTML code. React.js implements the concept of reactive programming: modification of the result of its work depends on the state of component.</td>
                            <td><button type="button"class="btn btn-success">edit</button><button type="button"class="btn btn-danger">delete</button></td>

                        </tr>
                    </tbody>
                    
                    
                </table>
                
            </div>
        )
    }
}

export default Course;