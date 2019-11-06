import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class SubtopicAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {subtopic: "", alert: ''}
     }

     componentDidMount(){
      axios('/subtopic/' + this.props.match.params.id)
      .then(res=>{console.log(res);this.setState({subtopic:res.data})});
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
      //axios.post('/subtopics' , data)
      //.then(res=>{console.log(res);this.setState({subtopic:res.data})});

      axios({
        method: 'post',
        url: 'subtopics',
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
                <h1>Add Subtopic </h1>
                <form onSubmit={this.handleSubmit} method="post">
                <div className="alert alert-danger ">{this.state.alert}</div>
                  <div class="form-group">
                   <label for="formGroupExampleInput2">Title</label>
                   <input type="text" value={this.props.match.params.topicId} name="parent_id"></input>
                   <input type="text" name="topic_title" class="form-control" id="formGroupExampleInput2" placeholder="Title"/>
                 </div>
                 <div class="form-group">
                   <label for="formGroupExampleInput2">Description</label>
                   <textarea class="form-control" name="description" id="formGroupExampleInput2" placeholder="Description"/>
                 </div>
                
                 <div class="form-group">
                 <label for="formGroupExampleInput2">File :</label>
                 <input type="file" class=" " placeholder="upload"/>
                 </div> 

                 <div class="form-group">
                 <label for="formGroupExampleInput2">Link :</label>
                 <input type="link" class=" " placeholder="Link"/>
                 </div>  
                   <button type="submit" class="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }   

}   
export default SubtopicAdd;