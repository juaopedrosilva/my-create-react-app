export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    email, password
  }
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    token, user 
  }
}

export function signUpRequest(name, email, password) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  }
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  }
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  }
}

export function stopLoading() {
  return {
    type: '@auth/STOP_LOADING',
  }
}
 