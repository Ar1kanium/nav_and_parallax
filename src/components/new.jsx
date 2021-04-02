import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'

const New = (props) => {
  
  const [ newState, newStateToggler ] = useState(false)
  
  const newClassState = newState ? 'newOpened' : 'newClosed'
  const iconClassState = newState ?  'icon-up' : 'icon-down'

  return(
    <div className='new'>
      <div className='hat' onClick={() => newStateToggler(!newState) }>
        <span className={iconClassState}><AiFillCaretDown/></span>
        <h5 className='new-name'>
          {props.title}
        </h5>
        <h6 className='new-date'>
          {props.date}
        </h6>
      </div>
      <div className={newClassState}>
        {props.content}
      </div>
    </div>
  )
}

export default New