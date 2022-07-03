import React, { useRef } from 'react';
import './navbar.css';
import resume from '../../assets/Resume.pdf';


const Menu = () => (
    <>
    <p><a className='stuff' href="http://localhost:3000/">Home</a></p>
    <p><a className='stuff' href="http://localhost:3000/about">About me</a></p>
    <p><a className='stuff' href="http://localhost:3000/projects">Projects</a></p>
    <p><a className='stuff' href="http://localhost:3000/contact">Contact</a></p>
    </>
)

const Navbar = () => {
  return (
    <div className='the__navbar'>
        <div className='the__navbar-links'>
            <div className='the__navbar-links-stuff'>
                <div className='the__navbar_links-logo'>
                    <h1><a className='the__navbar_links-name' href='/'>Kevin Li</a></h1>
                </div>
                <div className='the__navbar_containers'>
                    < Menu/>
                </div>
            </div>
            <div className='the__navbar-links-resume'>
                <a href= {resume} target = "_black"><button type='button'>Resume</button></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar