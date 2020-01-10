import React, {useEffect} from "react"
import {CircularProgress} from '@material-ui/core'

const Landing = props=> {

    useEffect(()=> {
        window.location.replace('https://focused-goldberg-f7fd47.netlify.com/index.html')
    },[])
    return (
        <div style={{textAlign: 'center', marginTop: '100px', marginBottom: '100px'}}><CircularProgress size={60} style={{color: '#F26363'}}/></div>
    )
}

export default Landing