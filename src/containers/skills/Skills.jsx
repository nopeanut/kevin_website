import React from 'react'
import "./skills.css"
import pythonicon from '../../assets/python.svg';
import javaicon from '../../assets/java.svg';
import cicon from '../../assets/c.svg';
import css3icon from '../../assets/css3.svg';
import javascripticon from '../../assets/javascript.svg';
import giticon from '../../assets/git.svg';
import htmlicon from '../../assets/html.svg';

const Skills = () => {
  return (
    <div className='the_skills_main'>
      <div className='the_skills_title'>
        <h1>Skills</h1>
      </div>
      <div className='the_skills_list'>
        <div className='the_skills_list1'>
          <div className='the_skills_python'>
            <img src={pythonicon} style= {{height: 300, width: 200}} alt="Python"/>
            <h1>Python</h1>
          </div>
          <div className='the_skills_java'>
            <img src={javaicon} style= {{height: 300, width: 200}} alt="Java"/>
            <h1>Java</h1>
          </div>
          <div className='the_skills_c'>
            <img src={cicon} style= {{height: 300, width: 200}} alt="C"/>
            <h1>C</h1>
          </div>
          <div className='the_skills_css'>
            <img src={css3icon} style= {{height: 300, width: 200}} alt="CSS"/>
            <h1>CSS3</h1>
          </div>
        </div>
        <div className='the_skills_list2'>
          <div className='the_skills_javascript'>
            <img src={javascripticon} style= {{height: 300, width: 200}} alt="JavaScript"/>
            <h1>JavaScript</h1>
          </div>
          <div className='the_skills_git'>
            <img src={giticon} style= {{height: 300, width: 200}} alt="Git"/>
            <h1>Git</h1>
          </div>
          <div className='the_skills_html'>
            <img src={htmlicon} style= {{height: 300, width: 200}} alt="HTML"/>
            <h1>HTML</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills