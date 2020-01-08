import React, {useEffect} from "react";
import {connect} from "react-redux"
import {handleChange, verifyEmail, resetErrors} from "../utilities/actions"
import CircularProgress from '@material-ui/core/CircularProgress';
import {FaDumbbell} from 'react-icons/fa'
import {BlackButton, GrayTextField} from "../utilities/styles"

const RecoverPassword = ({
  error, 
  verifyEmail,
  handleChange, 
  resetErrors,
  isVerify,
  recoverEmail
  }) => {

    useEffect(()=>{
        resetErrors()
        // eslint-disable-next-line
    },[])

  return (
    <div className="login-container">
      <FaDumbbell style={{fontSize: '4rem', color: '#F26363'}}/>
      <h2>Reset Password</h2>
      {error ? <div style={{color: 'red'}}>Error.</div> : <br/>}
      <br/>
      <form 
        noValidate 
        autoComplete="off" 
        onSubmit={(e)=>verifyEmail(e, 'recoverEmail')}
      >
        <div className="login-form">
          <GrayTextField
            error={!recoverEmail.email && error}
            required
            helperText={!recoverEmail.email && error && "Email Required"}
            id="outlined-required"
            label="Email"
            variant="outlined"
            name="email"
            value={recoverEmail.email}
            onChange={e=>handleChange(e, 'recoverEmail')}
          />
          <br/>
          <BlackButton variant="outlined" type="submit">{isVerify ? <CircularProgress size={25}/> : 'Send Reset Email'}</BlackButton>
        </div>
        
      </form>
      
      
    </div>
  );
};

const mapStateToProps = state => ({
  recoverEmail: state.recoverEmail,
  error: state.error,
  token: state.token,
  isVerify: state.isVerify

})

export default connect(mapStateToProps,{handleChange, verifyEmail, resetErrors})(RecoverPassword);

