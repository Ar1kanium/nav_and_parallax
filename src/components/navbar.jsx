import React, { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'


const Navbar = () => {
  
  const [navbarState, setNavbarState] = useState(false)



  useEffect(() => {
    if (!sessionStorage.getItem('appeared')) {
      setTimeout(() => setNavbarState(!navbarState), 2000)
      sessionStorage.setItem('appeared', true)
    }
  })

  

  return (
    <>
      <img src={process.env.PUBLIC_URL + '/logoLight.png'} alt='menu' className={navbarState ? 'menuLogoActive' : 'menuLogoInactive'} 
      onClick={() => setNavbarState(!navbarState)}/> 
      
      <nav className={navbarState ? 'navActive' : 'navInactive'} onClick={() => setNavbarState(!navbarState)}>
        <ul className='navItemList'>
          <li>
            <Link to='/home' id='navItem0'>Главная</Link>
          </li>
          <li>
            <Link to='/news' id='navItem1'>Новости</Link>
          </li>
          <li>
            <Link to='/career' id='navItem2'>Карьера</Link>
          </li>
          <li>
            <Link to='/services' id='navItem3'>Услуги</Link>
          </li>
          <li>
            <Link to='/social_responsibilities' id='navItem4'>Социум</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar 