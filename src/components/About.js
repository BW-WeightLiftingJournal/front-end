import React from "react"
import {FaDumbbell} from 'react-icons/fa'

const About = props=> {
    return (
        <div className="about-container">
            <FaDumbbell style={{fontSize: '4rem', color: '#809fa6'}}/>
            <h2>About</h2>
            <br/>
            <p style={{marginBottom: "15px"}}>Simple weightlifting (and other exercise) journal to track progress from your phone and accessible from everywhere.</p>
            <p>Built with a small team of Lambda School students, now maintained by Kyle Richardson.</p>
        </div>
    )
}

export default About