import React from 'react'
import "./Projects.css";
import {Navbar, Project} from './components';
import {Footer, Skills} from './containers';
import spaceShooters from './assets/spaceShooters.png';
import quizGame from './assets/quizGame.png';
import bookStore from './assets/bookstore.png';
import poBot from './assets/poBot.png';
import loading from './assets/loading.png';


const Projects = () => {
  return (
    <div className='the_projects_main'>
      <Navbar/>
      <h1 className='the_projects_main_title'>Projects</h1>
      <div className='the_projects_project'>
        <div className = 'the_projects_project_item1'>
          <Project image={spaceShooters} title = "Space Shooters" github="https://github.com/nopeanut/Bullet-Hell-game" />
          <Project image={quizGame} title = "Quiz Game" github="https://github.com/nopeanut/Android-quiz-game" />
          <Project image={bookStore} title = "Bookstore App" github="https://github.com/nopeanut/BookStoreApp" />
        </div>
        <div className = 'the_projects_project_item2'>
          <Project image={poBot} title = "AI Discord Bot" github="https://github.com/nopeanut/DiscordPoBot" />
          <Project image={loading} title = "Loading..." github="https://github.com/nopeanut/Basic-Stamp-2-robot-assembly" />
        </div>
      </div>
      <Skills />
      <Footer />
    </div>
  )
}

export default Projects;