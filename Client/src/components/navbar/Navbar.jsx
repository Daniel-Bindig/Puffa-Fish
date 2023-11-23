import React, { useState } from 'react'
import './Navbar.css'
import cart from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState("home")

    return (
        <div className='navbar flex justify-around p-1 max-h-24'>
            <div className="logo max-w-sm font-bold text-7xl p-1">
                Puffafish
            </div>
            <ul className="nav-menu flex items-center p-6 max-w-xl">
                <li onClick={()=>{setMenu("home")}}><Link to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link to='/about'>About Us</Link>{menu==="about"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-cart flex items-center gap-20 w-auto">
                <Link to='/login'><button>login</button></Link>
                <Link to='/cart'></Link><img src={cart} alt="" /><Link/>
            </div>
        </div>
    )
}

export default Navbar