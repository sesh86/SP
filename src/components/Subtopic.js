import React, { Component } from 'react'

import axios from 'axios';


import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';

export class Subtopics extends Component {
    render() {
        return (
            <div>
              

                <h1> Subtopics </h1>
                <ul class="nav nav-pills nav-fill">
                <li class="nav-item">
                  <a class="nav=link active"href="SubtopicAdd">Add</a>
                </li>
              </ul>
                <table >
  <tr>
   <th>S.NO</th>
    <th>TITLE</th>
  
  </tr>
  <tr>
    <td>1.  </td>
    <td>React  </td>
    <td> <button type>Edit</button>
    
    <button>Delete</button></td>
  
  </tr>

  <tr>
    <td>2.  </td>
    <td>MongoDB  </td>
    <td> <button type>Edit</button>
    
    <button>Delete</button></td>
  
  </tr>

  <tr>
    <td>3.  </td>
    <td>JavaScript  </td>
    <td> <button type>Edit</button>
   
    <button>Delete</button></td>
  
  </tr>

  <tr>
    <td>4.  </td>
    <td>HTML  </td>
    <td> <button type>Edit</button>
    
    <button>Delete</button></td>
  
  </tr>

  <tr>
    <td>5.  </td>
    <td>Nodejs </td>
    <td> <button type>Edit</button>
    
    <button>Delete</button></td>
  
  </tr>

  <tr>
    <td>6.  </td>
    <td>Express  </td>
    <td> <button type>Edit</button>
    
    <button>Delete</button></td>
  
  </tr>

  <tr>
    <td>7.  </td>
    <td>CSS </td>
    <td> <button type>Edit</button>
    
    <button>Delete</button></td>
  
  </tr>
</table>
            </div>
        )
    }
}

export default Subtopics;