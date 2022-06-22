import { IoIosArrowBack, IoIosArrowDown } from 'react-icons/io';
import React, { useState } from 'react'

export default function FilterItem(props) {
  const [open, setopen] = useState(true);
  const toggleHeader=()=>{
    setopen(!open)
  }
  let sorted = props.array.sort()
  return (
    <div>
      <div className="filter-subtitle" >
        <div className="subtitle-box" onClick={toggleHeader}>
          <div className="sub-title">{props.subtitle}</div>
          {open ? <div className="filter-ico"><IoIosArrowDown/></div> : <div className="filter-ico"><IoIosArrowBack/></div>}
        </div>
        {open && <div className="subject-box">
          {sorted.map((el, i)=> (<label key={i+props.subtitle} className="mycheckbox">
            <input 
              type="checkbox" 
              className="check" 
              onClick={()=>props.handleFilterClick({[props.subtitle.toLowerCase()]:el})} 
            />
            {el}
          </label>))}
        </div>}
      </div>
    </div>
    )
}