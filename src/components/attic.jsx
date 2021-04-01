import React from 'react'
import '../styles/Attic.css'
import {AiFillEnvironment, AiFillPhone, AiFillMail} from 'react-icons/ai'

const Attic = () => {
  return (
  <div className='attic'>
    <div className='attic-item'> 
        <a className='address' href="https://goo.gl/maps/1yyUa9i9jzp5VXNn8" target='_blank' rel="noreferrer">
        <span><AiFillEnvironment/></span><span>Адрес</span>
        </a>
    </div>
    <div className='attic-item'>
        <a className='phone' href='tel:+74832367380'>
        <span><AiFillPhone/></span><span>Приёмная</span>
        </a>
    </div>
    <div className='attic-item hide-mob'>
      <a className='phone' href='tel:+74832367385'>
      <span><AiFillPhone/></span><span>Отдел кадров</span>
      </a>
    </div>
    <div className='attic-item'>
      <a className='mail' href='mailto:info@csr32.ru'>
      <span><AiFillMail/></span><span>E-mail</span>
      </a>
    </div>
  </div>
  )}

export default Attic