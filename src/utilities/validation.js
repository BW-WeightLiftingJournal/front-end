

export const validateCredentials = (credentials) => {
    const {username, 
        // email, 
        password} = credentials
    let err = []
    let bool = false
    // if(!!email){
    //     if(
    //         !email.includes('@') || 
    //         !email.includes('.') ||
    //         email.charAt(0)==='@' ||
    //         email.charAt(0)==='.' || 
    //         email.charAt(email.length-1)==='@' ||
    //         email.charAt(email.length-1)==='.'
    //         ) {
    //         err.push('Email is not valid')
    //       }
    // }
    // else bool=true;
    
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


// const reformattedExercise = {
//     user_id: userId,
//     weight: exercise.weight,
//     reps: exercise.reps,
//     sets: exercise.sets,
//     date_completed: parsedDate,
//     workout_name: exercise.name
// }
export const validateExercise = (exercise) => {
    let err = []
    if (!exercise.workout_name || !exercise.date_completed) {
        err.push("Missing one or more required items")
    }
    
    if (!!exercise.weight && isNaN(exercise.weight)) err.push("Weight must be a positive number")
    if (!!exercise.reps && isNaN(exercise.reps)) err.push("Reps must be a positive number")
    if (!!exercise.sets && isNaN(exercise.sets)) err.push("Sets must be a positive number")
    if (err.length === 0) err.push("clear")
    return err
}