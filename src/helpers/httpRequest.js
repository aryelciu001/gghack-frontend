export const httpOptions = {
  post: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }, 
  get: {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

export const api = "http://10.40.0.138"


/*
Check for completeness of the to-be-sent body

@param body the body to be checked
@param listOfProps the list of properties requires

@return object {complete: true/false, missing: (if any)}
*/
export const checkBody = (body, listOfProps) => {
  for (let prop of listOfProps) {
    //if the required prop does not exist
    if( !body[prop] ) {
      return {
        complete: false,
        missing: prop
      }
    }
  }
  return {
    complete: true
  }
}