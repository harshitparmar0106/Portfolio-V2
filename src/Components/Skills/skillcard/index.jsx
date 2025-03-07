import React, { useEffect } from 'react'
import './Skillcard.css'
import { BsPatchCheckFill } from 'react-icons/bs'


const SkillCard = ({
   title,
   data
}) => {

  return (
    <div className="skill__card">
        <h3>{title}</h3>
        <div className="skill__content">
            {
                data.map((skillData,index)=>(
                    <article className="skill__details "key={index}>
                        <BsPatchCheckFill className='skill__icon'/>
                        <div>
                            <h4 className='skill__name'>{skillData.skill}</h4>
                            <small className="text__muted skill__level">{skillData.level}</small>
                        </div>
                    </article>
                ))
            }
        </div>
    </div>
  )
}

export default SkillCard
