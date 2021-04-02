import React, { useState } from 'react'
import '../styles/Attic.css'
import {AiFillEnvironment, AiFillPhone, AiFillMail, AiFillHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'

const Attic = () => {
  
  const [mainPhone, toggleMainPhone] = useState(false)
  const [hrPhone, toggleHrPhone] = useState(false)
  
  const mPhone = (!mainPhone) ? 'Приёмная' : '+7(4832)36-73-80'
  const hPhone = (!hrPhone) ? 'Отдел кадров' : '+7(4832)36-73-85'
  


  return (
  <div className='attic'>
    <div className='attic-item'> 
        <a className='address' href="https://goo.gl/maps/1yyUa9i9jzp5VXNn8" target='_blank' rel="noreferrer">
        <span><AiFillEnvironment/></span><span>Адрес</span>
        </a>
    </div>
    <div className='attic-item hide-pc'>
        <a className='phone' href='tel:+74832367380'>
        <span><AiFillPhone/></span><span>Приёмная</span>
        </a>
    </div>
    <div className='attic-item hide-mob'>
        <span className='phone'>
        <span  onClick={() => toggleMainPhone(!mainPhone)}><AiFillPhone/></span>
        <span  onClick={() => toggleMainPhone(true)}>{mPhone}</span>
        </span>
    </div>
    <div className='attic-item hide-mob'>
      <span className='phone'>
      <span onClick={() => toggleHrPhone(!hrPhone)}><AiFillPhone/></span>
      <span onClick={() => toggleHrPhone(true)}>{hPhone}</span>
      </span>
    </div>
    <div className='attic-item'>
      <a className='mail' href='mailto:info@csr32.ru'>
      <span><AiFillMail/></span><span>E-mail</span>
      </a>
    </div>
    <div>
      <Link className='attic-item link-to-fp' to='/'><AiFillHome/></Link>
    </div>
  </div>
  )}

export default Attic