import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.user
  }

  handleSubmit = (type) => (e) => { 
    e.preventDefault();
    let newPath;
    (this.props.location.state) ? newPath = this.props.location.state.oldPath : newPath = '/'
    if (type === "login_user"){ 
      this.props.login(this.state)
        .then(()=>this.props.history.push(newPath))
    } else if (type==="demo") {
      this.props.login({email:'bobby@mars.mc', password:'123456'})
        .then(()=>this.props.history.push(newPath))
    }
  }

  handleChange = (type)=>(e)=> this.setState({[type]: e.target.value})

  componentDidMount(){
    this.props.clearErrors()
  }
  
  render(){
    return(
      <div className="limited-container">
      <h1 className="h1">Your My Co-opt Online Account</h1>
        <div className="two-col">
          <div className="session-form">
            
            <h3>Sign in or create an account.</h3>
            <form className="login-form" >
              <label> Email
                <input
                  className="blue-input"
                  type="text"
                  value={this.state.email} 
                  onChange={this.handleChange('email')}
                />
              </label>
              <label>Password
                <input 
                  className="blue-input"
                  type="password"
                  value={this.state.password} 
                  onChange={this.handleChange('password')}
                />
              </label>
              <Link className="blue-link-small" to="/password-form">Forgot password?</Link>
              <p className="terms-warning">By signing into your account, you agree to My Co-opt's <Link 
                className="lnk" to="/termsandprivacy">Terms of Use</Link> and acknowledge you have read its <Link 
                className="lnk" to="/termsandprivacy">Privacy Policy</Link>.</p>
              <div >
                <input className='grn btn left' type="submit" value="Sign in" onClick={this.handleSubmit('login_user')}  />
                <input className='grn btn' type="submit" value="Sign in demo" onClick={this.handleSubmit('demo')}  />
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