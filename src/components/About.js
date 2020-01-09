import React, {useEffect} from "react"
import {CircularProgress } from '@material-ui/core'

const About = props=> {

    useEffect(()=> {
        window.location.replace('https://focused-goldberg-f7fd47.netlify.com/aboutus.html')
    },[])
    return (
        <div style={{textAlign: 'center', marginTop: '100px'}}><CircularProgress size={60} style={{color: '#F26363'}}/></div>
    )
}

export default About