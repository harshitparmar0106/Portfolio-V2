import React from 'react'
import "./Skills.css"
import {experienceList} from '../../data'
import SkillCard from '../Skills/skillcard'

const Skills = () => {
  return (
    <section id='skill'>
        <div className="section__wrapper">
            <div className="section__header center">
                <h2 className="primary__title">My Skills</h2>
            </div>
            <div className="skill__container">
                {
                    experienceList.map((experience,index)=>{
            
                        return <SkillCard
                        {...experience}
                        key={index}
                        />
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Skills
