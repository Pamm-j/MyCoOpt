import React from "react";

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.login(this.state)
      // .then(()=>this.props.history.push('/ji'))
    this.setState({email:'', password:''})
  }

  handleChange = (type)=>{
    return(e)=> this.setState({[type]: e.target.value})
  }
  render(){
    return(
      <div>
        <h1>Your My Co-opt Online Account</h1>
        <h3>Sign in or create an account.</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input 
              type="text"
              value={this.state.email} 
              onChange={this.handleChange('email')}
            />
          </label>
          <label>Password
            <input 
              type="password"
              value={this.state.password} 
              onChange={this.handleChange('password')}
            />
          </label>
          <button id='grn-btn'>Sign in</button>
        </form>
        {/* <ul>
          {this.props.errors.session.map(error=> <li>{error}</li>)}
        </ul> */}
      </div>
      
    )
  }

  
}

export default LoginForm