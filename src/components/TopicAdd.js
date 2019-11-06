import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class TopicAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {topic: "", alert: '', 'courseId': ''}
     }

    componentDidMount(){
        
        this.setState({courseId: this.props.match.params.courseId}); 
    }
  
     
    handleSubmit=(e)=>{
      e.preventDefault();
     // console.log(e.target.elements);
      var data = {};
      this.setState({alert: ''});
      for (let i = 0; i < e.target.elements.length; i++) {
        if (e.target.elements[i].name == 'topic_title' && e.target.elements[i].value == false) {
          this.setState({alert: 'Please give title'});
          return false;
        }
       else if (e.target.elements[i].name == 'description' && e.target.elements[i].value == false) {
          this.setState({alert: 'Please give description'});
          return false;
        }
      
        data[e.target.elements[i].name] = e.target.elements[i].value;
      }

      //console.log(data);
      //axios.post('/topics' , data)
      //.then(res=>{console.log(res);this.setState({topic:res.data})});

      axios({
        method: 'post',
        url: 'topics',
        data: data
      //  config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log("here"+response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }
   
     render() {
        return (
            <div className="container">
                <h1>Add Topic </h1>
                <form onSubmit={this.handleSubmit} method="post">
                <div className="alert alert-danger ">{this.state.alert}</div>
                  <div class="form-group">
                   <label for="formGroupExampleInput2">Title</label>
                   <input type="hidden" value={this.props.match.params.courseId} name="course_id"></input>
                   <input type="text" name="topic_title" class="form-control" id="formGroupExampleInput2" placeholder="Title"/>
                 </div>
                 <div class="form-group">
                   <label for="formGroupExampleInput2">Description</label>
                   <textarea class="form-control" name="description" id="formGroupExampleInput2" placeholder="Description"/>
                 </div>
                
                    <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }   

}   
export default TopicAdd;