import React, { Component } from 'react';
import axios from 'axios';




export default class Login extends Component {
    constructor(props) {
        super(props);  
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            username: '',
            password:''
                     }
    }

    onChangeUsername(e) {
            
        this.setState({
         username : e.target.value 

        })
      }
      onChangePassword(e) {
        
        this.setState({
        password : e.target.value
        })
      }

      onSubmit(e) {
        e.preventDefault();
    //where we set the state and send it in the post request
        const user = {
          username: this.state.username,
          password: this.state.password
        } 
        
        axios.post("http://localhost:3000/addUser/login", user)
        .then(response =>{
      // console.log (response)
       window.localStorage.setItem('token', response.data);

        window.location = '/AddItems'
        })
        .catch(err =>alert("username or password is incorrect") );
          
        
        //  .then( (response) => {
            
        //     let token = response.data.access;
        //     localStorage.setItem("SavedToken", 'Bearer ' + token);
        //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        //     (this.$router.push({name:'HomePage'}));
            
        //     })
         
    }
    render(){
        return (
               
               <div className = "container">
                <form onSubmit={this.onSubmit}>
                <label > User Name </label>
                <br></br>
                <br></br>
                <input required type='text'className="form-control"value= {this.setState.username}onChange={this.onChangeUsername} placeholder='Enter Your User Name'/>                   
                <br></br>
                <br></br>
                <label > Password </label>
                <br></br>
                <br></br>
                <input required  type="password" name="password" className="form-control"value= {this.setState.password} onChange={this.onChangePassword} placeholder='Enter Your Password' />
                <br></br>
                <br></br>
                <input type='submit' value='Log In'/>
                <br></br>
                <br></br>
                <p>Don't have an account ? <a href='/addUser'> Sign Up</a></p>
                </form>
             </div>
            )  
    }
}

