import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class Course extends React.Component {

    constructor(props) {
        super(props);
        this.state={course:[], alert: ''}
     }
     componentDidMount(){
        axios('courses')
        .then(res=>{console.log(res);this.setState({course:res.data})});
      }
      
      delCourse = (id) => {
        
        this.setState({alert: ''});
        axios({
            method: 'post',
            url: 'courses/courseDelete/' + id
         
           })
            .then(res=>{
             var courses = this.state.course;
             //console.log(res);
             //return ;
             this.setState({alert: res.data.message}); 
             courses=courses.filter(e => String(e.id).indexOf(id)=== -1);
   
            //courses.splice(this,1);
            this.setState({course:courses});
        });
      }
    
    render() {
        return (
            <div className="container">
                <div className="alert alert-info">
                    {this.state.alert}
                </div>
                <h1>Courses</h1>
                <td><NavLink to={"/course-add/"}><button type="button" class="btn btn-primary">Add</button></NavLink></td>
                
                <table className="table table-striped">
                <thead>
                        <tr> 
                            <th scope="col">S.no</th>
                            <th scope="col">Title</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Fee</th>
                            
                            <th scope="col" className="col-md5">Icon</th>
                        </tr>
                    </thead>
                    
                    <Courses courses={this.state.course} delCourse={this.delCourse}></Courses>
                    
                    
                    
                </table>
                
            </div>
        )
    }
}
 const Courses =(props)=>{
    return (<tbody>
        
        {props.courses.map((course) => (
          <tr className="link hstrike" key={course.id}>
              <td></td>
              <td>{course.title}</td>
              <td>{course.duration}</td>
              <td>{course.course_fee}</td>
              <td>{course.icon}</td>
              
              <td><NavLink to={"/topics/"+course.id}><button type="button" class="btn btn-success">Topics</button></NavLink></td>

              <td><NavLink to={"/course-edit/"+course.id}><button type="button" class="btn btn-warning">Edit</button></NavLink></td>

              <td><button type="button" class="btn btn-danger" onClick={() => props.delCourse(course.id)}  key={course.id}>Delete</button></td>
              
            </tr>
    )   )}
    </tbody>);
} 

export default Course;