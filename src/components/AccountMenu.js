import React, {useState} from "react"
import {ColoredAccountIcon} from "../utilities/styles"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {logout} from "../utilities/actions"
import {connect} from "react-redux"
import {Link} from "react-router-dom"

const AccountMenu = ({history, logout})=> {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <ColoredAccountIcon onClick={handleClick}/>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <Link to='/login' onClick={logout}>
                <MenuItem>Logout</MenuItem>
            </Link>
            
        </Menu>
        </>
    )
}

const mapStateToProps = state => ({
    ...state
  })
  
export default connect(mapStateToProps,{logout})(AccountMenu);