const AUTH_USER = 'AUTH_USER';

const initialState = {
  isAuthed: false,
  isAuthenticating: false
}

export function authUser () {
  return {
  	type: AUTH_USER
  }
}

export default function authentication (state = initialState, action) {
  switch (action.type) {
  	case AUTH_USER : 
  	  return {
  	  	...state,
  	  	isAuthed: true
  	  }
    default : 
      return state;
  }
}