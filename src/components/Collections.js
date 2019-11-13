import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class Collections extends React.Component {
    constructor(props) {
        super(props);
        this.state = {subtopic: "", alert: ''}
     }

     componentDidMount(){
      axios('/api/collections/' + this.props.match.params.id)
      .then(res=>{console.log(res);this.setState({subtopic:res.data})});
    }

    handleSubmit=(e)=>{
      e.preventDefault();
     // console.log(e.target.elements);
      var data = {};
      this.setState({alert: ''});
      for (let i = 0; i < e.target.elements.length; i++) {
        if (e.target.elements[i].name == 'File' && e.target.elements[i].value == false) {
          this.setState({alert: 'Please give FIle'});
          return false;
        }
       else if (e.target.elements[i].name == 'Link' && e.target.elements[i].value == false) {
          this.setState({alert: 'Please give Link'});
          return false;
        }
      
        data[e.target.elements[i].name] = e.target.elements[i].value;
      }

      //console.log(data);
      //axios.post('/subtopics' , data)
      //.then(res=>{console.log(res);this.setState({subtopic:res.data})});
       let curr=this;
      axios({
        method: 'post',
        url: 'Collections',
        data: data
      //  config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(function (response) {
            //handle success
            console.log("here"+response);
            console.log('test')
            curr.props.history.push('/Collections/' + curr.props.match.params.topicId)
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
    }
   
     render() {
        return (
            <div className="container">
                <h1> Collections </h1>
                
                <form onSubmit={this.handleSubmit} method="post">
                <div className="alert alert-danger ">{this.state.alert}</div>
                 
                 
                
                 <div class="form-group">
                 <select><option value="LINK">Link</option> <option value="FILE">File</option>
                 </select>

                 
                 
                 
                 <label for="formGroupExampleInput2">File :</label>
                 <input type="file" name="topic_collections"class=" " placeholder="upload"/>
                 <label for="formGroupExampleInput2">Link :</label>
                 <input type="link" name="topic_collections"class=" " placeholder="Link"/>
                 
                
                 
                 
                 </div>  
                   <button type="submit" class="btn btn-success">Submit</button>
                </form>


                
            

      <table className="table table-striped">
        <thead>
        <tr> 
            
            
            <th scope="col">S.no</th>
            <th scope="col">Collections</th>
            
            <th scope="col"></th> 
            <th scope="col"></th> 
            

                                                                 
        </tr> 
      </thead>
         </table>
           </div>
          
        ) 
    }   

}   
export default Collections;