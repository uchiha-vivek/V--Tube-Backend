// This is known as custom error handling.

export const createError = (status, message)=>{
    const err = new Error()
    err.status= status
    err.message= message
    return err
  } 