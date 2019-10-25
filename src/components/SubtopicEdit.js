import React, { Component } from 'react'

import axios from 'axios';

import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';

export class SubtopicEdit extends Component {
    render() {
        return (
            <div>
                <h1> SubtopicEdit </h1>

  <form>
    <div className="form-group">
      <label>
        
          Title:
          

          </label>
          <input type="text" name="name" />
          </div>  
          <div className="form-group">
            <div>
           Descripition:
           </div>
           <textarea rows="5" cols="15">
           </textarea>
    </div>  
          
  </form>

  <label>
        
        Title:
        </label>
        
        <input type="text" name="name" />
        
        <select>
  <option value="Link">Link</option>
  <option value="File">File</option>
  
  
</select>
<button>Add</button>
  



      <div>
        <input  type="submit" value="Submit" />
        </div>
        
          
        


  
      
            </div>
        )
    }
}

export default SubtopicEdit;