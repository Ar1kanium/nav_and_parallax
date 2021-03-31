import React, {useEffect, useState} from 'react'

const FirstPage = () => {

  let [word1, setWord1] = useState('word-inv')
  let [word2, setWord2] = useState('word-inv')
  let [word3, setWord3] = useState('word-inv')
  let [word4, setWord4] = useState('word-inv')
  let [word5, setWord5] = useState('word-inv')


  useEffect(() => {
    if (word1 === 'word-inv') {
    setTimeout(()=> setWord1('word-v'), 500)
    setTimeout(()=> setWord2('word-v'), 1300)
    setTimeout(()=> setWord3('word-v'), 2100)
    setTimeout(()=> setWord4('word-v'), 2900)
    setTimeout(()=> setWord5('word-v'), 3700)
    }
  })

  return(
    <div className='first-page'>
      <h1 className='mp-header'>
        <span className = {word1}>Нас </span> 
        <span className = {word2}>объединяет </span> 
        <span className = {word3}>общее </span>
        <span className = {word4}>дело</span>
        <span className = {word5}>!</span>
      </h1>
    </div>
  )
}

export default FirstPage