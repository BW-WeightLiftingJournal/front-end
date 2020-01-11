import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const EditDialog = ({finishEdit, exercise})=> {
  const [open, setOpen] = useState(true);
  const [editedExercise, setEditedExercise] = useState(exercise)

  const handleChange = (event) => {
      const {name, value} = event.target
      setEditedExercise({...editedExercise, [name]: value})
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Exercise</DialogTitle>
        <DialogContent>
          <TextField
            name="workout_name"
            margin="dense"
            label="Workout Name"
            type="text"
            fullWidth
            value={editedExercise.workout_name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="sets"
            label="Sets"
            type="text"
            fullWidth
            value={editedExercise.sets}
            onChange={handleChange}          
        />
          <TextField
            margin="dense"
            name="reps"
            label="Reps"
            type="text"
            fullWidth
            value={editedExercise.reps}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="weight"
            label="Weight (lbs)"
            type="text"
            fullWidth
            value={editedExercise.weight}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={e=> {
              finishEdit(e, exercise.id, editedExercise)
              handleClose()
              }} 
              color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditDialog