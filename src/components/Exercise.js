import React from "react"
import {connect} from "react-redux"

const Exercise = props => {
    return (
        <div>Exercise</div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{})(Exercise);