import React, { useRef,useEffect } from 'react'
import Wordmark from '../assets/Wordmark.png'
import bell_icon from '../assets/bell_icon.webp'
import search from '../assets/search.webp'
import smiley from '../assets/smiley.jpg'
import down from '../assets/down.png'
import './nav.css'
const Navbar = () => {

  const navRef=useRef()

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 80) {
    navRef.current.classList.add('nav-dark')
    }else{
    navRef.current.classList.remove('nav-dark')
    }
    })
      }, [])

  return (
    <div ref={navRef}className='navbar'>
        <div className='nav1'>
        <img src={Wordmark} alt="" style={{height:"260px",marginTop:'10px'}}/>
                <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Watch Again</li>
               </ul>
        </div>
        <div className='nav2'>
            <img src={bell_icon} alt="" style={{height:"60px"}}/>
            <p style={{fontSize:"20px"}}>Children</p>
            <img src={search} alt="" style={{height:"40px"}}/>
            <img src={smiley} alt="" style={{height:"40px"}}/>
            <img src={down} alt="" style={{height:"15px",position:'relative',right:'35px'}}/>
        </div>
        </div>
  )
}
export default Navbar