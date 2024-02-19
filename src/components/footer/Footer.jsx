// import React from "react";
import { Link } from 'react-router-dom';
import '../../App.css';
import logo from '../../images/logo.png';
import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
const mystyle1 = {
    textDecoration: 'none',
    margin: '10px',
    color: 'blue',
    fontSize: '15px',
    fontFamily: 'Arial, Helvetica, sans-serif'
}
const mystyle2 = {
    textDecoration: 'none',
    margin: '10px',
    color: 'white',
    fontSize: '15px',
    fontFamily: 'Arial, Helvetica, sans-serif'
}
export default function Footer(){
    const [isShown1, setIsShown1] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
    const [isShown4, setIsShown4] = useState(false);
    const [isShown5, setIsShown5] = useState(false);
    const [isShown6, setIsShown6] = useState(false);
    const [isShown7, setIsShown7] = useState(false);
    // isShown ? document.getElementsByClassName("setit").style.color = 'white' : document.getElementsByClassName("setit").style = mystyle;
    return (
        <footer>
        <div className="footer_logo">
            <Link to="/Home"><img src={logo} style={{ width: "150px" }} alt="Logo" /></Link>
        </div>
        <div className="pages" >
                <h3>Pages</h3>
                <Link to="/about" style={isShown1 ? mystyle2 : mystyle1} onMouseEnter={() => setIsShown1(true)} onMouseLeave={() => setIsShown1(false)}>About Us</Link>|
                <Link to="/services" style={isShown2 ? mystyle2 : mystyle1} onMouseEnter={() => setIsShown2(true)} onMouseLeave={() => setIsShown2(false)}>Services</Link>|
                <Link to="/blogs" style={isShown3 ?  mystyle2 : mystyle1} onMouseEnter={() => setIsShown3(true)} onMouseLeave={() => setIsShown3(false)}>Blogs</Link>|
                <Link to="/signup" style={isShown4 ? mystyle2 : mystyle1} onMouseEnter={() => setIsShown4(true)} onMouseLeave={() => setIsShown4(false)}>Sign Up</Link>
            </div>
        <div className="doc">
           <h3>Documents</h3>
          <Link to="#"  style={isShown5 ? mystyle2 : mystyle1} onMouseEnter={() => setIsShown5(true)} onMouseLeave={() => setIsShown5(false)}>Privacy Policy</Link>|
          <Link to="#"  style={isShown6 ? mystyle2 : mystyle1} onMouseEnter={() => setIsShown6(true)} onMouseLeave={() => setIsShown6(false)}>Terms of Use</Link>|
          <Link to="#"   style={isShown7 ? mystyle2 : mystyle1} onMouseEnter={() => setIsShown7(true)} onMouseLeave={() => setIsShown7(false)}>Refund Policy</Link>
        </div>
        <div className="social">
            <h3>Follow Us</h3>
            <Link  to="https://www.facebook.com" rel="noreferrer" style={mystyle1}><i className="fa fa-facebook-official" aria-hidden="true"></i></Link>
            <Link  to="https://www.linkedin.com" rel="noreferrer" style={mystyle1}><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
            <Link  to="https://www.instagram.com"  rel="noreferrer" style={mystyle1}><i className="fa fa-instagram" aria-hidden="true"></i></Link>
            <Link to="https://www.twitter.com" rel="noreferrer" style={mystyle1}><i className="fa fa-twitter" aria-hidden="true"></i></Link>
        </div>
        <div className="contact">
        <h3>Contact Us</h3>
            <Link  to="https://api.Whatsapp.com/send?phone=+919755336812" rel="noreferrer" style={mystyle1}><i className="fa fa-whatsapp" aria-hidden="true"></i></Link>
            <Link  to="tel: +919755336812" style={mystyle1}><i className="fa fa-phone" aria-hidden="true"></i></Link>
            <Link  to="mailto : mahajananurag6812@gmail.com" style={mystyle1}><i className="fa fa-envelope" aria-hidden="true"></i></Link>
        </ div>
         <hr />
         <p>Copyright &copy; 2022 .... All rights reserved</p> 
    </footer>
    )
    }