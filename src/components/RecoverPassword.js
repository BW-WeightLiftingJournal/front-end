import React, {useEffect} from "react";
import {connect} from "react-redux"
import {handleChange, verifyEmail, resetErrors, resetForm} from "../utilities/actions"
import CircularProgress from '@material-ui/core/CircularProgress';
import {FaDumbbell} from 'react-icons/fa'
import {BlackButton, GrayTextField} from "../utilities/styles"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const RecoverPassword = ({
  error, 
  verifyEmail,
  handleChange, 
  resetErrors,
  isVerify,
  recoverEmail,
  resetForm
  }) => {

    useEffect(()=>{
        resetErrors()
        return ()=> resetForm('recoverEmail')
        // eslint-disable-next-line
    }, [])

  return (
    <div className="login-container">
      <FaDumbbell style={{fontSize: '4rem', color: '#F26363'}}/>
      <h2>Reset Password</h2>
      {error ? <div style={{color: 'red'}}>{error}</div> : <br/>}
      <br/>
      <form 
        noValidate 
        autoComplete="off" 
        onSubmit={(e)=>verifyEmail(e, recoverEmail.email)}
      >
        <div className="login-form">
          <GrayTextField
            disabled={!!recoverEmail.message || isVerify}
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
          <BlackButton 
          variant="outlined" 
          type="submit"
          disabled = {!!recoverEmail.message}
          >
            {isVerify ? 
              <CircularProgress 
                size={25} 
                style={{color: 'white'}}/> : 
              !!recoverEmail.message ? <><span>{recoverEmail.message}</span><CheckCircleIcon style={{color: 'lightgreen', marginLeft: '10px'}}/></> : 'Send Reset Email'}
          </BlackButton>
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

export default connect(mapStateToProps,{handleChange, verifyEmail, resetForm,resetErrors})(RecoverPassword);

