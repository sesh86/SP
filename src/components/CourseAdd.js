import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class CourseAdd extends React.Component {
    constructor(props) {
        super(props);
     }
     render() {
        return (
            <div className="container">
                <h1>CourseAdd</h1>
                <form>
                   <div class="form-group">
                     <label for="exampleFormControlInput1">Tittle</label>
                      <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Tittle"/>
                    </div>
                    <div class="form-group">
                     <label for="exampleFormControlTextarea1">Description</label>
                     <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Desription"rows=""></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1">File</label>
                        <input type="file" class=" " placeholder="upload"/>

                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>




            </div>
        )
    }   

}   
export default CourseAdd;













