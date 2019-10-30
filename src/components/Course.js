import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class Course extends React.Component {

    constructor(props) {
        super(props);
        this.state={course:[]}
     }
     componentDidMount(){
        axios('courses')
        .then(res=>{console.log(res);this.setState({course:res.data})});
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
                            <th scope="col">id</th>
                            <th scope="col">Title</th>
                            <th scope="col">duration</th>
                            <th scope="col">course_fee</th>
                            <th scope="col">course_description</th>
                            <th scope="col" className="col-md5">icon</th>
                        </tr>
                    </thead>
                    <tbody>
                    <Courses courses={this.state.course}></Courses>
                    </tbody>
                    
                    
                </table>
                
            </div>
        )
    }
}
 const Courses =(props)=>{
    return (<tbody>
        {props.courses.map(course => (
          <tr className="text-left" key={course.id}>
              <td>{course.title}</td>
              <td>{course.duration}</td>
              <td>{course.course_fee}</td>
              <td>{course.course_description}</td>
              <td>{course.icon}></td>
              </tr>
        ))}
        </tbody>);
 } 

export default Course;