import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (type) => (e) => { 
    if (type = "login_user"){
       e.preventDefault();
    this.props.login(this.state)
      // .then(()=>this.props.history.push('/'))
    }
   
    this.setState({email:'', password:''})
  }

  handleChange = (type)=>(e)=> this.setState({[type]: e.target.value})
  
  render(){
    return(
      <div>
      <h1 className="h1">Your My Co-opt Online Account</h1>
        <div className="two-col">
          <div className="session-form">
            
            <h3>Sign in or create an account.</h3>
            <form className="login-form" onSubmit={this.handleSubmit('login_user')}>
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
              <Link to="/underconstruction">Forgot password?</Link>
              <div className="two-col">
                <input className='grn btn' type="submit" value="Sign in" />
                {/* // <input className='grn btn' type="submit" value="Sign in"/> */}
              </div>
            </form>
            <ul>
              {this.props.errors.session.map(error=> <li key={`error${this.props.error}`}>{error}</li>)}
            </ul>
          </div>
          <div className="msg">
            <h3>Don't have an account?</h3>
            <p>A My Coopt Online Account lets you check out quicker, view your order status and history, add product reviews, and more - for the best online experience, attach your My Co-opt Membership to your account.</p>
            <Link className='grn btn' to="/signup">Create an account</Link>
          </div>
        </div>
      </div>
    )
  }

  
}

export default LoginForm