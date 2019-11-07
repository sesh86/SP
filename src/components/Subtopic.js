import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class Subtopic extends React.Component {

    constructor(props) {
        super(props);
        this.state={subtopic:[],alert: ''}
     }
     componentDidMount(){
        axios('subtopics/' + this.props.match.params.topicId)
        .then(res=>
            {console.log(res);this.setState({subtopic:res.data})});
      }

      delSubtopic = (id) => {
           this.setState({alert: ''});
          axios({
          method: 'post',
          url: 'subtopics/subtopicDelete/' + id
          
      })
      .then(res=>{
          var subtopics = this.state.subtopic;
          this.setState({alert:res.data.message});
          subtopics=subtopics.filter(e => String( e.id).indexOf(id)=== -1);

          this.setState({subtopic:subtopics});
      });
    }
        
    render() {
       
        return (
            <div className="container">
                <div className="alert alert-info">
                    {this.state.alert}
                    </div>
                
                <h1>Subtopics</h1>
                
                <td><NavLink to={"/subtopic-add/" + this.props.match.params.topicId}>
                <button type="button" class="btn btn-dark">Add</button> </NavLink></td>
               

                <table className="table table-striped">
                <thead>
                        <tr> 
                            
                            
                            <th scope="col">S.no</th>
                            <th scope="col">Title</th>
                            <th scope="col"></th>
                            <th scope="col"></th> 
                            

                                                                                 
                        </tr>
                    </thead>
                    
                    <Subtopics subtopics={this.state.subtopic} delSubtopic={this.delSubtopic}></Subtopics>     
                    
                </table>
                
                
            </div>
        );
       
    }
}

 const Subtopics =(props)=>{
    return (<tbody>
         
        
        {props.subtopics.map(Subtopic => (
          <tr className="link hstrike" key={Subtopic.id}>
              
              <td>{Subtopic.id}</td>

              <td>{Subtopic.topic_title}</td>
                           
              <td><NavLink to={"/subtopic-edit/"+Subtopic.id}><button type="button" class="btn btn-warning">Edit</button>  </NavLink></td>
              
              <td> <button type="button" class="btn btn-danger" onClick={()=> props.delSubtopic(Subtopic.id)} key={Subtopic.id}>Delete</button> </td>
             
              
          </tr>
         ))
      }
    </tbody>);
} 

export default Subtopic;