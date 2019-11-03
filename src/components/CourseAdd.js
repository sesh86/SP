import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class CourseAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {course: ""}

     }
            
        
     handleSubmit=(e)=>{
         e.preventDefault()
         var data={};
         for (let i=0; i <e.target.elements.length;i++){
         data[e.target.elements[i].name]=e.target.elements[i].value;
         }
         alert("ddd");
         console.log(data);
         axios({
             method: 'post',
             url: 'courses',
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
                <h1>CourseAdd</h1>
                <form onSubmit={this.handleSubmit} method="post">
                   <div class="form-group">
                     <label for="exampleFormControlInput1">Tittle</label>
                      <input type="text" name="course_title" class="form-control" id="exampleFormControlInput1"  placeholder="Tittle"/>
                    </div>
                    <div class="form-group">
                     <label for="exampleFormControlTextarea1">Description</label>
                     <textarea class="form-control" name="description" id="exampleFormControlTextarea1"  placeholder="Description"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">File</label>
                        <input type="file" class=" " placeholder="upload"/>

                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>




            </div>
        )
    }   

}   
export default CourseAdd;













