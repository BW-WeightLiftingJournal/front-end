import React, {useEffect} from "react"

const Landing = props=> {

    useEffect(()=> {
        window.location.replace('https://focused-goldberg-f7fd47.netlify.com/index.html')
    },[])
    return (
        <div>Redirecting...</div>
    )
}

export default Landing