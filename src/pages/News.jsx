import React from 'react'
import Attic from '../components/attic.jsx'
import New from '../components/new.jsx'
import {NewsData} from '../components/newData.js'

const News = () => {

  return (
    <>  
      <Attic/>
      <div className='content'>
        <h1>
          НОВОСТИ КОМПАНИИ
        </h1>
         {NewsData.map((item, index) => {
           return (
             <New key={index} title={item.title} date={item.date} content={item.content}/>
           )
         })}

      </div>
    </>
  )}
export default News
