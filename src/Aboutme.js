import React from 'react'
import {Navbar} from './components';
import {Footer, About, Hobbies} from './containers';

function Aboutme()  {
  return (
    <div>
      <Navbar/>
      <About/>
      <Hobbies/>
      <Footer/>
    </div>
  )
}

export default Aboutme;