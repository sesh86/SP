import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class Topic extends React.Component {

    constructor(props) {
        super(props);
        this.state={topics:[]}
     }
     componentDidMount(){
        axios('topics')
        .then(res=>{console.log(res);this.setState({topics:res.data})});
      }
      
    
    render() {
        return (
            <div className="container">
                <h1>Topic</h1>
                <table className="table table-striped">
                <thead>
                  
                     <ul class="nav nav-pills nav-fill">
                         <li class="nav-item">
                           <a class="nav-link active" href="CourseAdd">Add</a>
                          </li>
                        </ul>
                    
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
              <td>
                            <button>edit</button>
                                <button>delete</button>
                            </td>
             
              </tr>
        ))}
        </tbody>);
 } 

export default Topic;

    
 