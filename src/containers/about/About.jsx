import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className='the_main_education'>
      <div className='the_main_education_title'>
      <h1>Coding History</h1>
      </div>
      <div className='the_main_education_1'>
        <div className='the_main_education_p'>
          <p className='firstP'>
            My first interaction with coding started back in middle school when a friend of mine enjoys creating games on Roblox using the scripting language <a className='firstPa' target={"_blank"} href='https://en.wikipedia.org/wiki/Lua_(programming_language)'>Lua</a>. 
            This piqued my interest as I was interested in video games and was hoping that I could also be like him and make my own games.
          </p>
          <p className='secondP'>
            During high school, I had the option to take a coding course which I did every year they offered from the second year till the fourth year. The experience that it provided allowed me
            to learn and create many interesting projects. I learned <a className='turing' target={"_blank"} href = "https://en.wikipedia.org/wiki/Turing_(programming_language)">Turing</a>, <a className='python' target={"_blank"} href='https://en.wikipedia.org/wiki/Python_(programming_language)'>Python</a>, <a className='java' target={"_blank"} href='https://en.wikipedia.org/wiki/Java_(programming_language)'>Java</a>, in my second, third, and fourth year respectively. Each year we would learn the foundations and apply them by solving problems
            and creating practical projects. 
          </p>
          <p className='thirdP'>
            The teacher that was teaching the course was a major factor in my interest in this field and provided me with the tools I needed to be a great programmer.
          </p>
          <p className='fourthP'>
            In my last year, I applied for only computer science at various universities and ended up attending the University of Toronto. I completed the first year in which they taught Python, but I
            felt like some hardware mixed with software would be best. This led me to apply for Computer engineering at Ryerson University.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About