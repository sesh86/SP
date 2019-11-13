import React,{Component} from 'react';
import axios from 'axios';
import {BrowserRouter,Route, Link, NavLink} from 'react-router-dom';


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {user: ""}
        this.userId = 15;
     }

     componentDidMount(){
      axios('/user/' + this.userId)
      .then(res=>{console.log(res);this.setState({user:res.data})});
    }
    handleSubmit=(e)=>{
      e.preventDefault()
      var data={};
      for (let i=0; i <e.target.elements.length;i++){
      data[e.target.elements[i].name]=e.target.elements[i].value;
      }
      let curr=this;
      //console.log(data);
      axios({
          method: 'post',
          url: 'profileUpdate/' + this.userId,
          data: data,
         }) 
         
         .then(function(response){
             console.log("here"+response);
             console.log('test')
             curr.props.history.push('/user')
         })
         .catch(function(response){
             console.log(response);
         });
        }

    
    render() {
        return (
            <div className="container" >
                <h1>Profile</h1>
              <form onSubmit={this.handleSubmit} method="post">
                <div className="pull-left col-md-2" >
                  <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--_pBogJcc--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://thepracticaldev.s3.amazonaws.com/uploads/user/profile_image/201157/3607fd1f-3a5f-4fdf-8421-01debc8523b7.jpg" />
                </div>
                <div  className="pull-left col-md-6" >
               <div className="form-row">
                 <div className="form-group">
                   <label for="inputEmail4">Name</label>
                    <input type="text"name="full_name" className="form-control" id="inputEmail4" defaultValue={this.state.user.full_name} placeholder="Name"/>
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label for="inputEmail4">Email</label>
                    <input type="email"name="email" className="form-control" id="inputEmail4" defaultValue={this.state.user.email} placeholder="Email"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCity">Address</label>
                     <textarea type="text"name="address" className="form-control" id="inputCity" defaultValue={this.state.user.address} placeholder="Address"/>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCity">Contact Number</label>
                    <input type="text"name="contact_number" className="form-control" id="inputCity" defaultValue={this.state.user.contact_number}placeholder="Contact"/>
                   </div>
                 </div>
                 <button type="submit" className="btn btn-warning">Submit</button>
                 </div>
             </form>
              
            </div>
            
        )
    }
}

export default Profile;