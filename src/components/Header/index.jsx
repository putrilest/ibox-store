// import React from 'react'
import {BsApple} from 'react-icons/bs'
import './header.css'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header className='wrapper-header'>
        <div className='wrapper-logo'>
            <BsApple size={32} cololor='black'/>I-Box Center
        </div>
        <nav className='wrapper-nav'>
            <ul className='list-nav'>
                <li className='nav-item'>
                    <NavLink to ={'/'}> Home </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to = {"/shop"}> Barang </NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to={"/about"}> About </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header