import React, { Component } from 'react'
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';
import Axios from 'axios';
import { tsImportEqualsDeclaration } from '@babel/types';

export class Topic extends Component {
    constructor(props){
    super(props);
    this.state={topic:[]}
    }
    componentDidMount(){
        Axios('topic'+this.props.match.params.id)
        .then(res=>{console.log(res);this.setState({topic:res.data})})
    }

    render() {
        return (
            
            <div>
                <h1>course topic</h1>
                <table className="table">
                <Link to="topic-add/">Add</Link>
                

                    
                    
                    <tr>
                        <th>s.no</th>
                        <th>topics</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>nodejs</td>
                       <td> <button type>edit</button>
                        <button>delete</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td> mongo db</td>
                        <td><button>edit</button>
                        <button>delete</button></td>
                        
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>express</td>
                       <td> <button>edit</button>
                        <button>delete</button></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>react</td>
                        <td> <button>edit</button>
                        <button>delete</button></td>
                    </tr>

                </table>
            </div>
        )
    }
}

export default Topic

    
 