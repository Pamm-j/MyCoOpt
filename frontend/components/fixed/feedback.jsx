import React, { useState } from 'react'
import { connect } from "react-redux";
import { withRouter, Link, useHistory } from "react-router-dom";

function Feedback(props) {
  const [fullName, setfullName] = useState(props.currentUser ? props.currentUser.full_name : "")
  const [email, setemail] = useState(props.currentUser ? props.currentUser.email : "")
  const [feedback, setfeedback] = useState("")
  const history = useHistory()
  const handleBack =  ()=> {
    history.goBack()
  }

  return (
    <div className="webpage">
    <h1 className="h1">Let us know what you think</h1>
    <div className="signup-form-container">
      <h3>* Required information</h3>
      <div className="signup-form" >
        <label>Full Name *
          <input 
            className="white-input"
            type="text"
            value={fullName} 
            onChange={e => {e.preventDefault; setfullName(e.target.value)}}
          />
        </label>
        <label>Email address *
          <input 
            className="white-input"
            type="text"
            value={email} 
            onChange={e => {e.preventDefault; setemail(e.target.value)}}
          />
        </label>
        <br/>
        <label>Feedback *
          <textarea 
            className="white-input textarea"
            value={feedback} 
            onChange={e => {e.preventDefault; setfeedback(e.target.value)}}
          />
        </label>
        <br/>
        <button
          className='grn btn'
          onClick={handleBack}
        >Submit Feedback</button>
      </div>
    </div>
  </div>
  )
}

const mSTP = state => ({currentUser: state.entities.users[state.session.id]})

export default connect(mSTP,null)(Feedback)
