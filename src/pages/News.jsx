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
        <New title = {NewsData[0].title} date = {NewsData[0].date} content = {NewsData[0].content}/>
        <New title = {NewsData[1].title} date = {NewsData[1].date} content = {NewsData[1].content}/>
      </div>
    </>
  )}
export default News
