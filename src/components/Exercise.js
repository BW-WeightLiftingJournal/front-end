import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
import DeleteIcon from '@material-ui/icons/Delete';
import {
        finishEdit, 
        deleteItem, 
        copy, 
        handleChange,
        startEdit,
        cancelEdit
    } from "../utilities/actions"
import FileCopyIcon from '@material-ui/icons/FileCopy';
import EditIcon from '@material-ui/icons/Edit';
import EditDialog from "./EditDialog"
import Tooltip from "@material-ui/core/Tooltip"
import Popper from "@material-ui/core/Popper"
// import Button from "@material-ui/core/Button"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {RedButtonSmall} from "../utilities/styles"

const Exercise = ({
        startEdit,
        editedItem, 
        isEdit, 
        exercise,  
        finishEdit, 
        deleteItem, 
        handleChange,
        copy,
        userId,
        cancelEdit
    }) => {
    const [open, setOpen] = useState(false)
    // const [anchorEl, setAnchorEl] = useState(null);
    const anchorRef = React.useRef(null);
    const prevOpen = React.useRef(open);

    const handleDelete = (event) => {
        // setAnchorEl(event.currentTarget);
        setOpen(true)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
          }
          setOpen(false);
        }

    useEffect(() => {
    if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
    }

    prevOpen.current = open;
    }, [open]);

    return (
        <div className="exercise-container">
            {isEdit && editedItem.id===exercise.id &&
            <EditDialog 
                finishEdit={finishEdit} 
                exercise={exercise}
                cancelEdit={cancelEdit}
            />}
                <div className="single-exercise-data">
                    <h4 className="single-exercise-title">{exercise.workout_name}</h4>
                    <p>{exercise.weight ? 
                        exercise.weight
                        // exercise.weight.toFixed(1) 
                        : "N/A"}</p>
                    <p>{exercise.reps || "N/A"}</p>
                    <p>{exercise.sets || "N/A"}</p>
                </div>
            
            <div className="single-exercise-buttons">
                <Tooltip title="Copy" ref={anchorRef} >
                    <FileCopyIcon
                        style={{cursor: 'pointer', marginRight: '10px', opacity: '60%'}} 
                        onClick={()=>copy(exercise, userId)}
                    />
                </Tooltip>
                <Tooltip title="Edit">
                    <EditIcon
                        style={{cursor: 'pointer', marginRight: '10px', color: '#69868C'}} 
                        onClick={()=>startEdit(exercise.id)}
                    />
                </Tooltip>
                <Popper 
                    open={open} 
                    anchorEl={anchorRef.current} 
                    placement="top"
                >
                    <ClickAwayListener onClickAway={handleClose}>
                        <div  style={{background: "white", borderRadius: "8px", padding: "5px"}}>
                            <span>Confirm Delete? </span>
                            <RedButtonSmall onClick= {()=>deleteItem(exercise.id)}>Delete</RedButtonSmall>
                        </div>
                    </ClickAwayListener>
                    
                </Popper>
                <Tooltip title="Delete">
                    <DeleteIcon 
                        style={{color: '#F26363', cursor: 'pointer'}}
                        fontSize='default' 
                        onClick={(e)=>handleDelete(e)}
                    />
                    
                </Tooltip>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{
        startEdit,
        finishEdit, 
        deleteItem, 
        copy, 
        handleChange,
        cancelEdit
    })(Exercise);