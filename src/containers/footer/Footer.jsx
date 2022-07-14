import React from 'react';
import './footer.css';
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='the_footer_main'>
        <div className='the_footer_icons'>
            <a className='the_footer_icons_stuff' href='https://www.facebook.com/kevin.li.50746/'><FaFacebook /></a>
            <a className='the_footer_icons_stuff' href='https://www.instagram.com/keviin.li/'><FaInstagram /></a>
            <a className='the_footer_icons_stuff' href='https://www.linkedin.com/in/kevinli7022/'><FaLinkedin /></a>
            <a className='the_footer_icons_stuff' href='https://github.com/nopeanut'><FaGithub/></a>
        </div>
        <p>Copyright 2022</p>
    </div>
  )
}

export default Footer