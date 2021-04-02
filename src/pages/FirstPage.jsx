import React, {useEffect, useState} from 'react'

const FirstPage = () => {

  let [credoState, setCredoState] = useState('credo-inv')


  useEffect(() => {
    if (credoState === 'credo-inv') {
    setTimeout(()=> setCredoState('credo-v'), 250)
    }
  })

  return(
    <div className='first-page'>
      <h1 className='mp-header'>
        <span className = {credoState}>Нас объединяет общее дело!</span> 
      </h1>
    </div>
  )
}

export default FirstPage