import React from 'react'
import './header.css'
import{NavLink, Link} from "react-router-dom"
import logo from './img/ago.png'



function Header() {
  return (
    <div className='header'>
          <div className="header_background"> 
           <div className="header_flex">
            <div className="logo">
              <Link to="/"><img src={logo}></img></Link>
               
            </div>
            <nav className='nav'>
              <ul>

                <li><NavLink exact to="/"activeClassName='active'>Inicio</NavLink></li>
                <li><NavLink to="/portafolio"activeClassName='active'>Portafolio</NavLink></li>
                <li><NavLink to="/reserva_en_linea"activeClassName='active'>Reserva en linea</NavLink></li>
                <li><NavLink to="/blog"activeClassName='active'>Blog</NavLink></li>

              </ul>

            </nav>
            </div>
            </div>
        
    </div>
  )
}

export default Header