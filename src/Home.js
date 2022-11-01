import React from 'react';
import {Navbar} from './components';
import {Header, Footer} from './containers';
import './Home.css';
function Home() {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Footer/>
    </div>
  )
}

export default Home;