import React, { useEffect } from "react"
import {connect} from "react-redux"
import Exercise from "./Exercise"
import {getList} from "../utilities/actions"

const ExerciseList = ({
  exerciseList,
  getList
}) => {

  useEffect(()=> {
    getList()
    // eslint-disable-next-line
  }, [])
  
  let isSame=true;
  let previousDate=''
  return (
    <div className="exercise-list-container">
      {exerciseList.map(item=>{
        isSame=item.date===previousDate;
        previousDate=item.date
        return (
          <div key={item.id}>
            {!isSame && <h4 style={{margin: '20px 0px 10px 10px', letterSpacing: '1.5px'}}>{item.date}</h4>}
            <Exercise exercise={item}/>
          </div>
          
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({
    exerciseList: state.exerciseList
  })
  
export default connect(mapStateToProps,{getList})(ExerciseList);