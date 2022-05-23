import React from "react";
import Colors from "../../util/colors";


class ColorSwatch extends React.Component {
  render(){
    let colorWord = this.props.color
    let colorCode = Colors.colorWord
    return (
      <li 
        className="color-btn" 
        
        style={{backgroundColor: `${Colors[colorCode]}`}}
      ></li>

    )
  }
}


export default ColorSwatch; 