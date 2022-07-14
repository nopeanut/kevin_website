import React from 'react'
import "./Projects.css";
import {Navbar, Project} from './components';
import {Footer, Skills} from './containers';
import spaceShooters from './assets/spaceShooters.png';
import quizGame from './assets/quizGame.png';


const Projects = () => {
  return (
    <div className='the_projects_main'>
      <Navbar/>
      <h1 className='the_projects_main_title'>Projects</h1>
      <div className='the_projects_project'>
        <Project image={spaceShooters} title = "Space Shooters" github="https://github.com/nopeanut/Bullet-Hell-game" />
        <Project image={quizGame} title = "Quiz Game" github="https://github.com/nopeanut/Android-quiz-game" />
      </div>
      <Skills />
      <Footer />
    </div>
  )
}

export default Projects;