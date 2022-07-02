import React from 'react';
import {Navbar} from './components';
import {Header, About, Hobbies, Footer} from './containers';
import './Home.css';

function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <Hobbies/>
        <Footer/>
    </div>
  )
}

export default Home;