import React from 'react';
import './header.css';
import profile from '../../assets/profile.jpg';

const Header = () => {
  return (
    <div className='the_main'>
        <div className='the_main_bio'>
          <div className='the_main_title'>
            <h1>Hello, i'm Kevin and welcome to my website!</h1>
          </div>
          <div className='the_main_p_1'>
            <p>Indulging in the essence of what life brings, while pursuing hopes and dreams.</p>
          </div>
          <div className='the_main_p_2'>
            <p>I am currently a third year computer engineering undergraduate attending Ryerson University. Currently focusing on self improvement to enhance my qualities.</p>
          </div>
        </div>
        <div className='the_main_photo'>
            <img src={profile} alt="me"/>
        </div>
    </div>
  )
}

export default Header