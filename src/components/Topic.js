import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class Topic extends React.Component {

    constructor(props) {
        super(props);
        this.state={topics:[]}
     }
     componentDidMount(){
         axios('topics/' + this.props.match.params.courseId)
        .then(res=>{console.log(res);this.setState({topics:res.data})});
      }
      
    
    render() {
        return (
            <div className="container">
                <h1>Topics</h1>
                 
                <NavLink to={"/topic-add/"+this.props.match.params.courseId}><button>Add</button></NavLink>
                  <table className="table table-striped">
                <thead>
                  
                    
                        <tr> 
                            
                            <th scope="col">Title</th>
                            <th scope="col">Action</th>
                           
                            
                        </tr>
                    </thead>

                    <tbody>
                    <TopicData topics ={this.state.topics}></TopicData>
                    </tbody>
                    
                    
                </table>
                
            </div>
        )
    }
}
 const TopicData =(props)=>{
    return (<tbody>
        {props.topics.map(topic=> (
          <tr className="text-left" key={topic.id}>
              <td>{topic.topic_title}</td>
              <td><NavLink to={"/subtopics/"+topic.id}><button type="button" class="btn btn-success">Subtopics</button>  </NavLink></td>
              
              <td><NavLink to={"/topic-edit/"+topic.id}><button type="button" class="btn btn-warning">Edit</button>  </NavLink></td>
              
              <td> <button type="button" class="btn btn-danger" onClick={()=> props.delTopic(topic.id)} key={topic.id}>Delete</button> </td>
               </tr>
        ))}
        </tbody>);
 } 

export default Topic;

    
 