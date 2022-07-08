import React from 'react'
import "./skills.css"
import tempicon from '../../assets/tempicon.png';

const Skills = () => {
  return (
    <div className='the_skills_main'>
      <div className='the_skills_title'>
        <h1>Skills</h1>
      </div>
      <div className='the_skills_list'>
        <div className='the_skills_list1'>
          <img src={tempicon} alt="Python"/>
          <img src={tempicon} alt="Java"/>
          <img src={tempicon} alt="C"/>
          <img src={tempicon} alt="CSS"/>
        </div>
        <div className='the_skills_list2'>
          <img src={tempicon} alt="JavaScript"/>
          <img src={tempicon} alt="Git"/>
          <img src={tempicon} alt="HTML"/>
        </div>
      </div>
    </div>
  )
}

export default Skills