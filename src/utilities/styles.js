import {withStyles} from '@material-ui/core/styles'
import {Button} from "@material-ui/core"
import {TextField} from "@material-ui/core"

export const StyledButton = withStyles({
    root: {
        background: '#F26363',
        margin: '10px 0',
        height: '50px'
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
        height: '50px'
      },
    label: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: '1.5rem'
      },
})(Button);

export const StyledFormButton = withStyles({
    root: {
        background: '#F26363',
        margin: '10px 0',
        height: '50px'
    },
    label: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: '1.5rem'
    },
})(Button);

export const StyledFormText = withStyles({
    root: {
    },
    label: {
        textTransform: 'uppercase',
        fontSize: '1.5rem'
    },
})(TextField);