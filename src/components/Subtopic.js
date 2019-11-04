import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class Subtopic extends React.Component {

    constructor(props) {
        super(props);
        this.state={subtopic:[]}
     }
     componentDidMount(){
        axios('subtopics')
        .then(res=>{console.log(res);this.setState({subtopic:res.data})});
      }
      delSubtopic = (id) =>{
          axios({
          method: 'post',
          url: 'subtopics/subtopicDelete/' + id
          
      })
      .then(res=>{
          var subtopics = this.state.subtopics;
          console.log(subtopics);
          subtopics=subtopics.filter(e => e.id.indexOf(id)=== -1);
          this.setState({subtopic:Subtopics});
      });
    }
        
    render() {
       
        return (
            <div className="container">
                
                <h1>Subtopics</h1>
                <form >
                <td><NavLink to={"subtopic-add"}>
                <button type="button" class="btn btn-warning">Add</button> </NavLink></td>
               

                <table className="table table-striped">
                <thead>
                        <tr> 
                            
                            <th scope="col">id</th>
                            <th scope="col">Title</th>
                                                                                 
                        </tr>
                    </thead>
                    
                    <Subtopics Subtopics={this.state.subtopic}></Subtopics>     
                    
                </table>
                
                </form>
            </div>
        );
       
    }
}

 const Subtopics =(props)=>{
    return (<tbody>
         
        
        {props.Subtopics.map(Subtopic => (
          <tr className="text-left" key={Subtopic.id}>
              
              <td>{Subtopic.id}</td>

              <td>{Subtopic.topic_title}</td>
                           
              <td><NavLink to={"/subtopic-edit/"+Subtopic.id}><button type="button" class="btn btn-warning">Edit</button>  </NavLink></td>
              
              <td><button type onClick="button" class="btn btn-danger">Delete</button> </td>
             
              
          </tr>
         ))
      }
    </tbody>);
} 

export default Subtopic;