import React, { useState,useRef, useEffect } from 'react'
import "./Projects.css"
import { sumArray } from '../../helper'
import { projects } from '../../data'
import Card from "./Card"

const tabs = [
]

const Projects = () => {
    const[displayableProjects,setDisplayableProjects]=useState(projects);


  return (
    <section id= "projects">
        <div className="section__wrapper projects__container">
            <div className="section__header center">
                <h2 className="primary__title">Projects</h2> 
            </div>
            <div className="card__container">
                {
                    
                    projects.map((project,index)=>(
                        <Card
                        title = {project.title}
                        image = {project.image}
                        data =   {project.data}
                        stack = {project.stack}
                        key = {index}
                        />
                    ))
                }
            </div>
        </div>
    </section>
    
  )
}

export default Projects
