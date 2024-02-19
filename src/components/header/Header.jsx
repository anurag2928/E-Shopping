// import { React } from 'react'
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom'

export default function Header(){
    return (
        <header>

        <nav className="nav nav_top">
          <div className="logo">
             <Link to = "/home" ><img src={logo} style={{marginLeft: '50px'}} width = '150px'/></Link>
          </div>
          <div className="nav_side">
            <Link to="/about">AboutUs</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signup">Login/Resister</Link>
          </div>
        </nav>
      </header>
    )
}
