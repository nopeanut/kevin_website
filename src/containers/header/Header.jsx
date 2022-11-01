import React, { useState, useEffect } from 'react';
import './header.css';
import profile from '../../assets/profile.jpg';
import axios from "axios";
const Header = () => {

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayOfQuotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfQuotes = data.data
    }
    catch (error) {
      console.log(error);
    }
    try {
      setQuote(arrayOfQuotes.content);
      setAuthor(arrayOfQuotes.author);
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    quoteAPI();
  }, [])
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
            <p>I am currently a third-year computer engineering undergraduate attending Ryerson University. Currently focusing on self-improvement to enhance my qualities.</p>
          </div>
          {/* Quote API */}
          <div className = 'the_main_magic_box'>
            <div className = 'the_main_magic_box_title'>
              <h1>Inspirational Quote</h1>
            </div>
            <div className='the_main_magic_box_quote'>
              <p>"{quote}"</p>
            </div>
            <div className='the_main_magic_box_author'>
              <p>- {author}</p>
            </div>
          </div>
        </div>
        <div className='the_main_photo'>
            <img src={profile} alt="me"/>
        </div>
    </div>
  )
}

export default Header