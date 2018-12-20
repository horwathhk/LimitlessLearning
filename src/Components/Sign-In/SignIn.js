import React, { Component } from 'react';
import Routing from '../Dashboard/Dashboard';


const signin ={
  float:"right",
  marginRight: "10%",
  border:"solid black",
  marginTop: "5%"
}

class SignIn extends Component {
 
  constructor(){
    super();
    this.state = {
      users:[]
    }
  }

  componentWillMount(){
    //add id to each user later
    this.setState({users:[
      {
        userName: "aaron",
        password: "123"
      },
      {
        userName: "bob",
        password: "123"
      },
      {
        userName: "Jane",
        password: "123"
      }
    ]});

  }

  handleSubmit(e){
    let users;
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    let userAccountName;
    let userAccountPassword;
    if(username || password){
    } else {
      users = this.state.users.map(user => {
      userAccountName = user.userName;
      userAccountPassword = user.password
      if(username === userAccountName && password === userAccountPassword){
        console.log("loggin!")
      } else {
        alert("Who da fuck are you?")
      }
    })
    e.preventDefault();
  }
}     
 render() {
    return (
    <div style={signin}>
       <h3>Sign In</h3>
       <form onSubmit={this.handleSubmit.bind(this)}>
           <div>
              <label>userName</label><br />
              <input type ="text" ref="username" />
           </div>
           <div>
              <label>Password</label><br />
              <input type ="text" ref="password" />
           </div>
            <br />
            <input type="submit" value="Submit" />
            <br />
           </form>
      </div>
    );
  }
}


export default SignIn;
