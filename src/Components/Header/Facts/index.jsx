import React, { useState , useEffect} from 'react'
import "./Facts.css"
import Odometer from 'react-odometerjs';

const Facts = () => {
    const [experience,setExperience] = useState(0);
    const [projects,setProjects] = useState(0);
    const [participation,setParticipation] = useState(0);



    useEffect(() => {
        const timeoutId = setTimeout(() => {setExperience(1)
            setProjects(13)
            setParticipation(20);
        }, 1000);
        return () => {
            clearTimeout(timeoutId);
        };
    }, []);

  return (
    <div className='fact__container'>
      <div className="fact__item">
            <div className="count__counter">
                <div className="number">
                <Odometer
                value={experience}
                />
                <span className="indicator">+</span>
                </div>
                <p className="name">Year of Experience</p>

            </div>
      </div> 
      <div className="fact__item">
            <div className="count__counter">
                <div className="number">
                    <Odometer
                    value={projects}
                    />
                    <span className="indicator">+</span>
                </div>
                <p className="name">Completed Projects</p>
            </div>
      </div>
      <div className="fact__item">
            <div className="count__counter">
                <div className="number">
                    <Odometer
                    value={participation}
                    />
                    <span className="indicator">+</span>
                </div>
                <p className="name">Outside Participations</p>
            </div>
      </div>
 </div>
  )
}

export default Facts
