import React, {useEffect} from "react"

const About = props=> {

    useEffect(()=> {
        window.location.replace('https://focused-goldberg-f7fd47.netlify.com/aboutus.html')
    },[])
    return (
        <div>Redirecting...</div>
    )
}

export default About