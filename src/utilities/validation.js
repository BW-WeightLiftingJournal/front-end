export const validateCredentials = (credentials) => {
    const {username, email, password} = credentials
    let err = []
    let bool = false
    if(!!email){
        if(
            !email.includes('@') || 
            !email.includes('.') ||
            email.charAt(0)==='@' ||
            email.charAt(0)==='.' || 
            email.charAt(email.length-1)==='@' ||
            email.charAt(email.length-1)==='.'
            ) {
            err.push('Email is not valid')
          }
    }
    else bool=true;
    
    if(!!username) {
        if(username.length < 8) {
            err.push('Username must be at least 8 characters')
        }
    }
    else {
        bool=true
    }
    if(!!password) {
        if(password.length < 8) {
            err.push('Password must be at least 8 characters')
        }
    }
    else {
        bool=true
    }
    if (bool) err.unshift('Missing one or more required items')
    return err
}