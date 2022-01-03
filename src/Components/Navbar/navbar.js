import React from 'react'
import {navbarData} from './navbarData.js'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className="Navbar">
            <ul className="navbarList">
            {navbarData.map((val,key) => {
                return (
                    <li key={key} className='row' id={window.location.pathname === val.link ? "active" : ""} onClick={()=>{window.location.pathname=val.link}}>
                         <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                )
            })}
            </ul>  
        </div>
    )
}

export default Navbar
