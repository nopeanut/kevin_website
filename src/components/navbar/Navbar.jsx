import React from 'react';
import './navbar.css';

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
                <button type='button'>Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar