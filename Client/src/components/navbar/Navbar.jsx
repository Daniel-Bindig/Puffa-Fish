import React, { useState } from 'react'
import './Navbar.css'
import cart from '../assets/cart_icon.png'

const Navbar = () => {

    const [menu,setMenu] = useState("home")

    return (
        <div className='navbar flex justify-around p-1 max-h-24'>
            <div className="logo max-w-sm font-bold text-7xl p-1">
                Puffafish
            </div>
            <ul className="nav-menu flex items-center p-6 max-w-xl">
                <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}>About Us{menu==="about"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-cart flex items-center gap-20 w-auto">
                <button>login</button>
                <img src={cart} alt="" />
            </div>
        </div>
    )
}

export default Navbar