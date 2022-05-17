import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class SignupForm extends React.Component {
  constructor(props){
    super(props)
    this.state = this.props.user
  }
  componentDidMount(){
    this.props.clearErrors()
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    if (this.state.password === this.state.confirm_password) {
      this.props.signup({
        full_name: `${this.state.f_name} ${this.state.m_initial} ${this.state.l_name}`, 
        password: this.state.password,
        email: this.state.email
      })
    }
  }

  handleChange = (type)=>(e)=> this.setState({[type]: e.target.value})
  handleClick = (e)=> {
    if (this.checked === true) {
      this.setState({checked: false})
    } else {
      this.setState({checked: true})
    }
  }
  
  render(){
    return(
      <div>
        <h1 className="h1">Create a new My Coopt online account</h1>
        <div className="signup-form-container">
          <h3>* Required information</h3>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <label>First name *
              <input 
                className="white-input"
                type="text"
                value={this.state.f_name} 
                onChange={this.handleChange('f_name')}
              />
            </label>
            <br/>
            <label>Middle initial
              <input 
                className="white-input short"
                type="text"
                value={this.state.m_initial} 
                onChange={this.handleChange('m_initial')}
              />
            </label>
            <br/>
            <label>Last name *
              <input
                className="white-input"
                type="text"
                value={this.state.l_name} 
                onChange={this.handleChange('l_name')}
              />
            </label>
            <br/>
            <label>Email address *
              <input 
                className="white-input"
                type="text"
                value={this.state.email} 
                onChange={this.handleChange('email')}
              />
            </label>
            <br/>
            <label>Password
              <input 
                className="white-input"
                type="password"
                value={this.state.password} 
                onChange={this.handleChange('password')}
              />
            </label>
            <br/>
            <label>Confirm password *
              <input 
                className="white-input"
                type="password"
                value={this.state.confirm_password} 
                onChange={this.handleChange('confirm_password')}
              />
            </label>
            <input type="checkbox" onClick={this.handleClick}></input>
            <span className="small-bold">Notify me about REI news, offers, and events at my email address.</span>
            <br/>
            <p className="terms-warning" >When you create an account, you agree to My Co-opt's <Link className="lnk" to="/termsandprivacy">Terms of Use</Link> and acknowledge you have read its <Link className="lnk" to="/termsandprivacy">Privacy Policy</Link>.</p>
            <button className='grn btn'>Create account</button>
          </form>
        </div>
        <ul>
          {this.props.errors.session.map(error=> <li>{error}</li>)}
        </ul>
      </div>
      
    )
  }

  
}

export default SignupForm