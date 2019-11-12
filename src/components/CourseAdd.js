import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class CourseAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
          }

     }
     onChangeHandler=event=>{

        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
          })
        }
            
        
     handleSubmit=(e)=>{
         e.preventDefault()
          var data={};
          for (let i=0; i <e.target.elements.length;i++){
          data[e.target.elements[i].name]=e.target.elements[i].value;
          }
         let curr=this
         
         //console.log(data);
        // var formData = new FormData(e.target);

         axios({
             method: 'post',
             url: 'courses',
             data: data,
             config: { headers: {'Content-Type': 'multipart/form-data' }}

            }) 
            
            .then(function(response){
                console.log("here"+response);
         //       curr.props.history.push('/Courses')
            })
            .catch(function(response){
                console.log(response);
            });
            
     }
     render() {

        return (
            <div className="container">
                <h1>Add Course</h1>
                <form onSubmit={this.handleSubmit} method="post">
                   <div class="form-group">
                     <label for="exampleFormControlInput1">Tittle</label>
                      <input type="text" name="title" class="form-control" id="exampleFormControlInput1"  placeholder="Tittle"/>
                    </div>
                    <div class="form-group">
                     <label for="exampleFormControlInput1">Duration(days)</label>
                      <input type="text" name="duration" class="form-control" id="exampleFormControlInput1"  placeholder="duration"/>
                    </div>
                    <div class="form-group">
                     <label for="exampleFormControlInput1">Fee</label>
                      <input type="text" name="course_fee" class="form-control" id="exampleFormControlInput1"  placeholder="fee"/>
                    </div>
                    <div class="form-group">
                     <label for="exampleFormControlTextarea1">Description</label>
                     <textarea class="form-control" name="description" id="exampleFormControlTextarea1"  placeholder="Description"></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="exampleFormControlInput1">File</label>
                        <input type="file" name="file" onChange={this.onChangeHandler}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>




            </div>
        )
    }   

}   
export default CourseAdd;













