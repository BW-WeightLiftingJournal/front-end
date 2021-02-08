import React, {useEffect} from "react"
import {CircularProgress } from '@material-ui/core'
import {FaDumbbell} from 'react-icons/fa'

const About = props=> {

    // useEffect(()=> {
    //     window.location.replace('https://focused-goldberg-f7fd47.netlify.com/aboutus.html')
    // },[])
    // return (
    //     <div style={{textAlign: 'center', marginTop: '100px'}}><CircularProgress size={60} style={{color: '#F26363'}}/></div>
    // )
    return (
        <div className="about-container">
            <FaDumbbell style={{fontSize: '4rem', color: '#809fa6'}}/>
            <h2 style={{marginBottom: "10px"}}>About</h2>
            <p style={{marginBottom: "5px"}}>Simple weightlifting (and other exercise) journal to track progress from your phone and accessible from everywhere.</p>
            <p>Built with a small team of Lambda School students, now maintained by Kyle Richardson.</p>
        </div>
    )
}

export default About