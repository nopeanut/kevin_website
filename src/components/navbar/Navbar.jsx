import React from 'react';
import './navbar.css';

const Menu = () => (
    <>
    <p><a className='stuff' href="./">Home</a></p>
    <p><a className='stuff' href="./about">About me</a></p>
    <p><a className='stuff' href="./projects">Projects</a></p>
    <p><a className='stuff' href="./contact">Contact</a></p>
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
                <a href= 'https://drive.google.com/file/d/1ZGka8mthj5SNWlo5UaAlqdtupR0m_mQo/view?usp=sharing' target = "_black"><button type='button'>Resume</button></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar