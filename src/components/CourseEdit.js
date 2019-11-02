import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';
axios.defaults.baseURL='http://localhost:8000/api/'


class CourseEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {course: ""}
     }

     componentDidMount(){
      axios('/course/' + this.props.match.params.id)
      .then(res=>{console.log(res);this.setState({course:res.data})});
    }
    handleSubmit=(e)=>{
      e.preventDefault()
      var data={};
      for (let i=0; i <e.target.elements.length;i++){
      data[e.target.elements[i].name]=e.target.elements[i].value;
      }
      
      //console.log(data);
      axios({
          method: 'post',
          url: 'courses/' + this.props.match.params.id,
          data: data,
         }) 
         
         .then(function(response){
             console.log("here"+response);
         })
         .catch(function(response){
             console.log(response);
         });
         
  }
   
     render() {
        return (
            <div className="container">
                <h1>Edit course</h1>
                <form onSubmit={this.handleSubmit} method="post">
                    <input type="hidden" class="form-control" defaultValue={this.state.course.id} id="formGroupExampleInput" placeholder="id"/>
                    <div class="form-group">
                     <label for="exampleFormControlInput1">Title</label>
                      <input type="text" name="title" class="form-control" id="exampleFormControlInput1" defaultValue={this.state.course.title} placeholder="Title"/>
                    </div>
                    <div class="form-group">
                     <label for="exampleFormControlInput1">Duration</label>
                      <input type="text" name="duration" class="form-control" id="exampleFormControlInput1" defaultValue={this.state.course.duration} placeholder="Duration"/>
                    </div>
                    <div class="form-group">
                     <label for="exampleFormControlInput1">Fee</label>
                      <input type="text" name="course_fee" class="form-control" id="exampleFormControlInput1" defaultValue={this.state.course.course_fee} placeholder="Fee"/>
                    </div>
                    <div class="form-group">
                     <label for="exampleFormControlInput1">Description</label>
                      <textarea name="course_description" class="form-control" id="exampleFormControlInput1" defaultValue={this.state.course.course_description} placeholder="Description"/>
                    </div>
                    
                  
                   <button type="submit"class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }   

}   
export default CourseEdit;













