import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const EditDialog = ()=> {
  const [open, setOpen] = useState(true);

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
          />
          <TextField
            margin="dense"
            name="sets"
            label="Sets"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="reps"
            label="Reps"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            name="weight"
            label="Weight (lbs)"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditDialog