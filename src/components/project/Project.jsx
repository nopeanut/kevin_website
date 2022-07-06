import React from 'react'
import './project.css';

const Project = ({image, title, github}) => {
  return (
    <div className="the_project">
      <div class="the_project_item1">
        <img src= {image} alt="" />
        <p class="the_project_item1_title">{title}</p>
        <div class="the_project_item1_overlay"></div>
        <div class="the_project_item1_button"><a href={github}> Github code </a></div>
      </div>
    </div>
  )
}

export default Project