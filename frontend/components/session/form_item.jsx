import React from "react";

const FormItem = (props) => {
  return (
    <div className="form-item">
    <label> Email
     <input
       className="blue-input"
       type={props.type}
       value={props.value} 
       onChange={this.props.handleChange(`${props.changed}`)}
     />
   </label>
    </div>
  )
}

export default FormItem; 