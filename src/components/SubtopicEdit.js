import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';
axios.defaults.baseURL = 'http://localhost:8000/api/';

class SubtopicEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {subtopic: ""}
     }

     componentDidMount(){
      axios('/subtopic/' + this.props.match.params.id)
      .then(res=>{console.log(res);this.setState({subtopic:res.data})});

    }

    handleSubmit=(e)=>{
      e.preventDefault();
      console.log(e.target.elements);
      var data = {};
      for (let i = 0; i < e.target.elements.length; i++) {
        data[e.target.elements[i].name] = e.target.elements[i].value;
      }
       let curr=this;
      axios({
        method: 'post',
        url: 'subtopics/' + this.props.match.params.id,
        data: data,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success

            console.log("here"+response);
            console.log('test')
            curr.props.history.push('/subtopics/' + curr.props.match.params.topicId)
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
      console.log(data);
    }  
    
    render() {
        return (
            <div className="container">
                <h1>Edit Subtopic</h1>
                <form onSubmit={this.handleSubmit}>

                    <input type="hidden" class="form-control"
                     defaultValue={this.state.subtopic.id} 
                     id="formGroupExampleInput" placeholder="id"/>
                   
                  <div class="form-group">
                   <label for="formGroupExampleInput2">Title</label>
                   <input type="text" name="topic_title" 
                   class="form-control" id="formGroupExampleInput2" 
                   defaultValue={this.state.subtopic.topic_title} 
                   placeholder="title"/>
                 </div>
                 <div class="form-group">
                   <label for="formGroupExampleInput2">Description</label>
                   
                   <textarea rows="7" class="form-control" name="description" id="formGroupExampleInput2" placeholder="Description"/>
                 </div>
                
                 <div class="form-group">
                 <label for="formGroupExampleInput2">File</label>
                 <input type="file" class=" " placeholder="upload"/>
                  </div>                 

                 <div class="form-group">
                 <label for="formGroupExampleInput2">Link :</label>

                 <input type="link" class=" " placeholder="Link"/>
                 <button type="submit" class="btn btn-warning">Add</button>

                 </div>  
                   <button onclick type="submit" class="btn btn-primary">Submit</button>
                   
                </form>
            </div>
        )
    }   

}   
export default SubtopicEdit;