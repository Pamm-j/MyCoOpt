import React from "react";

class SignupForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.user
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    this.props.signup({
      full_name: `${this.state.f_name} ${this.state.m_initial} ${this.state.l_name}`, 
      password: this.state.password,
      email: this.state.email
    })
  }

  handleChange = (type)=>(e)=> this.setState({[type]: e.target.value})
  
  render(){
    return(
      <div>
        <h1 className="h1">Create a new My Coopt online account</h1>
        <h3>* Required information</h3>
        <form onSubmit={this.handleSubmit}>
          <label>First name*
            <input 
              type="text"
              value={this.state.f_name} 
              onChange={this.handleChange('f_name')}
            />
          </label>
          <br/>
          <label>Middle initial
            <input 
              type="text"
              value={this.state.m_initial} 
              onChange={this.handleChange('m_initial')}
            />
          </label>
          <br/>
          <label>Last name*
            <input 
              type="text"
              value={this.state.l_name} 
              onChange={this.handleChange('l_name')}
            />
          </label>
          <br/>
          <label>Email address*
            <input 
              type="text"
              value={this.state.email} 
              onChange={this.handleChange('email')}
            />
          </label>
          <br/>
          <label>Password
            <input 
              type="password"
              value={this.state.password} 
              onChange={this.handleChange('password')}
            />
          </label>
          <br/>
          <label>Confirm password*
            <input 
              type="password"
              value={this.state.confirm_password} 
              onChange={this.handleChange('confirm_password')}
            />
          </label>
          <br/>
          <p>When you create an account, you agree to My Co-opt's Terms of Use and acknowledge you have read its Privacy Policy.</p>
          <br/>
          <button className='grn-btn'>Create account</button>
        </form>
        <ul>
          {this.props.errors.session.map(error=> <li>{error}</li>)}
        </ul>
      </div>
      
    )
  }

  
}

export default SignupForm