import {withStyles} from '@material-ui/core/styles'
import {Button, Checkbox, TextField} from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const StyledButton = withStyles({
    root: {
        background: '#F26363',
        margin: '10px 0',
        height: '50px',
        '&:hover': {
            background: 'rgb(250, 102, 102)',
        }
    },
    label: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: '1.5rem'
    },
})(Button);

export const BlackButton = withStyles({
    root: {
        background: 'black',
        margin: '10px 0',
        height: '50px',
        '&:hover': {
            background: 'rgb(44, 44, 44)',
        }
      },
    label: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: '1.5rem'
      },
})(Button);

export const ColoredAccountIcon = withStyles({
    root: {
        color: '#F26363',
        '&:hover': {
            color: 'black'
        },
        cursor: 'pointer'
      }
})(AccountCircleIcon);

export const GrayCheckbox = withStyles({
    root: {
        color: '#69868C',
        '&$checked': {
          color: '#69868C'
        }
    },
    checked: {}
})(Checkbox)

export const GrayTextField = withStyles({
    root: {
        '& label.Mui-focused': {
         color: '#69868C',
          },
         '& .MuiInput-underline:after': {
          borderBottomColor: '#69868C',
         },
        '& .MuiOutlinedInput-root': {
         
         '&.Mui-focused fieldset': {
           borderColor: '#69868C',
         }
        }
    }
})(TextField)